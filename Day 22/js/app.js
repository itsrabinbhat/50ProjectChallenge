// Script Goes Here...
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
colorEl.value = '#1dd1a1'
let color = colorEl.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function updateSizeEl() {
  sizeEl.innerText = size;
}

increase.addEventListener("click", () => {
  if (size < 5) {
    size++;
  } else {
    size += 5;

    if (size > 40) {
      size = 40;
    }
  }

  updateSizeEl();
});
decrease.addEventListener("click", () => {
  if (size <= 5) {
    size--;

    if (size < 1) {
      size = 1;
    }
  } else size -= 5;

  updateSizeEl();
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener('click', () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height)
} )
