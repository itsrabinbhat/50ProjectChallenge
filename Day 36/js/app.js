// Script Goes Here...
const container = document.getElementById("container");
const POKEMONS = 100;
const bgColors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b336',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5'
}

for(let i=1; i <= POKEMONS; i++){
  getPokemon(i)
}

async function getPokemon(idx) {

  const API_URL = `https://pokeapi.co/api/v2/pokemon/${idx}`

  const res = await fetch(API_URL)
  const data = await res.json()
  createPokemon(data)
}

function createPokemon(pokemon) {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')
  const id = pokemon.id.toString().padStart(3, '0')
  const type = pokemon.types[0].type.name
  const IMG_API = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  pokemonEl.innerHTML = `
  <div class="img-container">
    <img src=${IMG_API} />
  </div>

  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${pokemon.name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `

  applyBg(pokemonEl, type)

  container.appendChild(pokemonEl)
}

function applyBg(pokemonEl, type) {
  pokemonEl.style.backgroundColor = `${bgColors[type]}`
}