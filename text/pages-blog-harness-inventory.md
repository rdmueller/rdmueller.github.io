# Trust Is Good, Verification Is Better
Page: https://rdmueller.github.io/pages/blog/harness-inventory.html

EN
 26. Mai 2026
 

 

# Trust Is Good, Verification Is Better

 

 
 
 

 
 Most agentic coding rests on trust. "Look, it works." That is not enough to ship serious software.

 What turns "it ran" into "I will deploy this to production" is the harness: the set of layers around the model that verify what comes out. Compiler, type checker, linter, security scanner, tests, code review. The harness is what makes a coding agent into a coworker rather than a generator.

 Ingo Eichhorst made the framing explicit at JavaLand 2026: an LLM is a noisy channel in Shannon's sense. Two levers improve transmission. The signal, meaning clearer specs and Semantic Anchors. The error correction, meaning every layer that checks the output. The harness is the second lever, written out in full.

 

## Catching aspects, like butterflies in a meadow

 For most teams, the harness is built by accident. A compiler. A test framework. A linter someone configured years ago. That works until it doesn't.

 A systematic harness catches more, in different categories. Build and language. Tests. Security. Architecture. Data and schema. UX, accessibility, internationalisation. Operations. Formal methods. Documentation. Nine categories of layers, each catching a different aspect of software development.

 Most of these layers are free. The compiler is free. The CVE database is free. Accessibility tools defined against WCAG are free. The cheapest twenty layers are turn-on-and-forget. Most repositories have less than a third of them active. The biggest leverage sits there.

 The rest cost project work. Tests. Architecture rules. Threat models. ADR conformance checks. Those layers are the project's own investment in correctness.

 

## What no harness catches

 The honest part of the story is what no layer catches.

 A spec describing the wrong thing. The tests verify the wrong target perfectly. Time bombs that detonate on Feb 29 or in 2038. Logic vulnerabilities, because static analysis finds patterns, not missing authorisation. Real usability beyond accessibility structure. Architectural fit for features that are not built yet. The theory of the program (Naur, 1985), which lives in your developers' heads, not in the repo.

 These gaps are not bugs in the harness approach. They are the limit of Eichhorst's Principle, the point where humans return to the loop.

 

## The inventory

 I spent the long weekend writing every layer down. What each one catches. What it misses. Which ones are free and which ones cost project work. Plus the language-specific limits that decide which layers exist in your stack at all.

 The Harness Inventory on Semantic Anchors is the canonical reference.

 Special credit to Avraham Poupko for the modifier insight (private, static, final as error correction for machines), and to Ingo Eichhorst for the Shannon framing that made the rest fall into place.

 

 
 

## LinkedWild
