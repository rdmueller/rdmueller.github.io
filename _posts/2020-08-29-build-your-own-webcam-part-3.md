---
layout: post
title: "Build your own Webcam - Part 3"
tags: [corona, recording, vc]
---

We are still in a situation where working from home is the normal situation.
And while maybe you already got enough webcams to solve your conferencing problems, here are two new ideas.

## 1. HDMI Capture Cards

A HDMI capture card was always something I dreamed of but 120 € was too much to just play around with it.

Now, the price has changed.

There are currently some new chinese, no-name capture cards on the market for as low as 15 €!

### Are they worth it? 

Yes! They are able to capture HDMI at 1920x1080 with 30fps and only a short delay. If you lower the resolution, you even get 60fps.
And what's best about them, you plug them in as USB device and they pretend to be a webcam.
No additional drivers needed.

Just search on amazon for ["HDMI capture card"](https://www.amazon.de/s?k=hdmi+capture+card) and you'll find them.
There are even once with a HDMI output to connect an additional monitor.

### What does this have to do with a Webcam?

Glad you ask ;-)

With a HDMI Capture Card, you can...

* ... use any DSLR with HDMI out as Webcam. And since the Canon driver is only available for Windows, you can even use Canon cameras with your Mac
* ... use a second PC to do the heavy OBS lifting and feed the output as Webcam to the PC on which you do your video conferencing.
* ... use a tablet like the iPad with HDMI out as white board for your sessions. 

Isn't that cool?

## 2. Use your Pi-Zero as real Webcam

In my last blog posts, I tried to set up a pizero based webcam, but it needed to many additional drivers and the performance varied over the network.
I didn't think of the feature that the pizero (and only the pizero, no other model yet) can act as an usb device itself.
But now I found a great blog post which desccribes exactly this: [turn the pizero in a usb webcam](http://www.davidhunt.ie/raspberry-pi-zero-with-pi-camera-as-usb-webcam/).
Since modern operating systems already include drivers for webcams, no additional drivers are needed.

The results as presented in the video from the blog author look very promising:

<iframe width="560" height="315" src="https://www.youtube.com/embed/idD61VOJ024" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Now, this will allow me to create an IR-Webcam with th PiNoIR camera - that'll be fun!

PS: thanx to [Johannes Dienst](https://twitter.com/johannesdienst) for fixing my typos :-)
