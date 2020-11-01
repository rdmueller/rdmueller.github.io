---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2015/2015-3-14-spock-reports-with-gradle.html
title: How to use the Spock-Reports-Plugin with Gradle
tags: [spock, gradle]
---

Since I experienced some problems when I tried to use the Spock-Reports-Plugin in Grails, I now tried to use it with Gradle.

The basics are easy and well described on the [Spock-Reports page](https://github.com/renatoathaydes/spock-reports) - just add the needed repository and dependency to your gradle build file:

```groovy
    ...
    repositories {
        ...
        jcenter()
    }
    ...

    dependencies {
        ...
        testCompile 'com.athaydes:spock-reports:1.2.5'
    }
    ...
```

But where to place the properties file in case you want to modify some of them (for instance switch to the new template report engine)? Renato just writes that you should copy the properties *"to a file at `META-INF/services/com.athaydes.spockframework.report.IReportCreator.properties` relative to the classpath"*. Since I am a Gradle newbie, I had to do some experiments before I found out that one place where you can put it is the same as for maven: `src/test/resources/`. And `src/main/resources/` will also work.
