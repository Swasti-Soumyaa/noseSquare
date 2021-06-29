nosex=0;
nosey=0;

leftwristx=0;
rightwristx=0;
difference=0;



function setup(){
    
    video=createCapture(VIDEO);
    video.size(500,380)
    canvas=createCanvas(500,380)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("posenet is initialized")
}

function gotPoses(result){
    if (result.length>0 ){
        console.log(result)
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        console.log(nosex,nosey);

        leftwristx=result[0].pose.leftWrist.x;
        rightwristx=result[0].pose.rightWrist.x;
        difference= floor(leftwristx-rightwristx);
        console.log(leftwristx,rightwristx);
        console.log(difference);


    }
}

function draw(){
    background("#9381ff");
    fill("#ffef9f");
    stroke("#9cf6f6");
    square(nosex,nosey,difference);
    document.getElementById("status").innerHTML="The size of the square is "+difference+"px"

}



