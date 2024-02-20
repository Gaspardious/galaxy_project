

/* Hover-effekten med text som visas vid hover över planeterna */

let results = document.getElementById("results");
let galaxy = document.getElementById("galaxy");

function handleMouseOver(event) {
    if (event.target.classList.contains("planets")) {
        results.innerHTML = event.target.id.toUpperCase();
    }
}

galaxy.addEventListener("mouseover", handleMouseOver);

export { galaxy, handleMouseOver };