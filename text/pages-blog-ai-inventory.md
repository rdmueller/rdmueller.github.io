# I Inventoried My Entire Apartment with AI
Page: https://rdmueller.github.io/pages/blog/ai-inventory.html

EN
 3. April 2026
 

 

# I Inventoried My Entire Apartment with AI

 

 
 
 

 
 I inventoried my entire apartment with AI. Not with a barcode scanner. Not with a spreadsheet. With photos and Claude Code.

 It started during spring cleaning. "Where was Catan again?" "Did we have a book by Kawasaki?" "Which drawer has the Xbox controllers?" I had this idea: what if I just photograph every shelf, drawer and cabinet, and let an AI figure out what's inside?

 The setup was simple. Take a photo of each storage location. Let Claude analyze the image. Store the results in JSON. Build a search page that answers "Where is X?" with the actual photo and a position marker.

 The first attempt was humbling. Claude recognized objects well, but book titles on vertical spines were mostly unreadable. Makes sense. The text is rotated 90 degrees. Even multimodal AI struggles with that.

 So I wrote a preprocessing step. Each photo gets sliced into overlapping strips and rotated 90 degrees. Vertical text becomes horizontal. Suddenly Claude reads "The Macintosh Way, Guy Kawasaki" instead of returning "unreadable spine." One photo becomes 14 image crops: 5 rotated strips for book spines, 9 unrotated quarters for objects like figurines, games or vases. The 50% overlap ensures nothing gets lost at a cut boundary.

 Then the scaling problem hit. My bookshelf has 18 compartments. At 14 crops each, that's 250+ images for one piece of furniture. After 12 compartments, the context window was full and previous results were gone.

 The fix: subagents. Each compartment gets its own agent. The agent receives 15 images (the original plus 14 crops), analyzes them, and returns a compact text list. The image data stays in the agent's context. The main context only gets the results. 18 agents in parallel. All 18 compartments analyzed in under 60 seconds.

 The result is a JSON database with around 200 items and a searchable HTML page. Search for "Kawasaki" and you get 3 hits in 2 compartments, each with a colored position overlay on the detail photo. Search for "Xbox" and you see controllers, console and games in the sideboard, each marked on the drawer photo. Red overlays for book positions, blue overlays for objects.

 What I learned: Image preprocessing makes or breaks the result. The crop-and-rotate technique turned spine recognition from "barely usable" to "surprisingly good." Subagents are the key to scaling. Without them, the project would have died at context limits. With them, it scales linearly: one agent per compartment, all in parallel.

 Claude Code did more than analyze images. It wrote the ffmpeg preprocessing code, designed the JSON structure, built the search page, and documented the workflow as a reusable skill. I didn't write a single line of code by hand.

 From "I have a photo" to "searchable database with position markers" in one CLI tool. Next up: the rest of the apartment. About 50 storage locations, probably 1000+ items.

 

 
 

## LinkedWild
