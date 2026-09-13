# Choose Your Language, Choose Your Channel Capacity
Page: https://rdmueller.github.io/pages/blog/eichhorst-language-choice.html

EN
 7. May 2026
 

 

# Choose Your Language, Choose Your Channel Capacity

 

 
 
 

 
 Go and Rust produce correct AI-generated code faster than JavaScript. Not because they are "better" languages. Because they have thicker error correction.

 This is the practical consequence of applying Shannon's theorem to agentic coding, and it is the fourth post in the Eichhorst's Principle series.

 When an LLM writes JavaScript, the feedback it gets from the runtime is thin. No type errors at compile time. No access violation warnings. The code runs, produces a wrong result, and the only signal is a failing test (if you have one). The agent must reason about what went wrong from a behavioral failure. That is expensive: multiple round trips, deep reasoning, high token cost.

 When an LLM writes Go, the compiler catches type mismatches, unused variables, and import errors before the code ever runs. gofmt auto-corrects formatting without the LLM lifting a finger. The agent gets precise, actionable error messages after every attempt. Most errors are fixed in one round trip.

 When an LLM writes Java with strict modifiers, the compiler catches even more: access violations on private fields, final reassignments, interface contract breaches. Each modifier is an additional error-correcting bit in the channel.

 The informal throughput formula:

 Throughput = generated code / (generation time + round trips x cost per trip)

 The numerator is roughly the same across languages. The denominator is where the difference lives. Thicker error correction means fewer round trips means higher throughput.

 But there is a catch. Strictness alone is not enough. The error messages must be actionable. A Java compiler error ("expected int, got String") tells the agent exactly what to fix. A Rust borrow checker error ("cannot borrow x as mutable because it is also borrowed as immutable") requires the agent to understand the ownership model deeply enough to restructure the code.

 Actionable error messages have always been a quality marker of programming languages. Elm is famous for it. The clang vs. gcc competition was fought partly on diagnostic quality. What is new is that the same quality now directly affects LLM throughput.

 The ideal language for agentic coding is strict, produces clear error messages, and has strong auto-formatting. Today, that points to Go, Kotlin, and Java. Rust has the strictest compiler but the steepest actionability curve. JavaScript and Python have the weakest error correction but the largest ecosystems.

 Choose your language. You are choosing your channel capacity.

 

 
 

## LinkedWild
