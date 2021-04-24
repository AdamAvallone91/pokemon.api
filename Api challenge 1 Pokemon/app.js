// https://pokeapi.co/api/v2/pokemon/
const grassBtn = document.querySelector(".grassBtn");
const waterBtn = document.querySelector(".waterBtn");
const fireBtn = document.querySelector(".fireBtn");
const results = document.querySelector("#info")

waterBtn.addEventListener('click', (e) => {getPokemon('water')});
fireBtn.addEventListener('click', (e) => {getPokemon('fire')});
grassBtn.addEventListener('click', (e) => {getPokemon('grass')});

function getPokemon(type) {
    while (results.firstChild) {
        results.removeChild(results.firstChild)
        }
        
    fetch (`https://pokeapi.co/api/v2/type/${type}`)
        .then(result => result.json())
        .then(JSON => {
            console.log(JSON)
            let pokemon = JSON.pokemon.splice(0,3)

            pokemon.map(poke => {
                let url = poke.pokemon.url;
                fetch(url)
                .then(result => result.json())
                .then(result => {
                let p = document.createElement('p');
                let pokeImg = document.createElement('img')
                pokeImg.setAttribute('class', `${type}`);
                pokeImg.setAttribute('width', '200px');
                p.innerText = poke.pokemon.name
                p.className = 'innerPokemonText'
                pokeImg.src = result.sprites.front_default
                results.appendChild(p);
                results.appendChild(pokeImg)
                })
                
            })
        })
}