---
layout: post
title: "AsciiDoc Image Size"
tags: [asciidoc]
---

When oyu work with several output formats for your doucments, it can be quite hard to get the size of oyur images right.
Most of the time, you will use large images which should be scaled to 100% in regards to the column width.
This is easily done in HTML and also in AsciiDoc:

{% highlight groovy %}
    image:test.png[width=100%]
{% endhighlight %}
    
But as soon as you render your document also as PDF and DOCX, you soon notice that these formats behave differently.
docToolhcain uses docBook as intermediate format in order to convert it through pandoc to DOCX.
The `width=100%` is reflected as `contentwidth="100%"` in docBook but does not lead to the expected result when converted to DOCX via pandoc. The PD  output also does not reflect it as expected.

## `scalewidth`to the rescue!

The AsciiDoc image also accepts the `scalewidth` parameter which lets you finetune the image size for the PDF generator.
But a `scalewidth=100%` seems to be ignored by pandoc (it is reflected in the docBook output) and the meaning for PDF is to display the image in its original size taking the DPI info form the image header into account. 
This also leads to unexpected results.
 
As a last resort, I came up with 

{% highlight groovy %}
    image:test.png[width=100%, scalewidth=17cm]
{% endhighlight %}
    
`17cm` is the column width when rendered as DIN-A4 page, resulting in a full width image.
Not nice, but it works and these two parameters indeed work for HTML, PDF and DOCX because the absolute size is not ignored by pandoc!

This can be also abreviated to 

{% highlight groovy %}
    image:test.png[{fullWidth}]
{% endhighlight %}
    
by declaring `fullWidth` as attribute in your build

{% highlight groovy %}
    tasks.withType(AsciidoctorTask) { docTask ->
    
      attributes \
              'source-highlighter': 'coderay',
              'toc': 'left',
              'icons': 'font',
              'sourceDir': "$projectDir/src/",
              'fullWidth': "scaledwidth=17cm, width=100%"
    
      // good to see what the build is doing...
      logDocuments = true
    
    }
{% endhighlight %}

A full working example can be found here: https://github.com/arc42/HHGDAC/tree/master/folge-3

