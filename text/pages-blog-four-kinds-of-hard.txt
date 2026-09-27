# Four Kinds of Hard: Building an AI PowerPoint Generator
Page: https://rdmueller.github.io/pages/blog/four-kinds-of-hard.html

EN
 1. Juli 2026
 

 

# Four Kinds of Hard: Building an AI PowerPoint Generator

 

 
 
 

 
 I built a PowerPoint generator that an AI model drives through python-pptx. The interesting part was not what worked. It was writing down what stays hard, and noticing that "hard" is not one thing. It comes in four very different flavors, and each flavor needs a different answer. A bigger model fixes almost none of them.

 

## The tool simply cannot do it

 Some things fail because python-pptx has no API for them, full stop.

 
 
- New master and layout designs. The library fills placeholders, it does not invent slide masters. So a human authorizes the design. That turned into a clean division of labor rather than a limitation.
 
- SmartArt and native diagrams. Not producible at all. The workaround is a diagram rendered to an image (PlantUML, Mermaid, Graphviz to PNG) and embedded. The cost: it is no longer editable inside PowerPoint.
 
- Animations and transitions. Practically no support, only raw OOXML. Rarely worth the effort and hard to verify.
 
- Media (video, audio, animated GIF). Very limited.
 
- Clean SVG embedding. Only partial, usually rasterized. That hurts most with logos.
 

 The pattern here is engineering, not intelligence. You route around the gap: diagrams become images, layouts become a human job.

 

## The model has no eye

 This is the real weakness of a language model, and the most interesting class.

 
 
- Does the text fit? Overflow and line breaks only become visible after rendering. There is no built-in way to know in advance.
 
- Aesthetics. Whitespace, optical balance, "does this look good". No reliable inner judgment.
 
- Too much for one slide. Knowing when content must be split or cut.
 
- Narrative, arc, and the "so what". The most important judgment of all.
 

 Two answers, not one. For everything visual, the generator renders the slide through a COM or LibreOffice loop and actually looks at the result. That render loop is what gives the model an eye it does not have on its own. For the narrative, no loop helps, so that work moves to a Socratic dialogue with a human up front, before a single slide exists.

 

## Determinism fights generation

 The generator has to produce the same bytes from the same input. Generated images break that promise: create them twice and they differ. So they are frozen and cached, and anything time, random, or network dependent is kept out of the render path. Reproducibility is a design constraint, not an afterthought.

 

## Portability is never quite solved

 
 
- Fonts. Exact typography needs the exact fonts installed. Otherwise you get substitution, and substitution changes the line breaks. LibreOffice and PowerPoint disagree. Font embedding is possible but fiddly.
 
- Engine drift. LibreOffice, PowerPoint, the web version and Mac all render a little differently. The last pixel is never guaranteed.
 

 

## The useful middle ground

 Not everything is either trivial or impossible. A few things are half-doable and high-impact.

 
 
- Charts. python-pptx can build native bar, line and pie charts from real data. On-brand styling is fiddly, but the data binding is real, and the result stays editable.
 
- Tables. Possible, but cell styling and merges are tedious.
 
- Image detail. Contain versus cover cropping, masks, consistent icon sets, and image licensing all need care.
 
- Nested bullets, inline mixed formatting, hyperlinks, auto-numbering. All doable, all fiddly.
 
- Formulas and code. Math via OMML is hard, code blocks with syntax highlighting are tedious.
 
- Accessibility. Alt text, reading order, contrast, tab order. Easy to forget, checked far too rarely.
 
- Brand judgment beyond tokens. Which accent when, the photo look, the icon style. A color token does not capture taste.
 

 

## What this means for the design

 
 
- Lean on the strengths: fill master placeholders, native charts, frozen images, and the render loop as a quality gate.
 
- Avoid or offload: animations, SmartArt, and bespoke per-slide layouts. Diagrams go through an image pipeline. The narrative goes to a human, up front.
 
- Invest where it pays: native data charts and the diagram-as-image pipeline.
 

 The lesson I keep coming back to is simple. A bigger model fixes neither "the tool cannot" nor "the model has no eye". The first is an engineering problem, the second is a feedback-loop problem. The real work was never the slides. It was building the harness around the model: the master, the render loop, the cache, and the human where judgment belongs.

 Which of these walls have you already gotten past?

 

 
 

## LinkedWild
