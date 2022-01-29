// Script Goes Here...
const testimonialContainer = document.getElementById("testimonial");

let idx = 1;

getTestimonials();

async function getTestimonials() {
  const res = await fetch("https://testimonialapi.toolcarton.com/api");

  const data = await res.json();

  displayTestimonial(data);

  console.log(data[0])

}

function displayTestimonial(testimonials) {
  setInterval(() => {
    const { message, name, designation, avatar } = testimonials[idx];

    testimonialContainer.innerHTML = `
          <div class="progress-bar"></div>
          <div class="fas fa-quote-left fa-quote"></div>
          <div class="fas fa-quote-right fa-quote"></div>
          <p class="text">${message}</p>
  
          <div class="user">
              <img src="${avatar}" class="user-img">
  
              <div class="user-info">
                  <strong class="Name">${name}</strong>
                  <small class="role">${designation}</small>
              </div>
          </div>
          `;
  
    idx++;
  
    if (idx > testimonials.length) {
      idx = 0;
    }
  }, 10000);
}
