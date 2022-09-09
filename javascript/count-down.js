// count down
// window.onload = function() {
//     countdown("Oct 6, 2022 22:30:00", "country");
// }

function countdown(timestring, showid) {
    // Set the date we're counting down to
    var goaltime = new Date(timestring).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = goaltime - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="openn"
        document.getElementById(showid).innerHTML = days + "天 " + hours + "時 " 
        + minutes + "分 " + seconds + "秒 ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(showid).innerHTML = "EXPIRED";
        }
    }, 1000);
}
