// Script Goes Here...
const fill = document.querySelector(".fill");
const emptyBoxes = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const emptyBox of emptyBoxes) {
  emptyBox.addEventListener("dragenter", dragEnter);
  emptyBox.addEventListener("dragleave", dragLeave);
  emptyBox.addEventListener("dragover", dragOver);
  emptyBox.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";

  setTimeout(() => (this.className = "duck"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragEnter(event) {
  event.preventDefault();

  this.className += " hovered";
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";

  this.appendChild(fill);
}
