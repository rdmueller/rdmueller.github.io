---
layout: post
title: "More about AsciiDoc"
tags: [doc, asciidoc]
redirect: /news/awesome-asciidoc
---

With the second blog post of this series, I already mentioned that I [love AsciiDoc](https://rdmueller.github.io/why_asciidoc/) to create technical documentation, but I didn't say too much about how to use AsciiDoc.

There is a simple reason for this - other great minds have already created enough content on how to use AsciiDoc. As always, the best resource to start your journey with AsciiDoc might be the homepage, but since I always use Asciidoctor, the Ruby port of the original AsciiDoc, you should start with the homepage of [Asciidoctor](http://asciidoctor.org/).

If you only want to scroll through all those features which make AsciiDoc so great, just head over to [MrHaki's Blog: Awesome:Asciidoctor](http://mrhaki.blogspot.de/search/label/Awesome%3AAsciidoctor). It contains all the cool tricks! As bonus, the compiled blog posts are also available as [eBook on Leanpub](https://leanpub.com/awesomeasciidoctornotebook/) - you can read it for free or use this chance to buy [mrhaki](https://twitter.com/mrhaki) a beer.

You might also wonder what the best way to edit AsciiDoc is. For nearly every decent editor there is an AsciiDoc plugin. So the best way would be to look if a plugin is available for your favourite editor. I personally like the [IntelliJ plugin](https://github.com/asciidoctor/asciidoctor-intellij-plugin/releases), since it is performant and supports plantUML. I just noticed that a new version has just been released 11 hours ago :-) - so the support for [plantUML without Graphviz](https://rdmueller.github.io/plantuml-without-graphviz/) is already contained.

PS: if you wonder why I prefere AsciiDoc over [Markdown](https://daringfireball.net/projects/markdown/) (a [good friend](http://leadtechie.com/) pointed me towards a [google trends comparison](https://www.google.com/trends/explore?date=all&q=markdown,asciidoc)) - compare the features! Markdown comes in different flavours / dialacts which makes it harder to switch between tools. And Asciidoctor comes with a good extensible architecture. But even out of the box, there are important features in AsciiDoc which I miss in Markdown. I can easily [split up my rather long documents](http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/#include-files) into several easy to maintain ones, I can [include source code](http://mrhaki.blogspot.de/2014/04/awesome-asciidoc-include-partial-parts.html) in a very good way and can easily render different formats like HTML5, eBook formats, PDF and DOCX.

More on AsciiDoc vs. Markdown can be found in the [Asciidoctor Manual](http://asciidoctor.org/docs/user-manual/#compared-to-markdown).
