# My to-do list is a text file, and my AI reads it too
Page: https://rdmueller.github.io/pages/blog/plaintext-todo-format.html

EN
 26 August 2026
 

 

# My to-do list is a text file, and my AI reads it too

 

 
 
 

 
 For years my to-do list moved into a new app every six months. Todoist, Things, Notion, a whiteboard, back to Todoist. Each one wanted me to learn its buttons, and none of them survived contact with a busy week.

Now my task manager is a text file. todos.md, plain markdown, in a git repository. It is boring on purpose, and that is why it works. I can grep it, diff it, read its history, and, the part I did not plan for, my AI assistant reads and writes the same file in the same syntax I would have typed.

## The format is just markdown checkboxes

The base is the TODO.md convention: GitHub-flavoured markdown checkboxes, with a few inline tags borrowed from the older todo.txt idea.

- [ ] Draft the conference abstract +Talk #must due:2026-09-14 est:1h
 - [ ] Outline the three key points id:0413 est:30m
 - [ ] Write it and submit id:0414 est:30m
- [x] Book the hotel id:0129

A checkbox holds the state. @name marks a person, +project a project, #tag a context, due: a deadline, created: the day it appeared, and id: a stable number so I can point at a task later. Finished tasks move to a second file, done.md, grouped by month. Nothing here needs more than a shell script from 2010 could parse.

## Three additions that make it mine

### est: and the 30-minute rule

est: records how long a task should take: 15m, 30m, 1h, 2h, 4h, 1d. The rule on top of it: anything longer than 30 minutes gets broken into subtasks, each 30 minutes or less, unless it genuinely cannot be split. A 30-minute block is something you can always find between two meetings. A four-hour task never starts. Four thirty-minute ones do.

### MoSCoW as colour

Priority is a tag: #must, #should, #could, #wont. On their own they are just words in a line. A small static HTML page reads the file and paints each task in its colour, so I see the shape of the week without opening anything heavy.

### Subtasks

Subtasks are indented checkbox lines under their parent. The parent keeps its est: as an aggregate; the children sum to it and each stays under the 30-minute line.

## The same file, two writers

The viewer is a single static HTML page. No backend, no database, no API. It reads todos.md and shows the week, and it lets me tick a box or jot a comment. When I am done it builds a short prompt and copies it to the clipboard. I paste that back into my assistant, and the assistant edits the same plaintext files. The loop closes through the clipboard, and the plaintext stays the interface between me and the model.

## Set it up with your own assistant

You do not need my viewer to get most of the value. You need the format and an assistant that respects it. Drop these rules into your project's CLAUDE.md (or AGENTS.md, or your assistant's system prompt):

## todos.md format
- Tasks live in todos.md as GitHub-flavoured markdown checkboxes.
- Syntax: - [ ] text @person +project #tag id:NNNN created:YYYY-MM-DD due:YYYY-MM-DD est:X
- est is one of: 15m, 30m, 1h, 2h, 4h, 1d.
- Every open leaf task must be 30 minutes or less. If it is larger, break it
 into indented subtasks, each with its own id and est, unless it genuinely
 cannot be split.
- Priority is a MoSCoW tag: #must, #should, #could, #wont.
- New task: assign the next free id and today's date as created:.
- Done: mark - [x] and move the line to done.md, grouped by month.
- Never invent tasks or data; only change what I ask for.

Then, once, ask the assistant to bootstrap the files:

Create todos.md and done.md following the format in CLAUDE.md. Add these
tasks with sensible est values, break anything over 30 minutes into subtasks,
and tag each with a MoSCoW priority: [ your tasks here ]

From then on you talk to it in plain language. "The hotel is booked" ticks the box and moves the line to done.md. "Break down the JavaLand submission" turns one line into three. The file stays readable to you, to a script, and to the model.

## Why this beats an app

An app keeps your tasks inside someone else's database, behind someone else's buttons, on someone else's release schedule. A text file you can grep, diff, version, back up, and hand to an LLM. Mine has outlived four apps, and it reads the same to a human, a shell script, and a language model. That is the whole trick.

 

 
 

## LinkedWild
