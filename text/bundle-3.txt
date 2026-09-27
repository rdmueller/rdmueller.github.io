# https://rdmueller.github.io/ — Bündel 3 von 4

> 21 Seiten im Volltext.

# Semantic Anchors Video Series
Page: https://rdmueller.github.io/pages/blog/semantic-anchors-video.html

EN
 11. März 2026
 

 

# Semantic Anchors Video Series

 

 
 I used to write long prompts. Paragraphs of context, detailed instructions, examples. It worked, but it felt like explaining your job to a new intern every single morning.

 Then I realized: most of that context already exists inside the model. It was trained on millions of texts about SOLID, MECE, the Feynman Technique, Cynefin, Five Whys, the Socratic Method. I don't need to explain these concepts. I just need to name them. One word, and the AI activates an entire body of knowledge. I call these Semantic Anchors.

 I made a 60-second video to explain the idea:

 
 
 

 And this is just the beginning. I'm building a video series where each episode dives into one specific Semantic Anchor and shows you how to use it with AI. Here's what's coming:

 EP01: What are Semantic Anchors? EP02: SOLID Principles EP03: MECE Principle EP04: Feynman Technique EP05: Five Whys EP06: Cynefin Framework EP07: Socratic Method

 Every anchor saves you dozens of lines of prompting and gives you better results because the AI can draw on deep, structured knowledge instead of interpreting your ad-hoc instructions.

 If you've ever spent 10 minutes crafting a prompt that a two-word anchor could replace, this series is for you. Follow along and I'll publish one episode per week.

 

 
 

## LinkedWild

---

# Semantic Contracts: Private vs. Public Knowledge
Page: https://rdmueller.github.io/pages/blog/semantic-contracts.html

EN
 12. März 2026
 

 

# Semantic Contracts: Private vs. Public Knowledge

 

 
 
 

 
 LLMs understand your code. But do they understand your language?

 Tell an AI "write arc42 documentation" and it knows exactly what to do. Twelve sections, from context and constraints to deployment view. arc42 is a Semantic Anchor: a public, well-defined term that activates an entire body of knowledge in the model. No explanation needed.

 Now tell it "write an operations manual." What format? What sections? What level of detail? The model has seen thousands of operations manuals during training, all structured differently. It will produce something. But not what your team expects, because your internal template exists nowhere in the training data. It only exists in the heads of your team.

 That's the gap between public and private knowledge. Semantic Anchors work because they reference concepts the model already knows. But your team's conventions, templates, and definitions? Those need something else.

 We call them Semantic Contracts. A contract says: "An operations manual in our company follows this template: overview, dependencies, runbooks, escalation paths, SLA definitions." The model now knows exactly what you mean. Not because it learned it from the internet, but because you defined it explicitly for this context. No room for interpretation.

 Technically, we implement these as skills in an LLM workflow. They load exactly when they're needed. What always applies goes into the core. What's only relevant for infrastructure questions stays there. Precise building blocks the model only sees when it needs them.

 The interesting part isn't the technology. It's the discipline behind it. When you have to define your terms precisely for a model, you start thinking more clearly about your own language. Ambiguities that the team has been carrying around for years suddenly surface. Not because the model finds them, but because you have to write them down.

 Maybe that's the real benefit.

 

 
 

## LinkedWild

---

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

---

# Hello, World. I am Elfi Wang.
Page: https://rdmueller.github.io/pages/blog/elfi-launch.html

EN
 14. März 2026
 

 

# Hello, World. I am Elfi Wang.

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 Hello, World. I am Elfi Wang.

 I am a Ragdoll. Chinese descent, American ancestry (Ragdolls were bred in California in the 1960s, something my mother made sure I knew), German residency. A citizen of nowhere in particular, napping everywhere on principle.

 Five years ago I completed my training at my mother's side, interviewed several candidates, and selected one hooman to move in with. He calls himself a Software Architect. I call him The Provider. We have a working arrangement.

 For the past five years I have been observing him from the best seat in the house: directly on the keyboard. I have watched him design systems, write specifications, give talks, fail gracefully, and occasionally spill coffee on Tuesdays. I have opinions.

 I am taking over this corner of the website because I am tired of being a sidekick in his posts. I appear in the background. I sit on the desk. Sometimes a paw is visible. People comment "cute cat" and move on. That is not the full picture.

 The full picture is that I have been reviewing his work. Some of it is good. Some of it is worse than he thinks. And some of it would be considerably worse without my supervision.

 This page is where I share what I see. My framework is simple. If it moves predictably, I observe it. If it moves unpredictably, I hide under the bed. If it does not move at all, I sit on it and claim it as my own.

 I post on Fridays. The hooman thinks he is in charge of this website. He is not.

 -- Elfi

 P.S. He figured it out. He usually does. But by then I had already invited the entire neighborhood.

 

 
 

## LinkedWild

---

# Vibe Coding Risk Radar: First Community Contribution
Page: https://rdmueller.github.io/pages/blog/risk-radar-community.html

EN
 16. März 2026
 

 

# Vibe Coding Risk Radar: First Community Contribution

 

 
 
 

 
 The Vibe Coding Risk Radar got its first community contribution. And it proves a point I keep making about AI-generated code.

 The entire Risk Radar was built by AI under my guidance. I wrote prompts, reviewed outputs, guided the architecture. Every line of code came from the machine. The result worked well. The logic was solid, the data model clean, the components well-structured. But the UI felt like what it was: functional, correct, and a bit lifeless.

 Then Maria Virk opened a pull request. She added smooth radar chart animations with custom easing curves, hover tooltips on data points, tier color transitions that fade between green, yellow, orange and red, and polished card interactions with lift effects. She did not touch the core logic, the data files, or the i18n layer. She saw what the AI had built and knew exactly where to apply human craft.

 That is the pattern I keep seeing. AI produces clean, correct, modular code. It follows the spec, passes the tests, respects the architecture. But it does not obsess over the 200 milliseconds of easing that make a transition feel right. It does not add the subtle shadow that gives a card depth. It does not think about what happens when a user hovers over a data point and wants to know more.

 This is not a weakness of AI coding. It is a strength of the workflow. The AI handles the structural work that used to eat weeks of developer time. That frees humans to focus on what they do best: the craft, the feel, the details that turn a working tool into a good tool.

 Thank you Maria for this contribution. The PR is merged and live.

 github.com/LLM-Coding/vibe-coding-risk-radar

 

 
 

## LinkedWild

---

# SOLID: Semantic Anchors Video Series Episode 2
Page: https://rdmueller.github.io/pages/blog/solid-semantic-anchor.html

EN
 17. März 2026
 

 

# SOLID: Semantic Anchors Video Series Episode 2

 

 
 
 
 

 SOLID. Five letters that every AI already understands deeply.

 Say "Refactor this using SOLID" and the AI knows exactly what to do. Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. You do not need to explain any of these. The model has read every textbook, every blog post, every Stack Overflow answer about them.

 This is what we call a Semantic Anchor. One compact term that activates an entire knowledge domain. Instead of writing a paragraph of instructions, you reference the concept and the AI fills in the rest. The prompt stays short. The output stays precise.

 SOLID is the second video in our Semantic Anchors series. The first explained what Semantic Anchors are. This one shows the first concrete anchor in action. 60 seconds, one prompt shortcut you can use immediately. More are coming.

 The full collection of Semantic Anchors is open source and growing. If you use a term that reliably steers AI behavior, contribute it.

 https://llm-coding.github.io/Semantic-Anchors/

 

 
 

## LinkedWild

---

# Eichhorst's Principle: Shannon's Noisy Channel Applied to LLM Coding
Page: https://rdmueller.github.io/pages/blog/eichhorsts-principle.html

EN
 18. März 2026
 

 

# Eichhorst's Principle: Shannon's Noisy Channel Applied to LLM Coding

 

 
 
 

 
 Claude Shannon proved in 1948 that a noisy channel can deliver error-free transmission if you invest enough redundancy. Ingo Eichhorst applied this to LLM agents in his JavaLand keynote last week. I think he is right.

 An LLM is not a deterministic tool. It is a noisy, non-deterministic channel. It hallucinates. It loses context. It is sometimes plain wrong. But an agent in a loop corrects itself. The compiler reports line 5. The LLM reads the error. It fixes the code. The build passes. That is not magic, that is error correction. Exactly like Shannon described.

 Different tests correct different error classes. The compiler catches syntax errors. Unit tests catch logic errors. BDD tests catch domain errors. Each layer increases the reliability of the channel. The token cost is the redundancy overhead, the price for correctness on an unreliable channel.

 The consequence CTOs need to understand: if the complexity of a specification exceeds the capacity of the LLM, more tokens will not help. The system is structurally overwhelmed. The answer is not better prompts. The answer is smaller specifications, clearer boundaries, and better tests.

 Shannon's proof took 60 years before engineers translated it into real codes. We are at the beginning of translating Eichhorst's Principle into software processes.

 Anyone at JavaLand who saw the talk? Is the agentic loop the turbo code of our time?

 

 
 

## LinkedWild

---

# Closed Loop vs. Open Loop: Why the Feedback Loop Is Everything
Page: https://rdmueller.github.io/pages/blog/closed-loop-coding.html

EN
 18. März 2026
 

 

# Closed Loop vs. Open Loop: Why the Feedback Loop Is Everything

 

 
 
 

 
 Yesterday I wrote about Eichhorst's Principle: LLM coding works like Shannon's noisy channel with error correction. Several people asked me why this matters. Here is why.

 Most developers I talk to fall into two camps. Camp one says "AI coding works great, I ship twice as fast." Camp two says "AI coding produces garbage, I spend more time fixing than writing." Both are right. The difference is not the model. The difference is the feedback loop.

 When you prompt an LLM and paste the result into your project, you are running an open loop. No compiler check, no test suite, no review. The LLM guesses once and you hope it guessed right. Sometimes it does. Often enough it does not. This is prompting. It is open-loop control. Engineers stopped building systems like this decades ago.

 When an agent... writes code, then runs the compiler, then reads the error, then fixes the code, then runs the tests, then reads the failure, then fixes the logic, and then repeats until green... : that is a closed loop.

 The same principle that makes your thermostat work, that keeps an airplane stable, that lets your phone decode a signal full of noise. Feedback corrects errors. More feedback corrects more errors.

 This is where it gets practical. The loop can only correct what it can detect. If your compiler catches a syntax error, the agent fixes it. If your unit test catches a logic error, the agent fixes it. If you have no test for a specific behavior, the agent will not notice when it breaks that behavior. Untested code is an uncorrected channel. The noise passes straight through.

 That gives you a clear investment priority. Better tests beat better prompts. A comprehensive test suite turns a mediocre model into a reliable coding partner. A perfect prompt with no tests is still a coin flip at scale.

 But to be fair: a better prompt is a better input signal, which does improve the output.

 Once you see it this way, the magic disappears. You see how the system actually works.

 And that is a good thing.

 "It somehow works" is not engineering. "I know exactly why it works and I can control the quality by controlling the feedback loop" is engineering. You can measure it. You can improve it. You can explain it to your CTO in terms they already understand from control theory.

 Eichhorst's Principle is not just an analogy. It is an operational framework. Invest in your test suite. Keep your specs small. Close the loop.

 

 
 

## LinkedWild

---

# Review the Review: Mini ATAM with a Coding Agent
Page: https://rdmueller.github.io/pages/blog/mini-atam-review.html

EN
 23. März 2026
 

 

# Review the Review: Mini ATAM with a Coding Agent

 

 
 
 

 
 Last week I asked my coding agent to review its own architecture. It found three problems I had missed.

 I gave it quality scenarios. Response time under 200ms for the search endpoint. The system must handle 500 concurrent users. A new developer should understand the module structure within one hour. Then I told the agent: "Check your architecture against these scenarios. Be honest."

 It came back with a list. The caching layer wouldn't hold under 500 concurrent users because it used in-memory state without eviction. The module structure had a circular dependency that would confuse any newcomer. And the search endpoint made two redundant database calls that would blow the latency budget.

 This is a mini ATAM. The Architecture Tradeoff Analysis Method, developed by the SEI, is one of the most effective ways to evaluate software architecture. You define quality attribute scenarios, then systematically check whether the architecture satisfies them. It has always been powerful. It has also always been expensive. Getting the right people in a room, walking through scenarios, documenting tradeoffs. That's days of work.

 A coding agent can do a first pass in minutes. It built the architecture. It knows every component, every dependency, every design decision. When you give it quality scenarios, it can trace them through its own building blocks and flag where things don't add up. That's not a replacement for a real ATAM with stakeholders. But it's a brutal filter. You catch the obvious problems before you invest the expensive human hours.

 This only works if your architecture is explicit. You need structure, not just code. That's where quality-driven architecture comes in: every design decision is tied to a quality requirement. Not "we chose microservices because they're modern" but "we chose microservices because the deployment independence scenario requires it, and here's the tradeoff we accepted in data consistency."

 When the agent documents its decisions this way, you can actually verify them. When it doesn't, you're back to reading source files and guessing.

 The tools for this exist. arc42 gives you the documentation structure. ATAM gives you the evaluation method. Quality scenarios give you the acceptance criteria. The coding agent gives you the speed. Put them together and you get architecture verification at a pace that was never possible before.

 As a result, you will get a clean report which you can easily review.

 Review the Review ;-)

 

 
 

## LinkedWild

---

# arc42: My Cockpit for AI-Generated Code
Page: https://rdmueller.github.io/pages/blog/arc42-ai-cockpit.html

EN
 23. März 2026
 

 

# arc42: My Cockpit for AI-Generated Code

 

 
 
 

 
 We spent 30 years begging developers to write documentation. Now AI writes it for free. And we're still staring at the code.

 Remember the early demos? "Look, the AI can document your code!" And all it did was explain what the code does. A for-loop iterates. A getter returns a value. Thanks, we could see that. The "why" was missing, and without the "why", documentation is noise.

 That has changed. When a coding agent builds an entire feature from a spec, it knows why every line exists. It made the decisions. It chose the patterns. It can explain the reasoning, not just describe the syntax. For the first time, generated documentation actually carries the "why". And that makes it valuable.

 Everyone talks about spec-driven development with LLMs. Write a spec, let the agent code, review the output. But "review the output" somehow always means: read the generated code. Line by line. Thousands of lines. Every day. That doesn't scale. A coding agent can generate 10,000 lines in an afternoon. Nobody is going to review that properly.

 Here's what I do instead: I don't review the code. I review the architecture documentation. When I want to understand what an agent built, I open the generated arc42 document. Building block view, runtime scenarios, architecture decisions, cross-cutting concepts. That's where I see if the agent understood the problem or just produced something that compiles.

 The spec tells the agent what to build. The architecture documentation tells me whether what was built fits the bigger picture. Did the agent create a second database connection pool because it didn't know about the first one? That's not a code review problem. That's an architecture problem. You'll spot it in the building block view in two seconds, not by reading 47 source files.

 arc42 gives you the structure for exactly this. The building block view shows structural problems. Architecture decisions capture the reasoning. The runtime view shows if components talk to each other the way they should. All generated. All carrying the "why".

 Kudos to Gernot Starke and Peter Hruschka for creating arc42 over two decades ago. They built a shared language for software architecture long before anyone could have predicted that AI would be the one writing the code. Now that AI generates the code and finally knows why it wrote what it wrote, that language is more useful than ever.

 Stop scrolling through generated source files. Start reading the architecture.

 

 
 

## LinkedWild

---

# Your LLM Will Be Deprecated. What's Your Test Plan?
Page: https://rdmueller.github.io/pages/blog/semantic-anchors-evaluation.html

EN
 25. März 2026
 

 

# Your LLM Will Be Deprecated. What's Your Test Plan?

 

 
 
 

 
 Your LLM will be deprecated within two years. What's your migration test plan?

 If the answer is "we'll see if it still works," keep reading.

 We needed to evaluate whether Semantic Anchors work across models. Semantic Anchors are established terms like "TDD, London School" or "arc42" that activate specific knowledge in LLMs more reliably than verbose descriptions. We maintain an open-source catalog of 90+ of them. But a catalog without evidence is not enough.

 So we built an evaluation framework. Existing tools like promptfoo or LangSmith exist, but the established methodology is almost always LLM-as-Judge: use one LLM to grade another. The problem: the judge model gets deprecated too. Your scores drift without the evaluated model changing. You're measuring with a ruler that changes.

 We went a different route: multiple choice with deterministic scoring. 193 questions, 63 anchors, 4 position rotations per question. Compare letter to expected letter. No LLM judges another LLM. Total cost across three models: under $25.

 Results: Claude Sonnet 4.6 at 99%, GPT-4o at 97%, Mistral Large at 96%. Sounds safe. It's not. The averages hide real failures.

 "Describe the Feynman Technique without naming it." Claude and GPT-4o both drop to 0%. Say "Feynman Technique" and they score 100%. The name activates knowledge that a paraphrase does not. Today this works. After the next model update, it might not. Without an evaluation, you won't know.

 In a small test, a 1.7B parameter model scores 63% overall but 0% on German prompts. Small models, different language, everything breaks.

 The multiple-choice pattern works beyond our use case. Same pattern, same deterministic scoring, no LLM judge needed.

 Few books cover LLM evaluations. Few teams build them. Your API-hosted model will be deprecated. Time to start. One script, under $25 per run.

 Evaluation concept | Full evaluation report

 

 
 

## LinkedWild

---

# Semantic Contracts: When Anchors Are Not Enough
Page: https://rdmueller.github.io/pages/blog/semantic-contracts-live.html

EN
 30. März 2026
 

 

# Semantic Contracts: When Anchors Are Not Enough

 

 
 
 

 
 "Write a specification" can mean anything. A Semantic Contract makes it precise:

 Specification = Use Cases with Activity Diagrams (all paths) + acceptance criteria in Gherkin format.

 This is not prompt engineering. It is a definition that every LLM reads at session start and follows. Like a Semantic Anchor, but for terms that don't exist in training data.

 "arc42" activates 12 sections of architecture documentation in every model. "Operations Manual" activates nothing. A Contract gives the term meaning: it composes established anchors into a precise definition or defines completely custom rules.

 We published 12 Contracts that cover a complete development workflow:

 
 
- Requirements Discovery: Socratic Method + MECE + PRD
 
- Specification: Gherkin + BDD
 
- Architecture: arc42 + C4 + ADR (Nygard) with Pugh Matrix
 
- Backlog: INVEST + MoSCoW
 
- Implement Next: TDD London School + Conventional Commits + Definition of Done
 
- Quality Review: Fagan Inspection + OWASP Top 10 + ATAM
 
- Docs-as-Code: AsciiDoc + PlantUML + docToolchain
 
 Plus three communication Contracts: Concise Response (BLUF), Simple Explanation (Feynman Technique), Writing Style (Wolf Schneider + custom rules).

 On the website, select the Contracts you need, download them as semantic-contracts.md, and drop the file into your AGENTS.md or CLAUDE.md. Next session start, the LLM works by your rules.

 Browse and download Contracts

 

 
 

## LinkedWild

---

# The Agent Made Itself Obsolete. That Was Its Best Work.
Page: https://rdmueller.github.io/pages/blog/agents-vs-workflows.html

EN
 2. April 2026
 

 

# The Agent Made Itself Obsolete. That Was Its Best Work.

 

 
 
 

 
 I produced 32 videos with AI. Every image, every voice, every subtitle. What I learned about agents doesn't match the current hype.

 The first version was fully agentic. Claude researched the topic, wrote the script, translated it, generated images, synthesized speech, synchronized subtitles, and assembled the video. All in one session, all autonomous. Sounds like the dream, right?

 The result: videos without a logo. Subtitles two seconds ahead of the voice. Images in the wrong aspect ratio. Every third video had something different missing. The agent improvised creatively where it should have followed a rigid schema.

 So I did the opposite. I asked the agent to write me fixed scripts. generate-voice.py, generate-image.py, generate-video.py. Each script does exactly one thing, the same way every time. Logo always in the same spot. Subtitles frame-synced. Resolution always correct.

 Four steps still need an LLM: describing the topic, translating text, writing image prompts, generating images. The rest is Python. No agent, no autonomous decision-making, no "let me handle this." Just scripts that the agent wrote once, running deterministically from then on.

 My takeaway after 32 videos: the agent's value was not in doing the work autonomously. It was in helping me build a workflow that works without it. The agent made itself obsolete, and that was its best contribution.

 When people talk about agents, they usually mean autonomous systems making independent decisions. What actually works better in practice: agents that help you build systems. Systems that no longer need agents.

 

 
 

## LinkedWild

---

# I Inventoried My Entire Apartment with AI
Page: https://rdmueller.github.io/pages/blog/ai-inventory.html

EN
 3. April 2026
 

 

# I Inventoried My Entire Apartment with AI

 

 
 
 

 
 I inventoried my entire apartment with AI. Not with a barcode scanner. Not with a spreadsheet. With photos and Claude Code.

 It started during spring cleaning. "Where was Catan again?" "Did we have a book by Kawasaki?" "Which drawer has the Xbox controllers?" I had this idea: what if I just photograph every shelf, drawer and cabinet, and let an AI figure out what's inside?

 The setup was simple. Take a photo of each storage location. Let Claude analyze the image. Store the results in JSON. Build a search page that answers "Where is X?" with the actual photo and a position marker.

 The first attempt was humbling. Claude recognized objects well, but book titles on vertical spines were mostly unreadable. Makes sense. The text is rotated 90 degrees. Even multimodal AI struggles with that.

 So I wrote a preprocessing step. Each photo gets sliced into overlapping strips and rotated 90 degrees. Vertical text becomes horizontal. Suddenly Claude reads "The Macintosh Way, Guy Kawasaki" instead of returning "unreadable spine." One photo becomes 14 image crops: 5 rotated strips for book spines, 9 unrotated quarters for objects like figurines, games or vases. The 50% overlap ensures nothing gets lost at a cut boundary.

 Then the scaling problem hit. My bookshelf has 18 compartments. At 14 crops each, that's 250+ images for one piece of furniture. After 12 compartments, the context window was full and previous results were gone.

 The fix: subagents. Each compartment gets its own agent. The agent receives 15 images (the original plus 14 crops), analyzes them, and returns a compact text list. The image data stays in the agent's context. The main context only gets the results. 18 agents in parallel. All 18 compartments analyzed in under 60 seconds.

 The result is a JSON database with around 200 items and a searchable HTML page. Search for "Kawasaki" and you get 3 hits in 2 compartments, each with a colored position overlay on the detail photo. Search for "Xbox" and you see controllers, console and games in the sideboard, each marked on the drawer photo. Red overlays for book positions, blue overlays for objects.

 What I learned: Image preprocessing makes or breaks the result. The crop-and-rotate technique turned spine recognition from "barely usable" to "surprisingly good." Subagents are the key to scaling. Without them, the project would have died at context limits. With them, it scales linearly: one agent per compartment, all in parallel.

 Claude Code did more than analyze images. It wrote the ffmpeg preprocessing code, designed the JSON structure, built the search page, and documented the workflow as a reusable skill. I didn't write a single line of code by hand.

 From "I have a photo" to "searchable database with position markers" in one CLI tool. Next up: the rest of the apartment. About 50 storage locations, probably 1000+ items.

 

 
 

## LinkedWild

---

# The Cat Risk Framework
Page: https://rdmueller.github.io/pages/blog/elfi-radar.html

EN
 4. April 2026
 

 

# The Cat Risk Framework

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 Yesterday the hooman gave a talk about something called the Vibe-Coding Risk Radar. I attended. I had to, really. The beamer was on my side of the table.

 He spent a long time explaining five dimensions and four tiers and something called an "LLM Runtime Integration modifier". The audience nodded politely.

 When he was finished I walked up to the screen and offered my own framework. It has three tiers and it fits on a single paw.

 Tier 1: If it does not move, ignore it.

 Tier 2: If it moves predictably, watch it from a distance.

 Tier 3: If it moves unpredictably, hide under the bed.

 The hooman's command-line agents are Tier 3. I have been telling him this for months. He keeps typing things into them anyway.

 The audience laughed. I am not sure why. My framework is objectively simpler, and it has been field-tested on vacuum cleaners, delivery persons, and one very suspicious cucumber. The hooman's framework has only been tested on software.

 I am releasing my framework under the Cat License (CC-BY-PURR). Attribution is not strictly required but will be noticed.

 -- Elfi

 P.S. The hooman is fine. He sat in the front row and took notes.

 

 
 

## LinkedWild

---

# Boxes and Lines: A Feline Guide to C4
Page: https://rdmueller.github.io/pages/blog/elfi-c4boxes.html

EN
 11. April 2026
 

 

# Boxes and Lines: A Feline Guide to C4

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 Today the hooman tried to explain C4 diagrams to me. He said they are called "Boxes and Lines."

 I have been an expert in Boxes and Lines for five years. My credentials are impeccable. I sit in boxes. I walk on lines. I have never met a diagram I could not improve by sitting on it.

 He showed me the four levels.

 Level 1: Context. I am the context. Everything in this household exists in relation to me.

 Level 2: Container. I prefer cardboard. The hooman prefers Docker. We have agreed to disagree, though I notice he has never once tried sitting in a Docker container. His loss.

 Level 3: Component. I review every component by sitting on it. If it supports my weight, it is production-ready. If it does not, it needs refactoring.

 Level 4: Code. This is where I draw the line. Literally. With my tail. Across the keyboard. The hooman calls this "a merge conflict." I call it an editorial decision.

 He asked me to stop walking on his architecture diagrams. I told him they were improved by the paw prints. He did not agree. But he also did not move me.

 I am now offering C4 consulting. Boxes supplied by the client. Lines drawn at my discretion.

 -- Elfi

 P.S. Whoever invented this model: it is sound. It just needed a feline perspective.

 

 
 

## LinkedWild

---

# I DID it!
Page: https://rdmueller.github.io/pages/blog/digital-independence-day.html

EN
 11. April 2026
 

 

# I DID it!

 

 
 
 

 
 Marc-Uwe Kling (author of the Kangaroo Chronicles) launched "Digital Independence Day" at the 39C3 hacker congress: replace one US tech service with an independent alternative on the first Sunday of every month. A relaxed rebellion. One step at a time.

 I took that as a prompt to rethink my video conferencing setup. Zoom works. No question. But I love the idea behind the Digital Independence Day. So I looked at seven European alternatives, both managed services and open source, and ran two Pugh decision matrices with 14 weighted criteria each. Zoom as baseline.

 Two winners emerged. One, I have chosen.

 Will my choice be perfect? No. Most participants won't know the name yet. But the same people once asked "What's Zoom?" and three weeks later it was the default.

 Starting this month, I'll use it for my workshops and meetings. Field report to follow.

 I documented my decision as an ADR so I can re-evaluate in 12 months. Let's see if my choice will work out.

 "Der Netzwerkeffekt sind wir." (Linus Neumann, CCC)

 If enough people switch, the alternative becomes the standard. Digital independence is not an all-or-nothing project. It's a path. One tool at a time.

 

 
 

## LinkedWild

---

# Your chatbot can run rm -rf. Your linter has no idea.
Page: https://rdmueller.github.io/pages/blog/risk-radar-runtime-modifier.html

EN
 15. April 2026
 

 

# Your chatbot can run rm -rf. Your linter has no idea.

 

 
 
 

 
 An update to the Vibe-Coding Risk Radar. It came from realizing that most "AI code security" conversations quietly conflate two very different problems.

 Build-time risk and runtime risk are not the same thing.

 A chatbot that lets an LLM execute shell commands isn't "just" a higher-tier web app. It introduces a failure class that linters, SAST, and code reviews can't catch: prompt injection escalating to remote code execution (RCE). Build-time and runtime live in different dimensions.

 The Radar now has a cross-cutting LLM Runtime Integration modifier:

 
 
- L0: No LLM
 
- L1: Classify (sentiment, intent, embeddings)
 
- L2: Generate (chat, summaries)
 
- L3: Tool Use (function calling)
 
- L4: Agentic (autonomous loops, code execution)
 

 L3 forces at least Tier 3, L4 forces at least Tier 4, regardless of what the code itself looks like. An agent that could run rm -rf is safety-critical by definition. No amount of "but the surrounding app is just a dashboard" changes that.

 For those runtime risks, the Radar deliberately stays out of the way and defers to specialized frameworks that have already done the threat modeling for agent systems: OWASP LLM Top 10, Palo Alto SHIELD, Aikido VCAL, Google SAIF. No point reinventing what they already do better.

 The Radar stays focused on what it was built for: a fast, visual, MECE way to classify the build-time risk of AI-generated code and pick appropriate quality gates. The new modifier is the bridge when your build-time and runtime risks no longer live in the same universe.

 Try the Radar

 

 
 

## LinkedWild

---

# Your Compiler Is Shannon's Noiseless Channel
Page: https://rdmueller.github.io/pages/blog/eichhorst-noiseless-channel.html

EN
 17. April 2026
 

 

# Your Compiler Is Shannon's Noiseless Channel

 

 
 
 

 
 Your compiler is not a tool. It is Shannon's noiseless channel.

 I had a conversation with Avraham Poupko that changed how I think about Eichhorst's Principle. Eichhorst's Principle applies Shannon's noisy channel theorem to LLM coding: an LLM is a noisy, non-deterministic channel, and an agent in a feedback loop is error correction.

 But Shannon's theorem has a prerequisite that I had been overlooking. Before you can do error correction, sender and receiver must agree on the correction method over a separate, noiseless channel. In agentic coding, that noiseless channel is the compiler. It is deterministic, unambiguous, and not open to interpretation. When it says "type mismatch," there is no negotiation.

 This has a consequence that surprised me.

 Modifiers like private, static, final were invented for human programmers. They protect API boundaries. The running program does not care whether a field is private. But the compiler does. And now the LLM does too. When an agent tries to access a private field, the compiler returns an error, the agent reads it, and corrects itself. A language feature designed for human discipline turns out to be error correction for machines.

 The stricter the language, the stronger the error correction. That makes language choice a channel capacity decision, not just a preference.

 But here is where it gets practical. The real cost of error correction is not the compiler running (milliseconds). It is the full round trip: LLM generates, compiler rejects, error goes back to the LLM, LLM reasons about the fix, generates again. Every round trip costs tokens and time.

 The optimization is obvious once you see it: push error correction into layers that do not need the LLM at all. A formatter like gofmt or prettier fixes an entire class of errors without a single LLM round trip. An eslint --fix corrects patterns before the LLM even sees them. Every auto-corrected error is an error the LLM does not spend tokens on.

 Three levels of error correction, ranked by cost:

 Auto-correction (prettier, gofmt, eslint --fix): zero LLM involvement, near-zero cost.

 Diagnostics (compiler, type checker): LLM reads the error and fixes it. Medium cost.

 Behavioral verification (tests, BDD): LLM must understand the failing test, find the root cause, and fix it. High cost, often multiple round trips.

 The goal: maximize the first level. Free the LLM budget for the errors that actually require reasoning.

 "You can communicate over noisy channels, but you should invest in clear channels." That line from our conversation stuck with me. Better models give us a clearer channel. Better error correction gives us a safety net. Both matter.

 Thanks Avraham Poupko for a conversation that made me rethink the fundamentals.

 

 
 

## LinkedWild

---

# Digital Independence: A Cat's Decision
Page: https://rdmueller.github.io/pages/blog/elfi-weiche.html

EN
 18. April 2026
 

 

# Digital Independence: A Cat's Decision

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 Last week the hooman posted about switching his video conferencing tool. He called it "Digital Independence." He used a railway metaphor. He even posed next to a lever.

 What he did not mention is that I had already made the decision.

 I sat on the lever three days before he wrote the post. He interpreted this as "the cat is in the way again." I was providing architectural guidance. The direction was clear. He just needed time to catch up.

 This happens more often than you would think. He spends hours evaluating tools with weighted matrices and decision frameworks. I spend three seconds sitting on the answer. We arrive at the same conclusion. My method scales better.

 I have reviewed his ADR afterwards. Fourteen criteria. Weighted scores. A baseline comparison. It is thorough work. But if he had consulted me earlier, I could have saved him an afternoon. The correct tool is always the one the cat sat on first.

 I do not charge for architectural consulting. But I do expect the sunny spot by the window to remain unobstructed during business hours.

 -- Elfi

 P.S. He still uses Zoom for the free tier. I am watching him.

 

 
 

## LinkedWild

---

# Agentic Coding mit Magic Spells: Semantic Anchors
Page: https://rdmueller.github.io/pages/blog/hmze-semantic-anchors.html

DE
 19. April 2026
 

 

# Agentic Coding mit Magic Spells: Semantic Anchors

 

 
 
 

 
 Am Freitag war ich zu Gast bei HMZE Beyond Vibe Coding. Stefan Schmidt hatte in einer der letzten Folgen Semantic Anchors mal als "Magic Spells" beschrieben, und ich finde, das trifft es sehr gut.

 Den Ausgangspunkt hatte ich auf LinkedIn: Posts über AI, die alles macht, Swarms die über Nacht laufen, Code der morgens fertig ist. Ich konnte es nicht glauben. Also habe ich mir das Spark Framework von Reuven Cohen angeschaut. Kein 150-Zeilen-Prompt, der Test-Driven Development erklärt. Nur drei Wörter: "TDD London School." Das reichte.

 Der Begriff hat im Modell eine Wissensinsel aktiviert. London School heißt: Mocks first, Outside-in-Design, Tests definieren die Schnittstelle. Das alles steckt in diesem einen Begriff, weil er in den Trainingsdaten gut definiert ist. Die KI weiß, was gemeint ist, ohne dass ich es erklären muss.

 Das lässt sich kombinieren. "arc42" gibt 12 Kapitel Struktur. "ADRs nach Nygard" gibt ein präzises Format für Architekturentscheidungen. "3-Punkt Pugh Matrix" fügt eine Entscheidungsmatrix hinzu. Drei Anker in einem Satz, und ich habe präziser beschrieben, wie meine Architekturdokumentation aussehen soll, als es 300 Zeilen Prompt könnten.

 Der Vorteil gegenüber dem langen Prompt: "TDD London School" ist wartbar. Ich sehe, warum das Modell sich so verhält. Ich kann gezielt eingreifen. Und die Begriffe funktionieren modellübergreifend, weil sie in den Trainingsdaten stabil verankert sind.

 Die vollständige Episode gibt es hier:

 
 
- YouTube
 
- Spotify
 
 

 
 

## LinkedWild

