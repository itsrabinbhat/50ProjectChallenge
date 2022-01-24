// Script Goes Here...
const bgImg = document.getElementById('bg')
const password = document.getElementById('password')

password.addEventListener('input', ()=>{
    const length = password.value.length
    const blur = (20 - length * 2)
    bgImg.style.filter = `blur(${blur}px)`
})
