---
layout: post
title: Why I don't like Word to write documentation
tags: [asciidoc, documentation]
---

Don't get me wrong &ndash; MS Word is a great product for many use cases, but most of them are IMHO outdated (like writing a letter) and writing modern documentation is not a use case where MS Word shines.

Today we live in the information age, but Word is page oriented &ndash; Word lets you write documents with pages, page numbers, page header and footer etc. <br />
The table of contents lists the page numbers the content can be found on &ndash; linking to the content is not a first class feature.

When I write down the documentation for a project, I don't want to create pages &ndash; I want to dump information. The format in which the information will be published is important, but it is even more important to have the freedom to change the format to &ndash; for example &ndash; HTML, ePub, Word, PDF and whatever may come in the future and what my stakeholders need. +
Yes, Word can be saved as HTML and printed as PDF, but that's not the same.

Interesting about Word is that it implements many advanced features which seem to be hard to use. <br />
Did you know that Word lets you…

- compare two documents?
- compose a document from subdocuments?
- reference images instead of embedding them?

These are great features, but since we are not used to them, they are hard to handle.

Instead of comparing documents and checking the diff, we use templates with a change history table as part of the document. A proper diff together with version control would be more helpful.

Instead of composing documents from subdocuments, we copy and paste parts from document to document in order to create views for different stakeholders. A habit which would not be tolerated in software development :-)

When we use images in documents, they are embedded. So if we want to make a change, we first have to search for the source file (and hopefully find it), change it and embed it again. Storing only the reference to the image within the document would make this easier.

Unfortunately, composing documents and referencing images result in multifile documents which people are not used to and would break the "please mail me the doc" flow.

So what's the solution? Stay tuned and I will explain in my next post why I prefer asciidoc over Word...

Next post: [Why you should use AsciiDoc to document your Software Solution](https://rdmueller.github.io/why_asciidoc/)
