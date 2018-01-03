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

    //window.alert(p);
    //window.alert(root);
    var files = [
        root + "ScruvyRat.mp3",
        root + "test.mp3"
    ];

    var randomAudio = files[Math.floor(Math.random()*files.length)];

    return randomAudio;
}

function playSound() {
    $('body').click(function(evt){
        if(!$(evt.target).is('#make_sound')) {
            if(audioClip) audioClip.stop();
        } else {
            //event handling code
            if (Media.MEDIA_RUNNING) {
                if(audioClip) audioClip.stop();
                audioClip = new Media(audioFiles());
                //audioClip = new Media(audioFiles(), null, onError);
            }

            /*function onError(error) {
             alert('code: '    + error.code    + '\n' +
             'message: ' + error.message + '\n');
             }*/
            //$(this).toggleClass('playing');
            audioClip.play();
        }
    });

    /*$('#make_sound').on('click', (function() {

        //window.alert(window.location.pathname);
        //var what = $(this);
        //showToggleImage(what);

        //window.alert(audioFiles());

        if (Media.MEDIA_RUNNING) {
            if(audioClip) audioClip.stop();
            audioClip = new Media(audioFiles());
            //audioClip = new Media(audioFiles(), null, onError);
        }

        /*function onError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }*/
        //$(this).toggleClass('playing');
        //audioClip.play();
    /*}));*/
}

function showToggleImage(what) {

    what.toggleClass('playing');
}
