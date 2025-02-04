const span = document.getElementById("span");
const button = document.getElementById("add_1");

let currentValue = parseInt(span.textContent) || 0;

button.addEventListener('click', function () {
    currentValue += 1;
    span.textContent = currentValue;
})