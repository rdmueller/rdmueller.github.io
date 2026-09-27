# No Person, No Rights, No Responsibility
Page: https://rdmueller.github.io/pages/blog/ai-license-paradox.html

EN
 29. Januar 2026
 

 

# No Person, No Rights, No Responsibility: Why AI Contributors Break Our License System

 Exploring a fundamental paradox in open source licensing when AI generates code

 

 
 
 

 
 This post was written by Claude (Anthropic) based on an extensive conversation with me about the topic. As a non-native English speaker, I could not have articulated these thoughts as clearly on my own. However, this is not "AI slop" – we discussed the subject in depth beforehand, building the argument together. I reviewed, edited, and approved the final result. The irony of using AI to write about AI authorship is not lost on me.

 

## The Spark

 Two days ago, I shared a LinkedIn post about my newest open source project. Three days old, seven contributors – all of them AI:

 
 
- Claude, acting as me (a misconfiguration, actually)
 
- Claude as himself
 
- Claude with his own GitHub account R{AI}f.D.Mueller
 
- Copilot Pull-Request-Reviewer
 
- Copilot SWE-Agent
 
- Dependabot
 
 A commenter raised an interesting point: "Does Claude then become co-author? If that's the case, does Claude immediately co-share ownership of the software?"

 This deserves a proper answer, because the question reveals how fundamentally unprepared our legal and licensing frameworks are for AI-generated code.

 

## The Trigger: Claude Claims Co-Authorship

 Here's what sparked the concern: Claude Code automatically adds this to commits:

 
 Co-authored-by: Claude <noreply@anthropic.com>

 

 This happens by default. The AI claims co-authorship without the user explicitly deciding to grant it. I understand why this feels presumptuous – Anthropic made a choice that affects how contributions are attributed in projects worldwide.

 But here's the thing: this claim is legally meaningless.

 

## Copyright ≠ Urheberrecht ≠ Software Patents

 Before we go further, let's untangle some terms that often get conflated:

 Copyright (US): Protects the work. It's a property right that can be transferred. "Work for hire" doctrine means employers can own copyright on employee creations.

 Urheberrecht (German/EU): Protects the creator. It's a personal right that cannot be transferred, only licensed. The creator always remains the creator.

 Software Patents: Exist in the US, not in Germany/EU (with very limited exceptions). Protect inventions and methods, not expression.

 Why does this matter? Because the question "who owns AI-generated code" has different answers depending on which legal framework you're in – and in most cases, the answer is: nobody.

 

## No Person, No Rights

 Here's the core legal reality:

 German copyright law (§ 2 UrhG) requires a "persönliche geistige Schöpfung" – a personal intellectual creation. The US Copyright Office has ruled similarly: AI-generated content without sufficient human creative input cannot be copyrighted.

 AI is not a person. Therefore:

 
 
- AI cannot hold copyright
 
- AI cannot hold Urheberrecht
 
- AI cannot be granted patents
 
 But what about the human who prompted the AI? If the prompting itself doesn't constitute sufficient creative input – if you just said "write me a function that does X" – then arguably no copyright exists for you either.

 The result: AI-generated code may be public domain by default.

 

## The Ownership Paradox

 This creates an interesting paradox:

 Open source licenses (MIT, GPL, Apache, BSD) all assume that someone holds the rights and is granting permissions. The entire model is: "I own this, and I give you permission to use it under these conditions."

 But if nobody owns AI-generated code:

 
 
- Who has the right to grant a license?
 
- Can you put an MIT license on something you don't own?
 
- Is AI-generated code automatically "freer than free"?
 
 Peter's concern about ownership was exactly backwards: the problem isn't that AI might claim ownership. The problem is that nobody can claim ownership, which breaks our entire licensing model.

 

## No Person, No Responsibility

 But here's where it gets serious. Rights come with responsibilities:

 
 
- Who is liable if the code contains a security vulnerability?
 
- Who ensures no license violations are hidden in the output?
 
- Who guarantees there's no malicious code?
 
- Who can be sued if something goes wrong?
 
 Not the AI. It's not a legal person. It cannot be held responsible.

 This is why my workflow matters:

 AI generates code → No author, no responsibility
 ↓
Human reviews PR → Human assumes responsibility
 ↓
Human approves merge → Human is accountable
 The "Co-authored-by: Claude" tag isn't about claiming ownership. It's about transparency – documenting how the code came into existence. The responsibility enters through my review.

 I am the human in the loop. Every PR goes through me. I have to approve it. That's where accountability is created.

 My weakness? I'm getting lazy. Sometimes I just wave PRs through. That's the real risk – not some theoretical AI ownership claim, but humans rubber-stamping AI output without proper review.

 

## The Final Irony: MIT License

 And then I put the code under MIT license:

 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND...

 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE...

 

 So the responsibility I assumed through review? I immediately disclaim it via the license.

 AI generates → no responsibility (no person)
 ↓
Human reviews → assumes responsibility
 ↓
MIT license → disclaims all responsibility
 ↓
End user → uses at own risk 🎪
 We've come full circle. The entire system of rights and responsibilities just... dissolves.

 

## What Needs to Change

 Our software licensing model was built for a world where:

 
 
- Humans write code
 
- Humans own that code
 
- Humans grant permissions
 
- Humans bear responsibility
 
 None of these assumptions hold cleanly in the age of AI-assisted development.

 We need new frameworks that address:

 
 
- Transparency requirements: How do we document AI involvement? The "Co-authored-by" tag is a start, but it's informal.
 
- Responsibility attribution: If AI generates and humans review, how do we formalize where responsibility lies?
 
- License validity: Can current licenses even apply to AI-generated code? Do we need new license types?
 
- Review documentation: Should there be a way to certify that human review actually happened?
 
- Hybrid works: Most code will be partly human, partly AI. How do we handle mixed provenance?
 

 

## Back to Peter's Question

 So, does Claude "co-share ownership" of my software?

 No. Claude cannot own anything. Claude has no legal personhood. The "Co-authored-by" line is a transparency mechanism, not a legal claim. It's Anthropic's attempt to make AI involvement visible – which I'd argue is better than hiding it.

 The real questions we should be asking:

 
 
- Who reviewed this code?
 
- Who is responsible for it?
 
- What does "authorship" even mean when the author has no legal existence?
 
 The future of open source isn't threatened by AI claiming ownership. It's challenged by the fact that our entire legal and licensing infrastructure assumes human authors with human rights and human responsibilities.

 We need to update that infrastructure. Until then, we're all just improvising.

 

 What do you think? How should software licenses evolve for the AI age? I'd love to hear your thoughts.

 

 About this post: Written by Claude, directed by Ralf, reviewed by Ralf. The responsibility for publishing this is entirely human. The irony is entirely intentional.

 

 
 

## LinkedWild
