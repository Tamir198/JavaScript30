let isShitPressed = false;
const checkBoxes = document.querySelectorAll('.inbox input');

document.addEventListener("keydown",checkIfShiftPressed);
document.addEventListener("ketup",shiftIsNotPressed);
checkBoxes.forEach(() => addEventListener("click",clickRelevantBoxes));

function checkIfShiftPressed(e){
  isShitPressed = e.shiftKey;
}

//TODO change status of isShitPressed on key up
function shiftIsNotPressed(e){
  isShitPressed = e.shiftKey;
}

function clickRelevantBoxes(e){
  if(isShitPressed){
    checkBoxes.forEach(element => {
      //TODO stop the function if there anything pressed 
      if(!element.checked){
        element.click();
        console.count(element.checked);
      }else{
        return;
      }
    });
  }
}