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
