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




/* 
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"; */



/* // Step 1: Obtain an API Key
fetch(`${baseUrl}/keys`, {
    method: 'POST',
    // Add any required headers or body content as per the API documentation
})
.then(response => response.json()) // Convert the response to JSON
.then(data => {
    const apiKey = data.key; // Adjust this line based on the actual structure of the apiKey object
    console.log(apiKey); // Log the API key (consider removing in production)




    // Step 2: Use the API Key to Fetch Bodies
    return fetch(`${baseUrl}/bodies`, {
        method: 'GET',
        headers: {'x-zocom': apiKey} // Use the dynamically obtained API key
    });
})
.then(response => response.json()) // Convert the response to JSON
.then(data => {
    console.log(data); // Process or display the bodies data as needed
})
.catch(error => {
    console.error('Error:', error);
});
  */






