// Script Goes Here...
const imgContainer = document.querySelector('.img-container')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const totalSlides = document.querySelectorAll('img').length

let imgCounter = 0

changeImg()

function changeImg() {

    imgContainer.style.transform = `translate(-${imgCounter * 20}%)`
}

leftBtn.addEventListener('click', ()=>{

    imgCounter--
    if(imgCounter < 0){
        imgCounter = totalSlides-1
    }

    changeImg()
})

rightBtn.addEventListener('click', ()=>{

    imgCounter++
    if(imgCounter > totalSlides-1){
        imgCounter = 0
    }

    changeImg()
})

setInterval(autoChange, 3500)

function autoChange(){
    const randomNum = Math.floor(Math.random() * 2)

    if(randomNum == 0){
        imgCounter--
        if(imgCounter < 0){
            imgCounter = totalSlides-1
        }
    }else{
        imgCounter++
        if(imgCounter > totalSlides-1){
            imgCounter = 0
        }
    }

    changeImg()
}