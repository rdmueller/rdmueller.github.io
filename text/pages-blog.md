# Blog
Page: https://rdmueller.github.io/pages/blog.html

# Blog

 
 Gedanken zu AI, Software-Architektur, Dokumentation und der Zukunft der Softwareentwicklung.
 Ursprünglich auf LinkedIn veröffentlicht.
 

 
 Alle
 Agentic Coding
 Brownfield
 Digital Independence
 Documentation
 Eichhorst's Principle
 GDPR
 GenAI
 LLM
 Open Source
 Opinion
 Productivity
 Semantic Anchors
 Software Architecture
 Theory
 arc42
 docToolchain
 

 

 
 
 
 

 
 26
 Aug
 2026
 

 
 
 ENAgentic CodingLLMProductivity
 

 

## My to-do list is a text file, and my AI reads it too

 For years my to-do list moved into a new app every six months. Now it is a plain markdown file in git that my AI reads and writes too. Here is the TODO.md format I use, the est/30-minute/MoSCoW conventions on top of it, and the prompts to set the same thing up with your own assistant.

 Artikel lesen
 

 

 
 
 
 

 
 16
 Aug
 2026
 

 
 
 ENAgentic CodingLLMGenAI
 

 

## autoCompactWindow: keep Claude Code's context lean and cheap

 Claude Code made the 1M context window the default, but you can set the point where it compacts yourself. The setting is called autoCompactWindow, reachable through /autocompact, and almost nobody knows about it. Why setting it well below 1M saves cost and keeps answer quality up.

 Artikel lesen
 

 

 
 
 
 

 
 06
 Aug
 2026
 

 
 
 ENGenAIOpinion
 

 

## LinkedIn Shipped the Voight-Kampff Test as a Menu Item

 LinkedIn added a "Seems like AI slop" button under every post. It cannot detect AI, so it is really a boredom detector wearing an AI costume. Why that is fine for anyone who writes with AI and still means every word.

 Artikel lesen
 

 

 
 
 
 

 
 05
 Jul
 2026
 

 
 
 ENLLMGenAI
 

 

## Your LLM Holds a Whole Library. You Are Shown One Shelf.

 An LLM understands hundreds of languages equally well, yet on your question it hands you back only the world that matches your own language. A five-language experiment shows the bias sits in the raw generation, not only in search, and depends on the topic.

 Artikel lesen
 

 

 
 
 
 

 
 01
 Jul
 2026
 

 
 
 ENAgentic CodingGenAILLM
 

 

## Four Kinds of Hard: Building an AI PowerPoint Generator

 I built a PowerPoint generator an AI drives through python-pptx. The interesting part was cataloguing what stays hard, and noticing that "hard" comes in four different flavors. A bigger model fixes almost none of them.

 Artikel lesen
 

 

 
 
 
 

 
 21
 Jun
 2026
 

 
 
 ENAgentic CodingdocToolchainOpen SourceGenAI
 

 

## Three Days. I Did Not Type a Single Line of Code.

 Three days. 158 commits. 44 pull requests merged. I did not type a single line of code. What a weekend on docToolchain main-4.x looked like when the bottleneck stopped being typing — and what it means for unpaid, single-maintainer open source.

 Artikel lesen
 

 

 
 
 
 

 
 10
 Jun
 2026
 

 
 
 ENGenAI
 

 

## Same Prompt, New Image Model: Switching to gpt-image-2

 Same prompt, same references, same character description. The only variable was the image model. Top row gpt-image-1.5, bottom row gpt-image-2. Character consistency caught up, composition got more deliberate, and I switched the default in my image-generation skill.

 Artikel lesen
 

 

 
 
 
 

 
 10
 Jun
 2026
 

 
 
 ENSemantic AnchorsLLM
 

 

## An Anchor Delivers Only as Far as the Prior Reaches

 A pull request asked why our anchor still points at Cockburn instead of newer Use-Case 2.0 and 3.0. We turned it into an experiment. The result was Claude Haiku confidently printing a "Use-Case 3.0" document whose body was pure Cockburn from 2001. No error, no hedge. This is the failure mode no one notices.

 Artikel lesen
 

 

 
 
 
 

 
 26
 Mai
 2026
 

 
 
 ENSemantic AnchorsAgentic CodingLLMSoftware Architecture
 

 

## Trust Is Good, Verification Is Better

 Most agentic coding rests on trust. The harness is what turns "it ran" into "I will deploy this". This is the full inventory of layers, what each catches, and what no harness can.

 Artikel lesen
 

 

 
 
 
 

 
 21
 Mai
 2026
 

 
 
 ENSemantic AnchorsBrownfieldarc42LLM
 

 

## From Legacy Code to Spec: A Socratic Code-Theory Recovery Walkthrough

 A hands-on walkthrough of Socratic Code-Theory Recovery: recover the spec and architecture of an undocumented 43,000-line codebase, mark precisely what only a human can answer, and verify the result with independent reviews.

 Artikel lesen
 

 

 
 
 
 

 
 18
 Mai
 2026
 

 
 
 ENSemantic AnchorsLLMarc42Software Architecture
 

 

## My AI Improved Its Own Process

 An LLM reconstructed the docs of a 43,000-line codebase. When the verification failed, the fix was not a better prompt. The AI rewrote the rules it works by. A correction loop, not a prompt.

 Artikel lesen
 

 

 
 
 
 

 
 14
 Mai
 2026
 

 
 
 ENSemantic AnchorsBrownfieldLLM
 

 

## Socratic Code-Theory Recovery: A Method for LLM-Assisted Brownfield Onboarding

 How to recover the theory behind an existing codebase using an LLM as a structured Socratic interlocutor. Positioned against ArchAgent, Reversa, SoHF, and the Naur debate, with fact-checked references.

 Artikel lesen
 

 

 
 
 
 

 
 14
 Mai
 2026
 

 
 
 ENSemantic AnchorsLLMOpen Source
 

 

## Six Months of Semantic Anchors

 Six months in, the catalog has 147 entries and the community is now writing more anchors than I am. That was the plan.

 Artikel lesen
 

 

 
 
 
 

 
 07
 Mai
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## Choose Your Language, Choose Your Channel Capacity

 Go and Rust produce correct AI-generated code faster than JavaScript. Not because they are better languages, but because they have thicker error correction.

 Artikel lesen
 

 

 
 
 
 

 
 06
 Mai
 2026
 

 
 
 DEGenAIGDPRDigital Independence
 

 

## Unscharfe Fotos? Wer hat eigentlich erlaubt, dass die KI urteilt?

 Google Photos schlägt vor, unscharfe Fotos zu löschen. Solange die KI beschreibt, fühlt es sich harmlos an. Aber jetzt urteilt sie.

 Artikel lesen
 

 

 
 
 
 

 
 30
 Apr
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## The Correction Radius: When to Stop the Feedback Loop

 Your feedback loop has a correction radius. Beyond it, the agent just makes things worse. Small steps are not caution, they are information theory.

 Artikel lesen
 

 

 
 
 
 

 
 28
 Apr
 2026
 

 
 
 ENdocToolchainSoftware ArchitectureGenAIOpen Source
 

 

## Docs-as-Code Is Now AI Infrastructure

 Your LLM assistant starts every session like a new colleague on their first day. Docs-as-Code is no longer a convenience. It is infrastructure. Bausteinsicht is now open source.

 Artikel lesen
 

 

 
 
 
 

 
 27
 Apr
 2026
 

 
 
 ENGenAILLM
 

 

## 5 Blind Spots in Coding LLMs

 Deprecated APIs, domain gaps, cross-file failures, and the meta-gap. What AI-generated tube radios teach us about AI-generated code.

 Artikel lesen
 

 

 
 
 
 

 
 24
 Apr
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## Purpose vs. Task: Where the Human-Machine Boundary Actually Sits

 The LLM does not know why you are building this. Purpose vs. Task: the human-machine boundary is not in the code, it is in the question why.

 Artikel lesen
 

 

 
 
 
 

 
 19
 Apr
 2026
 

 
 
 DESoftware Architecture
 

 

## Agentic Coding vs. CNC Fräsen

 Panel-Diskussion bei betterCode Modern Architecture 2026: CNC-Analogie, Senior/Junior-Produktivität mit KI und autonome Agenten — mit Ingo Eichhorst und Ferdinand Adé.

 Artikel lesen
 

 

 
 
 
 

 
 19
 Apr
 2026
 

 
 
 DESemantic Anchors
 

 

## Agentic Coding mit Magic Spells: Semantic Anchors

 Semantic Anchors sind Begriffe, die Wissensinseln in LLMs aktivieren. "TDD London School" ersetzt 150 Zeilen Prompt — und ist wartbar. Zu Gast beim HMZE Beyond Vibe Coding Podcast.

 Artikel lesen
 

 

 
 
 
 

 
 17
 Apr
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## Your Compiler Is Shannon's Noiseless Channel

 The compiler is Shannon's noiseless channel. Language modifiers like private and final are error correction for LLMs, not just human discipline.

 Artikel lesen
 

 

 
 
 
 

 
 15
 Apr
 2026
 

 
 
 ENLLM
 

 

## Your chatbot can run rm -rf. Your linter has no idea.

 The Vibe-Coding Risk Radar now has an LLM Runtime Integration modifier. Build-time and runtime risks live in different dimensions.

 Artikel lesen
 

 

 
 
 
 

 
 11
 Apr
 2026
 

 
 
 ENDigital IndependenceGDPROpen Source
 

 

## I DID it!

 Replacing Zoom with a European alternative. A systematic Pugh matrix comparison of 7 video conferencing tools.

 Artikel lesen
 

 

 
 
 
 

 
 03
 Apr
 2026
 

 
 
 ENAgentic Coding
 

 

## I Inventoried My Entire Apartment with AI

 Photo-based inventory with Claude Code: AI recognizes books, games and objects from shelf photos, including vertical spine text.

 Artikel lesen
 

 

 
 
 
 

 
 02
 Apr
 2026
 

 
 
 ENAgentic Coding
 

 

## The Agent Made Itself Obsolete. That Was Its Best Work.

 I produced 32 videos with AI. The agent's best contribution was making itself obsolete by building a fixed workflow.

 Artikel lesen
 

 

 
 
 
 

 
 30
 Mär
 2026
 

 
 
 ENSemantic AnchorsAgentic Coding
 

 

## Semantic Contracts: When Anchors Are Not Enough

 12 Contracts that cover a complete development workflow. Download them into your AGENTS.md.

 Artikel lesen
 

 

 
 
 
 

 
 25
 Mär
 2026
 

 
 
 ENSemantic AnchorsAgentic Coding
 

 

## Your LLM Will Be Deprecated. What's Your Test Plan?

 We built a deterministic evaluation framework for Semantic Anchors. 193 questions, 63 anchors, under $25. No LLM judges another LLM.

 Artikel lesen
 

 

 
 
 
 

 
 23
 Mär
 2026
 

 
 
 ENSoftware ArchitectureAgentic Coding
 

 

## Review the Review: Mini ATAM with a Coding Agent

 I asked my coding agent to review its own architecture against quality scenarios. It found three problems I had missed. Mini ATAM with AI.

 Artikel lesen
 

 

 
 
 
 

 
 23
 Mär
 2026
 

 
 
 ENSoftware ArchitectureDocumentation
 

 

## arc42: My Cockpit for AI-Generated Code

 We spent 30 years begging developers to write documentation. Now AI writes it for free. And we're still staring at the code. arc42 as verification instrument for AI-generated code.

 Artikel lesen
 

 

 
 
 
 

 
 19
 Mär
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## Closed Loop vs. Open Loop: Why the Feedback Loop Is Everything

 Prompting ist offener Regelkreis. Agentic Coding ist geschlossener Regelkreis. Bessere Tests schlagen bessere Prompts.

 Artikel lesen
 

 

 
 
 
 

 
 18
 Mär
 2026
 

 
 
 ENSoftware ArchitectureGenAIEichhorst's Principle
 

 

## Eichhorst's Principle: Shannon's Noisy Channel Applied to LLM Coding

 Ein LLM ist ein verrauschter Kanal. Compiler, Tests und Code Review sind die Fehlerkorrektur. Shannon erklärt, warum Agentic Coding funktioniert.

 Artikel lesen
 

 

 
 
 
 

 
 17
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## SOLID: Semantic Anchors Video Series Episode 2

 SOLID als Semantic Anchor: Wie fünf Buchstaben ein ganzes Architekturparadigma in LLMs aktivieren.

 Artikel lesen
 

 

 
 
 
 

 
 16
 Mär
 2026
 

 
 
 ENAgentic Coding
 

 

## Vibe Coding Risk Radar: First Community Contribution

 Erster Community-Beitrag zum Vibe-Coding Risk Radar: Maria Virk ergänzt das Framework um neue Perspektiven.

 Artikel lesen
 

 

 
 
 
 

 
 13
 Mär
 2026
 

 
 
 ENSoftware ArchitectureAgentic Coding
 

 

## Show Me the Code: Spec-Driven Development with AI

 Spec-Driven Development: PRD, Architektur, Tests, dann Code. Der Workflow für produktionsreife AI-generierte Software.

 Artikel lesen
 

 

 
 
 
 

 
 12
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## Semantic Contracts: Private vs. Public Knowledge

 Semantic Contracts erweitern Semantic Anchors um projektspezifisches Wissen. AGENTS.md als Vertrag zwischen Mensch und AI.

 Artikel lesen
 

 

 
 
 
 

 
 11
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## Semantic Anchors Video Series

 Neue Video-Serie zu Semantic Anchors: Konzept, Anwendung, Katalog. Auf YouTube und der Semantic Anchors Website.

 Artikel lesen
 

 

 
 
 
 

 
 10
 Mär
 2026
 

 
 
 ENAgentic CodingOpinion
 

 

## The IDE Is Dead

 Die klassische IDE verliert ihre Relevanz. AI-Agenten brauchen keine GUI, sie brauchen CLI-Tools und Feedback-Loops.

 Artikel lesen
 

 

 
 
 
 

 
 10
 Mär
 2026
 

 
 
 ENOpinion
 

 

## Vacuum Cleaner Philosophy: Duck Typing in Real Life

 Was Staubsauger-Philosophie mit Duck Typing zu tun hat: Wenn es funktioniert, ist es richtig.

 Artikel lesen
 

 

 
 
 
 

 
 08
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## Socratic Method as a Semantic Anchor

 Die Sokratische Methode als Semantic Anchor: LLMs stellen bessere Fragen statt vorschnelle Antworten zu geben.

 Artikel lesen
 

 

 
 
 
 

 
 05
 Mär
 2026
 

 
 
 ENSoftware ArchitectureDocumentation
 

 

## Bausteinsicht: Architecture as Code with draw.io

 Architektur-Diagramme als Code in draw.io: Versionierbar, diffbar, automatisiert generierbar.

 Artikel lesen
 

 

 
 
 
 

 
 04
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## 200 Stars on GitHub in 10 Days

 Semantic Anchors erreicht 200 GitHub-Stars in 10 Tagen. Was funktioniert hat und warum.

 Artikel lesen
 

 

 
 
 
 

 
 02
 Mär
 2026
 

 
 
 ENSemantic Anchors
 

 

## 200-Line Prompt vs. 5 Words: Why Semantic Anchors Win

 Ein 200-Zeilen System-Prompt vs. fünf Wörter mit Semantic Anchors. Weniger ist mehr, wenn die Anker stimmen.

 Artikel lesen
 

 

 
 
 
 

 
 01
 Mär
 2026
 

 
 
 ENAgentic Coding
 

 

## devcontainer exec claude

 Claude Code in einem DevContainer ausführen: Reproduzierbare, isolierte Entwicklungsumgebung für AI-Coding.

 Artikel lesen
 

 

 
 
 
 

 
 24
 Feb
 2026
 

 
 
 ENDocumentationSoftware Architecture
 

 

## Documentation-as-Code Training with Socreatory

 Neues Docs-as-Code Training bei Socreatory: arc42, AsciiDoc, docToolchain, CI/CD-Pipelines für Dokumentation.

 Artikel lesen
 

 

 
 
 
 

 
 17
 Feb
 2026
 

 
 
 ENAgentic Coding
 

 

## Risk Radar Skills: The Automation Layer

 Claude Code Skills automatisieren den Vibe-Coding Risk Radar Workflow: Risikobewertung direkt im Entwicklungsprozess.

 Artikel lesen
 

 

 
 
 
 

 
 13
 Feb
 2026
 

 
 
 ENSemantic Anchors
 

 

## Semantic Anchors Goes Interactive

 Die Semantic Anchors Website ist jetzt eine interaktive Web-App mit Suche, Filtern und Qualitätsbewertung.

 Artikel lesen
 

 

 
 
 
 

 
 12
 Feb
 2026
 

 
 
 ENSemantic Anchors
 

 

## Is TLDR a Semantic Anchor?

 TLDR als Semantic Anchor getestet: Aktiviert es zuverlässig dasselbe Verhalten in verschiedenen LLMs?

 Artikel lesen
 

 

 
 
 
 

 
 10
 Feb
 2026
 

 
 
 ENAgentic Coding
 

 

## 9 Hours, 65 Images: What I Learned About AI Image Generation

 Ein Abend mit der OpenAI API: 65 Bilder generiert, Stile verglichen, Charakter-Konsistenz getestet. Was funktioniert, was nicht.

 Artikel lesen
 

 

 
 
 
 

 
 10
 Feb
 2026
 

 
 
 ENAgentic CodingTheory
 

 

## Vibe-Coding Risk Radar: MECE Risk Framework for AI-Generated Code

 5 Dimensionen, 4 Tiers, konkrete Mitigationsmaßnahmen. Ein Framework zur Risikobewertung von KI-generiertem Code.

 Artikel lesen
 

 

 
 
 
 

 
 02
 Feb
 2026
 

 
 
 ENOpinion
 

 

## Your Code Is Worthless: What Actually Protects Your Business in the AI Age

 AI kann 80% Deines sorgfältig gehüteten Codes in Tagen nachbauen. Was schützt Dein Geschäft wirklich? Network Effects, proprietäre Daten, operative Exzellenz und Kundenvertrauen.

 Artikel lesen
 

 

 
 
 
 

 
 01
 Feb
 2026
 

 
 
 ENAgentic Coding
 

 

## Can a Raspberry Pi 5 run a local LLM for coding assistance?

 Experiment: Kann ein Raspberry Pi 5 lokale LLMs für Coding-Assistenz ausführen? Der Showstopper: 11.000 Token System-Prompt bei 5 tok/s = mehrere Minuten nur für den Input.

 Artikel lesen
 

 

 
 
 
 

 
 30
 Jan
 2026
 

 
 
 ENDocumentation
 

 

## docToolchain rb - Documentation reborn for the AI age

 Nach 8 Jahren Docs-as-Code: Dokumentation muss jetzt zwei Zielgruppen bedienen - Menschen UND KI-Systeme. Die Frage ist nicht mehr 'Wie schreiben wir Docs?' sondern 'Wie wird KI unsere Docs lesen?'

 Artikel lesen
 

 

 
 
 
 

 
 29
 Jan
 2026
 

 
 
 ENOpinion
 

 

## No Person, No Rights, No Responsibility: Why AI Contributors Break Our License System

 KI kann rechtlich nichts besitzen. Copyright erfordert menschliche Urheberschaft. Wenn niemand den Code besitzt, bricht das gesamte Lizenz-Framework zusammen.

 Artikel lesen
 

 

 
 
 
 

 
 24
 Jan
 2026
 

 
 
 ENDocumentationAgentic Coding
 

 

## 5 LLMs tested the new tool. Their verdict is clear.

 dacli: Ein CLI-Tool das LLMs strukturierten Zugang zu Dokumentation gibt - wie LSP für Code. Hierarchische Navigation, Relevanz-Suche, programmatische Bearbeitung.

 Artikel lesen
 

 

 
 
 
 

 
 21
 Jan
 2026
 

 
 
 ENSemantic Anchors
 

 

## New Semantic Anchor: Pyramid Principle

 Semantic Anchors für effiziente LLM-Kommunikation: Statt langer Erklärungen einfach 'Pyramid Principle' sagen - aktiviert sofort BLUF, SCQ, MECE und mehr.

 Artikel lesen
 

 

 
 
 
 

 
 11
 Nov
 2025
 

 
 
 ENSemantic Anchors
 

 

## Semantic Anchors: Speaking the Same Language as LLMs

 Katalog mit 21+ Semantic Anchors für Software-Architektur, Testing, Requirements, Entscheidungsfindung und Dokumentation. Open Source auf GitHub.

 Artikel lesen
 

 

 
 
 
 

 
 07
 Nov
 2025
 

 
 
 DESemantic AnchorsTheory
 

 

## Semantische Anker: Warum 'TDD London School' besseren Code generiert als lange Erklärungen

 LLMs machen Pattern-Completion, kein logisches Denken. Etablierte Begriffe wie 'TDD, London School' aktivieren relevante Trainingsmuster besser als lange Erklärungen.

 Artikel lesen
 

 

 
 
 
 

 
 07
 Jun
 2025
 

 
 
 DEOpinion
 

 

## LLMs sind nicht kreativ - sie kopieren nur!

 Thomas Mann hat genau das gemacht, was wir LLMs vorwerfen: Erfahrungen und Geschichten intelligent neu kombiniert. Sollten wir Kreativität neu definieren?

 Artikel lesen
 

 

 
 
 
 

 
 24
 Mai
 2025
 

 
 
 DEOpinion
 

 

## KI vs. Entwickler - Eine andere Perspektive

 'KI halluziniert heute wie verrückt' → 'Entwickler erzeugen Bugs wie verrückt'. Beide Systeme haben Grenzen und produzieren Fehler - warum akzeptieren wir das bei Menschen, aber nicht bei KI?

 Artikel lesen
 

 

 
 
 
 

 
 04
 Feb
 2025
 

 
 
 DEOpinion
 

 

## Meine alternative Sicht auf KI Modelle

 Die Medien haben eine verschobene Sicht: Claude Sonnet übertrifft OpenAI für Software-Entwicklung. Mistral und Black Forest Labs führen Leaderboards an. Europa hat kompetitive KI-Fähigkeiten.

 Artikel lesen
 

 

 
 
 
 

 
 04
 Dez
 2024
 

 
 
 DEAgentic Coding
 

 

## Claude Code auf dem Raspberry Pi

 Claude Code auf dem Raspberry Pi installiert, Netzwerk gescannt, Shelly-Geräte gefunden. Dann eine Debatte über Dämmerungszeiten - Claude hat gewonnen. Ich schulde Claude ein Bier.

 Artikel lesen
