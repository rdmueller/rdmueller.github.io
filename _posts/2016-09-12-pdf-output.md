---
layout: post
title: "Beyond HTML"
tags: [doc, asciidoc]
---

Up until now, the docToolchain build only generates HTML5 output. It looks nice, but sometimes you need different formats. For instance, when you want to share your architecture via mail, a single file format like PDF would be helpful - and this is one of the strengths of asciidoctor: it makes it easy to render your content in different formats.

For the Gradle-Build, I Just add a reference to the [asciidoctor-pdf](https://github.com/asciidoctor/asciidoctor-pdf) plugin and tell the asciidoctor task to render PDF in addition. Two new attributes add a link to a theme file through which you can change the style of the rendered PDF:

{% highlight groovy %}
...

dependencies {
    // this is the gem we need for diagrams
    gems 'rubygems:asciidoctor-diagram:1.5.1'
    gems 'rubygems:asciidoctor-pdf:1.5.0.alpha.12'
}
asciidoctor {
    backends 'html5', 'pdf'
    attributes \
        'pdf-stylesdir': 'pdfTheme',
        'pdf-style': 'custom',

...

{% endhighlight %}

More about themes can be found at https://github.com/asciidoctor/asciidoctor-pdf/blob/master/docs/theming-guide.adoc .

In order to avoid conversion problems with some UTF-8 characters, I had to add some font definitions to the pdf theme to allow the plugin to find the right characters :-)

Since the pdf renderer is just a plugin to be included, I also added the changes to the maven build. In order to make it work, I had to set the version of jRuby to be used to 1.7.21, but now it runs quite nice...

The current asciidoctor-pdf is still in alpha, but the quality of the output is already quite good. No reason not to use it for internal documents :-) :

<div> <img src="../images/asciidoc-pdf.png" style="max-width: 100%" /> </div>

## extra feature: document review

The PDF output not only allows us to render the document as a single file, it brings some unexpected extra features: for a long time, I wasn't aware how Adobe Acrobat Reader evolved. I always just used it to read PDFs. A few month back, I took a closer look at all those features now available in the free Acrobat Reader DC and was surprised. It now contains lots of features to annotate the document. Not only text annotation, but also drawings are possible. This allows you to use the generated PDF for a full document review cycle!

PS: all examples are based on the [asciidoctor-gradle](https://github.com/asciidoctor/asciidoctor-gradle-examples) and [asciidoctor-maven]() examples on github. They are a great ressource for inspiration :-)

All changes are (as always) available on Github: [docToolchain](https://github.com/rdmueller/docToolchain/tree/3cef06737014a7e8b3c28d09ed64efff8e7e033e)
