noseX=0;

noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/44BqNB6Q/clownnose-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function modelloaded() {
    console.log('PoseNet Is Initiated');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 130, 70);
}

function takesnapshot() {
    save('myFilterImage.png');
}
