// Script Goes Here...
const nav = document.querySelector("nav");

const btnToggle = document.getElementById("toggle");

btnToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
