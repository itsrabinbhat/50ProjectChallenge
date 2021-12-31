const leftScreen = document.querySelector(".left");
const rightScreen = document.querySelector(".right");
const heading = document.querySelectorAll("h1");
const body = document.querySelector("body");

var blur = 20;
var int = setInterval(blurring, 30);

function blurring() {
  blur -= 0.5;
  if (blur == 0) {
    clearInterval(int);
  }
  body.style.filter = `blur(${blur}px)`;
  console.log(blur);
}

leftScreen.addEventListener("mouseover", () => {
  leftScreen.style.width = `75%`;
  rightScreen.style.width = `25%`;
  heading[1].style.fontSize = `2rem`;
});
leftScreen.addEventListener("mouseout", () => {
  leftScreen.style.width = `50%`;
  rightScreen.style.width = `50%`;
  heading[1].style.fontSize = `4rem`;
});
rightScreen.addEventListener("mouseover", () => {
  leftScreen.style.width = `25%`;
  rightScreen.style.width = `75%`;
  heading[0].style.fontSize = `2rem`;
});
rightScreen.addEventListener("mouseout", () => {
  leftScreen.style.width = `50%`;
  rightScreen.style.width = `50%`;
  heading[0].style.fontSize = `4rem`;
});
