# Show Me the Code: Spec-Driven Development with AI
Page: https://rdmueller.github.io/pages/blog/show-me-the-code.html

EN
 13. März 2026
 

 

# Show Me the Code: Spec-Driven Development with AI

 

 
 
 

 
 "Show me the code." That's what I keep hearing when I talk about AI coding. Fair enough. So here it is.

 My last post ("The IDE Is Dead") got more than 120 comments. Some said I was delusional, a fake architect spreading clickbait. Others shared their own experiences building with AI agents. What nobody asked for was more theory. People wanted proof.

 I get it. I was there myself. A year ago I saw posts from people like Reuven Cohen claiming incredible results with AI coding. I scrolled past every single one. Sounded too good. I did my own experiments instead and kept hitting obstacles. Then I interviewed Simon Martinelli on Software Architektur im Stream. He had been doing spec-driven development with AI for over a year. Not demos. Production code. That's when I changed my approach and tried to follow his.

 Since then, three open source projects have come out of that work, all built 100% by AI under my guidance: dacli (a full CLI tool with spec, architecture docs, tests, and manual, reviewed and approved by 5 different LLMs), the Semantic Anchors website (228+ GitHub stars, docs, and a video series), and the Vibe Coding Risk Radar (an interactive web app for assessing AI coding risks). All open source, all verifiable.

 Why does this work? Ingo Eichhorst put it best in his JavaLand keynote: Shannon's theorem says you can transmit reliably over a noisy channel if you add enough error correction. QR codes work this way. Half the pixels can be damaged and they still scan. LLMs are a noisy channel. Your spec is the signal. The compiler checks syntax, TDD checks behavior, linters check style, architecture tests check structure. Stack enough correction layers and the channel becomes reliable.

 This shifts what it means to be a developer. When AI handles the implementation, the bottleneck moves from writing code to understanding the problem. As Uwe Franke shows in his Voice-AI post here on LinkedIn: find one path that works, then expand it step by step. The key is staying open-minded. If you've already decided it can't work, you'll find reasons to confirm that belief. If you stay curious, you'll find ways to make it work.

 Now you can argue that my side-projects are not complex. Fair point. Without the LLM, I would never have invested the time to build them. But these tools are useful, self-contained modules. And we always tried to build software modular. So if you want to see something more complex, combine more modules.

 Swipe through the carousel for the details. And if you want to try it yourself: DM me and I'll share one of my three referral tokens with the first to reach out.

 

 
 

## LinkedWild
