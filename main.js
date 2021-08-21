function preload(){
    
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(500, 200);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ID-zbvHr5/model.json", modelloaded);
}

function draw(){
   image(video, 0, 0 , 300, 300);
   classifier.classify(video, gotResult);

}

function modelloaded(){
    console.log("Model loaded");
}

function gotResult(error, results){
     if(error){
          console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("object_name").innerHTML=results[0].label;
         document.getElementById("Accrury_number").innerHTML=results[0].confidence.toFixed(3);

             }
}