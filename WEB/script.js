var buttonCountClick = document.querySelector("#count-click");
var divDisplay = document.querySelector("#display");

let count = 0;
buttonCountClick.addEventListener("click", () => {
    count++;
    divDisplay.innerText = `Valor Atual: ${count}`;
})