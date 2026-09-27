# The Agent Made Itself Obsolete. That Was Its Best Work.
Page: https://rdmueller.github.io/pages/blog/agents-vs-workflows.html

EN
 2. April 2026
 

 

# The Agent Made Itself Obsolete. That Was Its Best Work.

 

 
 
 

 
 I produced 32 videos with AI. Every image, every voice, every subtitle. What I learned about agents doesn't match the current hype.

 The first version was fully agentic. Claude researched the topic, wrote the script, translated it, generated images, synthesized speech, synchronized subtitles, and assembled the video. All in one session, all autonomous. Sounds like the dream, right?

 The result: videos without a logo. Subtitles two seconds ahead of the voice. Images in the wrong aspect ratio. Every third video had something different missing. The agent improvised creatively where it should have followed a rigid schema.

 So I did the opposite. I asked the agent to write me fixed scripts. generate-voice.py, generate-image.py, generate-video.py. Each script does exactly one thing, the same way every time. Logo always in the same spot. Subtitles frame-synced. Resolution always correct.

 Four steps still need an LLM: describing the topic, translating text, writing image prompts, generating images. The rest is Python. No agent, no autonomous decision-making, no "let me handle this." Just scripts that the agent wrote once, running deterministically from then on.

 My takeaway after 32 videos: the agent's value was not in doing the work autonomously. It was in helping me build a workflow that works without it. The agent made itself obsolete, and that was its best contribution.

 When people talk about agents, they usually mean autonomous systems making independent decisions. What actually works better in practice: agents that help you build systems. Systems that no longer need agents.

 

 
 

## LinkedWild
