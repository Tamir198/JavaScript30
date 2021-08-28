var playerContainer = document.querySelector('.player'); 
let videoScreen = playerContainer.querySelector('.viewer');
let progressOfVideo = playerContainer.querySelector('.progress__filled');
let toggleVideoButton = playerContainer.querySelector('.toggle');
let sliders = playerContainer.querySelectorAll('.player__slider');
let skipTimeButtons = playerContainer.querySelectorAll('[data-skip]');

const toggleVideo = ()=>{
  let shouldPlay = false;

  function help(){
    shouldPlay = !shouldPlay;

    if(shouldPlay){
      toggleVideoButton.innerHTML  = "❚ ❚";
      playVideo();
    }else{
      toggleVideoButton.innerHTML  = "▶";
      stopVideo();
    }
  }

  return help;
}

const playVideo = ()=>videoScreen.play();
const stopVideo = () => videoScreen.pause();


function changeTimeOfVideo(e){
  const timeToSkip = parseInt(e.target.getAttribute('data-skip'));
  if(timeToSkip < 0 && videoScreen.currentTime + timeToSkip < 0){
  videoScreen.currentTime = 0; 

  }
  videoScreen.currentTime = videoScreen.currentTime + timeToSkip ; 
}

function UpdateVideoProgressBar(){
  //TODO Continue here
}


toggleVideoButton.addEventListener('click', toggleVideo());
skipTimeButtons.forEach(button => button.addEventListener('click', changeTimeOfVideo));
sliders.forEach(slider => slider.addEventListener('click', toggleVideo()));
videoScreen.addEventListener('timeupdate',UpdateVideoProgressBar)