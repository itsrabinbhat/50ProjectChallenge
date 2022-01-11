// Script Goes Here...
const btn = document.querySelector('.btn')
const toastContainer = document.querySelector('.toasts')

const msgs = [
    'Success!',
    'Something Went Wrong!',
    'A warning!',
    'A Normal Notification.'
]

const msgTypes = [
    'success',
    'error',
    'warn',
    'info'
]

btn.addEventListener('click', () => showNotification())

function showNotification(){
    const idx = Math.floor(Math.random() * msgs.length)
    const toast = document.createElement('div')
    toast.classList.add('toast');

    toast.classList.add(`${getMsgType(idx)}`)

    toast.innerText = `${getMsg(idx)}`

    toastContainer.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 2000);
}

function getMsg(idx){
    return msgs[idx]
}
function getMsgType(idx){
    return msgTypes[idx]
}