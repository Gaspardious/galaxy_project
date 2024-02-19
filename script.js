
let results = document.getElementById("results");
let galaxy = document.getElementById("galaxy");



galaxy.addEventListener("mouseover", function(event) {
    console.log("Mouse over detected");
    if (event.target.classList.contains("planets")) {
        results.innerHTML = event.target.id.toUpperCase();
    }
});

