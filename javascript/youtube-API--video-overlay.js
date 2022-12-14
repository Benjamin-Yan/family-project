// Youtube API + video overlay

var vlink1 = "https://www.youtube.com/embed/fLvqnKO7_YE?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink2 = "https://www.youtube.com/embed/peXO2RClMsM?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink3 = "https://www.youtube.com/embed/16JKls_thxQ?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink4 = "https://www.youtube.com/embed/LTVecjWlGII?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink5 = "https://www.youtube.com/embed/sl3kv7b7kMI?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink6 = "https://www.youtube.com/embed/ncNO0Oin9H8?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink7 = "https://www.youtube.com/embed/OQHoO7wJ1Qo?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink8 = "https://www.youtube.com/embed/0EElfko5FZk?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink9 = "https://www.youtube.com/embed/ZEpFVLui95U?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink10 = "https://www.youtube.com/embed/EM3Gpx8Rbrg?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink11 = "https://www.youtube.com/embed/ky5lvqmXOi4?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink12 = "https://www.youtube.com/embed/jpz-fOIpv3s?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink13 = "https://www.youtube.com/embed/S5RCiYVEQYc?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";
var vlink14 = "https://www.youtube.com/embed/7jYvKjokaoI?rel=1&amp;controls=1&amp;showinfo=0&amp;start=1&enablejsapi=1";

function choosefrom(yid) {
    if (yid == 1) {
        document.getElementById("vdo").src = vlink1;
    }
    else if (yid == 2) {
        document.getElementById("vdo").src = vlink2;
    }
    else if (yid == 3) {
        document.getElementById("vdo").src = vlink3;
    }
    else if (yid == 4) {
        document.getElementById("vdo").src = vlink4;
    }
    else if (yid == 5) {
        document.getElementById("vdo").src = vlink5;
    }
    else if (yid == 6) {
        document.getElementById("vdo").src = vlink6;
    }
    else if (yid == 7) {
        document.getElementById("vdo").src = vlink7;
    }
    else if (yid == 8) {
        document.getElementById("vdo").src = vlink8;
    }
    else if (yid == 9) {
        document.getElementById("vdo").src = vlink9;
    }
    else if (yid == 10) {
        document.getElementById("vdo").src = vlink10;
    }
    else if (yid == 11) {
        document.getElementById("vdo").src = vlink11;
    }
    else if (yid == 12) {
        document.getElementById("vdo").src = vlink12;
    }
    else if (yid == 13) {
        document.getElementById("vdo").src = vlink13;
    }
    else {
        document.getElementById("vdo").src = vlink14;
    }
}

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('vdo', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementsByClassName("play-button");
    for (let i = 0; i < playButton.length; i++) { //use let so that i won't go wrong...
        playButton[i].addEventListener("click", function () {
            choosefrom(i + 1); //know what song is playing(index + 1), e.target.id
            document.getElementById("videoDiv").style.width = "100%";
            player.playVideo();
        });
    }

    var pauseButton = document.getElementsByClassName("pause-button");
    for (var j = 0; j < pauseButton.length; j++) {
        pauseButton[j].addEventListener("click", function () {
            document.getElementById("videoDiv").style.width = "0%";
            player.pauseVideo();
        });
    }

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);