
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const clipboard = document.getElementById('clipboard')
const generateBtn = document.getElementById('generate-btn')

generateBtn.addEventListener('click', () =>{

    const length = lengthEl.value
    const isUpper = upperEl.checked
    const isLower = lowerEl.checked
    const isNum = numEl.checked
    const isSymbol = symbolEl.checked

    resultEl.innerText = generatePassword(isUpper, isLower, isNum, isSymbol, length)
})

function generatePassword(upper, lower, num, symbol, length){

    let generatedPassword = ''

    const types = [{upper},{lower}, {num}, {symbol}].filter(item => Object.values(item)[0])

    if(types.length == 0){
        generatedPassword = ''
    }

    for(let i=1 ; i <= length ; i += types.length){

        types.forEach(type => {
            const funName = Object.keys(type)[0]
            generatedPassword += randomFuncs[funName]()
        })
    }

    return generatedPassword
}

const randomFuncs = {
    upper: getRandomUpper,
    lower: getRandomLower,
    num : getRandomNum,
    symbol : getRandomSymbol
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomNum(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[];:?/|'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// Creating Copy Functionality

clipboard.addEventListener('click', ()=>{
    const password = resultEl.innerText;
    if(!password){return}
    navigator.clipboard.writeText(password)

    alert('Password Copied To Clipboard!')
})