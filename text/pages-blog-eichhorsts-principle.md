# Eichhorst's Principle: Shannon's Noisy Channel Applied to LLM Coding
Page: https://rdmueller.github.io/pages/blog/eichhorsts-principle.html

EN
 18. März 2026
 

 

# Eichhorst's Principle: Shannon's Noisy Channel Applied to LLM Coding

 

 
 
 

 
 Claude Shannon proved in 1948 that a noisy channel can deliver error-free transmission if you invest enough redundancy. Ingo Eichhorst applied this to LLM agents in his JavaLand keynote last week. I think he is right.

 An LLM is not a deterministic tool. It is a noisy, non-deterministic channel. It hallucinates. It loses context. It is sometimes plain wrong. But an agent in a loop corrects itself. The compiler reports line 5. The LLM reads the error. It fixes the code. The build passes. That is not magic, that is error correction. Exactly like Shannon described.

 Different tests correct different error classes. The compiler catches syntax errors. Unit tests catch logic errors. BDD tests catch domain errors. Each layer increases the reliability of the channel. The token cost is the redundancy overhead, the price for correctness on an unreliable channel.

 The consequence CTOs need to understand: if the complexity of a specification exceeds the capacity of the LLM, more tokens will not help. The system is structurally overwhelmed. The answer is not better prompts. The answer is smaller specifications, clearer boundaries, and better tests.

 Shannon's proof took 60 years before engineers translated it into real codes. We are at the beginning of translating Eichhorst's Principle into software processes.

 Anyone at JavaLand who saw the talk? Is the agentic loop the turbo code of our time?

 

 
 

## LinkedWild
