noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}
function gotPoses(){
    if(results.length > 0)
    {
        console.log(results);
        noseX = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWrist);

        console.log("left wrist ="+leftWristX+"right wrist ="+rightWristX+"diffrence = "+difference);

    }
}
function draw(){
    background("#fc1cf5");
        fill("#0affef");
        stroke("#faa70c");
        square(noseX, noseY, difference);
}
