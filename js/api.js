/* API */

export { fetchPlanetInfo, planetClickListener, handlePlanetDisplay };


const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

/* Using fetch for planet-API */
function fetchPlanetInfo(planetId) {
    return fetch(`${baseUrl}/bodies`, {
        method: 'GET',
        headers: {'x-zocom': 'solaris-NKsTcw3OPrMQPoSz'}
    })
    .then((res) => res.json())
    .then((data) => {
        const planet = data.bodies.find(body => body.name.toLowerCase() === planetId.toLowerCase());
        return planet;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        return null;
    });
}


/* Function to fetch and display planet information */
function handlePlanetDisplay(planetId, displayElement) {
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

/* Eventlistener and function for clicks on planet, brings up information about the clicked planet */
document.addEventListener("click", planetClickListener);

function planetClickListener(event) {
    if (event.target.className.includes("planets")) {
        const planetId = event.target.id;
        handlePlanetDisplay(planetId, document.getElementById("api"));
    }
}



