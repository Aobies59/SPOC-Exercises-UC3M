var value;
var visible_console = document.getElementById("console");
Accumulator(visible_console.dataset.startingvalue);
document.querySelector("button").addEventListener("click", read);

function Accumulator(startingValue) {
    var starting_value = parseInt(startingValue)
    if (isNaN(starting_value)) {
        console.error("startingValue must be a number");
        return;
    }
    value = starting_value;
    update_visible_console();
}

function read() {
    var value_to_add = prompt("Input the value");
    value_to_add = parseInt(value_to_add);
    if (isNaN(value_to_add)) {
        console.error("Value must be a number");
        return;
    }
    value += value_to_add;
    update_visible_console();
}

function update_visible_console() {
    visible_console.innerHTML = value;
}