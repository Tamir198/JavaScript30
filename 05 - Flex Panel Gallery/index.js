const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener("click", ()=> changeUiPanel(panel)));
panels.forEach(panel => panel.addEventListener('transitionend', ()=>changeUiPanel2(panel)));

function changeUiPanel(panel){
  
  panel.classList.toggle('open');
  }

function changeUiPanel2(panel){
      panel.classList.toggle('open-active');
}






