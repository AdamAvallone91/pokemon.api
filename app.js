// API Application Programming Interface
/* an interaction between two applications a;low interaction between them without
the use of less abstract language
    -two types of API's
    -browser API
built into the browser and able to expose data from browser and environment
,ex: DOM API allowing us to style page, make popup windows appear,etc
    -third party API
require retrieval of their code from the web, such as googlemaps API
    -object based - have containers for data (JSON format)*/

// HTTP requests
/* defined set of request methods which indicate an action to be performed
REST - representational state transfer
    architectural style for stateless standard of communication
    -GET -retrieves resources by an id
    -POST -creates a new resource 
    -PUT -updates a resource using an id
    -DELETE -removes specific resource using an id
All of these reach an Endpoint
    -url that a client app uses to communicate with the server
    */

    let cardImg = document.querySelector("body > div > div > div.card-img > img");
    console.log(cardImg);
    let name = document.querySelector(".name");
    console.log(name);
    let ability = document.querySelector(".ability");
    let weight = document.querySelector("body > div > div > div.card-body > div.paragraph > p > em > strong")
    console.log(weight)
    let generateBtn = document.querySelector(".submit-btn");
    // console.log(generateBtn)
    generateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let id = document.querySelector(".search-input").value;
        // console.log(id)
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // GET request
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             // console.log(data.name)
    //             name.innerText = data.name;
    //             cardImg.src = data.sprites.front_shiny;
    //             ability.innerText = data.abilities[0].ability.name;
    //             weight.innerText = data.weight
    //         })
    // })


    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        name.innerText = data.name;
        cardImg.src = data.sprites.front_shiny;
        ability.innerText = data.abilities[0].ability.name;
        weight.innerText = data.weight

    }

    getPokemon();

})