
// mouseover.js
let results = document.getElementById("results");
let galaxy = document.getElementById("galaxy");

function handleMouseOver(event) {
    console.log("Mouse over detected");
    if (event.target.classList.contains("planets")) {
        results.innerHTML = event.target.id.toUpperCase();
    }
}

galaxy.addEventListener("mouseover", handleMouseOver);

export { galaxy, results, handleMouseOver };