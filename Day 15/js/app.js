// Script Goes Here...
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    let incrementor = target / 150;

    if (count < target) {
      count = Math.ceil(count + incrementor);
      counter.innerText = `${count}`;

      setTimeout(() => {
        updateCounter();
      }, 1);
    } else counter.innerText = `${target}`;
  };

  updateCounter();
});
