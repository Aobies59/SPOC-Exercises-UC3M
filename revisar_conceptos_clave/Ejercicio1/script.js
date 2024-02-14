var inner_square = document.getElementById("square");
var outer_square = document.getElementById("container");
outer_square.addEventListener("click", moveSquare);

function moveSquare(event) {
    console.log("Moving square...")
    inner_square.style.left = event.clientX - inner_square.offsetWidth/2 + "px";
    inner_square.style.top = event.clientY - inner_square.offsetHeight/2 + "px";
}