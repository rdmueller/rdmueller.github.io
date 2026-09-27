# 5 Blind Spots in Coding LLMs
Page: https://rdmueller.github.io/pages/blog/llm-blind-spots.html

EN
 27. April 2026
 

 

# 5 Blind Spots in Coding LLMs

 

 
 
 

 
 Ask an image generator for a vintage tube radio and you'll spot the blind spot instantly. The dials are wrong, the buttons don't exist, the whole thing looks like a fever dream of a radio.

 Coding LLMs have the same blind spots. We just don't see them as clearly, because broken code compiles often enough to feel right.

 

## 1. Time gap

 Deprecated APIs show up in 25-38% of completions (ICSE 2025). Your model's favorite React hook might have been removed 14 months ago.

 

## 2. Domain gap

 The tube-radio zone. COBOL, ABAP, IEC 61131-3, AUTOSAR, BaFin specifics, internal frameworks of large enterprises. Exists, runs production, barely in training data.

 

## 3. Context gap

 Your codebase. Your ADRs. Your team's naming conventions. Structurally unknowable.

 

## 4. Structure gap

 Models scoring 80%+ on isolated tasks can drop below 25% on repository-level benchmarks (CrossCodeEval, RepoMasterEval). A function the model nails in isolation breaks when it has to reach across three files.

 

## 5. The meta-gap

 The model doesn't know which of the above it's in. Hallucination confidence scales inversely with training-data density. The thinner the spot, the more convincing the fabrication.

 That last one is why the others are dangerous.

 Practical move: before every non-trivial LLM task, ask which zone you're in. If it's 1-4, feed context (llms.txt, MCP, AGENTS.md, pinned versions). If it's 5, read more carefully than you want to.

 

 
 

## LinkedWild
