# Socratic Method as a Semantic Anchor
Page: https://rdmueller.github.io/pages/blog/socratic-method-anchor.html

EN
 8. März 2026
 

 

# Socratic Method as a Semantic Anchor

 

 
 
 

 
 How to use the Socratic Method as a Semantic Anchor for requirements

 Most developers start a new project by writing requirements. The problem: you're documenting assumptions you haven't questioned yet.

 Try this instead:

 "Use the Socratic Method to help me clarify requirements for [your project]."

 One sentence. The model won't list requirements -- it will ask questions that expose your blind spots. It activates the full concept: targeted questioning, challenging assumptions, productive use of not-knowing, dialogue-driven clarity.

 ---

 Layering anchors makes it stronger

 "Use the Socratic Method combined with MECE to clarify requirements for [project]. Challenge my assumptions before documenting anything."

 Two anchors working together: - Socratic Method -- asks instead of answers - MECE -- ensures questions cover all areas without overlap

 The result: structured questioning that systematically uncovers what you don't know yet.

 ---

 A concrete example

 Me: "Use the Socratic Method to help me clarify requirements for a CLI tool that generates draw.io diagrams from a JSON architecture model."

 The model asked: - "Who is the primary user -- an architect defining the model, or a developer consuming it?" - "When you say 'generates', do you mean one-time export or continuous sync?" - "What happens when someone edits the diagram in draw.io -- is that a valid workflow or a corruption?"

 That third question uncovered a requirement I hadn't considered: bidirectional sync. It became the core feature of the tool.

 ---

 The delta pattern

 Add constraints to prevent question overload:

 "Use the Socratic Method to clarify requirements. Focus on: stakeholder conflicts, implicit assumptions, and boundary conditions. Don't ask more than 3 questions at a time."

 The delta ("max 3 questions") keeps the dialogue productive instead of overwhelming.

 This follows the Anchor, Delta, Verify pattern: 1. Set the anchor -- activate the established concept 2. Make the delta explicit -- constrain to your context 3. Verify -- check if the questions actually expose assumptions

 ---

 "Socratic Method" is one of 52 curated Semantic Anchors -- precision terms that reliably activate rich knowledge domains in LLMs: https://github.com/LLM-Coding/Semantic-Anchors

 What's your go-to technique for uncovering hidden requirements?

 

 
 

## LinkedWild
