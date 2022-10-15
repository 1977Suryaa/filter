ms1=0
ms2=0
function preload(){
    img1=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    img2=loadImage("https://i.postimg.cc/xC2MSdSW/Clown-Nose-PNG-Image.png")
    img3=loadImage("https://i.postimg.cc/tC1qhZ7y/ebd60368b72181380cf502a0d4728359.png")
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    webcam=createCapture(VIDEO)
    webcam.hide()
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose",gotpose)
}

function modelLoaded() {
    console.log('Model Loaded!');
}
function gotpose(results){
    if(results.length>0){
        console.log(results)
        ms1=results[0].pose.nose.x
        ms2=results[0].pose.nose.y
    }

}

function photo(){
    save("face filter.png")
}
function draw(){
    image(webcam,0,0,500,400)
    image(img1,ms1-120,ms2-60,100,80)
    image(img2,ms1-90,ms2-95,50,50)
    image(img3,ms1-260,ms2-350,400,300)
    
    

}
