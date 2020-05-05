let dogsURL;
const queryParams = new URLSearchParams(window.location.search);
const search = queryParams.get("search");

if (search) {
    dogsURL = `http://localhost:3000/dogs?search=${search}`
} else {
    dogsURL = 'http://localhost:3000/dogs'
}

// const dogsURL = search
//     ? `http://localhost:3000/dogs?search=${search}`
//     : 'http://localhost:3000/dogs';
 
fetch(dogsURL)
    .then(parseJSON)
    .then(displayDogs)


function displayDogs(dogs) {
    dogs.forEach(showDog)
}

function showDog(dog){
    const dogName = document.createElement("h1")
    dogName.textContent = dog.name; 
    document.body.appendChild(dogName)
}
function parseJSON(response){
    return response.json()
}