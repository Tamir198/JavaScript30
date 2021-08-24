let isFirstClickOnCheckbox = true;
let isShiftPressed = false;
let firstCheckBoxIndex = 0;
const checkBoxes = [...document.querySelectorAll('.inbox input')];

checkBoxes.forEach(checkbox => checkbox.addEventListener("click", clickCheckBoxesInrange));

function updateFirstCheckboxClicked(e) {
  for (let i = 0, len = checkBoxes.length; i < len; i++) {
    if (isFirstClickOnCheckbox && checkBoxes[i] == e.target) {
      return i;
    };
  }
}

function clickCheckBoxesInrange(e) {
  if (isFirstClickOnCheckbox) {
    firstCheckBoxIndex = updateFirstCheckboxClicked(e);
  }

  isFirstClickOnCheckbox = false;
  if (e.shiftKey) {
    for (let i = firstCheckBoxIndex; i < checkBoxes.length; i++) {
      if (e.target == checkBoxes[i]) {
        break;
      }
      checkBoxes[i].checked = true;
    }
  }
}

