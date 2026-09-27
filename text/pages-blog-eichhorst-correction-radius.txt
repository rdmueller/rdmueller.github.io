# The Correction Radius: When to Stop the Feedback Loop
Page: https://rdmueller.github.io/pages/blog/eichhorst-correction-radius.html

EN
 30. April 2026
 

 

# The Correction Radius: When to Stop the Feedback Loop

 

 
 
 

 
 Your feedback loop has a correction radius. Beyond it, the agent just makes things worse.

 Third post in the Eichhorst's Principle series. The first was about the compiler as Shannon's noiseless channel. The second about Purpose vs. Task. This one is about knowing when to stop the loop.

 Agentic coding works because the agent corrects itself. It writes code, the compiler rejects it, the agent reads the error, fixes the code, tries again. That loop is powerful. It turns a noisy, non-deterministic LLM into a reliable coding partner. Shannon's error correction, applied to software.

 But error-correcting codes have a fundamental limit. They can detect and correct errors up to a certain distance from the correct signal. In coding theory, that is the Hamming distance. Beyond it, the code cannot recover. The signal is too far from anything correct.

 The same applies to agentic coding.

 A syntax error is a small distance from correct code. The compiler says "missing semicolon on line 42." The agent adds the semicolon. One round trip, done.

 A type mismatch is a medium distance. The compiler says "expected int, got String." The agent reasons about the conversion, fixes the call site. Maybe two round trips.

 A wrong algorithm is a large distance. The tests fail, the agent reads the failure, tries a different approach, the tests fail differently, the agent tries again. Five round trips, ten round trips. The cost escalates. Sometimes the agent finds a fix. Sometimes it oscillates between two wrong approaches.

 A fundamental architectural mistake is beyond the correction radius. The agent cannot fix it because the fix requires understanding the purpose behind the architecture, and that purpose lives outside the code. No number of round trips will help. The feedback loop is optimizing in the wrong search space.

 When you see an agent cycling through increasingly desperate fixes, it has exceeded its correction radius. The correct intervention is not a better prompt or a longer context window. It is a human stepping in and redirecting at the purpose level.

 This connects to something practical. The Semantic Anchors Workflow breaks work into small, well-defined steps. Each step is a short transmission over the noisy channel. Short transmissions stay within the correction radius. The paradox: the smaller you make each task, the more autonomy you can give the agent. Not despite the correction radius, but because of it.

 Small steps are not caution. They are information theory.

 

 
 

## LinkedWild
