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
