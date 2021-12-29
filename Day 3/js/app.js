const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');
const mainContainer = document.querySelector('.container');
const circleContainer = document.querySelector('.circle-container');

btnOpen.addEventListener('click', ()=>{

    mainContainer.classList.add('show-nav');
    circleContainer.classList.add('show-nav');

})
btnClose.addEventListener('click', ()=>{

    mainContainer.classList.remove('show-nav');
    circleContainer.classList.remove('show-nav');

})