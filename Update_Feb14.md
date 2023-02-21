# Progress Update (Feb 14)
The concept of abstraction as decolonization was a breakthrough idea for me, so I decided to further explore it by making the interaction center around the viewer/user coming closer to observe the painting. I wanted to see how the idea of a painting that doesn't want to be observed could translate into this concept, and I decided to try making the painting break apart and drift away from itself when the viewer tries to come closer to look at it.

To start, I experimented with making a simple circle avoid my nose (detected using PoseNet). This involved getting the position of my nose in relation to the canvas and then using that information to calculate the movement of the circle. I started with the circle repelling code from earlier this semester, and in addition to the force pulling the circle towards the center of the screen I also made sure there was a force pushing the circle away from my nose. I switched the mouseIsPressed with a threshold of how close the user was to the painting. I did this by measuring the distance between one eye and the nose, since that distance gets bigger when the user comes closer (relative to the camera).

Once I got the circle to react to my nose when I was a certain distance (or less) from the screen, I worked on getting the portrait to break apart and drift away in a similar way. I quickly chopped up the portrait in GIMP, saved each segment as a separate file, and had them all gravitate to the center to properly assemble the picture. I then added a drift to make each segment avoid my nose a little differently. While playing around with this amount I accidentally created a super glitchy effect, that gave me the idea to make the portrait glitch in addition to drifting apart. I have a GIF of the final result below.

<details>
  <summary>Glitched portrait v0 demo</summary>
    <p align="center">
      <img width="600" src="https://github.com/mlk525/capstone/blob/main/images/glitched%20portrait%20v2.gif">
    </p>
</details>

[Code](https://editor.p5js.org/taxicabguy/sketches/iDiXLz4WS) | [Demo](https://editor.p5js.org/taxicabguy/full/iDiXLz4WS)

Overall, I am happy with the direction that my project is headed and I’m looking forward to exploring different glitching effects. I also intend to ultimately use my own art to do this, manipulating a colonial style original to become a more contemporary postcolonial critique of itself (inspired by the images I found [last week](https://github.com/mlk525/capstone/blob/main/Update_Feb7.md)).
