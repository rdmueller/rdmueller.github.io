---
layout: post
title: "Next Level: PlantUML with Gradle"
tags: [asciidoc, doc, gradle]
---

In my blog post about why I love AsciiDoc, I wrote about the usage of [plantUml](http://plantuml.com/) in AsciiDoc. Today I will show you how to configure your Gradle build in such a way that a block like this

``` 
[plantUML,"test",png]
----
class Animal  
class Cat 
class Dog 
Animal <|-- Cat 
Animal <|-- Dog
----
```

will be rendered as Class-Diagram like this

<div> <img src="../images/renderedDiagram.png" style="max-width: 100%" /> </div> 

## Cleanup first

But first things first. Lets evolve the build a bit. Last time I've added a default task to the maven build for convenience. Let's do the same with the `build.gradle` by appending

``` 
// let's set a defaultTask for convenience
defaultTasks 'asciidoctor'
``` 

The default Gradle build looks for the sources in `src/docs/asciidoc`, but since I plan to use AsciiDoc as the only format, I would like to put the sources in `src/docs`. This is configured by defining an asciidoctor task like this:

```
asciidoctor {
  // configure source and output files and folders
  sourceDir = file('src/docs')
  sources {
    include 'test.asciidoc'
  }
  outputDir = file('build/docs')
  // good to see what the build is doing...
  logDocuments = true
}
```

The `sources` statement specifies to only render the main file and not the included files (`include.asciidoc`).

## AsciiDoc-Diagram Plugin

To include PlantUML diagrams in an AsciiDoc file, we need the [AsciiDoc-Diagram Plugin](http://asciidoctor.org/docs/asciidoctor-diagram/). Since this plugin, like most AsciiDoctor plugins, is a Ruby Gem, we first need to install the [JRuby Gradle plugin](http://jruby-gradle.org/) with the following line:

```
plugins {
  id "org.asciidoctor.convert" version "1.5.3"
  // we need this plugin to add ruby gems
  id "com.github.jruby-gradle.base" version "1.3.0"
}
```

With this plugin, we can define a dependency to the AsciiDoc-Diagram Gem:

```
dependencies {
    // this is the gem we need for diagrams
    gems 'rubygems:asciidoctor-diagram:1.4.0'
}
```

The Gem alone is not enough since it also depends on the famous [Graphviz](http://www.graphviz.org/) library. Unfortunately, this can't be easily defined as dependency and has to be installed manually.

To make it work, we also have to initialize the JRuby plugin by running the `jrubyPrepare` task. THis is done by specifying a `dependsOn`for the `asciidoctor` task:

```
asciidoctor {
  // the jrubyPrepare tasks takes care of loading the gems
  dependsOn jrubyPrepare

  // the asciidoctor task depends on this gem
  requires = ['asciidoctor-diagram']

  // seems to be important :-)
  gemPath = jrubyPrepare.outputDir

}
```

putting all changes together, the `build.gradle` file now looks like this:

```
/*
 * This build file is part of the docToolchain
 */

plugins {
  id "org.asciidoctor.convert" version "1.5.3"
  // we need this plugin to add ruby gems
  id "com.github.jruby-gradle.base" version "1.3.0"
}

dependencies {
    // this is the gem we need for diagrams
    gems 'rubygems:asciidoctor-diagram:1.4.0'
}

asciidoctor {
  // configure source and output files and folders
  sourceDir = file('src/docs')
  sources {
    include 'test.asciidoc'
  }
  outputDir = file('build/docs')
  // good to see what the build is doing...
  logDocuments = true

  // the jrubyPrepare tasks takes care of loading the gems
  dependsOn jrubyPrepare

  // the asciidoctor task depends on this gem
  requires = ['asciidoctor-diagram']

  // seems to be important :-)
  gemPath = jrubyPrepare.outputDir

}

// let's set a defaultTask for convenience
defaultTasks 'asciidoctor'
```

To test it, I've included the PlantUML fragment from above near the top of the `test.asciidoc` source file (after the definitions). The `gradlew` statement executed on the commandline will now render the file like this:

<div> <img src="../images/renderedPlantUml.png" style="max-width: 100%" /> </div>

## Conclusion

As you can see, it is easy to combine AsciiDoc with planUML to define UML diagrams _within_ your documentation.

But one question still remains:

### When does it make sense to use plantUML within your document?


<div style="float:right"><a href="https://www.amazon.de/arc42-Aktion-Praktische-Tipps-Architekturdokumentation/dp/3446448012/ref=as_li_ss_il?ie=UTF8&redirect=true&ref_=as_li_qf_sp_asin_il_tl&linkCode=li1&tag=&linkId=6ed21b5fbad8c1d5793fe05122b6ed2d" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=3446448012&Format=_SL110_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=" ></a><img src="https://ir-de.amazon-adsystem.com/e/ir?t=&l=li1&o=3&a=3446448012" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></div>

The new book [Communicating Software Architecture](https://leanpub.com/arc42inpractice)(English) / [arc42 in Aktion](http://amzn.to/29UUm0p)(German) by [Gernot Starke](https://twitter.com/gernotstarke) and Peter Hruschka provides a good answer. Since you nearly can't control the layout of plantUML, it only makes sense when you don't have to manually control the layout. This is the case for most simple diagrams and dynamic diagrams like a sequence diagram. PlantUML does such a good job with layouting sequence diagrams, that I even would prefere to draw them with PlantUML over any other tool.

PS: the docToolchain project greated above is available on github: [https://github.com/rdmueller/docToolchain](https://github.com/rdmueller/docToolchain/tree/c99227237a5871345e6f27e6f56dac1b63e3e4ce)

