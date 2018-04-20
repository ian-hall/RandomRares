var soma = document.getElementById("somafm");
var playbtn = document.getElementById("somaplay");
var stopbtn = document.getElementById("somastop");
var somasrc = "http://ice1.somafm.com/missioncontrol-128-mp3";
soma.volume = 0.45;
var playClick = function () {
    var curSrc = soma.src;
    if (curSrc != somasrc) {
        soma.src = somasrc;
        soma.load();
        soma.play();
    }
}
var stopClick = function () {
    soma.pause();
    soma.src = "";
    soma.load();
}
playbtn.addEventListener("click", playClick, false);
stopbtn.addEventListener("click", stopClick, false);
playbtn.addEventListener("touchend", playClick, false);
stopbtn.addEventListener("touchend", stopClick, false);

function playSoma() {
    var curSrc = soma.src;
    if (curSrc != somasrc) {
        soma.src = somasrc;
        soma.load();
        soma.play();
    }
};

function stopSoma() {
    soma.pause();
    soma.src = "";
    soma.load();
};