noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video = createCapture(VIDEO);
video.size(560, 500);

canvas = createCanvas(550, 550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function draw(){
background('#0ee3ce');
textSize(difference)
text('Sai',50, 400);
fill('#f7bb07');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

leftWristX = results[0].pose.leftWrist.X;
rightWristX = results[0].pose.rightWrist.X;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}