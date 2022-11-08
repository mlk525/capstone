# Blog Post: Hardest Technology

Since I've worked with robotics in the context of performance before, I'm fairly confident in my ability to work with arduinos, servo motors and basic sensors. Two of my exhibition pieces will be mini-robots dressed up to be "artifacts" that interact with users, and I didn't foresee any major challenges in bringing them to life (other than inevitably having to troubleshoot an hour before they go on display). On the other hand, I wanted my third exhibition piece to be an interactive painting/inscription/any kind of 2D media. I'm currently debating between Egyptian hieroglyphs sculpted in relief and tomb paintings depicting scenes of the afterlife. In either case, I would need to me able to manipulate the images to move and respond to the user.

I have never worked with any sort of visual tracking technology before, so I think the most challenging technology for me to use would be motion tracking for the purposes of the paintings "seeing" the users. After talking to Mang about the basic requirements of what I wanted the paintings to be able to do (things like eyes following the users, reacting to users coming closer, maybe even reacting to multiple people), he recommended the ml5.js model PoseNet. He pointed me to a few resources to learn how to use PoseNet, and I decided to start with the goal of creating a painting whose eyes would use the laptop camera to track the person looking at it.

![Mona Lisa is watching you](https://github.com/mlk525/capstone/blob/main/images/creepy_painting.jpg)

Using p5.js, I was able to get a rough version of the sketch working using a close up of the Mona Lisa as a test. I edited out her eyes and placed the image over the canvas with the "eyes" I created, to make the eyes pop out less (they looked cartoonish before this change it was very entertaining). I mapped the movement of the user's nose (as detected by the PoseNet model) to the width of the eyes to make the eyes follow the user's head movement. 

[Code](https://github.com/mlk525/capstone/blob/main/code/creepy_painting.js) | [Demo](https://editor.p5js.org/taxicabguy/full/6dTJ59jYQ)

