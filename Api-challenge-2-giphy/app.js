let input = document.getElementById('input')
const button = document.getElementById('click')

let output = document.getElementById('output')
let query = input.value;
console.log(input)
button.addEventListener("click", fetchResults)
button.addEventListener("jedi-path", fetchResults)

function fetchResults() {
    console.log(query)
fetch(`https://api.giphy.com/v1/gifs/search?api_key=2Tkax7RW55n9KjeJjMu7waQJ0EwQjmNj&q=${input.value}&limit=25&offset=0&rating=g&lang=en`)
.then(result => result.json())
.then(JSON => {
    JSON.data.map(data => {
        console.log(data)
        let starWars_img = document.createElement("img")
        starWars_img.src = data.images.downsized_medium.url
        output.appendChild(starWars_img)
    })
    console.log(JSON)
    console.log(JSON.data[0].images.downsized_medium)
    let url = JSON.data[0].images.downsized_medium.url
    output.setAttribute('src', url)
    output.src=url
})}