const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play & Pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the play & pause Icon
function updatePlayIcon() {
    if (video.paused) {
        // If video is paused then show play button.
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        // Else video is playing then show pause button.
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update Progress & TimeStamp
function updateProgress() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get Seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    // Displaying timestamp
    timestamp.innerHTML = `${mins}:${secs}`
}


// setVideoProgress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop the video
function stopVideo() {
    // Set the starting time.
    video.currentTime = 0;
    //And also Pause the video.
    video.pause();
}


// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);