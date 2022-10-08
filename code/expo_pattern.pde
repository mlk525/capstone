float radius = 500;  //arbitrary starting radius (will change as soon as mouse moves)

float angle = 0;     //angle used to rotate the canvas at the start of each frame
float foo = PI/480;  //arbitrary speed (about 0.3 degrees per frame) used to increment the angle
float rot = 1;       //multiplier for the speed (changes to increase speed when mouse is pressed)

int R1=25, G1=140, B1=255;    //rgb values for blue color
int R2=222, G2=148, B2=0;     //rgb values for gold color
int red = R1, gre = G1, blu = B1;  //variables (initially set to blue) for stroke color

void setup() {
  size (900, 650);
  strokeCap(SQUARE);  //sets line ending style to be square (aids in the blue expo logo aesthetic)
  noFill();
}

void draw () {                    //repeat for every frame (does so automatically)
  background (255);
  translate (width/2, height/2);   //move sketch to center of window to avoid additional variables below
  rotate(angle);                   //rotate sketch by (always increasing) angle
  stroke(red, gre, blu);           //set stroke color
  
  radius = lerp(radius, mouseX, 0.1);  //set new radius based on mouse position and previous radius 
  //(0.1 in lerp interpolates a value very close to current radius; smooths animation)

  for (int i = 0; i < 360; i += 30) {  //repeat for every 30 degree interval of the intended "circle"
    pushMatrix();
    rotate(radians(i));    //temporarily rotate sketch by i to draw each set of 30-degree interval lines

    for (int j = 0; j <= 180; j += 8) {  //repeat every 8 units for the top half of the circle
      float lineThick = map(radius, 0, width, 0.2, 6);  //base thickness of the line on the size of the circle
      strokeWeight (lineThick);
      
      //draw line from top half to bottom half of circle (coordinates calculated with trigonometric functions)
      line(cos(radians (j))*radius, sin(radians(j))*radius, cos(radians(-j))*radius, sin(radians(-j))*radius);
    }
    
    popMatrix();
  }


  if (mousePressed == true) {
    angle += rot*foo;                //if user is pressing the mouse, multiply "rot" with current speed "foo"
    rot = constrain(rot+1, 1, 14);   //increment rot by 1 every frame while the user is pressing the mouse (stops at 14)
    
    red = constrain(red+12, R1, R2);  //increment/decrement rgb values to get to target color (gold)
    gre = constrain(gre+1, G1, G2);   //(increment/decrement values found using trial-and-error)
    blu = constrain(blu-12, B2, B1);
    
  } 
  
  else {
    if (rot >=1) {                   //if the user just released the mouse, decrement rot back to one (slows down spinning more smoothly)
      angle += rot*foo;
      rot = constrain(rot-0.1, 1, 15);
    
      red = constrain(red-10, R1, R2);  //increment/decrement rgb values to get to target color (blue) 
      gre = constrain(gre-1, G1, G2);
      blu = constrain(blu+10, B2, B1);
      //(slower transition desired so smaller increments/decrements used)
    } 
    
    else {  //if speed is the original arbitrary value, just continue spinning circle by incrementing angle
      angle += foo;
    }
  }
}
