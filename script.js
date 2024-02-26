// script.js
import { galaxy, handleMouseOver } from '/js/mouseover.js';
import { handlePlanetDisplay } from '/js/api.js';


const textInput = document.querySelector("#search-field");
const apiElement = document.getElementById("api"); // Assuming this is the element where you display planet information
const btn = document.getElementById("btn"); // Assuming this is the button element


// The button for triggering the display
btn.addEventListener("click", () => {
    const planetId = document.querySelector("#search-field").value; // Assuming you have an input field for the planet ID
    handlePlanetDisplay(planetId.toLowerCase(), document.getElementById("api"));
});


// Initial display of planet information (for "jorden")
handlePlanetDisplay("jorden", apiElement);
