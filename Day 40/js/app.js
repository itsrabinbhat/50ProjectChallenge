// Script Goes Here...
const codes = document.querySelectorAll('.code')
const btn = document.querySelector('.btn')
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', e =>{

        if(e.key >= 0 && e.key <= 9){
            if(idx < codes.length-1){
                codes[idx].value = ''
                setTimeout(()=> codes[idx + 1].focus(),10)
            }
            else{
                setTimeout(()=> btn.focus(),10)
            }
        }
        else if(e.key === 'Backspace'){
            if(idx > 0){
                setTimeout(()=> codes[idx - 1].focus(),10)
            }
        }
    })
})

btn.addEventListener('click', ()=>{
        const msg = document.createElement('div')
    msg.classList.add('msg')
    msg.innerHTML = 'Email is verified!'

    document.querySelector('body').appendChild(msg)
    codes.forEach(code => code.value = '')

    setTimeout(() => msg.remove(), 2000)
})