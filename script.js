






const pokedex = document.getElementById('pokedex');
const fetchPokemon=  async ()=> {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    const pokemon = data.results.map(   (result, index)=>({
        name:result.name,
        id:index +1,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,

        apiURL: result.url
        
    }));
    displayPokemon(pokemon);
    // console.log(data.results);
};







// const promises =[];

// for(let i =1 ; i <= 151 ; i++ ){
// const urlOne = `https://pokeapi.co/api/v2/pokemon/${i}`;
//     // const urlTwo = 'https://pokeapi.co/api/v2/pokemon-species/bulbasaur';
    
//     promises.push(fetch(urlOne)
//     .then((res)=>res.json()));
// };
// ////Trying to add more=============================
  
//     Promise.all(promises).then( results =>{
        
        
//         const pokemon = results.map( pokeData=>({
//             name: pokeData.name,
//             id:pokeData.id,
//             image:pokeData.sprites.other['official-artwork'].front_default,
//             type: pokeData.types.map((type)=>type.type.name),
            
            

//         }));
//         // console.log(pokemon);
//         displayPokemon(pokemon);
//     });


   const displayPokemon =(pokemon) =>{
      
         const pokemonHTMLString=pokemon.map(pokes =>
          `<li class ="card" onclick="selectPokemon(${pokes.id})">
                <h2 class = "card-title">${pokes.id} ${pokes.name}</h2>   
                <img class ="card-image" src="${pokes.image}" width="200"/>
          </li>`
          ).join('');
    //      console.log(pokes);
         pokedex.innerHTML= pokemonHTMLString;
      
         };

         const selectPokemon =async(id)=>{
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(url);
            const newPokes = await response.json();
            
            displayPopup(newPokes);
         };

         const displayPopup = (pokes) => {
             const type = pokes.types.map((type)=> type.type.name).join(', '); 
             const image = pokes.sprites.other['official-artwork'].front_default;
             console.log(image);
             const htmlString =`<div class="popup">
             
             <button id="closeBtn" onclick="closePopup()">Close</button>
             <div class="card">
                <img class="card-image" src = "${image}"/>
                <h2 class="card-title">${pokes.id}. ${pokes.name}</h2>
                <p>Height: ${pokes.height}| Weight: ${pokes.weight}| Type: ${type}</p>
                </div>
                </div>`;

            

             
           

             pokedex.innerHTML = htmlString + pokedex.innerHTML
                // console.log(htmlString);
            // console.log(newPokes);
            // console.log(about);
         }

         const closePopup =()=>{
         const popup=document.querySelector('.popup');
         popup.parentElement.removeChild(popup);
         };
         fetchPokemon();
    // .then((pokeData)=>{
    //     console.log(pokeData);
    //     ///---------------------------------------------------------Question how does this grab data , over the for in loop and creates its own set of data?
       
    //     const pokemon={
    //         name: pokeData.name,
    //         id:pokeData.id,
    //         image:pokeData.sprites.other['official-artwork'].front_default,
    //         type: pokeData.types.map((type)=>type.type.name)


    //     };
        // pokemon['name']= pokeData.name;
        // pokemon['id']= pokeData.id;
        // pokemon['images']= pokeData.sprites.other['official-artwork'].front_default;
        // pokemon['type']=pokeData.types.map((type)=>type.type.name)
        
        // console.log(pokemon);
    ///------------------------------------------------
     
   
    
        
        
        
        
        
     
    













////============================================Why doesnt this work? compared to my new solution>
//     let dataArray=[];

// for(const key in pokeData){
//     let entry=[];
//     entry.push(key);
//     entry.push(pokeData[key])
//     dataArray.push(entry);
// }
// // console.log(dataArray);

    
    
    
    
    
//     // console.log(pokeData.flavor_text_entries[6].flavor_text);
//     let tableData ='';
//     dataArray.map((values)=>{
//     tableData=`<h1>${values.name}</h1>`;
//     console.log(values.species);
//      });
//     document.getElementById('table_body').innerHTML=tableData;

// })
