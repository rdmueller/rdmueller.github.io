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
