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
    var localPath = '/sounds/';
    var p = window.location.pathname;
    var root = p.substring(0, p.lastIndexOf('/')) + localPath;

    var files = [
        root + "ScruvyRat.mp3",
        root + "test.mp3"
    ];

    return files[Math.floor(Math.random()*files.length)];
}

function playSound() {
    $('body').click(function(evt){
        var $makeSoundButton = $('#make_sound');

        //removeActiveClass();
        $makeSoundButton.removeClass('active');


        if(!$(evt.target).is('#make_sound')) {
            if(audioClip) audioClip.stop();
        } else {
            //event handling code
            if (Media.MEDIA_RUNNING) {
                if(audioClip) audioClip.stop();
                audioClip = new Media(audioFiles());
                $makeSoundButton.addClass('active');
            }

            audioClip.play();
        }
    });
}

function showToggleImage(what) {
    what.toggleClass('playing');
}