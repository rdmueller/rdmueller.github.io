# https://rdmueller.github.io/ — Bündel 4 von 4

> 7 Seiten im Volltext.

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

