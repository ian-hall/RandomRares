var soma = document.getElementById("somafm");
var playbtn = document.getElementById("somaplay");
var stopbtn = document.getElementById("somastop");
var somasrc = "http://ice1.somafm.com/missioncontrol-128-mp3";
soma.volume = 0.40;

//var playclick = function () {
//    soma.load();
//    soma.src = somasrc;
//    soma.play();
//}
//var stopclick = function () {
//    soma.pause();
//    soma.src = "";
//    soma.load();
//}
//playbtn.addeventlistener("click", playclick, false);
//stopbtn.addeventlistener("click", stopclick, false);
//playbtn.addeventlistener("touchend", playclick, false);
//stopbtn.addeventlistener("touchend", stopclick, false);

function playSoma() {
    soma.pause();
    soma.src = somasrc;
    soma.load();
    soma.play();
};

function stopSoma() {
    soma.pause();
    soma.src = "";
    soma.load();
};