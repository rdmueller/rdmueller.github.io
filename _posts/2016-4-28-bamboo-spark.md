---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2016/2016-4-28-bamboo-spark.html
title: Wacom Bamboo Spark - could have been so much more...
tags: []
---

Bad news first: I guess I do not belong to the target group of the [Wacom Bamboo Spark](http://www.wacom.com/en-us/products/mobile-accessories/bamboo-spark) :-)

My week began with a Mail from Amazon telling me that there they have a special offer for one of my Wishlist items: the Bamboo Spark digital notepad. I couldn't resist and ordered it, but sone came doubts: do I have any use case for it?

Yesterday the Spark arrived. As always with Wacom, the unboxing gives you the feeling that you've made the right decision and have bought a well designed product. The setup is also a no brainer and you can start to write and sketch immediately. The pen feels like a normal pen and the paper - well it is just normal paper.

The digitizer works very accurate. The simple status LED shows you if you are on a blank page (from the Spark's point of view) or if it already has some content. A press of the button advanced to the next blank page.

The sync with the mobile device seems to be activated whenever you switch to a new blank page. There is no other control to start the sync. That's something I had to figure out, but it is ok. As soon as the pages are synced to the wacom cloud, you can convert them to plain text, PDF or image. The text recognition works quite well, even for mixed language content.

So far so good. If you want to sync what you've written and sketched, this product is perfect. But that seems to be all functionality you get with the bamboo spark app. Nothing more. So, I guess there are people who need exactly this functionality and for them, the bamboo spark is the perfect product.

## But I hoped to get a bit more

- compared to scanner apps like [Whitelines Link](http://whitelines.se/link/) it could be much more intelligent. Whitelines only captures the paper by camera, but it offers three checkboxes through which you can tell the app to directly store the captures image in evernote, dropbox or send it via mail. Such a functionality should be a quick win for wacom
- the spark uses "the soon-to-be industry standard WILL™ universal ink files". But when you try to get more information about this format, you have to sign agreements in order to get the SDK. WILL seems to be a zip file with a binary data file as main content. It would have been nice if the file format would have been easier to use.
- but you can also export your written notes as plain text. And this seems to be the key to additional, self build functionality

## Ideas on how to hack the functionality

### Plain Text Processing
Since the first anoto smart pens like the [livescribe smartpen](https://www.livescribe.com/) hit the market, I dreamed of functionality where you use plain paper to create input for our personal digital assistant (PDA) as the devices where called back then. Today I would like to use the bamboo spark to interact with my smartphone. Here are basically three simple use cases

#### 1. write a simple note and send it via mail

This could be as simple as writing a note like this on the spark:

```
mailto: someone@example.com
Please don't forget to send me that info...
Cheers,
Ralf
```

#### 2. write a to-do which will added to your favorite to-do list

same pattern:

```ToDo: buy some beer for the party next weekend```

#### 3. ... or add something to your calendar

```Date: 29.04. 19:00 Java User Group Meetup```

And yep, it basically works! You can scribble these notes on the spark, convert them to text and then send them - for instance as email - to a script which does a further processing. Not build in, but possible and easy to implement. But this is unfortunately not an automated step since there is no API for the wacom cloud (at least none I am aware of) and so you have to convert your notes manually to plain text and send them. Each page by its own :-(

### Extract Graphical Data

Another Idea is to process the strokes for additional functionality. The system should be able to give you the timing of the strokes along with the strokes themselves. So in addition to the OCR, you could implement functionality like the whitelines checkboxes - the system should be able to recognize a checkmark in a certain position or a special symbol.

The WILL format seems to be the right way, but since it is proprietary, I don't want to take this route. It would be different if it would be more open.

So I checked the exported PDF - bingo. The PDF contains not the strokes but the drawing - e.g. for each line a polygon which describes the border of the stroke. And those polygons seem to be even in the order of drawing. In order to give it a try, I create a small javascript which visualizes the PDF drawing:

<iframe width="100%" height="600" src="//jsfiddle.net/RDMueller/wnraf3rp/3/embedded/result,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!--script async src="https://jsfiddle.net/RDMueller/wnraf3rp/3/embed/result,js,html/"></script-->

## tl;dr

The wacom bamboo spark is a great tool if you want to have digital copies of your handwritten sketches and notes. But unfortunately there is no extra functionality out of the box. Hacking is possible, wacom could make it easier.
