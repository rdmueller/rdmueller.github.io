# https://rdmueller.github.io/ — Bündel 3 von 4

> 19 Seiten im Volltext.

# Datenschutz
Page: https://rdmueller.github.io/pages/datenschutz.html

# Datenschutzerklärung

 
 

## 1. Datenschutz auf einen Blick

 

### Allgemeine Hinweise

 
 Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
 personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
 Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
 

 

### Datenerfassung auf dieser Website

 
 Wer ist verantwortlich für die Datenerfassung auf dieser Website?

 Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
 Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
 

 
 Wie erfassen wir Ihre Daten?

 Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
 Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
 Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
 Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
 

 

 
 

## 2. Hosting

 
 Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
 erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a.
 um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
 Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
 

 

 
 

## 3. Allgemeine Hinweise und Pflichtinformationen

 

### Datenschutz

 
 Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
 Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
 Datenschutzvorschriften sowie dieser Datenschutzerklärung.
 

 

### Hinweis zur verantwortlichen Stelle

 
 Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

 Ralf D. Müller

 [Adresse]

 E-Mail: ralf.d.mueller@gmail.com
 

 

### Widerruf Ihrer Einwilligung zur Datenverarbeitung

 
 Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
 Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
 formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
 Datenverarbeitung bleibt vom Widerruf unberührt.
 

 

### Beschwerderecht bei der zuständigen Aufsichtsbehörde

 
 Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
 Aufsichtsbehörde zu.
 

 

 
 

## 4. Datenerfassung auf dieser Website

 

### Server-Log-Dateien

 
 Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
 Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
 

 
 
- Browsertyp und Browserversion
 
- verwendetes Betriebssystem
 
- Referrer URL
 
- Hostname des zugreifenden Rechners
 
- Uhrzeit der Serveranfrage
 
- IP-Adresse
 
 
 Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
 

 

 
 

## 5. Web-Analyse mit GoatCounter

 
 Diese Website nutzt GoatCounter,
 ein datenschutzfreundliches Web-Analyse-Werkzeug. GoatCounter setzt keine Cookies und
 erstellt keine Profile.
 

 
 Erfasst werden ausschließlich anonymisierte Aufrufdaten:
 

 
 
- aufgerufene Seite (URL-Pfad)
 
- Referrer (verweisende Seite)
 
- Browser und Betriebssystem (aus dem User-Agent)
 
- ungefähre Region anhand der IP (die IP selbst wird nicht gespeichert)
 
 
 Ein Tracking über mehrere Seitenaufrufe hinweg findet nicht statt. Die Daten werden
 auf europäischen Servern des Anbieters (Martin Tournoij, NL) verarbeitet.
 Rechtsgrundlage ist das berechtigte Interesse an der Reichweitenmessung
 (Art. 6 Abs. 1 lit. f DSGVO).
 

 
 Details und Opt-out:
 goatcounter.com/help/privacy.
 

 

 
 

## 6. Externe Links

 
 Diese Website enthält Links zu externen Websites (GitHub, LinkedIn, software-architektur.tv).
 Für die Datenschutzpraktiken dieser externen Websites sind wir nicht verantwortlich.
 Bitte informieren Sie sich auf den jeweiligen Websites über deren Datenschutzbestimmungen.

---

# Risk Radar Skills: The Automation Layer
Page: https://rdmueller.github.io/pages/blog/risk-radar-skills.html

EN
 17. Februar 2026
 

 

# Risk Radar Skills: The Automation Layer

 

 
 
 

 
 Last week I shared the Vibe-Coding Risk Radar — an interactive tool that helps you decide which AI-generated code needs review and which mitigations to apply.

 The feedback was clear: "Great visualization. But how do I actually implement this in my workflow?"

 So Claude and I built the automation layer.

 Two new Claude Code skills turn the Risk Radar from a decision framework into an executable workflow:

 `/risk-assess` — Interactive Risk Assessment → Scans your repository and detects modules automatically → Pattern-matches code types (auth, API, UI) with evidence → Asks targeted questions for uncertain dimensions → Calculates tier (1-4) based on highest risk dimension → Generates an ADR (nach Nygard) documenting the decision → Writes structured assessment to CLAUDE.md

 `/risk-mitigate` — Automated Mitigation Implementation → Reads assessment from CLAUDE.md → Detects existing tools (linters, SAST, pre-commit hooks) → Shows gap analysis by tier (cumulative requirements) → Installs missing measures interactively (with your confirmation) → Verifies each tool works, commits individually to git → Updates the ADR status from "Proposed" to "Accepted" → Keeps CLAUDE.md in sync with actual state

 The workflow now looks like this: 1. Run `/risk-assess` → Get tier classification + ADR 2. Security team reviews ADR → Approves assessment 3. Run `/risk-mitigate` → Tools get installed automatically 4. Security team reviews ADR again → Confirms mitigations active 5. Living documentation stays current with every change

 Examples of what gets automated: • Tier 1: ESLint, Prettier, Husky pre-commit, npm audit in CI • Tier 2: Semgrep SAST, fast-check property tests, SonarQube • Tier 3: Branch protection via GitHub API, fuzzing setup, CODEOWNERS • Tier 4: Formal verification guidance (Dafny, TLA+), MC/DC coverage

 The skills don't just recommend — they configure, verify, commit, and track. The ADR bridges developers and security teams with a shared artifact both can approve.

 This closes the loop: - Developers get automated tooling help - Security teams get transparent ADRs to review - The codebase documents its own risk posture - No Excel files that nobody reads

 Built with Semantic Anchors throughout (MECE, ADR nach Nygard, IEC 61508 SIL levels).

 Try it yourself: https://github.com/LLM-Coding/vibe-coding-risk-radar

 Skills live in `.claude/skills/` — install via `bash install-skills.sh`

 Your feedback made this better. If you try it, let me know what works and what doesn't!

 

 
 

## LinkedWild

---

# Documentation-as-Code Training with Socreatory
Page: https://rdmueller.github.io/pages/blog/docs-as-code-training.html

EN
 24. Februar 2026
 

 

# Documentation-as-Code Training with Socreatory

 

 
 
 

 
 Architecture documentation that nobody reads. Diagrams that are outdated the moment you commit your code. README files scattered across repos with no single source of truth.

 Sound familiar?

 There's a better way: Documentation-as-Code.

 Treat your docs like source code — version-controlled, automated, continuously delivered. No more Word documents or wiki pages that diverge from reality.

 Falk Sippach and I are running a 2-day interactive workshop where you'll learn:

 → Markup languages and lightweight tools (AsciiDoc, Markdown) → Version control integration (Git workflows for docs) → Diagram creation (PlantUML, Kroki.io, Diagrams.net) → Documentation modularization (DRY principle for docs) → Reducing redundancy through source code integration → Automated build management (CI/CD for documentation) → Audience-specific output generation (HTML, PDF, microsites)

 Who should join: Developers, architects, and product managers who want quality documentation without the overhead. No specific tech stack required — the principles apply everywhere.

 What you get: - Pragmatic, modern approach to architecture documentation - Continuous delivery of current docs - Integration into your existing dev workflow - Exchange on current industry trends and tools

 I created docToolchain specifically to solve these problems. This workshop shows you how to use it (and alternatives) effectively.

 Available as online or in-house training.

 Interested? Check out the details: https://www.socreatory.com/de/trainings/docascode

 Questions? Drop them in the comments or DM me.

 

 
 

## LinkedWild

---

# devcontainer exec claude
Page: https://rdmueller.github.io/pages/blog/devcontainer-claude.html

EN
 1. März 2026
 

 

# devcontainer exec claude

 

 
 
 

 
 devcontainer exec --workspace-folder . claude --dangerously-skip-permissions -p "do the needful"

 

 
 

## LinkedWild

---

# 200-Line Prompt vs. 5 Words: Why Semantic Anchors Win
Page: https://rdmueller.github.io/pages/blog/200-line-prompt.html

EN
 2. März 2026
 

 

# 200-Line Prompt vs. 5 Words: Why Semantic Anchors Win

 

 
 
 

 
 Why your 200-line prompt might be worse than five words

 I keep seeing the same pattern: someone asks an LLM to generate a detailed system prompt for coding assistance. The result is a 200-line wall of instructions -- "always write tests before implementation, use mock objects to isolate each unit from its dependencies, start from the outermost layer and work inward..."

 Then they paste that into their next session and wonder why the results are mediocre.

 Here's what I'd write instead: "Use TDD, London School."

 Five words. Better results. Because the model doesn't just follow a checklist -- it activates the entire concept: Freeman & Pryce, outside-in development, interaction-based verification, walking skeleton. The 200-line prompt tries to describe what the model already knows.

 This led me to curate Semantic Anchors -- an open-source catalog of 52 precision terms that reliably activate rich knowledge domains in LLMs.

 https://llm-coding.github.io/Semantic-Anchors/

 ---

 Why this works

 A good semantic anchor is a compression heuristic: maximum context transfer with minimal tokens. But not every term qualifies. Four quality criteria separate anchors from buzzwords:

 - Precise -- references a specific, well-bounded body of knowledge - Rich -- activates interconnected concepts, not just a single instruction - Consistent -- different users get similar results - Attributable -- traceable to concrete sources

 "Best practices" is not an anchor. "SOLID Principles" is one.

 ---

 Where it gets interesting: layering anchors

 "Create an arc42 architecture documentation with ADRs according to Nygard. Add a 3-point (-1,0,1) Pugh Matrix to the ADRs."

 Four anchors working together: arc42 provides structure, ADR the decision format, Pugh Matrix the evaluation method -- and "3-point (-1,0,1)" refines the variant. This isn't prompt engineering. This is professional communication with a machine that understands domain language.

 ---

 The limits

 A discussion with Edmund Siegfried Haselwanter challenged me on the failure modes. His core point: anchors are compression, not replacement for precise instructions.

 When your understanding diverges from the mainstream, you need to make that explicit. Example: you follow TDD London School but use Testcontainers instead of mocks for infrastructure boundaries. The model won't guess that.

 We converged on a layered approach:

 1. Set the anchor as baseline 2. Make the delta explicit -- where you diverge from the mainstream 3. Verify -- test whether the model understands the concept as you intend it

 Same principle as any professional communication: assume shared vocabulary, make deviations explicit, verify understanding.

 The catalog is open source: https://github.com/LLM-Coding/Semantic-Anchors

 Do you consciously use semantic anchors in your work with LLMs?

 Thanks to Edmund Siegfried Haselwanter for sparking this post.

 

 
 

## LinkedWild

---

# 200 Stars on GitHub in 10 Days
Page: https://rdmueller.github.io/pages/blog/200-stars.html

EN
 4. März 2026
 

 

# 200 Stars on GitHub in 10 Days

 

 
 
 

 
 200 Stars on GitHub. In 10 days.

 Two weeks ago I published my first post about Semantic Anchors -- the idea that five precise words like "TDD, London School" can outperform a 200-line system prompt because they activate what the model already knows.

 The response blew me away. 200+ stars, mass of contributions, and discussions that pushed the concept further than I could have on my own.

 What started as a personal observation has become a community project: 52 curated anchors across software architecture, testing, design patterns, and development methodologies. Each one tested against the quality criteria (precise, rich, consistent, attributable).

 A few highlights from the contributions:

 - New anchors I hadn't considered - Quality improvements to existing entries - Thoughtful debates about what qualifies as an anchor vs. a buzzword

 Thank you to everyone who starred, contributed, or challenged the idea. Open source lives from exactly this.

 If you find Semantic Anchors useful in your daily work with LLMs, a star on GitHub helps the project reach more people: https://github.com/LLM-Coding/Semantic-Anchors

 What anchor would you add?

 

 
 

## LinkedWild

---

# Bausteinsicht: Architecture as Code with draw.io
Page: https://rdmueller.github.io/pages/blog/bausteinsicht-drawio.html

EN
 5. März 2026
 

 

# Bausteinsicht: Architecture as Code with draw.io

 

 
 
 

 
 Introducing Bausteinsicht -- Architecture as Code with draw.io

 After years of building docToolchain, I kept running into the same problem: architecture diagrams that drift from reality the moment someone opens a diagramming tool.

 Bausteinsicht (short b11t) solves this with a different approach:

 Define your architecture in a simple JSON model. Get draw.io diagrams automatically -- and keep them in sync, bidirectionally.

 How it works: - You describe elements, relationships, and views in JSONC (JSON with comments + schema validation) - The CLI generates fully styled draw.io diagrams with zoom-based drill-down navigation - Edit in draw.io? Changes sync back to the model. Edit the model? Diagrams update. - Watch mode detects changes in real-time

 What makes it different: - No vendor lock-in -- draw.io files are open XML, your model is plain JSON - IDE-first -- JSON Schema gives you autocompletion and validation in any editor - LLM-friendly -- AI agents can read and modify architecture via CLI commands - Flexible hierarchy -- not limited to 4 C4 levels; define your own notation

 Built in Go, zero npm dependencies, runs as a single CLI binary.

 We just completed a thorough testing round (215 E2E tests) and fixed all reported bugs. The project includes arc42 documentation, ADRs, a security review, and a devcontainer for instant onboarding.

 Open-source release is coming soon -- stay tuned!

 If you're working on architecture-as-code, model-driven documentation, or diagram automation, I'd love to connect.

 

 
 

## LinkedWild

---

# Socratic Method as a Semantic Anchor
Page: https://rdmueller.github.io/pages/blog/socratic-method-anchor.html

EN
 8. März 2026
 

 

# Socratic Method as a Semantic Anchor

 

 
 
 

 
 How to use the Socratic Method as a Semantic Anchor for requirements

 Most developers start a new project by writing requirements. The problem: you're documenting assumptions you haven't questioned yet.

 Try this instead:

 "Use the Socratic Method to help me clarify requirements for [your project]."

 One sentence. The model won't list requirements -- it will ask questions that expose your blind spots. It activates the full concept: targeted questioning, challenging assumptions, productive use of not-knowing, dialogue-driven clarity.

 ---

 Layering anchors makes it stronger

 "Use the Socratic Method combined with MECE to clarify requirements for [project]. Challenge my assumptions before documenting anything."

 Two anchors working together: - Socratic Method -- asks instead of answers - MECE -- ensures questions cover all areas without overlap

 The result: structured questioning that systematically uncovers what you don't know yet.

 ---

 A concrete example

 Me: "Use the Socratic Method to help me clarify requirements for a CLI tool that generates draw.io diagrams from a JSON architecture model."

 The model asked: - "Who is the primary user -- an architect defining the model, or a developer consuming it?" - "When you say 'generates', do you mean one-time export or continuous sync?" - "What happens when someone edits the diagram in draw.io -- is that a valid workflow or a corruption?"

 That third question uncovered a requirement I hadn't considered: bidirectional sync. It became the core feature of the tool.

 ---

 The delta pattern

 Add constraints to prevent question overload:

 "Use the Socratic Method to clarify requirements. Focus on: stakeholder conflicts, implicit assumptions, and boundary conditions. Don't ask more than 3 questions at a time."

 The delta ("max 3 questions") keeps the dialogue productive instead of overwhelming.

 This follows the Anchor, Delta, Verify pattern: 1. Set the anchor -- activate the established concept 2. Make the delta explicit -- constrain to your context 3. Verify -- check if the questions actually expose assumptions

 ---

 "Socratic Method" is one of 52 curated Semantic Anchors -- precision terms that reliably activate rich knowledge domains in LLMs: https://github.com/LLM-Coding/Semantic-Anchors

 What's your go-to technique for uncovering hidden requirements?

 

 
 

## LinkedWild

---

# Vacuum Cleaner Philosophy: Duck Typing in Real Life
Page: https://rdmueller.github.io/pages/blog/vacuum-cleaner-duck-typing.html

EN
 10. März 2026
 

 

# Vacuum Cleaner Philosophy: Duck Typing in Real Life

 

 
 
 

 
 My vacuum cleaner gets hungry.

 Sounds absurd? Think about it. It has an internal state (battery level) that constantly influences its behavior. It weighs "should I keep cleaning?" against "how far is the charging station?" Every decision is a trade-off between current task and energy reserves. That's functionally identical to hunger. But we refuse to call it that, because we've defined hunger as something only humans can feel. Same with intelligence, same with creativity.

 Watch what happens when AI reaches a milestone. The Turing Test was proposed in 1950 as the ultimate measure of machine intelligence. It seemed impossible at the time, so it became the goalpost. Now that LLMs pass it, we say "well, that wasn't real intelligence anyway." The goalposts keep moving. "It's just pattern matching." So is most human cognition. "It's just recombination." So is human creativity. Every time machines reach a bar we've set, we raise it and claim the old bar never counted.

 A developer in a LinkedIn comment told me yesterday that LLMs are like "monkeys producing Shakespeare." He's deeply technical, understands transformer architecture, and has programmed similar models himself. His argument is purely about mechanism: "It's just token prediction, therefore it can't be intelligent." But by that logic, your brain is just neurons firing electrochemical signals. Does that mean you can't be intelligent either? The mechanism tells you very little about what emerges from it.

 I've started thinking about this in terms of duck typing. If it writes working code, finds bugs, creates architecture plans, knows when it's done, and refuses to help with unethical requests... does it matter what we call it? Maybe what AI does is something new that doesn't fit our old categories. We only have two boxes for it: "just a tool" and "truly intelligent." And when something doesn't fit either box, most people force it into "just a tool" because the alternative is uncomfortable.

 Don't take this too seriously. It's a thought experiment. It makes zero practical difference whether we call a low battery "hunger" or just "a low battery." The vacuum behaves the same either way. But the words we choose reveal something about us: how we draw the line between "real" and "just mechanical," and why we're so invested in keeping that line exactly where it is.

 My vacuum cleaner doesn't care what we call its hunger. It just goes to the charging station when it needs to.

 

 
 

## LinkedWild

---

# The IDE Is Dead
Page: https://rdmueller.github.io/pages/blog/ide-is-dead.html

EN
 10. März 2026
 

 

# The IDE Is Dead

 

 
 
 

 
 The IDE Is Dead. We Just Haven't Noticed Yet.

 One golden rule of agentic coding: Never place your cursor in the editor.

 Always tell the AI what to change. Never touch the code yourself. Why? Because every manual edit breaks the AI's context.

 So you stop editing.

 But then... what is the IDE still doing for you?

 Code review? The AI does that. Debugging? The AI does that. Refactoring? The AI does that. Previewing artifacts? I tell the AI how to render a view and get it in the browser.

 I literally ran a Slidev presentation server from my terminal last night. No IDE involved. When I needed changes to the slides, I described them in natural language. Done.

 The IDE has become a spectator in its own stadium.

 Surveys have shown for years that IDEs like IntelliJ are losing users. Most migrated to VS Code. But here's the thing: VS Code is next.

 When developers embrace agentic coding, VS Code degrades to a glorified preview window. You don't use its editing features. You don't use its refactoring tools. You don't even use its debugger. You use the terminal. And a browser.

 This is genuinely sad for some brilliant work. Alexander Schwartz's Asciidoctor plugin for IntelliJ, for example, is a masterpiece of IDE integration with features no browser can match. Years of craft, potentially obsoleted not by a better tool, but by a paradigm shift that makes the whole category irrelevant.

 But that's how technology works. The best horse carriage manufacturer didn't become the best car manufacturer.

 The question isn't whether IDEs will disappear. The question is what replaces them.

 My bet: a thin terminal + browser combo. The AI orchestrates. You review. The browser renders.

 The "Integrated" in IDE meant integrating everything into one tool. Agentic coding disintegrates that. And that's fine.

 

 
 

## LinkedWild

---

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

