const canvas = document.getElementById('draw')
const canvasContext = canvas.getContext('2d');
let isLineWidthGrowing = true;
let hslHue  = 0;

var lastMousePos = { x: 0, y: 0 };

window.onload = function() {
  resizeCanvas();
};

document.addEventListener('mousemove', drawWithMouseOnCanvas);
document.addEventListener('mousedown', setNewMousePos);
document.addEventListener('mouseenter', setNewMousePos);

function setNewMousePos(e) {
  lastMousePos.x = e.clientX;
  lastMousePos.y = e.clientY;
}

function resizeCanvas() {
  console.log("sd");
  canvasContext.canvas.width = window.innerWidth;
  canvasContext.canvas.height = window.innerHeight;
}

function drawWithMouseOnCanvas(e) {
  //Dont draw if mouse was no pressed 
  if (!e.buttons) return;

  canvasContext.beginPath();
  canvasContext.lineWidth = getLineSize(canvasContext.lineWidth);
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
  return `hsl(${hslHue+= 1/10}, 100%, 50%)`;
}

function getLineSize(size) {
  if (size >= 100) {
    isLineWidthGrowing = false;
  }
  if (size <= 1) {
    isLineWidthGrowing = true;
  }
  return (isLineWidthGrowing) ? (size + 1 / 10) : (size - 1 / 10);
}