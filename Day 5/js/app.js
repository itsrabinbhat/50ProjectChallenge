const bgImg = document.querySelector(".bg-img");
const loadText = document.querySelector(".loading-text");
const title = document.querySelector('.title');

var load = 0;
var int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;

  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  bgImg.style.filter = `blur(${scale(load, 0, 100, 20, 1)}px)`;

  setTimeout(()=>{

    title.style.transform = `scale(${load,0,100,0,1})`;
    title.style.filter = `blur(${scale(load, 0 ,100, 30, 0)}px)`

  },4000)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
