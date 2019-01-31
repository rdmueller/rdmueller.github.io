---
layout: post
title: "Behind the great Firewall"
tags: [gradle]
redirect: /news/enterprise-edition
---

The open internet is a great place to code, but sometimes you are sitting behind a great firewall in a corporate environment.
Your are not allowed to just pull the hottest stuff from the internet, but have to go through an internal binary artifact repository like nexus or artifactory.

So, how do you configure your gradle installation in such a way that you don't have to always change the build file?

## Set a Proxy

That one is easy.

Gradle uses the standard proxy configuration the same way other java apps do. You can set the proxy in your `gradle.properties` as described [in the userguide](https://docs.gradle.org/current/userguide/build_environment.html#sec:accessing_the_web_via_a_proxy).
To configure the proxy for all your builds, just put the config into your [`<USER_HOME>/.gradle/gradle.properties`](http://mrhaki.blogspot.de/2010/09/gradle-goodness-different-ways-to-set.html) file instead of the project local one.

BTW: if your settings seem to be ignored, you might created the `gradle.properties` file in the wrong location. 
In this case, start your build with the `--debug` option and check the start of the output:

```
PS C:\demo> .\gradlew.bat --debug
13:27:38.010 [INFO] [org.gradle.BuildLogger] Starting Build
13:27:38.017 [DEBUG] [org.gradle.BuildLogger] Gradle user home: C:\Users\ralf\.gradle
```

## Configure Repositories

Now, if a proxy is not enough but you need to fetch dependencies from an internal nexus or artifactory, you can easily specify it in the repositories section of your build file.
But you have to do this for each project... do you?
No! There is a better solution:

Create a [`init.gradle`](https://docs.gradle.org/current/userguide/init_scripts.html) file in your local `<USER_HOME>/.gradle` folder with a `allprojects` section in which you specify the internal repositories for dependency resolution:

```
allprojects {
  buildscript {
    repositories {
      maven {
        url = "https://intranet/..."
      }
    }
  }
  repositories {
    maven {
      url = "https://intranet/..."
      credentials {
        username = "${repo_user}"
        password = "${repo_password}"
      }
    }
  }
}
```

If you need to specify credentials for the repository, just specify them as shown in the second example.
This way, the `repo_user` and `repo_password` can be specified in the `gradle.properties` file. 

## Configure the Gradle-Wrapper

With the above configuration, all dependencies are resolved through the internal repository. Dependencies not in the internal repositories are resolved from the internet through the proxy. If you don't want this, just specify no proxy :-)

But what about Gradle itself?
Best practice is to use the [Gradle wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html) but the wrapper is configured to fetch Gradle from external sources.

There is also a config for that: `<your project>/gradle/wrapper/gradle-wrapper.properties`.
Just replace the line 

`distributionUrl=https\://services.gradle.org/distributions/gradle-2.12-bin.zip`

With your internal distribution location...

