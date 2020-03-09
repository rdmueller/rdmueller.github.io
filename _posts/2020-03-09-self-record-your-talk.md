---
layout: post
title: "How to Self-Record your Conference Talk"
tags: []
---

## How to Self-Record your Conference Talk

Some time ago, I attended a talk by Bernd Rücker. 
I can't remember the talk anymore (probably something about workflows and decisions),
but I remember that he set up a camera and self-recorded his talk.
After the talk, he used the coffee break to post-process the video and upload it to youtube.

He has written a short blog on [how he records his talks](https://blog.bernd-ruecker.com/how-i-record-my-own-talks-dee7903c2d53) and so I started my journey.

### Here is my experience so far...

I started with Camtasia because I got a cheap copy through Humble Bundle (since I do this as a hobby, my decisions are quite price-sensitive).
But I am not quite happy with Camtasia for recording since it draws quite a lot of CPU power.
It sometimes slows my machine down to the point where you can see characters slowly pop up while I type.
Not good.

So I searched for another recording tool and found [Open Broadcaster Software (OBS)](https://obsproject.com/).
This tool is optimized for gamers who want to stream their gaming experience live to twitch and other channels.
This implies that it does not draw too much CPU resources.

It also works quite nicely to record your various video and audio sources.
The main drawback is that it is not very intuitive to use, so here are some tips and tricks:

#### record multiple video sources

OBS does not record multiple video sources to multiple files.
It only records one video with multiple sources layed out.
This allows you to record your main presentation screen (the projector) and overlay the speaker video as a small webcam video on top of it.

However, this way you have to first decide about the layout of your video.
The decision will be final.
I wanted to have more freedom, so I found the following trick:

Create a canvas which is big enough to place all your source on it and record them side by side.
This allows you to record all video sources in one file and separate the sources later.

The following video shows this concept:

<iframe width="560" height="315" src="https://www.youtube.com/embed/O8w9x31FBUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### record multiple audio sources

I thought it was enough to record one audio source - my speaker microphone (see below for details), but I was wrong.
The last time I tried to record my talk, I only noticed afterward that I recorded the wrong audio source.
This turned the whole recording to be worthless.

So I searched for a solution on how to record all available microphone - webcam, speaker-mic and build in.
Just to be sure.

The solution is to first choose an output format that is capable to record multiple audio channels.
The details are explained in the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdFeCaStTbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### set up all sources

One day I tried to set up my recording upfront but I wasn't able to set up the speaker screen but OBS didn't who me the second screen as a source.
This was when I found out that it only shows sources which are already connected to your notebook.

The next time, I knew that I had the perfect setup from two days before and I relied on this setup in another location.
Unfortunately, the setup was created with a low-res projector in the first location and the second location had a high-res projector.
So I only recorded the upper left quarter of the screen :-(.

OBS seems also to have problems when you disconnect and then reconnect devices (USB webcam). 
Even when I just close my notebook and re-open it, the internal webcam does not work as a source anymore and I have to re-setup it.

So, here is my tip: when it is your turn, try to be at the location 15 minutes before and setup OBS individually for the location and leave your notebook up and running. 
You might even want to already start your recording in order not to forget it when your talk starts.

### Hardware

#### Camera 

As a camera, I use the same Logitech HD 920 pro as Bernd.

<a href="https://www.amazon.de/Logitech-C920-HD-Pro-Webcam-Videogespr%C3%A4che-Videoaufnahmen-Full-HD-Stereo-Mikrofonen/dp/B006A2Q81M/ref=as_li_ss_il?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3T196WPSINTUA&keywords=logitech+920&qid=1583760314&sprefix=logitech+920,aps,262&sr=8-3&linkCode=li2&tag=bit0c-21&linkId=ae780829066894f97affbb9a639fdfd8&language=de_DE" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006A2Q81M&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=bit0c-21&language=de_DE" ></a><img src="https://ir-de.amazon-adsystem.com/e/ir?t=bit0c-21&language=de_DE&l=li2&o=3&a=B006A2Q81M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

It has a great video quality and the microphones record a full room. 
So if your speaker mic has problems, the webcam mics are a good fall back.

A cheap camera stand (like the one mentioned by Bernd) is enough to mount it in most situations and it is easy to carry.

#### Microphone

A cheap [lavalier or lapel microphone for ~10€](https://amzn.to/2W3Rtkt) is a great choice to record your voice.
I will only record your voice and not the whole room as the webcam does.
And in most situations, you don't need a wireless mic.
The cable of these cheap mics is long enough to give you some freedom to move a bit behind your notebook and they are just far cheaper than wireless mics.

You could also use a bluetooth headset, but the sound quality is not as good since the loudspeaker and mic share the frequency band over one bluetooth connection.

#### Presenter

When you are used to a laser pointer as a presenter, keep in mind that the laser pinter will not be recorded through your screen recording.
And the quality of your camera will not be good enough to capture the projected screen.
Even with a decent camera, the camera has to cope with the light conditions. 

That's why I use a Logitech Spotlight as presenter:

<a href="https://www.amazon.de/Logitech-Fortschrittliche-Pr%C3%A4sentationsfernbedienung-universell-Schnellladefunktion/dp/B06WP4QCKT/ref=as_li_ss_il?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3FWZFZ38KHE8I&keywords=spotlight+presenter&qid=1583760845&sprefix=spotlight+presen,aps,270&sr=8-3&linkCode=li2&tag=bit0c-21&linkId=9086cb72d41147a148faee52529f4eca&language=de_DE" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B06WP4QCKT&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=bit0c-21&language=de_DE" ></a><img src="https://ir-de.amazon-adsystem.com/e/ir?t=bit0c-21&language=de_DE&l=li2&o=3&a=B06WP4QCKT" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

Not cheap but super cool!

### Post-Processing

OBS helps you to record your talk but it will not do any post-processing.
That's where Camtasia shines.
It is a simple tool to cut, edit and re-render your final video.
It also does the trick to import your recorded video (screen + webcam) twice and clip it to separate the two sources.

### Other Tips & Tricks

When I started, someone told me that I could record different sources with different devices. 
"Just clap your hand at the start of your recording and it will be easy to synchronize the sources."

So I recorded my voice with my mobile phone (yes, freedom to move around!) and video with an action cam.

Yes, you will easily find your hand-clap in the video and audio channel, but it turned out that the different sources diverged some minutes(!) after a one hour talk.
That's why I only record with one device - my speaker notebook - since then.

Hope this blog might help you with your own recordings!
