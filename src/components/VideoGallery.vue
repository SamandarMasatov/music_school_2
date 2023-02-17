<template>
  <div>
      <!-- Video player Start -->
      <section id="Video_Player_page">
        <div class="container pb-5">
          <div class="row Video_Gallery_title justify-content-center">
            <div class="col-12 text-center">
              <h1>Video Gallery</h1>
              <p>Videolar bilan tanishing...</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="video-box">
                <div class="player" id="player">
                  <video class="player_video viewer" src="/video/dutor.mp4"></video>
                  <div class="player_controls">
                    <div class="progress-range" title="Jump-to">
                      <div class="progress-bar"></div>
                    </div>
                    <div class="left-controls">
                      <button class="player_button toggle" title='Toggle Play'>
                        <i class="fa fa-play" title="Play" id="play-btn"></i>
                      </button>
                      <button class="player_button stop d-none d-sm-block" title='Start over'>
                        <i class="fa fa-stop" title="Play" id="stop-btn"></i>
                      </button>
                      <button class="player_button speaker">
                        <i id="speaker_icon" class="fa fa-volume-up" aria-hidden="true"></i>
                      </button>
                      <input type="range" name="volume" class="player_slider" min="0" max="1" step="0.05" value="1">
                    </div>
                    <div class="right-controls">
                      <button data-skip="-10" class="player_button d-none d-sm-block">
                        <i class="fa fa-fast-backward" aria-hidden="true"></i>
                      </button>
                      <button data-skip="10" class="player_button d-none d-sm-block">
                        <i class="fa fa-fast-forward" aria-hidden="true"></i>
                      </button>
                      <div class="time">
                        <span class="time-elapsed">00:00 / </span>
                        <span class="time-duration">2:38</span>
                      </div>
                      <button class="player_button screenSize">
                        <i id="screenSize_icon" class="fa fa-expand" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center d-block">
                  <router-link to="/VideoGalleryTeam" class="team_link text-center">Barcha videolarni kurish uchun bu yerni bosing</router-link>
          </div>
        </div>
      </section>
      <!-- Video player End -->
  </div>
</template>

<!-- Script -->
<script>
export default {
    mounted() {
        /*target elements*/
        const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');

        const progressRange = document.querySelector('.progress-range');
        const progressBar = document.querySelector('.progress-bar');
        const currentTime = document.querySelector('.time-elapsed');
        const duration = document.querySelector('.time-duration');

        const playBtn = document.getElementById('play-btn');
        const stopBtn = player.querySelector('.stop');

        const skipButtons = player.querySelectorAll('[data-skip]');

        const speakerIcon = player.querySelector('#speaker_icon');
        const ranges = player.querySelectorAll('.player_slider');
        /* MUTE button */
        const speaker = player.querySelector('.speaker');
            const volInput = player.querySelector('input[name="volume"]')
        //const speakerIcon = player.querySelector('#speaker_icon'); 

        // show play button when paused
        function showPlayIcon() {
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
        }

// toggle between play and pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    video.pause();
    showPlayIcon();
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// not sure, is this for FF and REW?
function skip() {
  video.currentTime += +(this.dataset.skip);
}

// volume functions
function handleRangeUpdate() {
  video[this.name] = this.value;
  (video['volume'] === 0 ? speakerIcon.className = "fa fa-volume-off" :
    speakerIcon.className = "fa fa-volume-up")
}

let muted = false;

function mute() {
  if (!muted) {
    video['volume'] = 0;
    volInput.value = 0;
    speakerIcon.className = "fa fa-volume-off"
    muted = true;
  } else {
    video['volume'] = 1;
    volInput.value = 1;
    muted = false;
    speakerIcon.className = "fa fa-volume-up"
  }
}

// update progress bar as the video plays
function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = `${displayTime(video.currentTime)} /`;
  duration.textContent = `${displayTime(video.duration)}`;
}
// Calculate display time format
function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

// Click to seek within the video
function setProgress(e) {
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration;
}

function scrub(event) {
  const scrubTime = (event.offsetX / progressRange.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Spacebar used to play and pause
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    togglePlay();
  }
}

// =======================
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);
// ===================
/*functions linked to elements*/
// play, pause, stop
video.addEventListener('click', togglePlay);
video.addEventListener('keydown', (event) => event.keyCode === 32 && togglePlay());
playBtn.addEventListener('click', togglePlay);
stopBtn.addEventListener('click', stopVideo);
// skip forward or backward
skipButtons.forEach(button => button.addEventListener('click', skip));
// volume
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
speaker.addEventListener('click', mute)

// progress bar controls
let mouseDown = false;
progressRange.addEventListener('click', scrub);
progressRange.addEventListener('mousemove', (event) => mouseDown && scrub(event));
progressRange.addEventListener('mousedown', () => mouseDown = true);
progressRange.addEventListener('mouseup', () => mouseDown = false);

//fullscreen mode 
const screen_size = player.querySelector('.screenSize');
const controls = player.querySelector('.player_controls');
const screenSize_icon = player.querySelector('#screenSize_icon');

function changeScreenSize() {
  if (player.mozRequestFullScreen) {

    player.mozRequestFullScreen();
    //change icon
    screenSize_icon.className = "fa fa-compress";
    /*control panel once fullscreen*/
    video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
    video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
    controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
    screen_size.addEventListener('click', () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        screenSize_icon.className = "fa fa-expand";
      }
    });
  } else if (player.webkitRequestFullScreen) {

    player.webkitRequestFullScreen();

    screenSize_icon.className = "fa fa-compress";

    video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
    video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
    controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
    screen_size.addEventListener('click', () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        screenSize_icon.className = "fa fa-expand";
      }
    });
  }
}
screen_size.addEventListener('click', changeScreenSize);
/* end full screen */
    },
}
</script>

<!-- Sytle -->
<style scoped>
/* Video Player Start--- qo'shimcha page uchun */
#Video_Player_page {
  width: 100%;
  background-color: #131a28;
}
#Video_Player_page .container .row.Video_Gallery_title {
  text-align: center;
  padding-top: 50px;
  margin-bottom: 30px;
}
#Video_Player_page .container .row.Video_Gallery_title h1 {
  font-family: roboto, sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: #d2f21b;
}
#Video_Player_page .container .row.Video_Gallery_title p {
  font-family: roboto, sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 19px;
  line-height: 18px;
}
/* Btn link start */
#Video_Player_page .container .team_link {
  padding: 10px 30px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 0.7s ease;
  font-style: normal;
  font-weight: 500;
  font-family: roboto, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  background-color: #d2d224;
  border-radius: 5px;
  /* margin-top: 50px; */
}
#Video_Player_page .container .team_link:hover {
  border: 1px solid #d2f21b;
  background-color: transparent;
  color: #3f6ed3;
}
/* Btn link end */
#Video_Player_page .container button + button {
  margin-left: 0.75em;
}
#Video_Player_page .container .upload {
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}
#Video_Player_page .container .video-box {
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}
#Video_Player_page .container .player {
  width: 100%;
  max-width: 60rem;
  /* border: 0.25rem solid rgba(0, 0, 0, 0.445); */
  /* background-color: rgb(35, 51, 51); */
  position: relative;
  font-size: 0;
  overflow: hidden;
}
#Video_Player_page .container .player_video {
  width: 100%;
  height: 100%;
  /* background-color: rgb(28, 41, 41); */
  cursor: pointer;
  /* padding-bottom: 65px; */
}
#Video_Player_page .container .fa {
  color: white;
  font-size: 1rem;
}
#Video_Player_page .container .fa-play:hover,
#Video_Player_page .container .fa-pause:hover,
#Video_Player_page .container .fa-stop:hover,
#Video_Player_page .container .fa-volume-up:hover,
#Video_Player_page .container .fa-fast-backward:hover,
#Video_Player_page .container .fa-fast-forward:hover {
  color: dodgerblue;
  cursor: pointer;
}
#Video_Player_page .container .player_button {
  background: none;
  border: 0;
  line-height: 1;
  color: white;
  text-align: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  max-width: 50px;
  font-size: 1rem;
}
#Video_Player_page .container .player_button:focus,
#Video_Player_page .container .player_button:hover {
  border-color: #ffc600;
  border-color: blue;
}
#Video_Player_page .container .player_slider {
  width: 0.75rem;
  height: 3rem;
}
#Video_Player_page .container .player_controls {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateX(-5px);
  transition: all 0.3s;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 1.5rem;
}
#Video_Player_page .container .player:hover .player_controls {
  transform: translateY(0);
}
#Video_Player_page .container .player:hover .progress-range {
  height: 0.75rem;
}
#Video_Player_page .container .right-controls {
  display: flex;
  justify-content: flex-end;
}
#Video_Player_page .container .left-controls {
  display: flex;
  justify-content: flex-start;
}
#Video_Player_page .container .left-controls button.player_button.toggle {
  margin-right: 12px;
}
#Video_Player_page .container .left-controls button.player_button.stop.d-none.d-sm-block {
  margin-right: 10px;
}
#Video_Player_page .container .player_controls > * {
  flex: 1;
}
#Video_Player_page .container .progress-range {
  flex: 10;
  position: relative;
  display: flex;
  flex-basis: 100%;
  height: 1.5em;
  transition: height 0.3s;
  /* background: rgba(245, 239, 239, 0.25); */
  cursor: pointer;
}
#Video_Player_page .container .progress-bar {
  background: dodgerblue;
  width: 50%;
  height: 100%;
  border-radius: 1.5em;
  transition: all 250ms ease;
}
#Video_Player_page .container .player:-webkit-full-screen {
  max-width: none;
  width: 100%;
}
#Video_Player_page .container .player:-ms-fullscreen {
  max-width: none;
  width: 100%;
}
#Video_Player_page .container .player:fullscreen {
  max-width: none;
  width: 100%;
}
#Video_Player_page .container .player:-webkit-full-screen {
  /*CHROME*/
  max-width: none;
  width: 100%;
}
#Video_Player_page .container .player:-moz-full-screen {
  /*FIREFOX*/
  max-width: none;
  width: 100%;
}
#Video_Player_page .container .time {
  text-align: right;
  position: relative;
  top: 0.85em;
  padding-left: 0.5em;
  margin-right: 1em;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  /* user-select: none; */
}
#Video_Player_page .container .time-elapsed,
#Video_Player_page .container .fa-fast-forward {
  padding-left: 0.75em;
}
#Video_Player_page .container input[type=range] {
  background: transparent;
  width: 60%;
  margin: 0 20px;
}
#Video_Player_page .container input[type=range]:focus {
  outline: none;
}
#Video_Player_page .container input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}
#Video_Player_page .container input[type=range]::-webkit-slider-thumb {
  height: 0.75em;
  width: 1em;
  border-radius: 0.25em;
  background: dodgerblue;
  cursor: pointer;
  margin-top: -4px;
  box-shadow: 0 0 2px rgb(15, 14, 80);
}
#Video_Player_page .container input[type=range]::-moz-range-track {
  /*?*/
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}
#Video_Player_page .container input[type=range]::-moz-range-thumb {
  /*?*/
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  height: 12px;
  width: 17px;
  border-radius: 50px;
  /* background: #ffc600; */
  background: blue;
  cursor: pointer;
}

@media (max-width: 767px) {
  #Video_Player_page .container .row.Video_Gallery_title h1[data-v-8cd8c9f2] {
    font-size: 35px;
  }
  #Video_Player_page .container .row.Video_Gallery_title p[data-v-8cd8c9f2] {
    font-size: 17px;
  }
}

@media (max-width: 465px) {
  #Video_Player_page .container .row.Video_Gallery_title h1[data-v-8cd8c9f2] {
    font-size: 30px;
    font-weight: 300;
    font-family: roboto, sans-serif;
  }
  #Video_Player_page .container .row.Video_Gallery_title p[data-v-8cd8c9f2] {
    font-size: 15px;
  }
}

@media (max-width: 827px) {
  #Video_Player_page .container .fa {
    color: white;
    font-size: 0.9rem;
  }
  #Video_Player_page .container button + button {
    margin-left: 0;
  }
  #Video_Player_page .container .time {
    padding-left: 0;
    margin-right: 0.5em;
  }
  #Video_Player_page .container .time-elapsed,
  #Video_Player_page .container .fa-fast-forward {
    padding-left: 0.75em;
  }
  #Video_Player_page .container .player {
    width: 80%;
  }
}
@media (max-width: 767px) {
  #Video_Player_page .container .player_controls {
    padding: 0 0.8rem;
  }
}
@media (max-width: 600px) {
  #Video_Player_page .container .player {
    width: 99%;
  }
}
/* Video Player End */
  
</style>