const button = document.querySelector("#doubloons");
const count = document.querySelector("#count");

let doubloons = 0;

button.addEventListener("click", () => {
    doubloons = doubloons + 1;
    count.textContent = doubloons + " doubloons";
});


