pulsoDireitoX = 0;
pulsoEsquerdoX = 0;
diferenca = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 450);
canvas.position(740, 130);
poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses);
}


function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    pulsoDireitoX = results[0].pose.rightWrist.x;
    pulsoEsquerdoX = results[0].pose.leftWrist.x;
    diferenca = floor(pulsoDireitoX - pulsoEsquerdoX);
    }

}

function modelLoaded(){
    console.log("modelo carregado");
}

function draw(){
    background('Cyan');
    textSize(diferenca);
    fill('green');
    text('William', 148, 430);
}









