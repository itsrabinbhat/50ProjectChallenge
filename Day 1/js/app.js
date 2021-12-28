const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.addEventListener("click", () => {
    removeActiveClasses();

    container.classList.add("active");
  });
});

const removeActiveClasses = () => {
  containers.forEach((container) => {
    container.classList.remove("active");
  });
};
