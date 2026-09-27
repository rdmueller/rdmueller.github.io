# Closed Loop vs. Open Loop: Why the Feedback Loop Is Everything
Page: https://rdmueller.github.io/pages/blog/closed-loop-coding.html

EN
 18. März 2026
 

 

# Closed Loop vs. Open Loop: Why the Feedback Loop Is Everything

 

 
 
 

 
 Yesterday I wrote about Eichhorst's Principle: LLM coding works like Shannon's noisy channel with error correction. Several people asked me why this matters. Here is why.

 Most developers I talk to fall into two camps. Camp one says "AI coding works great, I ship twice as fast." Camp two says "AI coding produces garbage, I spend more time fixing than writing." Both are right. The difference is not the model. The difference is the feedback loop.

 When you prompt an LLM and paste the result into your project, you are running an open loop. No compiler check, no test suite, no review. The LLM guesses once and you hope it guessed right. Sometimes it does. Often enough it does not. This is prompting. It is open-loop control. Engineers stopped building systems like this decades ago.

 When an agent... writes code, then runs the compiler, then reads the error, then fixes the code, then runs the tests, then reads the failure, then fixes the logic, and then repeats until green... : that is a closed loop.

 The same principle that makes your thermostat work, that keeps an airplane stable, that lets your phone decode a signal full of noise. Feedback corrects errors. More feedback corrects more errors.

 This is where it gets practical. The loop can only correct what it can detect. If your compiler catches a syntax error, the agent fixes it. If your unit test catches a logic error, the agent fixes it. If you have no test for a specific behavior, the agent will not notice when it breaks that behavior. Untested code is an uncorrected channel. The noise passes straight through.

 That gives you a clear investment priority. Better tests beat better prompts. A comprehensive test suite turns a mediocre model into a reliable coding partner. A perfect prompt with no tests is still a coin flip at scale.

 But to be fair: a better prompt is a better input signal, which does improve the output.

 Once you see it this way, the magic disappears. You see how the system actually works.

 And that is a good thing.

 "It somehow works" is not engineering. "I know exactly why it works and I can control the quality by controlling the feedback loop" is engineering. You can measure it. You can improve it. You can explain it to your CTO in terms they already understand from control theory.

 Eichhorst's Principle is not just an analogy. It is an operational framework. Invest in your test suite. Keep your specs small. Close the loop.

 

 
 

## LinkedWild
