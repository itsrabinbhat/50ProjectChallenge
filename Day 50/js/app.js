// Script Goes Here...
const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('btn-play')
const insects = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game')
const time = document.getElementById('time')
const score = document.getElementById('score')
const game_over = document.querySelector('.game-over')
const restart_game = document.getElementById('reload')

let second = 6
let current_score = 0
let selected

start_btn.addEventListener('click', ()=>{

    screens[0].classList.add('up')
})

insects.forEach(insect => {
    insect.addEventListener('click',()=>{
        const selected_img = insect.querySelector('img')
        selected = selected_img.getAttribute('src')
        
        screens[1].classList.add('up')

        setTimeout(()=>{
            createInsect()
        },1000)

        startGame()

    } )
})

function startGame(){
    setInterval(increaseTime, 1000)
}

function increaseTime(){
    let m = Math.floor(second / 60)
    let s = second % 60

    m = m < 10? `0${m}` : m;
    s = s < 10? `0${s}` : s;

    time.innerHTML = `Time: ${m}:${s}`

    

    if(second > 0){
        second--
    }
    else if(second === 0){
        gameOver()
    }
}

function createInsect(){
    
    const insectEl = document.createElement('div')
    insectEl.classList.add('insect')

    const {x, y} = getLocation()

    insectEl.style.left = `${x}px`
    insectEl.style.top = `${y}px`

    insectEl.innerHTML = `
        <img src="${selected}" style="transform: rotate(${Math.random() * 360}deg);">
    `
    game_container.appendChild(insectEl)

    insectEl.addEventListener('click', ()=>{
        insectEl.classList.add('caught')
        updateScore()
        addInsects()
    })
}

function updateScore(){
    current_score++

    score.innerHTML = `Score: ${current_score}`
}

function addInsects(){
    setTimeout(()=> createInsect(), 1000)
    setTimeout(()=> createInsect(), 1500)
}

function getLocation(){

    let box_width = game_container.offsetWidth
    let box_height = game_container.offsetHeight

    let x = Math.random()* (box_width -200)+100 
    let y = Math.random()* (box_height -200)+100 

    return{x, y}
}

function gameOver(){
    game_over.innerHTML = `
    <h2>Game Over!</h2>
    <p>Your Score is ${current_score}</p>
    <button class="btn" id="reload" onclick="location.reload()">Play Again</button>
    `
    game_over.classList.add('active')
    game_container.classList.add('over')
}

restart_game.addEventListener('click', (e)=>{
    
    game_over.classList.remove('active')
})