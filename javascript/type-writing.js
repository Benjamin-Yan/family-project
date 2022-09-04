// 第二種typewriting
var v = 0;
var motto = "“Life is like riding bicycle. To keep balance, you must keep moving.”"
var dis = motto.length;

var x = setInterval(function() {
    document.getElementById("motto").innerHTML += motto[v];
    v++;
    dis--;
    if (dis < 0 || v >= motto.length) {
        clearInterval(x);
    }
}, 100);
