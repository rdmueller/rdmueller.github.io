---
layout: post
title: "Turn your Document into an Audio-Book"
tags: [asciidoc]
---

Last blog post showed you how to convert your asciidoc into `.docx` via docbook.

Pandoc can do more than that. 
It has a lot of target format under the hood.

The one I like most is ePub, since it lets me move the generated document onto my eReader. 
For me the most convenient way to read large documents.

So let's use pandoc again to turn docbook into ePub:

{% highlight gradle %}
task convertToEpub (
        dependsOn: [generateDocbook ],
        type: Exec
) {
    workingDir 'build/docs/docbook'
    //commandLine "pandoc -r arc42-template.xml -o arc42-template.docx "
    executable = "pandoc"
    new File('build/docs/epub/').mkdirs()
    args = ['-r','docbook',
            '-t','epub',
            '-o','../epub/arc42-template-en.epub',
            'arc42-template-en.xml']
}
{% endhighlight %}

That was easy. 
The funny think I only found out while I was writing this blog post is, that if you try to open this file on a windows 10 machine, it will open up in Edge.

So far so good - but Edge has a quite good text to speech engine which is activated for ePub files!

This way you can easily let Edge read your documents as audio-book to you. 
Isn't that great?
