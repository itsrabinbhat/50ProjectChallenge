// Script Goes Here...
const imgs = document.querySelectorAll(".img");
let clickTime = 0;
let times = 0;

imgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    if (clickTime === 0) {
      clickTime = new Date().getTime();
    } else if (new Date().getTime() - clickTime < 800) {
      getHeart(img);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  });
});

const getHeart = (img) => {
  const hearts = img.querySelector("#hearts");

  const heartEl = document.createElement("i");
  heartEl.classList.add("heart");
  heartEl.classList.add("heart-grow");
  heartEl.classList.add("fas");
  heartEl.classList.add("fa-heart");

  img.appendChild(heartEl);

  if(hearts.innerText == 0){
      times = 1
  }else{
      times++
  }

  hearts.innerHTML = `${times} <i class="heart fas fa-heart"></i>`;

  setTimeout(() => {
    heartEl.remove();
  }, 1000);
};
