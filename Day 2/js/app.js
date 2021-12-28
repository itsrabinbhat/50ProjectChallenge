const progressBar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".circle");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let progressCount = 1;

btnNext.addEventListener("click", () => {
  if (progressCount < circles.length) {
    progressCount++;
  }

  for (let i = 0; i < progressCount; i++) {
    circles[i].classList.add("active");
  }

  updateProgress();

  //   console.log(progressCount, circles.length);
});

btnPrev.addEventListener("click", () => {
  if (progressCount > 1) {
    progressCount--;
  }

  for (let i = progressCount; i >= progressCount; i--) {
    circles[i].classList.remove("active");
  }

  updateProgress();

  // console.log(progressCount, circles.length);
});

function updateProgress() {

    let width = ((progressCount-1)/((circles.length)-1)) * 100;

    progressBar.style.width = width +'%';

  if (progressCount === circles.length) {
    btnNext.disabled = true;
  } else if (progressCount === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
