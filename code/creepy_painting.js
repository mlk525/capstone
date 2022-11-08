let img;
let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;

function preload() {
  img = loadImage('monalisa_close.png')
}

function setup() {
  createCanvas(970, 546);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
  
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    //let eX = poses[0].pose.keypoints[1].position.x;
    //let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    //eyelX = lerp(eyelX, eX, 0.5);
    //eyelY = lerp(eyelY, eY, 0.5);
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  //image(video, 0, 0);
  background(206, 160, 75);
  
  let pupil = color(87, 48, 22);
  let iris = color(143, 90, 42);
  
  //let d = dist(noseX, noseY, eyelX, eyelY);
  let pupilD = 31;
  
  let leftiX = map(width - noseX, 0, width, 338, 390);
  let leftiY = map(noseY, 0, height, 273, 286);
  
  let rightiX = map(width - noseX, 0, width, 498, 550);
  let rightiY = map(noseY, 0, height, 274, 286);
  
  fill(pupil);
  ellipse(leftiX, leftiY, pupilD);
  ellipse(rightiX, rightiY, pupilD);
  
  //fill(0,0,255);
  //ellipse(eyelX, eyelY, 50);
  
  image(img,0,0, 970, 546);

}
