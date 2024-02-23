

/* API */

export { fetchPlanetInfo, planetClickListener };

document.addEventListener("click", planetClickListener);
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";



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

function planetClickListener(event) {
    // Check if the clicked element has the class "planets"
    if (event.target.className.includes("planets")) {
        // Get the ID of the clicked planet
        const planetId = event.target.id;
        fetchPlanetInfo(planetId)
        .then((planet) => {
            if (planet) {
                const planetInfoString = `
                    <h2>${planet.name}</h2>
                    <p><strong>Beskrivning</strong>: ${planet.desc}</p>
                    <p>Avstånd från solen: ${planet.distance}</p>
                    <p>Orbital period: ${planet.orbitalPeriod}</p>
                    <p>Månar: ${planet.moons.join(", ")}</p>
                `;
                // Display the planet info in the API element
                document.getElementById("api").innerHTML = planetInfoString;
            } else {
                console.log(`${planetId} data not found`);
            }
        });
    }
}

