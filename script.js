
// const search = document.getElementById('#search');
// search.addEventListener('click',getPokemon);

///Getting a Connection for Server,API with fetch-------------------------------

function getPokemon(e) {

const name = document.querySelector('#pokemonName').value;

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
const pokemonBox = document.querySelector('.pokemonBox').innerHTML =`<div>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt=""></div>
    <div class="pokemonInfo">
        <h1>Ditto</h1>
        <p>Flavor Text</p>
    </div>`;
  
})
    .catch((err)=>{
        console.log('Pokemon not Found',err);

});
  e.preventDefault();
}

getPokemon();