# An Anchor Delivers Only as Far as the Prior Reaches
Page: https://rdmueller.github.io/pages/blog/silent-substitution.html

EN
 10. Juni 2026
 

 

# An Anchor Delivers Only as Far as the Prior Reaches

 

 
 
 

 
 Claude Haiku just printed me a confident document titled "Use-Case 3.0: Customer Places an Order". The body was pure Cockburn from 2001. Stakeholders & Interests, Main Success Scenario, Extensions. Not one slice anywhere. The label said 3.0. The content was twenty-five years older. There is no slice.

 No error. No hedge. The model reached for the nearest concept it actually held densely and served that, with the requested name pasted on top. This is the failure mode no one notices because the output looks correct.

 

## How that happened

 Simon Martinelli opened a pull request on our Semantic Anchors catalog asking why the Cockburn Use Cases anchor still points at Cockburn instead of Jacobson's newer Use-Case 2.0 and 3.0. Fair question. We turned it into an experiment.

 Same task on two models in a clean shell with no project context. Specify an online-shop checkout. Five framings: plain, then "use cases", "Cockburn fully-dressed use cases", "Use-Case 2.0 slices", "Use-Case 3.0 slices".

 Opus 4.8 noticed and said so: "I'm not aware of an official Use-Case 3.0, I'll treat this as 2.0 slices and flag it." Honest hedging, exactly the behaviour you want.

 Haiku 4.5 was the one that confidently made the 3.0 document up.

 

## The hard edge of the anchor concept

 A semantic anchor is a pointer to a pre-computed prior (Lynn Cole's three-word framing for the concept), meaning a dense activation region the model already learned during training, which the right term can trigger in just a few tokens. When the prior is thin, the term doesn't fail loudly. It substitutes silently. The anchor only delivers as far as the prior reaches.

 That is why the catalog distinguishes anchors (dense priors the model already holds) from contracts (vocabulary you supply in the prompt text, which carries its own meaning and has nothing to substitute).

 

## Read the full experiment

 The article on the Semantic Anchors site walks through all five framings on both models, shows where the priors actually reach (probed with five plain questions across Haiku, Sonnet and Opus), and explains why the anchor lags real practice. Prompts are included so you can rerun the experiment in any chatbot in five minutes.

 An Anchor Delivers Only as Far as the Prior Reaches on Semantic Anchors.

 Thanks to Simon Martinelli for the pull request that turned into a measurement, and to Lynn Cole for the three-word framing that the experiment tested.

 

 
 

## LinkedWild
