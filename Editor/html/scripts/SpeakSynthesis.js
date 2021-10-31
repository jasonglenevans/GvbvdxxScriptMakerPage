console.log ("Gvbvdxx's Speach Synyth App Is Loaded.")
console.log ("Type Gvoice_DevHelp() To Get Some Help")
function Gvoice_DevHelp()
{
    console.log ("To Get Started Type Somthing Like Gvoice_SynSpeak('Hello World!')")
    console.log ("All Functions Have A Gvoice_ To Them So They Are Needed To Work")   
}
//API
function Gvoice_SynSpeak(Text)
{
  let utterance = new SpeechSynthesisUtterance(Text);
  speechSynthesis.speak(utterance);
}
