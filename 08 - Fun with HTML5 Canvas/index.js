var canvas = document.getElementById('draw')
var canvasContext =  canvas.getContext('2d');
var isLineWidthGrowing = true;
resizeCanvas();

var lastMousePos = { x: 0, y: 0 };

window.addEventListener('resize', resizeCanvas);
document.addEventListener('mousemove', drawWithMouseOnCanvas);
document.addEventListener('mousedown', setNewMousePos);
document.addEventListener('mouseenter', setNewMousePos);

function setNewMousePos(e) {
  lastMousePos.x = e.clientX;
  lastMousePos.y = e.clientY;
}

function resizeCanvas() {
  canvasContext.canvas.width = window.innerWidth;
  canvasContext.canvas.height = window.innerHeight;
}

function drawWithMouseOnCanvas(e) {
  //NOTHING GOT PRESSES 
  if (!e.buttons) return;

  canvasContext.beginPath(); 
  canvasContext.lineWidth = getLineSize(canvasContext.lineWidth);
  canvasContext.lineCap = 'round';
  canvasContext.lineJoin = 'round';
  canvasContext.strokeStyle =  getStrokeColor();

  canvasContext.moveTo(lastMousePos.x, lastMousePos.y); 
  setNewMousePos(e);
  canvasContext.lineTo(lastMousePos.x, lastMousePos.y);
  canvasContext.stroke(); 
}

function getStrokeColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return  color;
}

function getLineSize(size){
  console.log(size);
  if(size >= 100){
    isLineWidthGrowing = false;
  } 
  if(size <= 1){
    isLineWidthGrowing = true;
  }
  return isLineWidthGrowing ?  size+1 : size-1;
}



