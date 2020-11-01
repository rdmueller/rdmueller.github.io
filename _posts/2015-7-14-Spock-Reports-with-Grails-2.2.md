---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2015/2015-7-14-Spock-Reports-with-Grails-2.2.html
title: Spock-Reports for Grails 2.2
tags: [spock, grails]
---

In a [previous post](https://rdmueller.github.io/Spock-Reports-with-Grails-3.0/) I described how to use [Spock-Reports](https://github.com/renatoathaydes/spock-reports) with [Grails 3.0](http://www.grails.org). 

That was easy since Grails 3.0 is Gradle based.

Now I will try to figure out how to use Spock-Reports with Grails 2.2.4 .

Again, the configuration of the dependencies is easy: just open your `grails-app/conf/BuildConfig.groovy` file and add

```groovy
repositories {
  [...]
  //for spock-reports
  mavenRepo "http://jcenter.bintray.com"
}
```

to the `repositories` section and

```groovy
dependencies {
  [...]
  //for spock-reports
  test 'com.athaydes:spock-reports:1.2.5'  
}
```

to the `dependencies` section. But since Grails 2.2.4 does not include Spock be default, we also have to follow the 
[documentation for the Grails-Spock-Plugin](https://grails.org/plugin/spock) and add in addition

```groovy
plugins {
  [...]
	test(":spock:0.7") {
	    //since we use groovy 2.x with grails 2.2.4
      	    exclude "spock-grails-support"
    	}
}
```

to the plugins section and 

```groovy
dependencies {
  [...]
  test 'org.spockframework:spock-grails-support:0.7-groovy-2.0'
}
```

to the dependencies section. Now, that should do the trick. The standard reports are now generated and stored in `build/spock-reports/.`.

### Customizing your Reports

In order to store the generated reports in `target/test-reports/spock/.` you have to customize your reports as described in the [documentation](https://github.com/renatoathaydes/spock-reports#customizing-the-reports), you have to create a file called `META-INF/services/com.athaydes.spockframework.report.IReportCreator.properties`. 
That sounds easier than it is, because it has to be in the classpath and for some Grails projects, it's not easy to find the right folder to put it.

For Grails 2.2.4, you will succeed by putting it in `grails-app/conf/META-INF/services/com.athaydes.spockframework.report.IReportCreator.properties`.

Here is a sample file which uses the template based reports:

```groovy
# Name of the implementation class of the report creator
# Currently supported classes are:
#   1. com.athaydes.spockframework.report.internal.HtmlReportCreator
#   2. com.athaydes.spockframework.report.template.TemplateReportCreator
com.athaydes.spockframework.report.IReportCreator=com.athaydes.spockframework.report.template.TemplateReportCreator

# Output directory (where the spock reports will be created) - relative to working directory
com.athaydes.spockframework.report.outputDir=target/test-reports/spock

# If set to true, hides blocks which do not have any description
com.athaydes.spockframework.report.hideEmptyBlocks=false

# Set properties of the report creator
com.athaydes.spockframework.report.template.TemplateReportCreator.specTemplateFile=/spockreporttemplate/spec-template.md
com.athaydes.spockframework.report.template.TemplateReportCreator.reportFileExtension=md
com.athaydes.spockframework.report.template.TemplateReportCreator.summaryTemplateFile=/spockreporttemplate/summary-template.md
com.athaydes.spockframework.report.template.TemplateReportCreator.summaryFileName=summary.md
```

this file specifies that the templates are located in `grails-app/conf/spockreporttemplates` and the output
will be written to `target/test-reports/spock`. A good idea is to start with the default templates [spec-template.md](https://github.com/renatoathaydes/spock-reports/blob/master/src/main/resources/templateReportCreator/spec-template.md) and [summary-template.md](https://github.com/renatoathaydes/spock-reports/blob/master/src/main/resources/templateReportCreator/summary-template.md)

You might want to use this https://github.com/rdmueller/Grails2.2-Spock-Reports-Sample as a starting point...
