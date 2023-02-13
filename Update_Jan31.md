# Progress Update (Jan 31)
After talking to Aaron about my progress on the face tracking code (using PoseNet), he suggested I take a look at some alternative p5.js techniques for motion detection and tracking. After checking out the recommended resources, specifically displaying [frame difference](https://kylemcdonald.github.io/cv-examples/FrameDifference/) and [optical flow](https://kylemcdonald.github.io/cv-examples/OpticalFlow/), I decided to try a simple application of the optical flow model.
My goal was to create a simple circle that would follow the movement captured by a camera, using dense optical flow to estimate motion vectors that would dictate the circle's motion. First, I needed to create a prototype sketch that didn't use the optical flow, so I could make sure the core code worked. At Mang's suggestion, I used the p5.js example for [input easing](https://p5js.org/examples/input-easing.html) to keep the movement smooth. I modified the source code so that the circle would constantly try to drift to the center, except when the mouse was pressed while it was within a specific distance from the circle.
[Code for mouse prototype](https://editor.p5js.org/taxicabguy/sketches/mZFKrC2yk)

I then modified the optical flow code, turning off the live camera display, removing the graphs and only making the lines indicating motion visible when I pressed a key. I then added code to calculate the cumulative magnitude of the horizontal and vertical motion vectors. Then, adding in the code I had written for the drifiting circle, I swapped the mouse coordinates with the total vector magnitudes, modifying the code to force the circle to move in the direction of the motion detected (if there was motion detected).

<p align="center">
  <img width="600" src="https://github.com/mlk525/capstone/blob/main/images/optical%20flow_circle.png">
</p>

[Code](https://editor.p5js.org/taxicabguy/sketches/czjVQLJmF) | [Demo](https://editor.p5js.org/taxicabguy/full/czjVQLJmF)

The result wasn't quite as smooth as I'd hoped, but it seemed to be functional. I'm not sure if this method is the best to achieve what I'm aiming for, but the way the circle moved did give me new ideas for how the interaction in the painting could play out. I've noted some of the ideas I had below, I might play with some of them over the coming week:
* Have the painting change as the user moves from left to right. This would be used to demonstrate the shift in perspective as one moves from the Occident to the Orient, going from perceiving colonized cultures as colonizers would, to perceiving them as the colonized themselves would.
* Have elements of the painting slowly disconnect and move apart as the user comes closer. The way the screen looked during these experiments made me seriously consider abstract art as a form of proest against colonization.
* Colonization forces stratifications, hierarchies, and categories onto colonized entities (e.g. creating and forcing the label of “Hinduism” onto eclectic Indian religious practices)
* In order to colonize, those in power must define and shape an “other”. From my previous research into colonial representation vs post-colonial representation, I found that colonial Indian art (for example) focuses on traditional imagery to uphold an image of “The Indian” as a defined object. Indian artists representing themselves and their culture today have a large tendency to create abstract, magical, and surreal works.
* If I were to use contemporary art as a point of aspiration in contention with colonial art, it would highlight how encounters between the colonizer and the colonized result in warped representations of the colonized.
* This would also look at abstraction as decolonization. I am very interested in centering my project around this concept, especially because I don't really see how I could create a meaningful interaction that simultaneously makes these same points AND resists objectification.

For next week, I'll probably move forward with p5.js, and experiment with images fading into each other based on user movement. I think I'll also look at more Indian artworks for inspiration on what the final subject will be. I felt I had strong arguments for ancient Egypt, but somehow I'm not sure I can convey the same message for an ancient culture.
