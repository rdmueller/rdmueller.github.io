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
