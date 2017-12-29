/**
 * Main js
 */

/**
 * Trigger Views Per Screen
 */
$(document).ready(function() {
    playSound();
});

var audioClip;

function audioFiles() {
    var files = [
        "../sounds/ScruvyRat.mp3",
        "../sounds/test.mp3"
    ];

    var randomAudio = files[Math.floor(Math.random()*files.length)];

    return randomAudio;
}

function playSound() {
    $('#make_sound').on('click', (function() {

        //var what = $(this);
        //showToggleImage(what);

        if (Media.MEDIA_RUNNING) {
            if(audioClip) audioClip.stop();
            audioClip = new Media(audioFiles());
        }

        //$(this).toggleClass('playing');
        audioClip.play();
    }));
}

function showToggleImage(what) {

    what.toggleClass('playing');
}
