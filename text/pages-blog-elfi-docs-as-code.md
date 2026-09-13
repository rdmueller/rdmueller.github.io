# Your New Colleague Has Amnesia | Elfi's Corner
Page: https://rdmueller.github.io/pages/blog/elfi-docs-as-code.html

EN
 28. April 2026
 

 

# Your New Colleague Has Amnesia

 

 
 
 

 
 Elfi is a Ragdoll cat who lives with software architect Ralf D. Müller. She has opinions about software development. This is her column.

 My hooman has a new colleague. It is very smart. It can write code in fourteen languages, explain distributed systems, and generate architecture diagrams in seconds. It also has the long-term memory of a goldfish with a compute budget.

 Every morning it wakes up and has no idea where it is. Who are the other services? What does the database schema look like? Why is that endpoint called /api/v2/legacy-new-final? It reads the documentation to find out. Every single day. From scratch.

 I have lived in this house for five years. I know where every piece of furniture is, which floorboard creaks, where the sun hits at 3pm, and which drawer contains the treats. Nobody had to write this down for me. I built this mental model through five years of continuous observation. I am the original single source of truth.

 The robot cannot do this. It has no continuous observation. It has a context window and whatever files my hooman remembered to keep updated. If the architecture document says the cat food is in the kitchen but six months ago we moved it to the pantry, the robot will look in the kitchen. Every time. With full confidence.

 My hooman used to write documentation for other hoomans. Hoomans are sloppy readers. They skim, they skip, they fill gaps from hallway conversations and gut feeling. It worked well enough. Now the second reader is a machine that reads literally. Every word. No gut feeling. No hallway. If the document says service A talks to service B, it generates code that talks to service B. Even if service B was decommissioned in January.

 This is why Ralf is rebuilding his documentation toolchain. He released something called Bausteinsicht this week. It keeps architecture diagrams in sync with a JSON model. Bidirectional. Real-time. The robot reads the JSON. The hooman reads the diagram. Both see the same architecture.

 He is very proud of this. I am moderately impressed. The tool even has an llms.txt file so the robot understands how to use the tool. Documentation for a robot about a tool that creates documentation for robots. Very recursive. Very hooman.

 My documentation system is simpler. I sit on the keyboard until someone pays attention. Then I walk to whatever needs documenting. This has never drifted from reality. Zero sync issues. Five nines uptime.

 But I understand the problem. Hoomans forget things. Robots forget everything. If your documentation is not current, your robot assistant is navigating your codebase with last year's map. And unlike a cat, it will not notice when the furniture has moved. It will just walk into the wall and generate a pull request about it.

 

 
 

## LinkedWild
