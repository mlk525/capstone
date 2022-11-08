# Blog Post: Hardest Technology

Since I've worked with robotics in the context of performance before, I'm fairly confident in my ability to work with arduinos, servo motors and basic sensors. Two of my exhibition pieces will be mini-robots dressed up to be "artifacts" that interact with users, and I didn't foresee any major challenges in bringing them to life (other than inevitably having to troubleshoot an hour before they go on display). On the other hand, I wanted my third exhibition piece to be an interactive painting/inscription/any kind of 2D media. I'm currently debating between Egyptian hieroglyphs sculpted in relief and tomb paintings depicting scenes of the afterlife. In either case, I would need to me able to manipulate the images to move and respond to the user.

I have never worked with any sort of visual tracking technology before, so I think the most challenging technology for me to use would be motion tracking for the purposes of the paintings "seeing" the users. After talking to Mang about the basic requirements of what I wanted the paintings to be able to do (things like eyes following the users, reacting to users coming closer, maybe even reacting to multiple people), he recommended the ml5.js model PoseNet. He pointed me to a few resources to learn how to use PoseNet, and I decided to start with the goal of creating a painting whose eyes would use the laptop camera to track the person looking at it.

<p align="center">
  <img width="600" src="https://github.com/mlk525/capstone/blob/main/images/creepy_painting.jpg">
</p>

Using p5.js, I was able to get a rough version of the sketch working using a close up of the Mona Lisa as a test. I edited out her eyes and placed the image over the canvas with the "eyes" I created, to make the eyes pop out less (they looked cartoonish before this change it was very entertaining). I mapped the movement of the user's nose (as detected by the PoseNet model) to the dimensions of the eyes to make the eyes follow the user's face around. 

[Code](https://github.com/mlk525/capstone/blob/main/code/creepy_painting.js) | [Demo](https://editor.p5js.org/taxicabguy/full/6dTJ59jYQ)

I think I succeeded with my initial goal for the most part, and through this basic implementation of the idea I learned a couple things:
* The mapping of the pupils should probably have a reduced range, because if you move your head too far to either the left or right the painting just seems to be looking off to the side. This might also be because of the way Mona Lisa is posed, but in any case I need to experiment more with the mapping.
* I edited out the eyes fairly quickly and didn't go back to make adjustments, which led to the painting looking a little strange; I feel like this effect would better on more geometric forms in general, than on more realistic paintings.
* I realized you can use the distance between the eye and nose to determine how close someone is to the camera, so in my next iteration I plan to use that to make the painting react to proximity (maybe by flinching? and actually saying something).
* This also made me realize it would be hard to animate mouths to match any speech I record, so my next iteration will focus on that as well. Either I preload mouth shapes and program a sequence based on whats being said, or I find a talking motion that is a close enough match to most speech (I hope I don't have to do this, a lot of early or low-budget animations tend to use this technique and it can get jarring if the character is in focus).
* I also need to decide how the painting will be displayed. My immediate instinct is to use a projector (which Mang supported), but I'm worried about how to place the projector so that coming close to the screen/wall won't obscure any part of it. I guess another solution is a large TV screen (which I have used for exhibitions in the past), but I feel like that will break the impression of a painting mounted on the wall.
