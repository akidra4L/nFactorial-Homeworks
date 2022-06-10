const video = document.getElementById("my-video");
const music = document.getElementById("music-player");
const audio = document.getElementById("audio")
let playAudioBtn = document.getElementById("btn-change-background")
let playVideoBtn = document.getElementById("my-video")
let buttons = document.getElementsByClassName("fa-solid")

function playPauseTrack() {
    if(audio.paused) {
        audio.play();
        video.play();
        playAudioBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    } else {
        audio.pause();
        video.pause();
        playAudioBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
    }
}

function alertButton() {
    alert("Pay $99.99 to unlock button.");
}

function setTheme() {
    let x = localStorage.getItem("theme");
    if(x === 'light') {
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

function setDarkTheme() {
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("left-block");
    root.className = "dark";
}

function setLightTheme() {
    localStorage.setItem("theme", "light");
    const root = document.getElementById("left-block");
    root.className = "light";
}

function addCookie() {
    document.cookie = "name=alikhan; expires=Mon 13 Jun 2022 12:00:00 GMT";
}