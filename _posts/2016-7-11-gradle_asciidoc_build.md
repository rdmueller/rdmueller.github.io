---
layout: post
title: Simple AsciiDoc Build with Gradle
tags: [asciidoc, doc, gradle]
---

So I told you to use AsciiDoc to write technical documents because of all the great features.

Today I want to show you how to unleash the power and get started.

## Gradle Integration

Let's first start with Gradle. I like Gradle much because it is modern and avoids unwanted complexity. But I am far from being a Gradle expert. Everytime I need a feature, I have to google it. I guess that's ok, since I want to code and document and not spend too much time with the build system :-)

So let's get started. If you don't have already Gradle installed on your machine, you should give [SDKMan](http://sdkman.io) a try. It manages the installation, upgrade and switch between versions of not only Gradle but all the tools a java developer needs - all but the JDK :-(. If you are on a Windows machine like me, you have to use [posh-GVM](https://github.com/flofreud/posh-gvm) instead of SDKMan. It's harder to install but will yield the same results - as long as you use the powershell :-)

Let's first create a fresh working dir 

``` bash
mkdir docToolchain
cd docToolchain
``` 

and init Git and Gradle

``` bash
gradle init
git init
``` 

This created a simple `build.gradle` file and also added `gradlew` the Gradle-wrapper. It’s a best-practice-thing. The Gradle-wrapper makes sure that everybody who checks out the project will be able to just build your project. Only the proxy has to be configured - Gradle will be automatically installed. To use the wrapper type `gradlew` instead of `gradle`.

The `build.gradle` file might be a good starting point for a normal project, but in this case, I just replace it with the following one taken from TODO:

``` java
/*
 * This build file is part of the docToolchain
 */

plugins {
  id "org.asciidoctor.convert" version "1.5.3"
}
``` 

That's it. It's basically all we need to convert our first asciidoc file. (If you wonder about the notation - it's the new way to reference plugins which works from Gradle v2.1 on.)

To get a slightly more challinging document than a simple "Hello World", let's copy the one provided by [@mojavelinux](https://www.twitter.com/mojavelinux) on  [gist](https://gist.github.com/mojavelinux/4402636). Just put the three files `include.asciidoc.txt` and `test.asciidoc.txt`  in the project's subfolder `/src/docs/asciidoc` and `tiger.png` into `/src/docs/asciidoc/images` . In order to make it work, remove the `.txt` extension of the two files and also in the `test.asciidoc` file on line 141.

The `test.asciidoc` file is configured to use an external style sheet which is missing in our setup. So to use the internal stylesheet, change the beginning of the file to the following:

``` 
//:stylesheet: asciidoc.css
:imagesdir: images
//:backend: docbook45
:backend: html5
``` 

The reference to the external style sheet is n

`/src/docs/asciidoc` is the standard location where the plugin searches for asciidoc files. It will convert all files it finds.

We are now ready to create our first HTML document from the example files. Just run

``` bash
gradle asciidoctor
``` 

from the command line and check out the result in `/build/asciidoc/html5/test.html` 

The result should look like this:

<div>
<img src="../images/renderedHtml.png" style="max-width: 100%" />
</div>

## Conclusion

If you've followd all the steps above, you've just created your first asciidoc project to write technical documentation! 

You are not ready to unleash the power of asciidoc...

PS: the docToolchain project greated above is available on github: [https://github.com/rdmueller/docToolchain](https://github.com/rdmueller/docToolchain/tree/acb67f4db20a3285cbe18ebd07c8a03f0d50c5a7)

Previous post: [Why you should use AsciiDoc to document your Software Solution](https://rdmueller.github.io/why_asciidoc/)
<!--Next post: [Simpel AsciiDoc Build with Maven](https://rdmueller.github.io/maven_asciidoc_build/)-->

Next post: [Simple AsciiDoc Build with Maven](https://rdmueller.github.io/maven_asciidoc_build/)
