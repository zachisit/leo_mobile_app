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
        root + "exit-left.mp3",
        root + "didnt-do-it.mp3",
        root + "911.mp3",
        root + "beelzibub.mp3",
        root + "boobs.mp3",
        root + "braunsweiger.mp3",
        root + "Breasteses.mp3",
        root + "buggers.mp3",
        root + "fleegles.mp3",
        root + "furburgers.mp3",
        root + "ildargit.mp3",
        root + "alive.mp3",
        root + "test.mp3",
        root + "rat-turds.mp3",
        root + "sewer-gas.mp3",








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
            $makeSoundButton.removeClass('active');
        } else {
            //event handling code
            if (Media.MEDIA_RUNNING) {
                if(audioClip) audioClip.stop();
                audioClip = new Media(audioFiles(), function(){//callback
                    $makeSoundButton.removeClass('active');
                });
                $makeSoundButton.addClass('active');
            }

            audioClip.play();
        }
    });
}

function showToggleImage(what) {
    what.toggleClass('playing');
}