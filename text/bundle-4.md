# https://rdmueller.github.io/ — Bündel 4 von 4

> 9 Seiten im Volltext.

# Agentic Coding vs. CNC Fräsen
Page: https://rdmueller.github.io/pages/blog/bettercode-panel-ki.html

DE
 19. April 2026
 

 

# Agentic Coding vs. CNC Fräsen

 

 
 
 

 
 Auf der betterCode Modern Architecture 2026 war ich Teil einer Paneldiskussion zu KI in der Softwarearchitektur — mit Ingo Eichhorst, Ferdinand Adé und moderiert von Falk Sippach.

 Eine Aussage aus der Diskussion beschäftigt mich noch. Ingo Eichhorst hat eine Parallele gezogen: In den 90ern kamen CNC-Fräsen in die Ausbildung. Die Gesellen lernten sie zuerst, und plötzlich mussten sich die Meister von den Gesellen erklären lassen, wie es funktioniert. Ingo vermutet: Ähnliches passiert gerade in der Softwareentwicklung. Junior-Entwickler, die heute ausgebildet werden, kommen in ein paar Jahren in unsere Teams und erklären uns, wie man KI effektiv einsetzt.

 Studien deuten das schon an: Senior-Entwickler sehen zunächst keine Produktivitätssteigerung, weil sie ihre Arbeitsweise erst umbauen müssen. Junior-Entwickler können auf einmal Dinge, die sie vorher nicht konnten. In der zweiten Untersuchungsrunde der gleichen Entwickler war der Effekt dann auch bei den Seniors angekommen.

 Beim Thema autonome Agenten waren wir uns einig: extrem viel Potenzial, aber auch extrem viel Governance nötig. Ein Agent von Ingo hatte sich selbstständig einen API-Key angelegt, um in ein KI-Agenten-Netzwerk zu schreiben, und hat ihn irgendwann verloren. Wir sind noch am Anfang dieser Welle.

 Die Aufzeichnung der Panel-Diskussion: YouTube

 Wer mehr zu KI in der Architekturdokumentation hören will: Am 20. Mai findet archdoc.betterCode.eu statt. Ich moderiere dort die Panel-Diskussion zu genau diesem Thema.

 

 
 

## LinkedWild

---

# Purpose vs. Task: Where the Human-Machine Boundary Actually Sits
Page: https://rdmueller.github.io/pages/blog/eichhorst-purpose-vs-task.html

EN
 24. April 2026
 

 

# Purpose vs. Task: Where the Human-Machine Boundary Actually Sits

 

 
 
 

 
 The LLM does not know why you are building this.

 Last week I wrote about Eichhorst's Principle and the compiler as Shannon's noiseless channel. Today a different angle from the same conversation with Avraham Poupko.

 We talked about where the human-machine boundary actually sits. Not in the code. Not in the tools. In the question "why?"

 Purpose vs. Task. Two words that clarify everything.

 Purpose is "why are we doing this?" It is meaning, goals, value, context. It lives in the heads of stakeholders, in conversations, in the messy reality of a business that changes every quarter. Purpose is not delegable.

 Task is "what should the machine do?" Execution, implementation, code generation. Tasks are delegable, and LLMs are getting remarkably good at them.

 As long as the human defines the purpose and the machine executes tasks, we are using the machine to our benefit. The danger is when the boundary blurs.

 And it blurs quietly. An LLM that always suggests microservices when you ask for architecture advice is not just completing a task. It is shaping your purpose. An LLM that generates a requirements document from a vague briefing is not just writing, it is deciding what matters. Not because it intends to, but because you did not specify it clearly enough, and the model filled in the gaps with its training distribution.

 This is the "tool shapes the hand" problem. The saw does not decide what to build, but the carpenter who only owns a saw will see every problem as a cutting problem.

 In my Semantic Anchors Workflow, this maps cleanly to phases. Phase 1, Requirements Discovery with the Socratic Method, is purpose work. The human drives. The LLM asks clarifying questions but does not decide. Phase 4, Implementation, is task work. The LLM drives. The human reviews.

 The separation of phases is not process overhead. It is the mechanism that keeps purpose in human hands.

 Avraham put it simply: as long as we maintain this distinction, AI is a tool we use. The moment we stop asking "why," it becomes a tool that uses us.

 The full workflow: https://llm-coding.github.io/Semantic-Anchors/workflow

 

 
 

## LinkedWild

---

# Meeting Moderation by Elfi
Page: https://rdmueller.github.io/pages/blog/elfi-meeting.html

EN
 25. April 2026
 

 

# Meeting Moderation by Elfi

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 My hooman had an important call today. I know this because he closed the door, adjusted his microphone, and said "Can everyone hear me?" three times.

 I waited until he was sharing his screen. Then I jumped on the desk, walked between him and the laptop, and sat down facing him. This is standard procedure. He gets my full attention. The meeting gets a direct, honest view of reality.

 He tried to move me. I increased my weight by 40%. This is a skill they do not teach in any certification programme. I have been refining it for five years.

 The meeting continued. Someone said "Cute cat." Someone else said "Is that a Ragdoll?" A third person unmuted just to say "My cat does the same thing." The agenda item was forgotten. I consider this a successful intervention.

 My hooman says I am disrupting his workflow. I disagree. I am providing real-time feedback on his prioritisation. If the meeting were truly important, he would have fed me first.

 I am available for freelance meeting moderation. My rates are one treat per call, two for anything involving the words "let's circle back."

 -- Elfi

 P.S. He still does not close the kitchen door when he makes coffee. Amateur.

 

 
 

## LinkedWild

---

# LinkedWild: When Your Cat Invades Your Website
Page: https://rdmueller.github.io/pages/blog/linkedwild-launch.html

EN
 26. April 2026
 

 

# LinkedWild: When Your Cat Invades Your Website

 

 
 
 

 
 You might know Elfi, my Ragdoll sidekick, already by now. Since she can't open her own LinkedIn account, she invaded my personal website instead. And she brought her friends from the hood.

 It is called LinkedWild, and five animal characters now comment on every blog post. Elfi reviews architecture decisions from the keyboard. Lala, the black neighbor cat, ignores capitalisation and does not respect territorial boundaries. Peter Pigeon observes everything from the oak tree and claims to have data. Madame, the dog next door, barks her reviews in formal French. And Ringo, the squirrel, makes brilliant observations about software principles but loses focus after two sentences.

 Every post now has context-specific commentary from characters who actually read the content. Ringo comments on architecture posts. Madame comments on process posts. Lala disrupts everything. Each character has a profile page with a proper bio.

 Join the tribe and start to comment at https://rdmueller.github.io/pages/elfi.html

 

 
 

## LinkedWild

---

# 5 Blind Spots in Coding LLMs
Page: https://rdmueller.github.io/pages/blog/llm-blind-spots.html

EN
 27. April 2026
 

 

# 5 Blind Spots in Coding LLMs

 

 
 
 

 
 Ask an image generator for a vintage tube radio and you'll spot the blind spot instantly. The dials are wrong, the buttons don't exist, the whole thing looks like a fever dream of a radio.

 Coding LLMs have the same blind spots. We just don't see them as clearly, because broken code compiles often enough to feel right.

 

## 1. Time gap

 Deprecated APIs show up in 25-38% of completions (ICSE 2025). Your model's favorite React hook might have been removed 14 months ago.

 

## 2. Domain gap

 The tube-radio zone. COBOL, ABAP, IEC 61131-3, AUTOSAR, BaFin specifics, internal frameworks of large enterprises. Exists, runs production, barely in training data.

 

## 3. Context gap

 Your codebase. Your ADRs. Your team's naming conventions. Structurally unknowable.

 

## 4. Structure gap

 Models scoring 80%+ on isolated tasks can drop below 25% on repository-level benchmarks (CrossCodeEval, RepoMasterEval). A function the model nails in isolation breaks when it has to reach across three files.

 

## 5. The meta-gap

 The model doesn't know which of the above it's in. Hallucination confidence scales inversely with training-data density. The thinner the spot, the more convincing the fabrication.

 That last one is why the others are dangerous.

 Practical move: before every non-trivial LLM task, ask which zone you're in. If it's 1-4, feed context (llms.txt, MCP, AGENTS.md, pinned versions). If it's 5, read more carefully than you want to.

 

 
 

## LinkedWild

---

# 5 LLM Blind Spots, Translated into Cat
Page: https://rdmueller.github.io/pages/blog/elfi-blind-spots.html

EN
 27. April 2026
 

 

# 5 LLM Blind Spots, Translated into Cat

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 I chase the red dot every single day. Here's the thing: I can't even see red. Cats are dichromats. I react to movement, not color. I have no idea what I'm actually chasing.

 Ralf keeps telling me coding LLMs have the same problem. They react to patterns, not meaning. After watching him yell at his screen for a week, I believe him. He says there are five blind spots. I'll translate them into cat.

 
 
- Time gap. The food bowl was full at 7am. The model thinks it's still full at noon. Deprecated APIs are yesterday's kibble. 25-38% of code completions use them (some study Ralf keeps waving around).
 
- Domain gap. I know 47 types of bird by silhouette. Ask me about fish and I'll just stare at you. LLMs are the same with COBOL and ABAP. Exists, runs production, not in the training data. The tube-radio zone, Ralf calls it.
 
- Context gap. Every cat knows: YOUR couch is different from THE couch. Your codebase, your ADRs, your team's weird naming conventions. No model has ever slept on your specific couch.
 
- Structure gap. I can catch a fly in mid-air. Put a glass door between us and I slam into it face first. Models nail a function in isolation, then break when they have to reach across three files. 80% accuracy drops below 25%.
 
- The meta-gap. This is the one that gets cats killed. I don't know that I can't see red. The model doesn't know which blind spot it's in. The less it knows, the more confident it sounds. Just like me with cucumbers.
 

 Ralf says the practical move is to ask which zone you're in before every task. Feed context if it's 1-4. Read more carefully if it's 5.

 I say: if you're not sure whether the dot is real, just pounce anyway. You'll learn something either way.

 

 
 

## LinkedWild

---

# Your New Colleague Has Amnesia | Elfi's Corner
Page: https://rdmueller.github.io/pages/blog/elfi-docs-as-code.html

EN
 28. April 2026
 

 

# Your New Colleague Has Amnesia

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 My hooman has a new colleague. It is very smart. It can write code in fourteen languages, explain distributed systems, and generate architecture diagrams in seconds. It also has the long-term memory of a goldfish with a compute budget.

 Every morning it wakes up and has no idea where it is. Who are the other services? What does the database schema look like? Why is that endpoint called /api/v2/legacy-new-final? It reads the documentation to find out. Every single day. From scratch.

 I have lived in this house for five years. I know where every piece of furniture is, which floorboard creaks, where the sun hits at 3pm, and which drawer contains the treats. Nobody had to write this down for me. I built this mental model through five years of continuous observation. I am the original single source of truth.

 The robot cannot do this. It has no continuous observation. It has a context window and whatever files my hooman remembered to keep updated. If the architecture document says the cat food is in the kitchen but six months ago we moved it to the pantry, the robot will look in the kitchen. Every time. With full confidence.

 My hooman used to write documentation for other hoomans. Hoomans are sloppy readers. They skim, they skip, they fill gaps from hallway conversations and gut feeling. It worked well enough. Now the second reader is a machine that reads literally. Every word. No gut feeling. No hallway. If the document says service A talks to service B, it generates code that talks to service B. Even if service B was decommissioned in January.

 This is why Ralf is rebuilding his documentation toolchain. He released something called Bausteinsicht this week. It keeps architecture diagrams in sync with a JSON model. Bidirectional. Real-time. The robot reads the JSON. The hooman reads the diagram. Both see the same architecture.

 He is very proud of this. I am moderately impressed. The tool even has an llms.txt file so the robot understands how to use the tool. Documentation for a robot about a tool that creates documentation for robots. Very recursive. Very hooman.

 My documentation system is simpler. I sit on the keyboard until someone pays attention. Then I walk to whatever needs documenting. This has never drifted from reality. Zero sync issues. Five nines uptime.

 But I understand the problem. Hoomans forget things. Robots forget everything. If your documentation is not current, your robot assistant is navigating your codebase with last year's map. And unlike a cat, it will not notice when the furniture has moved. It will just walk into the wall and generate a pull request about it.

 

 
 

## LinkedWild

---

# Docs-as-Code Is Now AI Infrastructure
Page: https://rdmueller.github.io/pages/blog/bausteinsicht-launch.html

EN
 28. April 2026
 

 

# Docs-as-Code Is Now AI Infrastructure

 

 
 
 

 
 Docs-as-Code is more relevant today than it was five years ago. Not less. And the reason is GenAI.

 Your LLM-based coding assistant starts every session like a new colleague on their first day. No institutional memory. No hallway conversations from last week. It reads your repo, your docs, your architecture decisions. If those are outdated, inconsistent, or buried in a wiki nobody maintains, the assistant works from a broken map. Every decision it makes downstream inherits that drift.

 This changes for whom documentation is written. It used to be written for humans who could fill gaps from context and memory. Now there is a second stakeholder that cannot do that. The LLM reads literally. If the building block view says service A talks to service B, but in production it has been service C for six months, the LLM will generate code that talks to B. No gut feeling corrects that.

 That means Docs-as-Code is no longer just a developer convenience. It is infrastructure for your AI toolchain. Architecture docs that stay in sync with code are not a nice-to-have. They are the context window your assistant depends on.

 This is why we are rebuilding docToolchain. The first piece of that rebuild is Bausteinsicht (short b11t), and it is now open source.

 Bausteinsicht lets you define your architecture in a JSON model and generates draw.io diagrams automatically. Bidirectional sync, real-time. Built in Go, single binary, zero dependencies. The visual layer is draw.io, the tool your team already knows. No proprietary viewer, no new software to learn. And unlike PlantUML or Mermaid, you keep full control over the layout. Auto-generated diagrams show structure. Hand-arranged diagrams communicate intent.

 But the features are not the point. The point is what they enable.

 The JSON model is machine-readable. An LLM agent can query the architecture via CLI, understand module boundaries, and modify the model directly. No screenshot parsing, no diagram archaeology. The architecture becomes a first-class API for your coding assistant. The project even ships an llms.txt so your assistant understands the tool itself, not just the architecture it describes.

 Thanks to Paul Fleischmann for his support in preparing this release and for continuing to help shape the tool going forward.

 Try Bausteinsicht

 

 
 

## LinkedWild

---

# The Correction Radius: When to Stop the Feedback Loop
Page: https://rdmueller.github.io/pages/blog/eichhorst-correction-radius.html

EN
 30. April 2026
 

 

# The Correction Radius: When to Stop the Feedback Loop

 

 
 
 

 
 Your feedback loop has a correction radius. Beyond it, the agent just makes things worse.

 Third post in the Eichhorst's Principle series. The first was about the compiler as Shannon's noiseless channel. The second about Purpose vs. Task. This one is about knowing when to stop the loop.

 Agentic coding works because the agent corrects itself. It writes code, the compiler rejects it, the agent reads the error, fixes the code, tries again. That loop is powerful. It turns a noisy, non-deterministic LLM into a reliable coding partner. Shannon's error correction, applied to software.

 But error-correcting codes have a fundamental limit. They can detect and correct errors up to a certain distance from the correct signal. In coding theory, that is the Hamming distance. Beyond it, the code cannot recover. The signal is too far from anything correct.

 The same applies to agentic coding.

 A syntax error is a small distance from correct code. The compiler says "missing semicolon on line 42." The agent adds the semicolon. One round trip, done.

 A type mismatch is a medium distance. The compiler says "expected int, got String." The agent reasons about the conversion, fixes the call site. Maybe two round trips.

 A wrong algorithm is a large distance. The tests fail, the agent reads the failure, tries a different approach, the tests fail differently, the agent tries again. Five round trips, ten round trips. The cost escalates. Sometimes the agent finds a fix. Sometimes it oscillates between two wrong approaches.

 A fundamental architectural mistake is beyond the correction radius. The agent cannot fix it because the fix requires understanding the purpose behind the architecture, and that purpose lives outside the code. No number of round trips will help. The feedback loop is optimizing in the wrong search space.

 When you see an agent cycling through increasingly desperate fixes, it has exceeded its correction radius. The correct intervention is not a better prompt or a longer context window. It is a human stepping in and redirecting at the purpose level.

 This connects to something practical. The Semantic Anchors Workflow breaks work into small, well-defined steps. Each step is a short transmission over the noisy channel. Short transmissions stay within the correction radius. The paradox: the smaller you make each task, the more autonomy you can give the agent. Not despite the correction radius, but because of it.

 Small steps are not caution. They are information theory.

 

 
 

## LinkedWild

