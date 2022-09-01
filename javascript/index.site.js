const ns = {}
ns["closeWarning"] = async function () {
    await async_anime({
        targets: "div.warning",
        opacity: 0,
        duration: 750,
        easing: "easeOutSine"
    });
    await document.querySelector("div.warning").remove();
}

let playVideo = true;
let videoObj = document.getElementById("video");
let videoControlBtn = document.getElementById("background_control");

let playIcon = document.createElement("i");
playIcon.className = "fa-solid fa-play";
let pauseIcon = document.createElement("i");
pauseIcon.className = "fa-solid fa-pause";
ns["toggleVideo"] = function () {
    playVideo = !playVideo;

    if (playVideo) {
        videoObj.play();
        videoControlBtn.children[0].replaceWith(pauseIcon);
    } else {
        videoObj.pause();
        videoControlBtn.children[0].replaceWith(playIcon);
    }
}

let navbarOpen = false;
let navbar = document.querySelector("main nav");

ns["toggleNav"] = function () {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
        navbar.classList.add("nav-visible");
    } else {
        navbar.classList.remove("nav-visible");
    }
}