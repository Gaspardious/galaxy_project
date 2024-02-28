
export { handleMouseOver };


let galaxy = document.getElementById("galaxy");
let results = document.getElementById("results");

/* Hover-effect that show the name of the planet when hovering over it */
galaxy.addEventListener("mouseover", handleMouseOver);

function handleMouseOver(event) {
    if (event.target.classList.contains("planets")) {
        results.innerHTML = event.target.id.toUpperCase();
    }
}

// Shows "JORDEN" by default when the website is initially visited. 
results.innerHTML = "JORDEN";





