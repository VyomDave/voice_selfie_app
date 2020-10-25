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
}