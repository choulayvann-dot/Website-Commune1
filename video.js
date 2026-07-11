const video = document.getElementById("myVideo");
const playBtn = document.getElementById("play_btn");

playBtn.onclick = function () {
    alert("Clicked");
    video.play();
    playBtn.style.display = "none";
};

video.onpause = function () {
    playBtn.style.display = "flex";
};

video.onplay = function () {
    playBtn.style.display = "none";
};