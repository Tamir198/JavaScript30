const playerContainer = document.querySelector('.player');
const videoScreen = playerContainer.querySelector('.viewer');
const progressOfVideo = playerContainer.querySelector('.progress__filled');
const toggleVideoButton = playerContainer.querySelector('.toggle');
const voliumSlider = document.getElementsByName("volume")[0];
const playSpeedSlider = document.getElementsByName("playbackRate")[0];
const skipTimeButtons = playerContainer.querySelectorAll('[data-skip]');

const toggleVideo = () => {
  let shouldPlay = false;

  function changePlayIcon() {
    shouldPlay = !shouldPlay;

    if (shouldPlay) {
      toggleVideoButton.innerHTML = "❚ ❚";
      playVideo();
    } else {
      toggleVideoButton.innerHTML = "▶";
      stopVideo();
    }
  }

  return changePlayIcon;
}

const playVideo = () => videoScreen.play();
const stopVideo = () => videoScreen.pause();

const changeTimeOfVideo = () => {
  const timeToSkip = parseFloat(e.target.getAttribute('data-skip'));
  videoScreen.currentTime = videoScreen.currentTime + timeToSkip;
}

const UpdateVideoProgressBar = () => {
  const percent = (videoScreen.currentTime / videoScreen.duration) * 100;
  progressOfVideo.style.flexBasis = `${percent}%`;
}

const updateVolium = () => videoScreen.volume = voliumSlider.value;
const updatePlaySpeed = () => videoScreen.playbackRate = playSpeedSlider.value;

toggleVideoButton.addEventListener('click', toggleVideo());
videoScreen.addEventListener('click', toggleVideo());
skipTimeButtons.forEach(button => button.addEventListener('click', changeTimeOfVideo));
videoScreen.addEventListener('timeupdate', UpdateVideoProgressBar);
voliumSlider.addEventListener('change', updateVolium);
playSpeedSlider.addEventListener('change', updatePlaySpeed);