

export { handlePlanetDisplay, displayElement };

const displayElement = document.getElementById("api"); // The main div that display all the information about the bodies from API. 
const btn = document.getElementById("btn"); // The button for search results
const planets = document.querySelectorAll('.planets'); // Gets all planets
const searchField = document.querySelector("#search-field");
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

// Function to obtain an API Key
function fetchApiKey() {
    return fetch(`${baseUrl}/keys`, {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => data.key)
    .catch(error => {
        console.error('Error fetching API key:', error);
        return null; // Return null if there's an error fetching the API key
    });
}

// Function to obtain the bodies
function fetchPlanetInfo(planetId) { // planetID is input field for the search bar
    return fetchApiKey()
        .then(apiKey => {
        if (!apiKey) {
            throw new Error('API Key could not be fetched');
        }
        return fetch(`${baseUrl}/bodies`, {
            method: 'GET',
            headers: {'x-zocom': apiKey}
        })
        .then((res) => res.json())
        .then((data) => {
            const planet = data.bodies.find(body => body.name.toLowerCase() === planetId.toLowerCase()); // planetID is input field for the search bar
            return planet;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            return null;
        });
    });
}

/* Function to fetch and display planet information */
function handlePlanetDisplay(planetId) {
    fetchPlanetInfo(planetId)
        .then((planet) => {
            let content;
            if (planet) {
                content = `
                    <h2>${planet.name}</h2>
                    <p><strong>Beskrivning</strong>: ${planet.desc}</p>
                    <p>Avstånd från solen: ${planet.distance}</p>
                    <p>Orbital period: ${planet.orbitalPeriod}</p>
                    <p>Månar: ${planet.moons.join(", ")}</p>
                `;
            } else {
                content = `${planetId} existerar inte! <br><br>
                Följande planeter finns på vår galax: <br>
                Merkurius, Venus, Jorden, Mars, Jupiter, Saturnus, Uranus, Neptunus`;
            }
            displayElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error fetching planet information:', error);
            displayElement.innerHTML = 'Error fetching planet information. Please try again.';
        });
}

/* Eventlistener and function for clicks on planets 🌍, brings up information about the clicked planet */
planets.forEach(function(planet) {
    planet.addEventListener('click', function(event) {
        var planetId = event.target.id;
        handlePlanetDisplay(planetId);
    });
});

// The button for the search-field
btn.addEventListener("click", () => {
    const planetId = document.querySelector("#search-field").value; // input field for the search-field
    handlePlanetDisplay(planetId.toLowerCase());
    searchField.value = "";
});

    // Check if the key pressed is 'Enter'
searchField.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const planetId = searchField.value; 
        handlePlanetDisplay(planetId.toLowerCase());
        searchField.value = "";
    }
});
