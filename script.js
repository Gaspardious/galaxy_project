// script.js
import { handleMouseOver } from '/js/mouseover.js';
import { handlePlanetDisplay } from '/js/api.js';


const apiElement = document.getElementById("api"); 
const btn = document.getElementById("btn"); 


// The button for triggering the display
btn.addEventListener("click", () => {
    const planetId = document.querySelector("#search-field").value; // Assuming you have an input field for the planet ID
    handlePlanetDisplay(planetId.toLowerCase(), document.getElementById("api"));
});


// Initial display of planet information (for "jorden")
handlePlanetDisplay("jorden", apiElement);
handleMouseOver("jorden", apiElement);
