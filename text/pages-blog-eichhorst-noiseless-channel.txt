# Your Compiler Is Shannon's Noiseless Channel
Page: https://rdmueller.github.io/pages/blog/eichhorst-noiseless-channel.html

EN
 17. April 2026
 

 

# Your Compiler Is Shannon's Noiseless Channel

 

 
 
 

 
 Your compiler is not a tool. It is Shannon's noiseless channel.

 I had a conversation with Avraham Poupko that changed how I think about Eichhorst's Principle. Eichhorst's Principle applies Shannon's noisy channel theorem to LLM coding: an LLM is a noisy, non-deterministic channel, and an agent in a feedback loop is error correction.

 But Shannon's theorem has a prerequisite that I had been overlooking. Before you can do error correction, sender and receiver must agree on the correction method over a separate, noiseless channel. In agentic coding, that noiseless channel is the compiler. It is deterministic, unambiguous, and not open to interpretation. When it says "type mismatch," there is no negotiation.

 This has a consequence that surprised me.

 Modifiers like private, static, final were invented for human programmers. They protect API boundaries. The running program does not care whether a field is private. But the compiler does. And now the LLM does too. When an agent tries to access a private field, the compiler returns an error, the agent reads it, and corrects itself. A language feature designed for human discipline turns out to be error correction for machines.

 The stricter the language, the stronger the error correction. That makes language choice a channel capacity decision, not just a preference.

 But here is where it gets practical. The real cost of error correction is not the compiler running (milliseconds). It is the full round trip: LLM generates, compiler rejects, error goes back to the LLM, LLM reasons about the fix, generates again. Every round trip costs tokens and time.

 The optimization is obvious once you see it: push error correction into layers that do not need the LLM at all. A formatter like gofmt or prettier fixes an entire class of errors without a single LLM round trip. An eslint --fix corrects patterns before the LLM even sees them. Every auto-corrected error is an error the LLM does not spend tokens on.

 Three levels of error correction, ranked by cost:

 Auto-correction (prettier, gofmt, eslint --fix): zero LLM involvement, near-zero cost.

 Diagnostics (compiler, type checker): LLM reads the error and fixes it. Medium cost.

 Behavioral verification (tests, BDD): LLM must understand the failing test, find the root cause, and fix it. High cost, often multiple round trips.

 The goal: maximize the first level. Free the LLM budget for the errors that actually require reasoning.

 "You can communicate over noisy channels, but you should invest in clear channels." That line from our conversation stuck with me. Better models give us a clearer channel. Better error correction gives us a safety net. Both matter.

 Thanks Avraham Poupko for a conversation that made me rethink the fundamentals.

 

 
 

## LinkedWild
