function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pv8g5UT7F/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results)
       r=Math.floor(Math.random()*255)+1
       g=Math.floor(Math.random()*255)+1
       b=Math.floor(Math.random()*255)+1
       document.getElementById("result_label").innerHTML="i can hear - "+results[0].label
       document.getElementById("result_confidence").innerHTML="accuracy - "+(results[0].confidence*100).toFixed(2)+" %"
       document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
       document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")"
       img1=document.getElementById("alien1")
       
      
       if (results[0].label == "cat") {
           img1.src="cat.jpg"
           
       }
       else if (results[0].label == "dog") {
        img1.src="dog.jpg"
        
    }
       else {
        img1.src="ear.jpg"
        
       }
   }
}
