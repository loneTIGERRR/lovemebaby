// JavaScript for controlling the video player
const video = document.querySelector('video');

// Function to play or pause the video
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Function to rewind the video by 10 seconds
function rewind() {
    video.currentTime -= 10;
}

// Function to forward the video by 10 seconds
function forward() {
    video.currentTime += 10;
}


