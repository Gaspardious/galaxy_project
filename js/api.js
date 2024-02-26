/* API */

export { fetchPlanetInfo, planetClickListener, handlePlanetDisplay };


const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

// Using fetch for planet-API
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


// Function to fetch and display planet information
function handlePlanetDisplay(planetId, displayElement) {
    fetchPlanetInfo(planetId)
        .then((planet) => {
            let content;
            if (planet) {
                content = `
                    <h2>${planet.name}</h2>
                    <p><strong>Description</strong>: ${planet.desc}</p>
                    <p>Distance from the sun: ${planet.distance}</p>
                    <p>Orbital period: ${planet.orbitalPeriod}</p>
                    <p>Moons: ${planet.moons.join(", ")}</p>
                `;
            } else {
                content = `${planetId} does not exist! <br><br>
                The following planets are available in the Milky Way: <br>
                Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`;
            }
            displayElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error fetching planet information:', error);
            displayElement.innerHTML = 'Error fetching planet information. Please try again.';
        });
}


document.addEventListener("click", planetClickListener);

function planetClickListener(event) {
    // Check if the clicked element has the class "planets"
    if (event.target.className.includes("planets")) {
        // Get the ID of the clicked planet
        const planetId = event.target.id;
        // Use handlePlanetDisplay to fetch and display the planet info
        handlePlanetDisplay(planetId, document.getElementById("api"));
    }
}



