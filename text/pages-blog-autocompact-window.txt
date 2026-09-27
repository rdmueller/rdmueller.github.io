# autoCompactWindow: keep Claude Code's context lean and cheap
Page: https://rdmueller.github.io/pages/blog/autocompact-window.html

EN
 16 August 2026
 

 

# autoCompactWindow: keep Claude Code's context lean and cheap

 

 
 
 

 
 Since Claude Code made the 1M context window the default, I have wanted one small config: to set the point myself where it compacts automatically. It exists now. It is called autoCompactWindow, can be set through /autocompact, and almost nobody knows about it. Did you?

 Why do I set it lower than 1M? Cost, plainly. An LLM has no memory. Every turn resends the entire context and pays for it again. A history of 900,000 tokens gets billed in full with every single answer. You feel it even on a flat rate, because sooner or later you hit your limit. The big window is convenient, but it runs up your bill the whole time.

 The 1M window is a ceiling, not a target. You never have to fill it. With autoCompactWindow you set the compact threshold to, say, 400,000 tokens. Claude Code then summarizes the history earlier, and you keep working with a lean context.

 The second effect is quality. Models lose the middle in very long contexts. 800,000 tokens of old tool output dilute attention more than they help. A compact summary often carries further than the full history.

 Here is the odd part: how easily a feature like this slips by. Claude Code changes in small steps, several versions a week (often even a day!), each with a handful of fixes. In that stream even a useful new dial reads like noise. I only found autoCompactWindow because I noticed the autocomplete in the CLI. I then asked Claude to search for it in the changelog.

 What I would also like: a feature which allows the model to trigger the compact itself when a feature is done. Currently that is not possible, /compact is a user command.

 But there is a workaround that does almost the same thing. I learned it from Uwe Franke: you instruct Claude to work on issues and other tasks in a subagent. It is not a real compact, because the subagent's context is discarded afterwards. Yet the subagent hands its summary back to the main session, much like a compact would. The main session stays lean and doesn't hit the ceiling so soon.

 If you work with the 1M window, set autoCompactWindow to a value well below it and watch how much calmer and cheaper your sessions run.

 

 
 

## LinkedWild
