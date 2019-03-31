/*
 * depends on: webaudio-oscillate-guitar.js
 * */

function guitarLagrima(audioCtx) {
  /*
e|--4-----5-----7-----|--2~~---------------| x2
B|--------------------|--------------------|

e|--12----11----9-----|--7-----------------|
B|--------------------|--------------------|

e|--12----11----9-----|--7-----------------|--7-----------------|--------------------|
B|--------------------|--------------------|--------9-----7-----|--------------------|
G|--------------------|--------------------|--------------------|--8-----9-----------|
   */
  tab = {start: audioCtx.currentTime, bars: 4, perBar: 3};

  tune = audioCtx.createOscillator();
  tune.connect(audioCtx.destination);
  tune.start(tab.start);
  tune.stop(tab.start + 17);

  tune.frequency.setValueAtTime(guitarNotes.E4[4], tab.start + 0.05);
  tune.frequency.setValueAtTime(guitarNotes.E4[5], tab.start + 0.50);
  tune.frequency.setValueAtTime(guitarNotes.E4[7], tab.start + 1.00);

  tune.frequency.setValueAtTime(guitarNotes.E4[2], tab.start + 1.50);

  tune.frequency.setValueAtTime(guitarNotes.E4[4], tab.start + 3.00);
  tune.frequency.setValueAtTime(guitarNotes.E4[5], tab.start + 3.50);
  tune.frequency.setValueAtTime(guitarNotes.E4[7], tab.start + 4.00);

  tune.frequency.setValueAtTime(guitarNotes.E4[2], tab.start + 4.50);

  tune.frequency.setValueAtTime(guitarNotes.E4[12], tab.start + 6.00);
  tune.frequency.setValueAtTime(guitarNotes.E4[11], tab.start + 6.50);
  tune.frequency.setValueAtTime(guitarNotes.E4[9], tab.start + 7.00);

  tune.frequency.setValueAtTime(guitarNotes.E4[7], tab.start + 7.50);

  tune.frequency.setValueAtTime(guitarNotes.E4[12], tab.start + 9.00);
  tune.frequency.setValueAtTime(guitarNotes.E4[11], tab.start + 9.50);
  tune.frequency.setValueAtTime(guitarNotes.E4[9], tab.start + 10.00);

  tune.frequency.setValueAtTime(guitarNotes.E4[7], tab.start + 10.50);

  tune.frequency.setValueAtTime(guitarNotes.E4[7], tab.start + 12.00);
  tune.frequency.setValueAtTime(guitarNotes.B4[9], tab.start + 12.50);
  tune.frequency.setValueAtTime(guitarNotes.B4[7], tab.start + 13.00);

  tune.frequency.setValueAtTime(guitarNotes.G3[8], tab.start + 13.50);
  tune.frequency.setValueAtTime(guitarNotes.G3[9], tab.start + 15.00);
}

document.querySelector('.guitar_lagrima').addEventListener('click', function() {
  var audioCtx = new AudioContext();
  guitarLagrima(audioCtx);
});
