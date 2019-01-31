---
layout: post
title: "Render Asciidoc to docx (MS Word)"
tags: [asciidoc]
redirect: /news/create-docx
---

docToolchain is currently able to render your documents as HTML and PDF.
But sometimes you just need a different format. The best solution I've found so far is [pandoc](http://pandoc.org/) - the universal document converter. 
It is a command line tool which takes one format as input and another as output.
The quality of the conversion depends on the features of the input format.

I got best results with docbook as input format, so let's add it to the docToolchain build.
This is easy with the [last fix](https://rdmueller.github.io/plantUML-and-pdf/) I applied to the build:

{% highlight gradle %}
task generateDocbook (
        type: AsciidoctorTask,
        description: 'use docbook as asciidoc backend') {
        backends = ['docbook']
}
{% endhighlight %}

What`s cool about this conversion is, that I already creates the plantUML images and we don't have to take care of this in the next steps.

Now, since pandoc is a command line tool, we can simply use the exec-task to start pandoc:

{% highlight gradle %}
task convertToDocx (
        dependsOn: [generateDocbook ],
        type: Exec
) {
    workingDir 'build/docs/docbook'
    executable = "pandoc"
    new File('build/docs/docx/').mkdirs()
    args = ['-r','docbook',
            '-t','docx',
            '-o','../docx/arc42-template.docx',
                 'arc42-template.xml']
}
{% endhighlight %}

et voila, we have a quite good looking `.docx` file with all images already included. 
The `workingDir` ensures that pandoc will find the image folder.

Not looking as good as you expected? Need different styles or a cover page?

Pandoc has a lot of setting to change styles etc., but I found them hard to apply and found a IMHO better solution:

- Create a word file with the cover page you want to add. 
- Include the generated `.docx` file as reference
- Change styles of the main document
- save it

The styles of the main document should now also change the styles of the generated document.
But now you have two documents. To solve this, just write a `.vbs` script to save your document with inlined references - sorry, no example code for that :-(


