# Production Assignment: Digital Art & Heritage

## Description
This week I decided to experiment with generative, algorithmic art. I was inspired by a [video](https://www.youtube.com/watch?v=LaarVR1AOvs) that popped up in my recommendeds exploring how Processing could be used to recreate "vintage" computer art. The video raised the question of whether some forms of electronic media has reached a point where they were now considered heritage (or at least museum-worthy). I think the answer is a yes.

I have found examples of obsolete electronic media being displayed in museums around the world, even discovering an [online museum](https://obsoletemedia.org/) exclusively dedicated to the documentation and preservation of obsolete media in audio, video, film, and data storage.


### Geometric Art inspired by "vintage" computer graphics
![Art with Trigonometric functions](https://github.com/mike-leo-k/intro-to-im/blob/master/june%202/digital_art_1.png)

[Code](https://github.com/mlk525/capstone/blob/main/code/vintage_art1.pde)

<details>
  <summary>Warning, fast flashing images!</summary>
  
![Art with random() functions](https://github.com/mlk525/intro-to-im/blob/master/june%202/digital_art_2.gif)
</details>

[Code](https://github.com/mlk525/capstone/blob/main/code/vintage_art2.pde)


I chose to further explore the concept of recontextualizing artistic practices that were originally facilitated by media that is now outdated. This exploration then inspired the use of algorithmic art in recreating cultural practices that can be traced back to hundreds of years in the past. I began by trying to recreate simple zellij patterns. [Zellij](https://en.wikipedia.org/wiki/Zellij) is a style of hand-chiseled mosaic tilework, most notably used to create elaborate Islamic geometric motifs such as radiating star patterns (pictured below).

<p align="center">
  <img width="500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/20151118_Morocco_2477_Fez_sRGB_%2824188205260%29.jpg/435px-20151118_Morocco_2477_Fez_sRGB_%2824188205260%29.jpg">
</p>

I began trying to emulate this style by looking for ways to create a circle with straight lines. After playing around with different settings, I set the main algorithm to draws lines with 8-unit spacings at 30-degree intervals. This is done using sine and cosine trigonometric functions. The slow spinning of the design was used to emphasize the "circular" nature. I tried p5js for this iteration, and it worked fairly well, but hosting the visualization on my PC definitely made it a lot smoother.

### Algorithmic Art inspired by geometric Zellij pieces
<p align="center">
  <a href="https://youtu.be/Li-B1tOE9Wk">
  <img width="500" src="images/zellij pattern.png">
  </a>
</p>

[Code](https://github.com/mlk525/capstone/blob/main/code/zellij.js)

Seeing how the spinning changed my perception of the shape, I was reminded of the switch from the geometric blue Expo logo to the more rounded gold logo. I remade the code in Processing and added a layer of interactivity where clicking and holding the mouse button speeds up the rotation. Additionally, the RGB values of the original color of the lines (blue) are modified appropriately (incremented/decremented) to become gold. I also linked the size of the "circle" to the x-coordinate of the user's mouse, allowing for closer inspection of the formation of this “circle” using straight lines.

### Algorithmic Art inspired by Islamic geometric patterns & the Expo 2020 logo design
<table border="0" width="100%"><tr>
  <td> <a href="https://youtu.be/SrVwAy6U0YM"><img src="images/blue pattern.png" alt="Expo 2020 Blue Logo style" style="width: 100%;"/></a></td>
  <td> <a href="https://youtu.be/SrVwAy6U0YM"><img src="images/gold pattern.png" alt="Expo 2020 GOld Logo style" style="width: 100%;"/></a></td>
</tr></table>

[Code](https://github.com/mlk525/capstone/blob/main/code/expo_pattern.pde)

This was an interesting exercise and I was surprised at how I ended up exploring Islamic geometric patterns, having begun with vintage computer art. Islamic geometric patterns have been widely used in Islamic ornament since the ninth century, and the amount of Islamic art and architecture to feature it is astonishing. Moroccan zellij tiles are only one of the many art forms that employ it, and the idea of using digital art to recreate these patterns is certainly intriguing. Presenting this sort of duality between "traditional" heritage and recontextualized heritage seems like an interesting avenue to explore.
