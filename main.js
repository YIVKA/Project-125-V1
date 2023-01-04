function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    stroke(255,0,0);
    circle(leftEarX, leftEarY, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results) 
{
  if(results.length > 0)
  {
    console.log(results);
    leftEarX = results[0].pose.leftEar.x;
    leftEarY = results[0].pose.leftEar.y;
    console.log("leftEar x = " + results[0].pose.leftEar.x);
    console.log("leftEar y = " + results[0].pose.leftEar.y);
  }
}