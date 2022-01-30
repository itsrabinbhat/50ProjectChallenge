// Script Goes Here...
const container = document.querySelector('.container')
const search = document.getElementById('search')
let IMG_URL = 'https://source.unsplash.com/random/'
let imgSize = 400

getImgs(IMG_URL)

search.addEventListener('keypress', e =>{

    if(e.key === 'Enter'){
        const searchText = search.value
        search.value = ''

        IMG_URL = `https://source.unsplash.com/random?${searchText.toLowerCase()}/`
        getImgs(IMG_URL)

    }
})




function getImgs(IMG_URL){
    container.innerHTML = ''
    for(let i = 0; i < 30 ; i++){
        const imgEl = document.createElement('img')
        imgEl.src = IMG_URL + `${imgSize}x${imgSize}`
    
        container.appendChild(imgEl)

        imgSize++
    }
}

