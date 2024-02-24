// script.js
import { galaxy, handleMouseOver } from '/js/mouseover.js';
import { fetchPlanetInfo } from '/js/api.js';

const textInput = document.querySelector("#search-field");
const apiElement = document.getElementById("api"); // Assuming this is the element where you display planet information
const btn = document.getElementById("btn"); // Assuming this is the button element

// Function to fetch and display planet information
function displayPlanetInfo(planetId) {
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
                apiElement.innerHTML = planetInfoString;
            } else {
                apiElement.innerHTML = `${planetId} - finns ej! <br> <br>
                Följande planeter finns på vintergatan:  <br>
                MERKURIUS, VENUS, JORDEN, MARS, JUPITER, SATURNUS, URANUS, NEPTUNUS`;
            }
        });
}

// Event listener for the button click
btn.addEventListener("click", () => {
    const searchText = textInput.value.toLowerCase();
    displayPlanetInfo(searchText);
});

// Initial display of planet information (for "jorden")
displayPlanetInfo("jorden");

applyHoverEffect();