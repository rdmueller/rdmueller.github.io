---
layout: post
title: "Enterprise AsciiDoctor"
tags: [gradle, asciidoc]
---

Last time I wrote about how to configure Gradle to run behind a proxy with a local binary repository.

First, I have to say that I love twitter, because not long after I tweeted about the new blog post, [Guido Faust](https://twitter.com/StuafOdiug) reminded me that "The usage of a tool like nexus, artifactory or others is also usefull to save time, traffic and ensure availability" - full ack. People like me tend to speak of a firewall and local binary repository as an annoyance, but it is true that these are tools which help to create a stable environment! I had to learn this the hard way when I wanted to rebuild some sandbox projects after codehaus left the scene.

But after playing around with me new build file, I also noticed a flaw - all java dependencies where resolved through the local repository, but the ruby gems where still resolved directly through the internet.

Since I couldn't find out how to change this jRuby behaviour, I just decided not to use the jRuby dependency resolution anymore and switched to the [asciidoctorj bindings](https://github.com/asciidoctor/asciidoctorj). All extensions which I use are available and these bindings can be resolved as simple java dependencies.

So I refactored my build file (the comments still show how to switch back) and solved a small problem with the groov extension DSL: I had to add a dependency to `asciidoctorj-groovy-dsl` - don't ask me why it worked before :-)

#### What's the drawback?
The versions of the java bindings seem the be a little bit behind the jRuby versions, but all features which I need are already available.

#### Why didn't I try to resolve the jRuby dependencies through the local binary repository?

The java bindings are resolved through the standard java repositories. These are very likely to be already configured in your local binary repository. The jRuby dependency are not so likely to be already available.

The details of my changes can be viewed in the commit diff: https://github.com/rdmueller/docToolchain/commit/4e1ee93bf942492c55e303da8b23e13e517049a6

