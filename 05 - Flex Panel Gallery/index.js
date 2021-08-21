const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener("click", () => togglePanelWidth(panel)));

function togglePanelWidth(panel) {
  panel.classList.toggle('open');
  setTimeout(() => {
    panel.classList.toggle('open-active');
  }, 500);
}





