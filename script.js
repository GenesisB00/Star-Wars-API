let button = document.querySelector("#searchButton")


async function getData(event) {

    event.preventDefault()

    let searchInput = document.getElementById("inputBar").value

    let url = `https://swapi.dev/api/people/${searchInput}/`
    
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#starwarsName")
        starwarsName.innerText = `Name: ${res.name.toUpperCase()}`
        console.log("success!", res.name)
        })
    .catch(error => {
        console.log("error!", error)}
    )

    
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#height")
        height.innerText = `Height: ${res.height.toUpperCase()}`
        console.log("success!", res.height)
        })
    .catch(error => {
        console.log("error!", error)}
    )

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#mass")
        mass.innerText = `Mass: ${res.mass.toUpperCase()}`
        console.log("success!", res.mass)
        })
    .catch(error => {
        console.log("error!", error)}
    )

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#hair_color")
        hair_color.innerText = `Hair Color: ${res.hair_color.toUpperCase()}`
        console.log("success!", res.hair_color)
        })
    .catch(error => {
        console.log("error!", error)}
    )

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#birth_year")
        birth_year.innerText = `Birth Year: ${res.birth_year.toUpperCase()}`
        console.log("success!", res.birth_year)
        })
    .catch(error => {
        console.log("error!", error)}
    )

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const peopleHeading = document.querySelector("#gender")
        gender.innerText = `Gender: ${res.gender.toUpperCase()}`
        console.log("success!", res.gender)
        })
    .catch(error => {
        console.log("error!", error)}
    )
}

button.addEventListener('click' , getData)
