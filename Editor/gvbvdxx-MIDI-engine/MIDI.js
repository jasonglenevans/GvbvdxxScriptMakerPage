//Engine By Gvbvdxx Do Not Steal
//Midi Instrumenrt Samples From https://freewavesamples.com/
//2021






 
//Change Sound Directory Here

let GMIDI_SoundDirectory = 'midisamples/';

//Change Stored Samples Here

let GMIDI_Samples = [
'piano.wav',
'pulse.wav',
'pulse2.wav',
'sawtooth.wav',
'sine.wav',
'square.wav',
'triangle.wav'
];

//Change Tuning Here

let GMIDI_Samples_Tuning = [
60,
60,
60,
60,
60,
60,
60
];










function GMIDI_tempormary_MIDIply(sample, sampleNote, noteToPlay) {
    try {
  const GMIDIAUDIO = new Audio(sample);
  GMIDIAUDIO.playbackRate = 2 ** ((noteToPlay - sampleNote) / 12);
  GMIDIAUDIO.preservesPitch = false;
  GMIDIAUDIO.play();
    }
    catch (e) {
        console.error ("gvbvdxx MIDI engine has failed to play the note with the instrument")
    }
}
function GMIDI_Play_Note(GMIDInote, GMIDIsampleNumber) {
    GMIDI_tempormary_MIDIply( ( GMIDI_SoundDirectory + GMIDI_Samples[GMIDIsampleNumber]), GMIDI_Samples_Tuning[GMIDIsampleNumber], GMIDInote);
}