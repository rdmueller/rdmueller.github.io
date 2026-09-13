# Same Prompt, New Image Model: Switching to gpt-image-2
Page: https://rdmueller.github.io/pages/blog/gpt-image-2-switch.html

EN
 10. Juni 2026
 

 

# Same Prompt, New Image Model: Switching to gpt-image-2

 

 
 
 

 
 I switched from gpt-image-1.5 to gpt-image-2 and the results are hard to unsee.

 Same prompt. Same references. The only variable was the image model. Top row in the grid: gpt-image-1.5, the workhorse I have been using for months. Bottom row: gpt-image-2, OpenAI's newer model. I switched because I got a deprecation note on the 1.5 version.

 

## Character consistency caught up

 Ralf keeps his grey hair, his glasses, his beard across all three reruns. Elfi keeps her four paws, her seal-lynx coloring, her blue eyes. The 1.5 variants drift on small details. The 2 variants are stable enough that all three could go to print.

 

## Composition got more deliberate

 Ralf is positioned to read the label, Elfi is framed inside the box, the packing peanuts sit naturally. The 1.5 variants feel like first drafts that need a second pass.

 

## The practical consequence

 Two lines in two Python files. I switched the default in my LinkedIn image-generation skill so I do not have to pass --image-model every time. The next post I generate will silently use the better model.

 If you generate images for content, gpt-image-2 is worth a quiet re-run of whatever you produced in the last few months.

 

 
 

## LinkedWild
