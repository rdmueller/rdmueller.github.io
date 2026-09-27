# Three Days. I Did Not Type a Single Line of Code.
Page: https://rdmueller.github.io/pages/blog/agentic-coding-weekend.html

EN
 21. Juni 2026
 

 

# Three Days. I Did Not Type a Single Line of Code.

 

 
 
 

 
 Three days. I did not type a single line of code.

 This weekend I sat at my desk and watched docToolchain, an open-source project I have been building for a decade, get a runtime modernization, a new website engine, six new features, and updated architecture documentation. All of it written by a coding agent. My job was directing.

 

## The numbers from Friday morning to now

 
 
- 158 commits.
 
- 44 pull requests merged.
 
- +7,769 / -6,286 lines of code.
 
- 192 files changed.
 

 

## The honest part

 For years I have been avoiding exactly this kind of work. A runtime upgrade is invisible to users and breaks everything underneath. Replacing the website engine is the same kind of job. So those tasks sat on the backlog and rotted there, release after release. The reward was always invisible, the risk was always real, and I had paying work waiting.

 This weekend they did not sit there anymore.

 

## For context

 A runtime upgrade like the one I just shipped, from Java 17 to Java 25 with the build system rebuilt around it, is usually a quarter of full-time work for a small team. We did it in an afternoon. Replacing the website generation engine with something self-contained is a multi-week refactoring. It took a few hours. Adding four new features that integrate cleanly with the toolchain, with tests and documentation, would normally fill a sprint. Done in an evening.

 This is not a demo. It will be production code on the main branch of a project that runs in many companies' build pipelines today.

 

## What surprises me

 The speed surprises me, and I have been working with agents for over a year. What used to be an idea I would write down and revisit next quarter is now a thing that exists by dinner. The bottleneck is no longer typing. The bottleneck is knowing what you actually want, and being willing to start the work you have been postponing for years.

 If you are still benchmarking AI coding tools by how well they autocomplete a function, you are measuring the wrong thing. The interesting question is what your team can ship in a weekend, when the rotting backlog stops being a sunk cost.

 Repo, if you want to see what 158 weekend commits look like: github.com/docToolchain/docToolchain/tree/main-4.x

 PS: this is a game changer for those unpaid, single-maintainer open source projects.

 

 
 

## LinkedWild
