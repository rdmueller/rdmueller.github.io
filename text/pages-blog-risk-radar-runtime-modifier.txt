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
