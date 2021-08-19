document.onkeypress = function (e) {
  switch (e.key) {
    case 'a':
      makeSound('sounds/clap.wav');
      highlightView(document.getElementById("a"));
      break;
    case 's':
      makeSound('sounds/hihat.wav');
      highlightView(document.getElementById("s"));
      break;
    case 'd':
      makeSound('sounds/kick.wav');
      highlightView(document.getElementById("d"));
      break;
    case 'f':
      makeSound('sounds/openhat.wav');
      highlightView(document.getElementById("f"));
      break;
    case 'g':
      makeSound('sounds/boom.wav');
      highlightView(document.getElementById("g"));
      break;
    case 'h':
      makeSound('sounds/ride.wav');
      highlightView(document.getElementById("h"));
      break;
    case 'j':
      makeSound('sounds/snare.wav');
      highlightView(document.getElementById("j"));
      break;
    case 'k':
      makeSound('sounds/tom.wav');
      highlightView(document.getElementById("k"));
      break;
    case 'l':
      makeSound('sounds/tink.wav');
      highlightView(document.getElementById("l"));
      break;
  }
};

function makeSound(sound) {
  var audio = new Audio(sound);
  audio.play();
}

function highlightView(div){
  div.classList.add("playing");
  setTimeout(function() {
    div.classList.remove("playing");
  }, 100);
}
