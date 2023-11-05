///Event Listener--------------------------------------------------------------
const search = document.getElementById('search');
search.addEventListener('click',getPokemon);


function capitalFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string){
    return string.toLowerCase();
}
function getPokemon(e) {
    const name = document.querySelector('#pokemonName').value;
    const pokemonName = lowerCaseName(name); 

///Getting a Connection for Server,API with fetch-------------------------------
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
///Dom---------------------------------
const pokemonBox = document.querySelector('.pokemonBox')

pokemonBox.innerHTML =`<div>
    <img src="${data.sprites.front_default}" alt="${data.name}"></div>
    <div class="pokemonInfo">
        <h1>${capitalFirstLetter(data.name)}</h1>
        <p>${data.stats[0].stat.name}</p>
    </div>`;
  
})
    .catch((err)=>{
        console.log('Pokemon not Found',err);

});
  e.preventDefault();
}

getPokemon();