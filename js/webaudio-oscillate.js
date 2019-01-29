function doReMi() {
  var audioContext = new AudioContext();
  var oscillator = audioContext.createOscillator();

  oscillator.type = "triangle";
  oscillator.connect(audioContext.destination);

  // 130.4 is frequency of middle C note; set at start
  oscillator.frequency.setValueAtTime(130.4, audioContext.currentTime);

  // detune can be used to change notes; each note is 200cents more than previous, 100cent for half-step
  oscillator.detune.setValueAtTime(100, audioContext.currentTime + 0.5); // to C#
  oscillator.detune.setValueAtTime(200, audioContext.currentTime + 1.0); // to D
  oscillator.detune.setValueAtTime(300, audioContext.currentTime + 1.5); // to D#
  oscillator.detune.setValueAtTime(400, audioContext.currentTime + 2); // to E
  oscillator.detune.setValueAtTime(600, audioContext.currentTime + 2.5); // to F
  oscillator.detune.setValueAtTime(700, audioContext.currentTime + 3); // to F#
  oscillator.detune.setValueAtTime(800, audioContext.currentTime + 3.5); // to G
  oscillator.detune.setValueAtTime(900, audioContext.currentTime + 4); // to G#
  oscillator.detune.setValueAtTime(1000, audioContext.currentTime + 4.5); // to A
  oscillator.detune.setValueAtTime(1100, audioContext.currentTime + 5); // to A#
  oscillator.detune.setValueAtTime(1200, audioContext.currentTime + 5.5); // to B
  oscillator.detune.setValueAtTime(1400, audioContext.currentTime + 6); // to C

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 7);

  oscillator.onended = function(){
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);

  };
};

document.querySelector('.doremi').addEventListener('click', function() {
  doReMi();
});
