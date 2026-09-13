# https://rdmueller.github.io/ — Bündel 2 von 4

> 12 Seiten im Volltext.

# Semantic Anchors: Speaking the Same Language as LLMs
Page: https://rdmueller.github.io/pages/blog/semantic-anchors-catalog.html

EN
 November 11, 2025
 

 

# Semantic Anchors: Speaking the Same Language as LLMs

 A catalog of 21+ terms for efficient AI communication

 

 
 
 

 
 I've open-sourced a catalog with 21+ Semantic Anchors covering Software Architecture, Testing, Requirements, Decision-Making, and Documentation. Available on GitHub.

 

## What Are Semantic Anchors?

 Semantic Anchors are established terms that activate coherent response patterns in LLMs. Instead of explaining what you want in detail, you use a term the LLM already "knows" from its training data.

 

## The Catalog Categories

 

### 🏗️ Software Architecture

 
 
- C4 Model - Context, Containers, Components, Code diagrams
 
- arc42 - Architecture documentation template
 
- ADR - Architecture Decision Records
 
- Domain-Driven Design - Strategic and tactical patterns
 
- Ports & Adapters - Hexagonal architecture
 

 

### 🧪 Testing

 
 
- TDD London School - Outside-in, mock-heavy approach
 
- TDD Detroit School - Inside-out, classical approach
 
- Given-When-Then - BDD scenario format
 
- Arrange-Act-Assert - Test structure pattern
 
- Test Pyramid - Unit, Integration, E2E balance
 

 

### 📋 Requirements

 
 
- User Story - As a [role], I want [feature], so that [benefit]
 
- Job Story - When [situation], I want [motivation], so I can [outcome]
 
- INVEST Criteria - Independent, Negotiable, Valuable, Estimable, Small, Testable
 
- Acceptance Criteria - Conditions of satisfaction
 

 

### 🎯 Decision Making

 
 
- SWOT Analysis - Strengths, Weaknesses, Opportunities, Threats
 
- Pros/Cons Matrix - Weighted comparison
 
- 5 Whys - Root cause analysis
 
- Cost-Benefit Analysis - Economic evaluation
 

 

### 📝 Documentation

 
 
- Docs-as-Code - Documentation in version control
 
- Diátaxis Framework - Tutorials, How-tos, Reference, Explanation
 
- Pyramid Principle - BLUF, MECE, SCQ
 

 

## How to Use

 Instead of:

 
 "Write tests that first set up the context, then perform an action, then verify the result. Make sure each test is independent..."

 

 Just say:

 
 "Write tests using Arrange-Act-Assert pattern"

 

 

## Open Source

 The full catalog is available on GitHub. Contributions welcome!

 View on GitHub →

 

 
 

## LinkedWild

---

# Semantic Anchor: Pyramid Principle
Page: https://rdmueller.github.io/pages/blog/pyramid-principle.html

EN
 January 21, 2026
 

 

# New Semantic Anchor: Pyramid Principle

 One term activates an entire communication framework

 

 
 
 

 
 Semantic Anchors enable efficient LLM communication: Instead of lengthy explanations, simply say "Pyramid Principle" - and immediately activate BLUF, SCQ, MECE, and more.

 

## The Problem

 When working with LLMs, we often find ourselves writing lengthy prompts explaining exactly how we want information structured:

 
 "Start with the main conclusion, then group supporting arguments logically, make sure groups are mutually exclusive and collectively exhaustive..."

 

 

## The Solution: Semantic Anchors

 Instead of all that, just write:

 
 "Use the Pyramid Principle"

 

 This single term activates a whole framework of concepts the LLM already knows from its training data:

 

## What Gets Activated

 
 
- BLUF (Bottom Line Up Front) - Lead with your conclusion
 
- SCQ (Situation-Complication-Question) - Set up the context
 
- MECE (Mutually Exclusive, Collectively Exhaustive) - Organize arguments logically
 
- So What? - Keep everything action-oriented
 

 

## Why This Works

 LLMs do pattern completion based on their training data. Well-established concepts like "Pyramid Principle" (popularized by Barbara Minto at McKinsey) appear frequently enough that they activate coherent response patterns.

 

## Adding to the Catalog

 This is now part of the growing Semantic Anchors catalog on GitHub - a collection of terms that enable efficient human-LLM communication.

 What semantic anchors do you use in your LLM workflows?

 

 
 

## LinkedWild

---

# 5 LLMs Tested the New Tool
Page: https://rdmueller.github.io/pages/blog/dacli-llm-tool.html

EN
 24. Januar 2026
 

 

# 5 LLMs Tested the New Tool. Their Verdict Is Clear.

 Introducing dacli: Like LSP for documentation

 

 
 
 

 
 Documentation systems lack standardized interfaces comparable to LSP. Large docs-as-code projects face a dilemma: providing entire files creates excessive context, while minimal input leaves gaps.

 

## The Problem

 When working with LLMs on documentation:

 
 
- Full files → Token overload, cost explosion
 
- Snippets only → Missing context, poor results
 
- Manual copy-paste → Time-consuming, error-prone
 

 

## The Solution: dacli

 dacli is a command-line tool designed to provide LLMs with structured access to documentation—similar to how LSP works for code.

 

### Key Features

 
 
- 📂 Hierarchical navigation through document structures
 
- 🔍 Relevance-ranked search functionality
 
- ✏️ Programmatic editing of individual sections
 
- ✅ Documentation quality validation
 

 

## What the LLMs Said

 
 "Missing tool between LLMs and Docs-as-Code"

 — Claude
 

 
 "Production-ready after testing 134 sections"

 — GitHub Copilot CLI
 

 
 "Must-have for modern documentation workflows"

 — Kiro (AWS)
 

 

## Open Source

 dacli is open source, part of the docToolchain ecosystem, and built with 90% code coverage. The tool was reportedly built entirely by LLMs—a fitting origin story.

 → View on GitHub

 

 
 

## LinkedWild

---

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

---

# docToolchain rb - Documentation for the AI Age
Page: https://rdmueller.github.io/pages/blog/doctoolchain-rb.html

EN
 30. Januar 2026
 

 

# 🔄 docToolchain rb — Documentation Reborn for the AI Age

 After eight years of docs-as-code, documentation must now serve two audiences: humans AND AI systems

 

 
 
 

 
 The statement "AI reads docs" is more significant than "AI writes docs." Tools like ChatGPT and Claude consume documentation as context—and they need different formatting than humans.

 

## The Paradigm Shift

 For eight years, I've been advocating docs-as-code. Now the field faces a fundamental transformation: documentation must serve two distinctly different audiences.

 

## Emerging Trends

 
 
- llms.txt adoption: 600+ organizations including Anthropic and Stripe now provide AI-readable documentation summaries
 
- Model Context Protocol (MCP): Standardization for AI tool integration
 
- RAG technology: Converting documentation into searchable knowledge bases
 

 

## The Market Gap

 All current AI-native documentation tools operate as SaaS. This leaves enterprises with data privacy concerns without suitable options for self-hosted solutions.

 

## docToolchain rb Features

 
 
- 🔒 Self-hosted AI documentation with user-controlled LLMs
 
- 📝 AsciiDoc-native formatting
 
- 🏛️ Architecture documentation assistance (arc42 + ADR)
 
- 🤖 llms.txt and MCP support
 
- 🐳 Docker-first infrastructure
 

 
 "The question is no longer 'How do we write docs?' but 'How will AI read our docs?'"

 

 

## What's Next?

 docToolchain rb represents the evolution of documentation tooling for a world where AI systems are first-class consumers of our technical content. Stay tuned for the release.

 

 
 

## LinkedWild

---

# Raspberry Pi 5 + Local LLM
Page: https://rdmueller.github.io/pages/blog/raspberry-pi-llm.html

EN
 1. Februar 2026
 

 

# Can a Raspberry Pi 5 Run a Local LLM for Coding Assistance?

 An experiment in edge AI—and why context size is a deployment constraint

 

 
 
 

 
 I wanted to know: can a Raspberry Pi 5 run local LLMs for coding tasks? The hardware successfully ran smaller models via Ollama, but practical limitations emerged quickly.

 

## The Experiment

 Setting up Ollama on the Pi 5 was straightforward. Smaller models loaded fine. But then I tried to use it with Claude Code's workflow...

 

## The Showstopper

 The problem isn't running the model—it's context processing speed.

 Claude Code requires an ~11,000 token system prompt before generating any response. At the Pi's processing rate:

 
 11,000 tokens at 5 tok/s = several minutes just to process the input

 

 This exceeds typical timeout thresholds before any actual response generation occurs.

 

## The Workaround

 Using n8n with custom, shorter prompts (50 tokens) achieved 15-30 second response times. This works for focused automation tasks like:

 
 
- Translations
 
- Smart home commands
 
- Simple text processing
 

 

## Critical Insights

 
 
- Small models lack reasoning depth compared to larger counterparts
 
- "Context size" is a deployment constraint, not merely a model property
 
- Device capability differs from practical usability for specific tasks
 
- Processing every context token before generation becomes the dominant factor on constrained hardware
 

 

## The Right Question

 Rather than asking "does it run?", evaluators should ask:

 
 "What context size is practical, and what does that mean for my use case?"

 

 For simple, focused tasks with minimal context: yes, it works.

 For agentic coding workflows: not yet practical.

 

 
 

## LinkedWild

---

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

# Impressum
Page: https://rdmueller.github.io/pages/impressum.html

# Impressum

 
 

## Angaben gemäß § 5 TMG

 
 Ralf D. Müller

 [Straße und Hausnummer]

 [PLZ Ort]
 

 

 
 

## Kontakt

 
 E-Mail: ralf.d.mueller@gmail.com
 

 

 
 

## Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV

 
 Ralf D. Müller

 [Adresse wie oben]
 

 

 
 

## Haftungsausschluss

 

### Haftung für Inhalte

 
 Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
 Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
 

 

### Haftung für Links

 
 Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
 Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
 Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
 Seiten verantwortlich.
 

 

### Urheberrecht

 
 Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
 dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
 der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
 des jeweiligen Autors bzw. Erstellers.

