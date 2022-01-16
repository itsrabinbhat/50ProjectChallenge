// Script Goes Here...
const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => qualityChecker(e.target));
});

function qualityChecker(clicked) {
  if (good.checked && cheap.checked && fast.checked) {

    if(clicked == good){
        fast.checked = false
    }
    if(clicked == cheap){
        fast.checked = false
    }
    if(clicked == fast){
        cheap.checked = false
    }
  }
}
