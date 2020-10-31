var SpeechRecognition = window.webkitSpeechRecognition ; 
var recognizer = new SpeechRecognition ; 

function start(){
    document.getElementById("textbox").innerHTML="";
    recognizer.start()

}
recognizer.onresult=function getresults(event){
  console.log(event)
  var content = event.results[0][0].transcript ; 
  console.log(content)
  document.getElementById("textbox").innerHTML=content;
  speak()
  snapshot()
}
 
function speak(){
  var speech = window.speechSynthesis;
  var speak_data = document.getElementById("textbox").value;
  var speak_this = new SpeechSynthesisUtterance(speak_data);
  speech.speak(speak_this);
  Webcam.attach("#camera");
}

Webcam.set({
  height:300,
  width:300,
  image_format:'jpg',
  jpg_quality:90
});

function snapshot(){
  Webcam.snap(
    function(selfie){
      document.getElementById("output").innerHTML=`<img src=${selfie} id="capture_image">`
    }
  );
}



