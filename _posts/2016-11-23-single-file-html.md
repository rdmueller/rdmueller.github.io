---
layout: post
title: "Single-File HTML"
tags: [asciidoc]
redirect: /news/single-file-html
---

Asciidoctor renders good looking HTML pages, but often you don't have a server to publish the document for others to read. That's why I render my documents as PDF or publish them to confluence. A single file can easily be sent as mail attachment.

While playing around with SVG stored in CSS files as data-uri's, I thought it would be nice to do the same with the embedded images of the rendered asciidoc files. 

First I thought about writing a new post processor for the docToolchain but then I started to google and found out that such an option is already [part of asciidoctor](http://asciidoctor.org/docs/user-manual/#managing-images):

Just add 

    :data-uri:
    :icons: font

to your document et voila - you get a single file HTML output. From what I've tested so far, the file will be slightly bigger than the PDF and renders quite nice in modern browsers. So I added the two lines as standard option to the `config.ad` files of docToolchain.
