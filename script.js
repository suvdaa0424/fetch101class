const url = document.getElementById('url')
const btnFetch = document.getElementById('btnFetch')
const resDIV = document.getElementById('res')

btnFetch.addEventListener("click", goFetch)

function goFetch() {
    console.log(url.value)
    fetch(url.value)
        .then(response => response.json())
        .then(data => {
        console.log(data)

        for (key in data) {
            console.log(key)
            console.log(data[key])
            let tempP = document.createElement("p")
            tempP.textContent = `${key}: ${data[key]}`

            resDIV.appendChild(tempP)
        }
    })
}


// fetch("https://swapi.dev/api/starships/11")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })