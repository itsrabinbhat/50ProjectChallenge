// Script Goes Here...
const cups = document.querySelectorAll(".cup-small");
const fillPercentage = document.getElementById("filled");
const litres = document.getElementById("litres");

highlightBigCup();

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCup(idx));
});

function highlightCup(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  highlightBigCup();
}

function highlightBigCup() {
  const totalCups = cups.length;
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  if (fullCups === 0) {
    fillPercentage.style.visibility = "hidden";
  } else {
    fillPercentage.style.visibility = "visible";
    fillPercentage.style.height = `${(fullCups / totalCups) * 250}px`;
    fillPercentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  const remained = document.querySelector(".remained");
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litres.innerText = `${(2 - (200 * fullCups / 1000)).toFixed(1)} L`
  }
}
