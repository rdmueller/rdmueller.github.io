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
