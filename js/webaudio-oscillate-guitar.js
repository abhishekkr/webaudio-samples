/* guitar trial
 *
 * [standard tuning]
 * 1 (E)	329.63 Hz	E4
 * 2 (B)	246.94 Hz	B4
 * 3 (G)	196.00 Hz	G3
 * 4 (D)	146.83 Hz	D3
 * 5 (A)	110.00 Hz	A3
 * 6 (E)	82.41 Hz	E2
 *
 * http://pages.mtu.edu/~suits/notefreqs.html
 * */

var notes = {
  E2: 82.41,
  F2: 87.31,
  FSharp2: 92.50,
  G2: 98.00,
  GSharp2: 103.83,
  A2: 110.00,
  ASharp2: 116.54,
  B2: 123.47,

  C3: 130.81,
  CSharp3: 138.59,
  D3: 146.83,
  DSharp3: 155.56,
  E3: 164.81,
  F3: 174.61,
  FSharp3: 185.00,
  G3: 196.00,
  GSharp3: 207.65,
  A3: 220.00,
  ASharp3: 233.08,
  B3: 246.94,

  C4: 261.63,
  CSharp4: 277.18,
  D4: 293.66,
  DSharp4: 311.13,
  E4: 329.63,
  F4: 349.23,
  FSharp4: 369.99,
  G4: 392.00,
  GSharp4: 415.30,
  A4: 440.00,
  ASharp4: 466.16,
  B4: 493.88,

  C5: 523.25,
  CSharp5: 554.37,
  D5: 587.33,
  DSharp5: 622.25,
  E5: 659.25,
  F5: 698.46,
  FSharp5: 739.99,
  G5: 783.99,
  GSharp5: 830.61,
  A5: 880.00,
  ASharp5: 932.33,
  B5: 987.77
};

var guitarNotes = {
  E2: [
      notes.E2,
      notes.F2,
      notes.FSharp2,
      notes.G2,
      notes.GSharp2,
      notes.A2,
      notes.ASharp2,
      notes.B2,
      notes.C3,
      notes.CSharp3,
      notes.D3,
      notes.DSharp3,
      notes.E3,
      notes.F3,
      notes.FSharp3
  ],
  A3: [
      notes.A3,
      notes.ASharp3,
      notes.B3,
      notes.C4,
      notes.CSharp4,
      notes.D4,
      notes.DSharp4,
      notes.E4,
      notes.F4,
      notes.FSharp4,
      notes.G4,
      notes.GSharp4,
      notes.A4,
      notes.ASharp4,
      notes.B4
  ],
  D3: [
      notes.D3,
      notes.DSharp3,
      notes.E3,
      notes.F3,
      notes.FSharp3,
      notes.G3,
      notes.GSharp3,
      notes.A3,
      notes.ASharp3,
      notes.B3,
      notes.C4,
      notes.CSharp4,
      notes.D4,
      notes.DSharp4,
      notes.E4
  ],
  G3: [
      notes.G3,
      notes.GSharp3,
      notes.A3,
      notes.ASharp3,
      notes.B3,
      notes.C4,
      notes.CSharp4,
      notes.D4,
      notes.DSharp4,
      notes.E4,
      notes.F4,
      notes.FSharp4,
      notes.G4,
      notes.GSharp4,
      notes.A4
  ],
  B4: [
      notes.B4,
      notes.C4,
      notes.CSharp4,
      notes.D4,
      notes.DSharp4,
      notes.E4,
      notes.F4,
      notes.FSharp4,
      notes.G4,
      notes.GSharp4,
      notes.A4,
      notes.ASharp4,
      notes.B4,
      notes.C5,
      notes.CSharp5
  ],
  E4: [
      notes.E4,
      notes.F4,
      notes.FSharp4,
      notes.G4,
      notes.GSharp4,
      notes.A4,
      notes.ASharp4,
      notes.B4,
      notes.C5,
      notes.CSharp5,
      notes.D5,
      notes.DSharp5,
      notes.E5,
      notes.F5,
      notes.FSharp5
  ]
};

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
