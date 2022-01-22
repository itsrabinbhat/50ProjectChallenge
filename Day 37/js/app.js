// Script Goes Here...
const menus = document.querySelectorAll('li')
menus.forEach((menu, idx) => {
    menu.addEventListener('click', (e)=>{
        const selected = e.target
        removeActive()
        selected.parentElement.classList.add('active')
        getContent(idx)

    })
})

function removeActive(){
    menus.forEach(menu => menu.classList.remove('active'))
}

function getContent(idx){
    const contents = document.querySelectorAll('.content')

    removeContent(contents)

    contents[idx].classList.add('show')
}

function removeContent(contents){
    contents.forEach(content => content.classList.remove('show'))
}