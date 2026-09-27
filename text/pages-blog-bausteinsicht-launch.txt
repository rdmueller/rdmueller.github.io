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
