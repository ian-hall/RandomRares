var soma = document.getElementById("somafm");
var somasrc = "http://ice1.somafm.com/missioncontrol-128-mp3";
soma.volume = 0.45;
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