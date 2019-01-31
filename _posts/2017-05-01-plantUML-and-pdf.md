---
layout: post
title: "plantUML with Asciidoctor-pdf"
tags: [asciidoc]
---

The last few days I had to learn the hard way that plantUML (as part of asciidoctor-diagram) is not a frient of asciidoctor-pdf.

I always thought that having plantUML for HTML rendering up and running with asciidoctor also means that the PDF backend would be running fine.

Unfortunately, asciidoctor-pdf is looking in the `source`-folder for the generated plantUML images and can't find them there.

I didn't quite get the whole picture - which module is picking up the images from where or generates them in which folder, but I got the impression that the problem is quite complex.
Dan Allen pointed me to some comments which [describe solutions](https://github.com/asciidoctor/asciidoctor-gradle-examples/issues/15#issuecomment-298003598) (the Asciidoctor community is really great), but while I was trying to find a solution which fits my case, I got the feeling that I will get standard images _or_ plantUML up and running, but not _both_.

I've now got a solution which I think is quite ok:

First, I splitted the generation of HTML and PDF into two seperate tasks:

{% highlight gradle %}
tasks.withType(AsciidoctorTask) { docTask ->
    outputDir = file(targetDir)
    sourceDir = file(srcDir)

        'pdf-stylesdir': 'pdfTheme',
            'pdf-style': 'custom',
            'source-highlighter': 'coderay',
            'imagesdir': 'images',
            'toc': 'left',
            'icons': 'font',
            'javaVersion'         : "$javaVersion",
            'currentDate'         : "$currentDate",
            'allow-uri-read'      : true
    // ...

    // configure source and output files and folders
    sourceDir = file('src/docs')
    sources {
        include 'arc42-venom.adoc'
        include 'index-orga.adoc'
    }
    outputDir = file('build/docs')
    // good to see what the build is doing...
    logDocuments = true

    requires = ['asciidoctor-diagram']
}

task generateHTML (
        type: AsciidoctorTask,
        description: 'use html5 as asciidoc backend') {
    attributes \
            'plantUMLDir'         : ''
    backends = ['html5']
}

task generatePDF (
        type: AsciidoctorTask,
        description: 'use html5 as asciidoc backend') {
    attributes \
            'plantUMLDir'         : file('build/docs/images/plantUML/').path
    backends = ['pdf']
}
{% endhighlight %}

Second (already included in the source above), I added an attribute `plantUMLDir` which specifies the _absolute_ path to a folder where I want to have my plantUML images generated to.

So, my trick now is to use this _absolute_ path in my plantUML diagram definitions

```
[plantuml,"{plantUMLDir}image_name",png]
----
!pragma graphviz_dot jdot
...
----
```

and this seems to work :-)

- for HTML, plantUML images are referenced relative to the document
- for PDF, plantUML images are are referenced absolute, but since they are stored within the pdf, this does not matter
- images are rendered ok in HTML and PDF
- plantUML is rendered ok in HTML and PDF
- plantUML files are created in `build`-folder

