---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2015/2015-7-11-Spock-Reports-with-Grails-3.0.html
title: Spock-Reports for Grails 3.0
tags: [spock, grails]
---

[Spock-Reports](https://github.com/renatoathaydes/spock-reports) is a great way to create better reports for [Spock](https://github.com/spockframework/spock).

<!--more-->
<!--more--><!--more--><!--more--><!--more--><!--more--><!--more-->

Since Grails 3.0 is based on Gradle, integrating the Spock-Reports is easy. Just open your `build.gradle` file and add

```groovy
repositories {
  [...]
  //for spock-reports
  jcenter()
}
```

to the `repositories` section and

```groovy
dependencies {
  [...]
  //for spock-reports
  testCompile 'com.athaydes:spock-reports:1.2.5'  
}
```

to the `dependencies` section.

that's it... The next time you run `grails test-app`, you'll find the generated Spock-Reports in `/build/spock-reports/`

### Customizing your Reports

If you want to customize your reports as described in the [documentation](https://github.com/renatoathaydes/spock-reports#customizing-the-reports), you have to create a file called `META-INF/services/com.athaydes.spockframework.report.IReportCreator.properties`. That sounds easier than it is, because it has to be in the classpath and for some Grails projects, it's not easy to find the right folder to put it.

For Grails 3.0, you will succeed by putting it in `src/test/resources/META-INF/services/com.athaydes.spockframework.report.IReportCreator.properties`.

Here is a sample file which uses the template based reports:

```groovy
# Name of the implementation class of the report creator
# Currently supported classes are:
#   1. com.athaydes.spockframework.report.internal.HtmlReportCreator
#   2. com.athaydes.spockframework.report.template.TemplateReportCreator
com.athaydes.spockframework.report.IReportCreator=com.athaydes.spockframework.report.template.TemplateReportCreator

# Output directory (where the spock reports will be created) - relative to working directory
com.athaydes.spockframework.report.outputDir=build/spock-reports-mds

# If set to true, hides blocks which do not have any description
com.athaydes.spockframework.report.hideEmptyBlocks=false

# Set properties of the report creator
com.athaydes.spockframework.report.template.TemplateReportCreator.specTemplateFile=/spockreporttemplate/spec-template.md
com.athaydes.spockframework.report.template.TemplateReportCreator.reportFileExtension=md
com.athaydes.spockframework.report.template.TemplateReportCreator.summaryTemplateFile=/spockreporttemplate/summary-template.md
com.athaydes.spockframework.report.template.TemplateReportCreator.summaryFileName=summary.md
```

this file specifies that the templates are located in `src/test/resources/spockreporttemplates`. A good idea is to start with the default templates [spec-template.md](https://github.com/renatoathaydes/spock-reports/blob/master/src/main/resources/templateReportCreator/spec-template.md) and [summary-template.md](https://github.com/renatoathaydes/spock-reports/blob/master/src/main/resources/templateReportCreator/summary-template.md)

You might want to use this https://github.com/rdmueller/Grails3.0-Spock-Reports-Sample as a starting point...
