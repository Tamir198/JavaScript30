const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener("click", ()=> togglePanelWidth(panel)));
panels.forEach(panel => panel.addEventListener('transitionend', ()=>toggleTextShow(panel)));

function togglePanelWidth(panel){
  panel.classList.toggle('open');
  }

function toggleTextShow(panel){
  panel.classList.toggle('open-active');
}






