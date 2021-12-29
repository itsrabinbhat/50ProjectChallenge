const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const searchInput = document.querySelector('#search-input');

btn.addEventListener('click', ()=>{

    search.classList.toggle('active');
    searchInput.focus();
})
