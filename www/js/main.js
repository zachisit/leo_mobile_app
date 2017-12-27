/**
 * Main js
 */

/**
 * Trigger Views Per Screen
 */
$(document).ready(function() {
    playSound();
});

function audioFiles() {
    var files = [
        "../sounds/ScruvyRat.mp3",
        "../sounds/test.mp3"
    ];

    var randomAudio = files[Math.floor(Math.random()*files.length)];

    console.log(randomAudio);
    return randomAudio;
}

function playSound() {
    console.log('playSound started');

    $('#make_sound').on('click', (function() {
        var obj = document.createElement("audio");
        obj.setAttribute("src", audioFiles());
        $.get();

        obj.play();
    }));

}

/**
 * Page Loading Block
 *
 * show or hide the text per screen
 * @param action
 */
function pageLoading(action) {
    var $loadingDiv = $('#loading');

    if (action === 'show') {
        $loadingDiv.show();
    } else if (action === 'hide') {
        $loadingDiv.hide();
    }
}

/**
 * No Data Instance
 *
 * if JSON returns no data,
 * then this will serve as your
 * helper text
 */
function noDataHandler() {
    $('#load_more').hide();

    $('main').append('<div id="no_connection"><div class="no_data_icon"></div><p>It seems I\'m having trouble contacting my server at this time. This is either an issue on my side, or related to your internet connection. Please try back again in five minutes. I\'ll be here.</p></div>');
    //@TODO:create timer; if over 10 seconds then serve this warning??
}

/**
 * Load More Button
 * @param numberToShow
 */
function loadMore(numberToShow) {
    var $contentList = $('.article_content_list');

    //start by showing top XX number of entries
    $('.hidden').slice(0,numberToShow).removeClass('hidden');

    //add the load more button to screen
    $contentList.append('<button id="load_more">Load More</button>');

    //now initialize the trigger action
    triggerLoadMore(numberToShow);
}
