// Script Goes Here...
const ratings = document.querySelectorAll('.reaction')
const sendBtn = document.getElementById('send-review')
const container = document.querySelector('.container')
const ratingContainer = document.querySelector('.reactions')

let selectedRating = 'Satisfied'

ratingContainer.addEventListener('click', e => {
    if(e.target.parentNode.classList.contains('reaction')){

        removeActive()
        
        e.target.parentNode.classList.add('active')

        selectedRating = e.target.nextElementSibling.innerText

    }
})

function removeActive(){
    for(let i=0; i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}

sendBtn.addEventListener('click', ()=>{

    container.style.transform = `rotateY(180deg)`
    setTimeout(()=>{
        container.style.transform = `rotateY(360deg)`
        container.style.transition = `none`

        container.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <p><b>Your Feedback: ${selectedRating}</b></p>
        <p>We'll use your feedback to improve our website.</p>

    `
    },320)

    

    container.style.fontSize = `1rem`
    container.style.maxWidth = `300px`
})