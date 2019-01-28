/*
 * Copyright 2013 Boris Smus. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var drumSamples = {
  kick: "music-samples/kick.wav",

  floor_tom: "music-samples/floor-tom.wav",
  mid_tom: "music-samples/mid-tom.wav",

  closed_hat: "music-samples/closed-hat.wav",
  mid_hat: "music-samples/mid-hat.wav",
  open_hat: "music-samples/open-hat.wav",

  crash_cymbal: "music-samples/crash-cymbal.wav",
  ride_cymbal: "music-samples/ride-cymbal.wav",

  sample1: "music-samples/sample1.wav",
  sample2: "music-samples/sample2.wav"
};

var RhythmSample = function() {
  loadSounds(this, drumSamples);
};

function drumSet1() {
  // We'll start playing the rhythm 100 milliseconds from "now"
  var startTime = context.currentTime + 0.100;
  var tempo = 80; // BPM (beats per minute)
  var eighthNoteTime = (60 / tempo) / 2;

  // Play 2 bars of the following:
  for (var bar = 0; bar < 2; bar++) {
    var time = startTime + bar * 8 * eighthNoteTime;
    // Play on beats 1, 5
    playSound(this.kick, time);
    playSound(this.kick, time + 4 * eighthNoteTime);

    // Play on beats 3, 7
    playSound(this.mid_tom, time + 2 * eighthNoteTime);
    playSound(this.mid_tom, time + 6 * eighthNoteTime);

    // Play every eighthh note.
    for (var i = 0; i < 8; ++i) {
      playSound(this.mid_hat, time + i * eighthNoteTime);
    }
  }
};

function drumSet2() {
  // We'll start playing the rhythm 100 milliseconds from "now"
  var startTime = context.currentTime + 0.100;
  var tempo = 80; // BPM (beats per minute)
  var eighthNoteTime = (60 / tempo) / 2;

  // Play 2 bars of the following:
  for (var bar = 0; bar < 2; bar++) {
    var time = startTime + bar * 8 * eighthNoteTime;
    // Play on beats 1, 5
    playSound(this.kick, time);
    playSound(this.ride_cymbal, time + 4 * eighthNoteTime);

    // Play on beats 3, 7
    playSound(this.ride_cymbal, time + 2 * eighthNoteTime);
    playSound(this.crash_cymbal, time + 6 * eighthNoteTime);

    // Play every eighthh note.
    for (var i = 0; i < 8; ++i) {
      playSound(this.mid_hat, time + i * eighthNoteTime);
    }
  }
};

//RhythmSample.prototype.play = drumSet1;
