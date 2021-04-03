function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function snapshot(){
save("joker.png");
}
function draw(){
image(video,0,0,600,500);
image(clownnose,nosex,nosey,50,50);
}
function modelLoaded(){
console.log("model has loaded");
}
function gotPoses(results){
if(results.length>0)
{
console.log(results);
nosex= results[0].pose.nose.x-50;
nosey= results[0].pose.nose.y-5;
}
}
nosex=0;nosey=0;
function preload(){
clownnose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")


}