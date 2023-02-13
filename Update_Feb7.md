# Progress Update (Feb 7)
This week, I started experimenting with crossfading between multiple images based on user movement. My goal was to create a visual representation of the shift in perspective as one moves from perceiving colonized cultures as colonizers would, to perceiving them as the colonized themselves would.

I started with a simple crossfade code, where two images would swap based on the position of the mouse. I made the alpha value of the images (which controls transparency) directly depend on the position of the mouse, which would blend the two images together, creating a smooth transition as the mouse moves across the screen. The code was straightforward, and the crossfade effect seemed to be exactly what I wanted. Unfortunately, while moving the mouse from left to right resulted in a smooth transition, moving it from right to left resulted in random visual glitches. Regardless I decided to move forward with making a PoseNet version.

I added PoseNet code and switched the independent variable from the mouse coordinates to the nose coordinates of any detected users. While the colors did transition, it was far from smooth.

[Code](https://editor.p5js.org/taxicabguy/sketches/gfDQQHDKl) | [Demo](https://editor.p5js.org/taxicabguy/full/gfDQQHDKl)

I'm not sure how to fix this outside of changing the crossfade mechanic entirely (perhaps using the lerp function?), but I was happy with the progress because everything else worked as it should. 

I did feel like the effect would be more impactful if the interactivity depended on your distance from the painting rather than on which side of it you were. This would also solve the problem of deciding which person to focus on if there were multiple people detected (the closest one). I think having an element of "looking closer" would make for a more powerful relationship between users/viewers and the piece.

I've also been looking at colonial and contemporary Indian portraits and thinking more about the abstraction aspect; I think it would be a good idea to try focusing the interaction on transforming a colonial depiction of "the Indian" into a contemporary depiction that resists categorization. I'm thinking of zeroing in on the abstraction concept to have elements of the portrait drift apart and glitch around as the user comes close to observe the painting. I requested a book from the NYU Library called "The Indian Portrait, 1560-1860" for more historical and sociocultural context on the subject. The book comes with a catalogue of historical portraits which I plan to use for inspiration. Some of the contemporary paintings I've been looking at for inspiration are below:

<p align="center">
  <img width="600" src="https://www.vervemagazine.in/wp-content/uploads/2014/01/Soil-And-Stones-Souls-And-Songs.jpg">
</p>

<p align="center">
  <img width="600" src="https://media.vogue.in/wp-content/uploads/2019/12/Arshi-Ahmadzai.jpg">
</p>

<p align="center">
  <img width="600" src="https://media.vogue.in/wp-content/uploads/2019/12/Nandan-Ghiya-Digital-Print-36x30.jpg">
</p>


