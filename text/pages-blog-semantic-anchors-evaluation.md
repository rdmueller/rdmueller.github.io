# Your LLM Will Be Deprecated. What's Your Test Plan?
Page: https://rdmueller.github.io/pages/blog/semantic-anchors-evaluation.html

EN
 25. März 2026
 

 

# Your LLM Will Be Deprecated. What's Your Test Plan?

 

 
 
 

 
 Your LLM will be deprecated within two years. What's your migration test plan?

 If the answer is "we'll see if it still works," keep reading.

 We needed to evaluate whether Semantic Anchors work across models. Semantic Anchors are established terms like "TDD, London School" or "arc42" that activate specific knowledge in LLMs more reliably than verbose descriptions. We maintain an open-source catalog of 90+ of them. But a catalog without evidence is not enough.

 So we built an evaluation framework. Existing tools like promptfoo or LangSmith exist, but the established methodology is almost always LLM-as-Judge: use one LLM to grade another. The problem: the judge model gets deprecated too. Your scores drift without the evaluated model changing. You're measuring with a ruler that changes.

 We went a different route: multiple choice with deterministic scoring. 193 questions, 63 anchors, 4 position rotations per question. Compare letter to expected letter. No LLM judges another LLM. Total cost across three models: under $25.

 Results: Claude Sonnet 4.6 at 99%, GPT-4o at 97%, Mistral Large at 96%. Sounds safe. It's not. The averages hide real failures.

 "Describe the Feynman Technique without naming it." Claude and GPT-4o both drop to 0%. Say "Feynman Technique" and they score 100%. The name activates knowledge that a paraphrase does not. Today this works. After the next model update, it might not. Without an evaluation, you won't know.

 In a small test, a 1.7B parameter model scores 63% overall but 0% on German prompts. Small models, different language, everything breaks.

 The multiple-choice pattern works beyond our use case. Same pattern, same deterministic scoring, no LLM judge needed.

 Few books cover LLM evaluations. Few teams build them. Your API-hosted model will be deprecated. Time to start. One script, under $25 per run.

 Evaluation concept | Full evaluation report

 

 
 

## LinkedWild
