// Script Goes Here...
const openBtn = document.querySelector('.nav-open')
const closeBtn = document.querySelector('.nav-close')

const navEls = document.querySelectorAll('.nav')

openBtn.addEventListener('click', ()=>{
    navEls.forEach(navEl => {
        navEl.classList.add('active')
    })
})

closeBtn.addEventListener('click', ()=>{
    navEls.forEach(navEl => {
        navEl.classList.remove('active')
    })
})
