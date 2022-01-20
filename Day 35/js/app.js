// Script Goes Here...
const container = document.getElementById("container");
const SQUARES = 2000;
const colors = [
  "#1abc9c",
  "#3498db",
  "#8e44ad",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#f1c40f",
];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(square) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
  square.style.backgroundColor = "#333";
  square.style.boxShadow = `0 0 2px #333`;
}

const squares = document.querySelectorAll(".square");



setInterval(() => {
    const randomSqr = squares[Math.floor(Math.random() * squares.length)];
  setColor(randomSqr);

  setTimeout(() => {
      removeColor(randomSqr)
  }, 2000);
}, 1);
