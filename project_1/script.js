const audio = document.getElementById("hero-audio");
const icon = document.getElementById("audio-icon");

const eventAudio = document.getElementById("event-audio");
const eventIcon = document.getElementById("event-audio-icon");

function toggleAudio() {
if (audio.paused) {
    audio.play();
    icon.classList.add("bi-volume-mute-fill");
    icon.classList.remove("bi-volume-up-fill");
} else {
    audio.pause();
    icon.classList.add("bi-volume-up-fill");
    icon.classList.remove("bi-volume-mute-fill");
}
}

function toggleEventAudio() {
if (eventAudio.paused) {
    eventAudio.play();
    eventIcon.classList.add("bi-volume-mute-fill");
    eventIcon.classList.remove("bi-volume-up-fill");
} else {
    eventAudio.pause();
    eventIcon.classList.add("bi-volume-up-fill");
    eventIcon.classList.remove("bi-volume-mute-fill");
}
}

// Auto pause when scrolling down hero section
window.addEventListener("scroll", function () {
        if (window.scrollY > 800) {
            audio.pause();
            icon.classList.add("bi-volume-up-fill");
            icon.classList.remove("bi-volume-mute-fill");
        }
    });