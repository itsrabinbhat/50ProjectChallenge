// Script Goes Here...
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{

    button.addEventListener('click', function(event) {

        const x = event.clientX
        const y = event.clientY

        const buttonTop = event.target.offsetTop
        const buttonLeft = event.target.offsetLeft


        const rippleSpan = document.createElement('span');
        rippleSpan.classList.add('circle')

        rippleSpan.style.left = `${x - buttonLeft}px`
        rippleSpan.style.top = `${y - buttonTop}px`

        this.appendChild(rippleSpan)

        setTimeout(() => rippleSpan.remove(), 500)
    })
})
