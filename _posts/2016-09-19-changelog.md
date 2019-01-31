---
layout: post
title: "The only constant in life is change"
tags: [doc, asciidoc, arc42]
redirect: /news/changelog
---

Today I will show how to add a change log to your documents. Git is quite good when it comes to log changes, so why not use git to add a table of changes to your document? If your version your documents along with your code, you don't want to see all code commits in the change log of your documents. But git can handle this.

If you type `git log src/docs/arc42`, it will only output the changes made to the files in `src/docs/arc42`. That's already a great feature, but not enough to include it into the asciidoc template. 

First, the changes have to be parsed and re-formatted to asciidoc. There are git libraries somewhere which let you do this programatically, but I am a bit more practical. I used nearly the same approach I used for [exporting the Sparx EA diagrams](https://rdmueller.github.io/sparx-ea/): I just use groovy to execute a shell command. In this case, I only need the output and don't care to see what happens during the process. Since fetching the changes is quite fast, a simpel groovy statement like this is enough:

    def res = "git log ./src/docs/arc42".execute().text
    
This executes the command and returns the whole change log as string:

    commit f811ed51fd21c089bc6ee7853dcf5284eaa2ae88
    Author: Ralf D. Mueller <ralf.d.mueller@gmail.com>
    Date:   Sun Aug 21 23:14:14 2016 +0200
    
        added arc42 template as content

With the language features provided by Groovy, it is easy to parse this and render it as asciidoc:

{% highlight groovy %}
task exportChangeLog(
        dependsOn: [streamingExecute],
        description: 'exports the change log from a git subpath'
) << {
    def res = "git log ./src/docs/arc42".execute().text
    def changes = []
    def change = null
    res.eachLine { line ->
        switch (line) {
            case ~/^commit.*/:
                if (change!=null) {
                    changes << change
                }
                change = [commit:line-'commit ',log:'']
                break;
            case ~/^Author:.*/:
                change['author'] = line-'Author: '
                break;
            case ~/^Date:.*/:
                change['date'] = line-'Date: '
                break;
            default:
                change['log'] += (line ? line.trim()+ "\n" : '')
        }
    }
    changes << change
    def changelog = new File('./build/docs/changelog.adoc')
    changelog.write("")

    changes.each { c ->
        changelog.append """| ${new Date(Date.parse(c.date)).format("dd.MM.yyyy")}
| ${c.author.replaceAll('<[^>]*>','')}
| ${c.log}
"""
    }
}
{% endhighlight %}

The resulting file can easily embedded in asciidoc:

    .Changes
    [options="header",cols="1,2,6"]
    |====
    | Date
    | Author
    | Comment
    
    include::../../build/docs/changelog.adoc[]
    
    |====

The table name and heading are part of the asciidoc template and not the `changelog.adoc` file in order to make it easy to translate. And indeed, the docToolchain project contains the [arc42](https://arc42.github.io) template in two languages :-)

So, if you now run `gradle exportChangeLog` and then just `gradle` the docToolchain build will render a nice changelog for you:

<div> <img src="../images/changelog.png" style="max-width: 100%" /> </div>

As always, the updated docToolchain build is available on [github](https://github.com/rdmueller/docToolchain/tree/b2b011caee933b8d7c764bb62c6bb00b5431c583)
