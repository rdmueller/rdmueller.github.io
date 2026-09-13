# Risk Radar Skills: The Automation Layer
Page: https://rdmueller.github.io/pages/blog/risk-radar-skills.html

EN
 17. Februar 2026
 

 

# Risk Radar Skills: The Automation Layer

 

 
 
 

 
 Last week I shared the Vibe-Coding Risk Radar — an interactive tool that helps you decide which AI-generated code needs review and which mitigations to apply.

 The feedback was clear: "Great visualization. But how do I actually implement this in my workflow?"

 So Claude and I built the automation layer.

 Two new Claude Code skills turn the Risk Radar from a decision framework into an executable workflow:

 `/risk-assess` — Interactive Risk Assessment → Scans your repository and detects modules automatically → Pattern-matches code types (auth, API, UI) with evidence → Asks targeted questions for uncertain dimensions → Calculates tier (1-4) based on highest risk dimension → Generates an ADR (nach Nygard) documenting the decision → Writes structured assessment to CLAUDE.md

 `/risk-mitigate` — Automated Mitigation Implementation → Reads assessment from CLAUDE.md → Detects existing tools (linters, SAST, pre-commit hooks) → Shows gap analysis by tier (cumulative requirements) → Installs missing measures interactively (with your confirmation) → Verifies each tool works, commits individually to git → Updates the ADR status from "Proposed" to "Accepted" → Keeps CLAUDE.md in sync with actual state

 The workflow now looks like this: 1. Run `/risk-assess` → Get tier classification + ADR 2. Security team reviews ADR → Approves assessment 3. Run `/risk-mitigate` → Tools get installed automatically 4. Security team reviews ADR again → Confirms mitigations active 5. Living documentation stays current with every change

 Examples of what gets automated: • Tier 1: ESLint, Prettier, Husky pre-commit, npm audit in CI • Tier 2: Semgrep SAST, fast-check property tests, SonarQube • Tier 3: Branch protection via GitHub API, fuzzing setup, CODEOWNERS • Tier 4: Formal verification guidance (Dafny, TLA+), MC/DC coverage

 The skills don't just recommend — they configure, verify, commit, and track. The ADR bridges developers and security teams with a shared artifact both can approve.

 This closes the loop: - Developers get automated tooling help - Security teams get transparent ADRs to review - The codebase documents its own risk posture - No Excel files that nobody reads

 Built with Semantic Anchors throughout (MECE, ADR nach Nygard, IEC 61508 SIL levels).

 Try it yourself: https://github.com/LLM-Coding/vibe-coding-risk-radar

 Skills live in `.claude/skills/` — install via `bash install-skills.sh`

 Your feedback made this better. If you try it, let me know what works and what doesn't!

 

 
 

## LinkedWild
