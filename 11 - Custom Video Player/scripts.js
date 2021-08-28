var playerContainer = document.querySelector('.player'); 
let videoScreen = playerContainer.querySelector('.viewer');
let progressOfVideo = playerContainer.querySelector('.progress__filled');
let toggleVideoButton = playerContainer.querySelector('.toggle');
let voliumSlider = document.getElementsByName("volume")[0];
let playSpeedSlider = document.getElementsByName("playbackRate")[0];
let skipTimeButtons = playerContainer.querySelectorAll('[data-skip]');

const toggleVideo = ()=>{
  let shouldPlay = false;

  function changePlayIcon(){
    shouldPlay = !shouldPlay;

    if(shouldPlay){
      toggleVideoButton.innerHTML  = "❚ ❚";
      playVideo();
    }else{
      toggleVideoButton.innerHTML  = "▶";
      stopVideo();
    }
  }

  return changePlayIcon;  
}

const playVideo = ()=>videoScreen.play();
const stopVideo = () => videoScreen.pause();


function changeTimeOfVideo(e){
  const timeToSkip = parseInt(e.target.getAttribute('data-skip'));
  videoScreen.currentTime = videoScreen.currentTime + timeToSkip ; 
}

function UpdateVideoProgressBar(e){
  let percent = (videoScreen.currentTime/videoScreen.duration)*100;
  progressOfVideo.style.flexBasis =   `${percent}%`;
}

function updateVolium(){ 
  videoScreen.volume = voliumSlider.value;
}

function updatePlaySpeed(){
  videoScreen.playbackRate  = playSpeedSlider.value;
}

toggleVideoButton.addEventListener('click', toggleVideo());
skipTimeButtons.forEach(button => button.addEventListener('click', changeTimeOfVideo));
videoScreen.addEventListener('timeupdate',UpdateVideoProgressBar)
videoScreen.addEventListener('click',toggleVideo())
voliumSlider.addEventListener('change',updateVolium)
playSpeedSlider.addEventListener('change',updatePlaySpeed)