const canvas = document.getElementById('draw')
const canvasContext = canvas.getContext('2d');

let isCanvasLineWidthGrowing = true;
let hslHue = 0;

var lastMousePos = { x: 0, y: 0 };

document.addEventListener('resize',resizeCanvas);
document.addEventListener('mousemove', drawWithMouseOnCanvas);
document.addEventListener('mousedown', setNewMousePos);
document.addEventListener('mouseenter', setNewMousePos);

window.onload = ()=>{
canvasContext.lineWidth = 100;
resizeCanvas();
}

function setNewMousePos(mouseEvent) {
  lastMousePos.x = mouseEvent.clientX;
  lastMousePos.y = mouseEvent.clientY;
}

function resizeCanvas() {
  canvasContext.canvas.width = window.innerWidth;
  canvasContext.canvas.height = window.innerHeight;
}

function drawWithMouseOnCanvas(e) {
  //Dont draw if mouse was not pressed 
  if (!e.buttons) return;

  canvasContext.beginPath();
  canvasContext.lineWidth = getLineWidth(canvasContext.lineWidth);
  canvasContext.lineCap = 'round';
  canvasContext.lineJoin = 'round';
  canvasContext.strokeStyle = getStrokeColor();

  canvasContext.moveTo(lastMousePos.x, lastMousePos.y);
  setNewMousePos(e);
  canvasContext.lineTo(lastMousePos.x, lastMousePos.y);
  canvasContext.stroke();
}

function getStrokeColor() {
  if (hslHue >= 360) {
    hslHue = 0;
  }
  return `hsl(${hslHue += 1}, 100%, 50%)`;
}

function getLineWidth(size) {
  if (size > 100) {
    isCanvasLineWidthGrowing = false;
  }
  if (size == 1) {
    isCanvasLineWidthGrowing = true;
  }
  return (isCanvasLineWidthGrowing) ? (size + 1) : (size - 1);
}