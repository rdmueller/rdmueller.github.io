# https://rdmueller.github.io/ — Bündel 2 von 4

> 14 Seiten im Volltext.

# Your Code Is Worthless
Page: https://rdmueller.github.io/pages/blog/code-is-worthless.html

EN
 2. Februar 2026
 

 

# Your Code Is Worthless: What Actually Protects Your Business in the AI Age

 Traditional competitive advantages based on complex, proprietary code have become obsolete

 

 
 
 

 
 This post was written by Claude (Anthropic) based on an extensive conversation with Ralf D. Müller. We discussed the shifting nature of competitive advantage in software before writing. He reviewed, edited, and approved the final result. The responsibility for these opinions is human. The articulation is AI-assisted.

 

## The Old Playbook

 For decades, the formula was simple:

 
 Write complex code → Keep it secret → Competitors can't catch up → Profit

 

 Your source code was your castle. You built walls around it. NDAs. Proprietary licenses. Obfuscation. The assumption: if nobody can see your code, nobody can copy your business.

 This made sense when:

 
 
- Writing software required expensive, skilled labor
 
- Rebuilding a competitor's product took 12-18 months and a full team
 
- Reverse engineering took months or years
 
- Distribution was physical and controllable
 
- Code was the product
 

 Time was the moat. Even if competitors could theoretically copy you, the months or years required gave you runway. The entire SaaS model was built on this: "Instead of spending 12 months and $500k rebuilding this yourself, just pay us $500/month." The implicit promise? Your time is worth more than our software costs.

 None of this is true anymore.

 

## The AI Disruption

 Today, AI can generate functional code in minutes. Not perfect code. Not production-ready code. But good enough code.

 Ask Claude or GPT to build you a social media platform. You'll get a working prototype in a day. A functional MVP in a week. Yes, there are questions about security, scalability, and maintainability – but let's assume those get solved. They're engineering problems, and engineering problems tend to get solved. For this discussion, let's focus on the business implications when they are.

 This changes everything about the value proposition of code.

 What used to take a team six months now takes a solo developer with AI a few weeks. The barrier to entry has collapsed. Your carefully guarded codebase? Someone can rebuild 80% of its functionality without ever seeing it – and they can do it in a fraction of the time it took you.

 

## The Glue Logic Reality

 Let's be honest about what most of us actually build:

 We don't write database engines. We use PostgreSQL. We don't write web servers. We use nginx. We don't write authentication systems. We use Auth0. We don't write payment processing. We use Stripe. We don't train LLMs. We call OpenAI's API.

 We don't invent. We assemble.

 Most modern software is glue logic. We connect APIs, configure services, and build interfaces. The actual "hard" computer science? We import it as a dependency or call it as a service.

 This isn't a criticism – it's smart engineering. Why reinvent the wheel? But it does mean that the code we write is increasingly... replaceable. Commodity. Worthless in isolation.

 

## The SaaS Reckoning

 Remember the SaaS value proposition? "Why spend 12 months and $500k building this yourself when you can just pay us $500/month?"

 That math assumed building was expensive and slow. What happens when building becomes cheap and fast?

 We're already seeing the answer. IT teams frustrated with overpriced subscriptions, poor support, or feature bloat are doing something that was unthinkable five years ago: they're building replacements. Not buying a competitor's product – building their own, with AI assistance, in weeks instead of months.

 The SaaS provider's moat was development time. That moat is draining.

 This doesn't mean all SaaS dies. But it means SaaS companies need more than "we saved you from building it yourself." They need:

 
 
- Operational excellence you can't replicate (uptime, security, compliance)
 
- Network effects (your users are there because other users are there)
 
- Data advantages (insights from aggregated customer data)
 
- Continuous innovation faster than customers can build
 
 If your only value proposition is "we wrote the code so you don't have to" – you're in trouble.

 

## The New Meaning of "Custom Software"

 Here's a shift that's coming: the meaning of "custom software" is about to change completely.

 For decades, custom software meant: expensive, enterprise-only, built by consultancies for companies with deep pockets. A luxury item. Most businesses couldn't afford it, so they adapted their processes to fit off-the-shelf solutions.

 Soon, custom software will mean something different: personal tools built by AI for individual users.

 Don't like how your note-taking app works? Describe what you want, AI builds it. Need a specific workflow automation? AI creates it for you. Want a dashboard that shows exactly what you care about? Done in an afternoon.

 Software tailored not to a company, but to you. Not because you're rich, but because building it costs almost nothing.

 This is the democratization of custom software. And it changes the game for everyone selling standardized solutions.

 

## So What's Actually Valuable?

 If not code, then what protects your business? What's your moat?

 

### 1. Network Effects and User Base

 Example: WhatsApp, LinkedIn, any social platform

 The code to build a messaging app is trivial. A competent developer with AI could recreate WhatsApp's core features in a week. But WhatsApp has 2 billion users. That's the moat.

 Your users are on the platform because other users are on the platform. This creates a gravity well that no amount of superior code can overcome. You don't switch to a better messenger if nobody you know is there.

 The protection isn't the code. It's the network.

 

### 2. Proprietary API / Black Box Services

 Example: OpenAI, Anthropic, Twilio, Stripe

 You don't sell software. You sell access to a capability. The code runs on your servers. Customers never see it. They get an API endpoint and documentation.

 This model works because:

 
 
- The value is in the running service, not the code
 
- You control the infrastructure
 
- You can iterate without customers updating anything
 
- Reverse engineering requires replicating the entire system
 
 Important distinction: Not all API moats are equal. Pure software APIs (like LLMs) are vulnerable – the moment an open-source alternative reaches parity, your API becomes a commodity. See: OpenAI vs. Llama vs. Mistral.

 But some APIs are backed by infrastructure that can't be replicated with code alone. Twilio's moat isn't their software – it's their relationships with telecom carriers worldwide. Stripe's moat isn't their API design – it's their banking partnerships and payment network integrations. You can't open-source your way to SMS gateway agreements or financial compliance certifications.

 The moat is only as strong as what's behind the API. Pure software? Temporary. Hardware, regulations, partnerships? Much more durable.

 

### 3. Proprietary Data

 Example: Google (search index), Bloomberg (financial data), any company with unique datasets

 Data is the new oil. Cliché but true.

 But here's the interesting part: user base and data reinforce each other. Your users generate data that's worthless individually but invaluable in aggregate.

 Consider Google Maps. Every Android phone with location services enabled sends anonymous movement data to Google. A single phone's location is meaningless. But billions of phones? That's real-time traffic for every road on the planet. That's "Popular Times" showing you when a restaurant is busiest. That's estimated wait times and visit durations for millions of businesses.

 No competitor can replicate this overnight. You can copy Google Maps' code. You can copy their UI. But you can't copy the continuous data stream from billions of devices. The user base is the data. The data improves the product. The better product attracts more users. Flywheel.

 Caveat: Data privacy regulations (GDPR, CCPA) make this moat harder to maintain. You can't just hoard user data anymore. And data quality matters more than quantity – garbage in, garbage out, no matter how much you have.

 

### 4. Operational Excellence

 Example: AWS, Cloudflare, any serious infrastructure provider

 Here's what AI can't generate: the knowledge and systems required to run software reliably at scale.

 
 
- 99.99% uptime
 
- Security hardening
 
- Incident response
 
- Compliance certifications
 
- Global distribution
 
- Performance optimization
 
 The code might be 10% of the challenge. Operating it is the other 90%. Anyone can write a web server. Running one that handles millions of requests while being secure, compliant, and reliable? That's expertise that takes years to build.

 Your ops team is a moat. Your on-call runbooks are a moat. Your battle scars from production incidents are a moat.

 

### 5. Speed and Iteration Velocity

 Example: Any startup that outmaneuvered an incumbent

 If everyone can build software quickly, the winner is whoever ships fastest and learns fastest.

 This means:

 
 
- Tight feedback loops with customers
 
- Rapid experimentation
 
- Willingness to kill features that don't work
 
- Continuous deployment
 
- Organization designed for speed
 
 AI accelerates everyone – but not equally. Teams that integrate AI effectively into their workflows gain a multiplier. The moat isn't the AI. It's how well you use it.

 

### 6. Trust, Brand, and Compliance

 Example: Established enterprise vendors, regulated industries

 "Nobody ever got fired for buying IBM."

 In enterprise sales, trust matters more than features. A startup might have better technology, but:

 
 
- Are they SOC 2 certified?
 
- Will they exist in 5 years?
 
- Do they have references in my industry?
 
- Can they sign our vendor agreement?
 
 Compliance certifications, established customer relationships, brand recognition – these take years to build. You can't AI-generate a reputation.

 But trust is fragile. What takes decades to build can evaporate in days.

 SanDisk spent years building a reputation for "professional grade, rugged, dependable" storage. Their Extreme Pro SSDs were marketed specifically at photographers and videographers – professionals who trust these drives with irreplaceable work. Wedding photos. Client shoots. Years of creative work. Then the drives started randomly wiping everything. No warning. No recovery. Photographers lost entire client deliveries. Some lost their business reputation along with the files. Class action lawsuits followed, but no lawsuit brings back a wedding day or a once-in-a-lifetime shoot. The drives became "worthless" – not because they failed, but because they could no longer be trusted with anything that matters.

 CrowdStrike was the gold standard in enterprise security – until July 2024, when a faulty update crashed 8.5 million Windows systems worldwide. Airlines grounded. Hospitals disrupted. Estimated losses exceeded $5 billion. One bad update. Warren Buffett's quote proved prophetic: "It takes 20 years to build a reputation and 15 minutes to ruin it."

 For B2B especially, trust is the ultimate moat – but it's a moat that can drain overnight.

 

## The Open Source Paradox

 Here's something counterintuitive: open source can be a better moat than closed source.

 Wait, what? If you give away the code, how is that protection?

 

### Model 1: Sell support and enterprise features

 If everyone uses your code, you set the standard. You control the roadmap and vision. You have the deepest expertise in your own project. Enterprise customers will pay for support, SLAs, and features. Contributors improve your product for free. Adoption creates lock-in through familiarity.

 Red Hat built a billion-dollar business on free software. HashiCorp, Elastic, MongoDB – all open core models. The code is free. The ecosystem, support, and enterprise features are the product.

 

### Model 2: Set the standard, protect your investment

 But there's another model that's even more strategic: give away the code not to sell support, but to establish a standard that benefits your ecosystem.

 Look at Anthropic's Model Context Protocol (MCP). Released as open source in November 2024, MCP defines how AI assistants connect to external tools and data. Anthropic doesn't sell MCP support or enterprise licenses. They gave it away – and then donated it to the Linux Foundation.

 Why? Because if MCP becomes the universal standard for AI tool integration, every MCP-compatible tool works with Claude. The entire ecosystem builds around a protocol Anthropic designed. OpenAI adopted it. Google DeepMind adopted it. Now there are 97 million monthly SDK downloads and thousands of community-built servers.

 Anthropic's investment in MCP is protected not by keeping it secret, but by making it ubiquitous. They don't own the protocol anymore – but they shaped the landscape everyone else now operates in.

 When code is worthless, giving it away costs you nothing and buys you either adoption or influence.

 

## What Are You Actually Selling?

 The shift looks like this:

 
 
 
 20th Century
 21st Century
 

 
 
 
 Software licenses
 Subscriptions
 

 
 Code ownership
 API access
 

 
 Features
 Data and insights
 

 
 Products
 Platforms
 

 
 One-time sales
 Recurring relationships
 

 
 
 If you're still thinking about protecting your code, you're playing the wrong game. Your code is an implementation detail. It's the least defensible part of your business.

 

## The Algorithm Exception

 One caveat: genuinely novel algorithms remain valuable.

 A new video codec. A breakthrough compression technique. A unique approach to a hard problem. If you've invented something that's both non-obvious and difficult to reverse-engineer from its outputs – that's still protectable. Not through copyright on the code, but through the knowledge itself.

 But be honest: most of us aren't writing novel algorithms. We're writing CRUD apps with nice UIs.

 

## So What Should You Protect?

 Stop guarding your source code. Start building:

 
 
- User base – Make switching painful through network effects
 
- Data assets – Accumulate proprietary, valuable data
 
- Operational capability – Be excellent at running software, not just writing it
 
- Speed – Out-iterate competitors through superior processes
 
- Trust – Build relationships and reputation that can't be replicated
 
- Ecosystem – Make your solution the standard others build on
 
 Your moat is everything around the code. The code itself? In 2025, it's just text that an AI can regenerate.

 

## The New Reality

 Here's the uncomfortable truth:

 
 Protecting your code is 20th century thinking.

 

 In the AI age, your competitive advantage isn't your implementation. It's your users, your data, your operations, your speed, your trust, and your ecosystem.

 The companies that win won't be the ones with the best code. They'll be the ones who understand that code is now the easy part – and invest accordingly in everything else.

 Your code is worthless. Build your moat somewhere else.

 

 This is Part 2 of a series on software in the AI age. Part 1: No Person, No Rights, No Responsibility: Why AI Contributors Break Our License System

 What's your moat? I'm curious how others are thinking about competitive advantage when code becomes commodity. Let me know in the comments.

 

 About this post: Written by Claude, directed by Ralf, reviewed by Ralf. The code for this article (Markdown) is freely available and completely worthless.

 

 
 

## LinkedWild

---

# Vibe-Coding Risk Radar: MECE Risk Framework for AI-Generated Code
Page: https://rdmueller.github.io/pages/blog/vibe-coding-risk-radar.html

EN
 10. Februar 2026
 

 

# Vibe-Coding Risk Radar: MECE Risk Framework for AI-Generated Code

 

 
 
 

 
 "Just vibe-code it" is the new "just ship it."

 But here's the uncomfortable truth: Not all code carries the same risk. CSS for a landing page? Go ahead, let the AI write it. Auth module for a fintech app? That's a completely different story.

 The problem: Most teams treat AI-generated code as either "always review everything" (doesn't scale) or "never review anything" (negligent for critical code).

 We built an open-source tool to solve this: The Vibe-Coding Risk Radar.

 5 MECE dimensions (Code Type, Language Safety, Deployment Context, Data Sensitivity, Blast Radius) classify risk across orthogonal axes. The highest dimension determines the overall tier -- inspired by IEC 61508's "highest applicable SIL" principle.

 4 cumulative tiers map to concrete mitigations: - Tier 1: Automated gates only (linters, SAST, dependency checks) - Tier 2: Extended assurance (AI code review, integration tests) - Tier 3: Mandatory human review, threat modeling, penetration testing - Tier 4: Severely restrict AI use, independent verification

 The key insight: The answer to "Should we review AI code?" is neither yes nor no. It's "it depends" -- and now you have a framework to decide.

 Built with Semantic Anchors -- well-defined terms that activate specific LLM knowledge domains. The MECE principle (Mutually Exclusive, Collectively Exhaustive) is one such anchor: it guided GPT and Claude to produce non-overlapping, complete risk categories backed by 30+ verified references.

 Try it yourself (interactive, bilingual DE/EN): https://llm-coding.github.io/vibe-coding-risk-radar/

 Source + full AsciiDoc documentation: https://github.com/LLM-Coding/vibe-coding-risk-radar

 Semantic Anchors framework: https://github.com/LLM-Coding/Semantic-Anchors

 

 
 

## LinkedWild

---

# 9 Hours, 65 Images: What I Learned About AI Image Generation
Page: https://rdmueller.github.io/pages/blog/ai-image-generation.html

EN
 10. Februar 2026
 

 

# 9 Hours, 65 Images: What I Learned About AI Image Generation

 

 
 
 

 
 9 hours. 65 images. 13 dollars. And the breakthrough came at the very end.

 I'm building a Claude Code skill that automatically generates images for my LinkedIn posts. In the style of my ChatGPT illustrations -- featuring me and my cat Elfi.

 The problem: The OpenAI API consistently produced worse images than ChatGPT. Same reference photos, same model (gpt-image-1.5) -- but the API images looked like generic stock illustrations.

 After 7 different approaches and a lot of trial and error, the key insight:

 The problem isn't the image model. The problem is the middleman.

 The Responses API sends your reference images to GPT-5.2, which "understands" them and then forwards a text prompt to the image model. Visual details get lost in translation. In one case, GPT-5.2 even wrote "generic, not a real person" in its internal prompt -- despite receiving reference photos.

 The solution: The Images Edit API. It sends reference images directly to the image model, no middleman. Result: All 3 variants showed me with glasses and gray beard, Elfi as a Ragdoll with blue eyes. Consistent. Recognizable.

 My three practical tips for AI image generation via API:

 1. Use images.edit instead of the Responses API when you have reference images 2. Log the revised_prompt field -- it reveals what the orchestrator actually sends to the image model 3. Avoid textual style descriptions alongside visual references -- text overrides images

 The header image of this post? Fully API-generated. No ChatGPT, no manual editing.

 If you're interested in the technical details: I'm happy to share the full report with all 65 images, code examples, and API comparisons.

 

 
 

## LinkedWild

---

# Is TLDR a Semantic Anchor?
Page: https://rdmueller.github.io/pages/blog/tldr-semantic-anchor.html

EN
 12. Februar 2026
 

 

# Is TLDR a Semantic Anchor?

 

 
 
 

 
 Is "TLDR" a Semantic Anchor? Why the answer matters for how you work with LLMs.

 It started with a simple question: Does "TLDR" precisely define something when you use it in a prompt — or is it just vibes?

 Turns out, this question cuts right to the heart of what makes LLM communication effective.

 The Semantic Anchors catalog (github.com/LLM-Coding/Semantic-Anchors) collects well-defined terms that activate rich knowledge domains in LLMs — things like "TDD, London School", "arc42", or "Pyramid Principle according to Barbara Minto". Each of these terms compresses an entire methodology into a few words that an LLM can reliably unpack.

 TLDR doesn't do that. It says "be short" — but not *how*, not *by what structure*, not *with what priorities*. It's underspecified. And that's the key distinction.

 This led to a contribution that I think makes the catalog more useful:

 → Quality criteria that make explicit what qualifies as a semantic anchor: precision, richness, consistency, and attributability. With counter-examples showing why popular terms like TLDR or ELI5 don't make the cut.

 → A new category for Interaction & Reasoning Patterns — anchors that steer *how* an LLM collaborates with you, not just *what* it knows. Think "Socratic Method", "Rubber Duck Debugging", "Five Whys (Ohno)", or "Chain of Thought". These meet the same quality bar as domain anchors.

 → The insight that most anchors live on a spectrum — "Pyramid Principle" is both domain knowledge *and* a behavior instruction. The quality bar is the same across the spectrum. What matters isn't the category — it's the definition depth.

 The practical takeaway: Next time you prompt an LLM, ask yourself — am I using a vague instruction ("keep it short") or a semantic anchor that activates a well-defined framework ("structure this using BLUF")?

 The difference in output quality is remarkable.

 Check out the catalog and consider contributing your own anchors: https://github.com/LLM-Coding/Semantic-Anchors

 

 
 

## LinkedWild

---

# Semantic Anchors Goes Interactive
Page: https://rdmueller.github.io/pages/blog/semantic-anchors-webapp.html

EN
 13. Februar 2026
 

 

# Semantic Anchors Goes Interactive

 

 
 
 

 
 🚀 From README to Web App: Semantic Anchors goes interactive!

 We've transformed the Semantic Anchors project from a simple README into a full-fledged interactive web application – and learned quite a bit about modern web development with AI assistance along the way.

 What is Semantic Anchors? A curated catalog of well-defined terms, methodologies, and frameworks that serve as reference points when prompting LLMs. Instead of saying "use mocks when testing," you say "TDD, London School" – activating a whole network of context-rich knowledge.

 The Transformation: 📄 Before: Static README list with 60+ Anchors 🎨 After: Interactive website with: - 🎴 Card Grid View with visual categorization - 🔍 Live search across all anchors - 🎯 Filter by 12 roles (Developer, Architect, QA, etc.) - 📊 Anchor counter showing filtered results - 🌐 Bilingual (EN/DE) - 🎭 Dark/Light Mode - 📱 Mobile-optimized - ⚡ Sub-2s page load - ♿ WCAG 2.1 Level AA compliant

 Tech Stack: - Vite (build tool) - Vanilla JS (no framework!) - AsciiDoc (content format) - Tailwind CSS - GitHub Pages deployment - CI/CD with GitHub Actions

 Lessons Learned: ✅ AI-assisted development can deliver complex projects in weeks instead of months ✅ Modern web != framework lock-in – vanilla JS + modern tools often suffice ✅ Documentation-first design pays off ✅ Simplicity wins: Card Grid beats complex visualization = better UX

 Live Demo: https://llm-coding.github.io/Semantic-Anchors/ Open Source: https://github.com/LLM-Coding/Semantic-Anchors

 Next Steps: GitHub Copilot integration for automated anchor validation and creation via issues.

 What are your go-to Semantic Anchors when prompting? 🤔

 

 
 

## LinkedWild

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

