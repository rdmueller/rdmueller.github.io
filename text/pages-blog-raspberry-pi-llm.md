# Raspberry Pi 5 + Local LLM
Page: https://rdmueller.github.io/pages/blog/raspberry-pi-llm.html

EN
 1. Februar 2026
 

 

# Can a Raspberry Pi 5 Run a Local LLM for Coding Assistance?

 An experiment in edge AI—and why context size is a deployment constraint

 

 
 
 

 
 I wanted to know: can a Raspberry Pi 5 run local LLMs for coding tasks? The hardware successfully ran smaller models via Ollama, but practical limitations emerged quickly.

 

## The Experiment

 Setting up Ollama on the Pi 5 was straightforward. Smaller models loaded fine. But then I tried to use it with Claude Code's workflow...

 

## The Showstopper

 The problem isn't running the model—it's context processing speed.

 Claude Code requires an ~11,000 token system prompt before generating any response. At the Pi's processing rate:

 
 11,000 tokens at 5 tok/s = several minutes just to process the input

 

 This exceeds typical timeout thresholds before any actual response generation occurs.

 

## The Workaround

 Using n8n with custom, shorter prompts (50 tokens) achieved 15-30 second response times. This works for focused automation tasks like:

 
 
- Translations
 
- Smart home commands
 
- Simple text processing
 

 

## Critical Insights

 
 
- Small models lack reasoning depth compared to larger counterparts
 
- "Context size" is a deployment constraint, not merely a model property
 
- Device capability differs from practical usability for specific tasks
 
- Processing every context token before generation becomes the dominant factor on constrained hardware
 

 

## The Right Question

 Rather than asking "does it run?", evaluators should ask:

 
 "What context size is practical, and what does that mean for my use case?"

 

 For simple, focused tasks with minimal context: yes, it works.

 For agentic coding workflows: not yet practical.

 

 
 

## LinkedWild
