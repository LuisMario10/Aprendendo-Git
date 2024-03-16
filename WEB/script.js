var divDisplay = document.querySelector("#display");
var date = new Date;
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
divDisplay.innerHTML = `Day: ${day} - Time: ${hours}:${minutes}`
alert("oi");