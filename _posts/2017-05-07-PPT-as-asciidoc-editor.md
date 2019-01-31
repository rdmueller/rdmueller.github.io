---
layout: post
title: "Do more with Slides"
tags: [asciidoc]
redirect: /news/PPT-as-asciidoc-editor
---

As an architect, you often have to present your ideas and architecture to an audience.
Powerpoint might seem to be a perfect fit for that, but people also want to have something they can mail around and read it without you presenting it.

This often result in slides which contain lots of text but it is still not enough text to sell your idea without you presenting it.

Do you know this problem?

Why not turn your presentation into a full fledged document?

Powerpoint has the capability to store speaker notes with each slide. 
Let's re-use them and store the story you want to tell with each slide...

Imagine a speaker note looking something like this:

```
some notes you need as real speaker note
...
{adoc}
This is your full story you want to tell.

Use the full range of *asciidoc* formatting and insert the slide image with the following placeholder:

.an example slide
{slide}

you might continue your story after the slide...
```

Next we just need [a `.vbs` script](https://github.com/rdmueller/docToolchain/blob/master/scripts/exportPPT.vbs) to export everything...

Now you can create great slide shows which can be turned into documents in a small amount of time.

And have you ever caught yourself using powerpoint to draw up some images for your documentation? 
The script above will make this easier too!

As always, the script is aprt of the current [docToolchain](https://github.com/rdmueller/docToolchain) version and available as `exportPPT`-task.
