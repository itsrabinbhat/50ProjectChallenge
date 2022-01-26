// Script Goes Here...
const slider = document.getElementById('slider')

slider.addEventListener('input', e =>{
    const value = e.target.value

    slider.nextElementSibling.innerHTML = `${value}`

    slider.nextElementSibling.style.left = `${value * 2.6}px`
})
