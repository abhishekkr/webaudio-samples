/*
 * depends on: webaudio-oscillate-guitar.js
 * */

function guitarTab(audioCtx) {
  var startTime = audioCtx.currentTime + 1;
  tab = {start: startTime, stop: undefined, bars: 4, perBar: 3};

  tune = audioCtx.createOscillator();
  tune.connect(audioCtx.destination);

  $( ".gtab_note" ).each(function( index ) {
    var note = $( this ).text();
    var baseNote = note.split(".")[0];
    var fret = parseInt(note.split(".")[1].split(":")[0]);
    var duration = parseFloat(note.split(":")[1]);
    console.log(baseNote + "." + fret + " for " + duration);

    tab.stop = tab.start + duration;
    tune.frequency.setValueAtTime(guitarNotes[baseNote][fret], tab.start);
    tab.start = tab.stop;
  });

  tune.start(startTime);
  tune.stop(tab.stop);
}

function guitarTabAdd(note) {
  $(".guitar_tabs").append('<div class="gtab_note">'+note+'</div>');
  $('.gtab_note').dblclick(function() {
    $( this ).remove();
  });
}

(function(){
    // populate string choices
    Object.keys(guitarNotes).reverse().forEach(function(note) {
      $('.tab_string_select').append($('<Option value="'+note+'" label="'+note+'">'));
    });
    // populate fret choices
    for (let i = 0; i < 16; i += 1) {
      $('.tab_fret_select').append($('<Option value="'+i+'" label="'+i+'">'));
    }
    // populate time interval
    for (let i = 0.25; i <= 4.0; i += 0.25) {
      $('.tab_time_select').append($('<Option value="'+i+'" label="'+i+'">'));
    };

    document.querySelector('.tab_add').addEventListener('click', function() {
      var note = $('.tab_string_select').val() + "." + $('.tab_fret_select').val() + ":" + $('.tab_time_select').val();
      guitarTabAdd(note);
    });

    document.querySelector('.play_guitar_tabs').addEventListener('click', function() {
      var audioCtx = new AudioContext();
      guitarTab(audioCtx);
    });
})()
