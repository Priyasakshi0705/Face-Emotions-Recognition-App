

camera = document.getElementById("camera");



Webcam.set({
    width:350,
    height:300,
    image_format: 'jpg',
    jpg_quality:90,
    crop_width:300,
    crop_height:250,
});

Webcam.attach(camera);

function capture_image(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"></>';
    })
}

console.log("ml5", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8rxCGQfNN/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}