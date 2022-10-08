var radius = 20;
var angle = 0;     //angle used to rotate the canvas at the start of each frame
var foo;  //arbitrary speed used to increment the angle
var rot = 1;       //multiplier for the speed
var way = 1;      //indicator of whether the animation is growing or shrinking

function setup() {
  createCanvas(600, 600);
  strokeCap(SQUARE);  //sets line ending style to be square (aids in the blue expo logo aesthetic)
  noFill();
  stroke(0);
  foo = PI/480; //(about 0.3 degrees per frame)
}

function draw() {
  background(255);
  translate (width/2, height/2);   //move sketch to center of window to avoid additional variables below
  rotate(angle);
  if(way == 1){
    radius+=radius*0.002;
    if(radius>4800){
      way = -1;
    }
  }
  
  else if(way == -1){
    radius-=radius*0.002;
    if(radius<20){
      way = 1;
    }
  }
  for (var i = 0; i < 360; i += 22.5) {  //repeat for every 22.5 degree interval of the intended "circle"
    rotate(radians(i));    //temporarily rotate sketch by i to draw each set of 30-degree interval lines

    for (var j = 0; j <= 180; j += 8) {  //repeat every 8 units for the top half of the circle
      let lineThick = map(radius, 0, width, 0.1, 5);  //base thickness of the line on the size of the circle
      strokeWeight (lineThick);
      
      //draw line from top half to bottom half of circle (coordinates calculated with trigonometric functions)
      line(cos(radians (j))*radius, sin(radians(j))*radius, cos(radians(-j))*radius, sin(radians(-j))*radius);
    }
  }
  angle += rot*foo;
  rot = rot*1.001;
}
