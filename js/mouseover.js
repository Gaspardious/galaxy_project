

/* Hover-effekten med text som visas vid hover över planeterna */

let results = document.getElementById("results");
let galaxy = document.getElementById("galaxy");

// Visar "JORDEN" by default när sidan öppnas. 
results.innerHTML = "JORDEN";


galaxy.addEventListener("mouseover", handleMouseOver);

function handleMouseOver(event) {
    if (event.target.classList.contains("planets")) {
        results.innerHTML = event.target.id.toUpperCase();
    }
}



export { galaxy, handleMouseOver };





/* const jupiter = document.getElementById("jupiter");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptunus");
const saturn = document.getElementById("saturnus");
const mercury = document.getElementById("merkurius");
const venus = document.getElementById("venus");
const earth = document.getElementById("jorden");
const mars = document.getElementById("mars"); */