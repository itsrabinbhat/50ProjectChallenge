const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", trigAnimation);

trigAnimation();
function trigAnimation() {
  let trigger = window.innerHeight;
  boxes.forEach((box) => {

    let boxTop = box.getBoundingClientRect().top;

    if(boxTop < (trigger * 4 )/5){

        box.classList.add('show');
    }
    else{
        box.classList.remove('show')
    }
  });

  console.log(trigger);
};
