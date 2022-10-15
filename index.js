let Length = document.getElementById("length");
let Volume = document.getElementById("volume");
let Mass = document.getElementById("mass");
let input = document.getElementById("data");
let button = document.getElementById("convert-btn");

button.addEventListener("click",function (){
    lengthConverter()
    volumeConverter()
    massConverter()
})

function lengthConverter(){
    let feet = input.value * 3.28;
    let meters = input.value / 3.28;
    Length.innerHTML = `${input.value} meters = ${feet.toFixed(4)} feet | ${input.value} feet ${meters.toFixed(4)} meters `
}

function volumeConverter(){
    let gallon = input.value / 3.785411784
    let liter = input.value * 3.785411784
    Volume.innerHTML = `${input.value} liter = ${gallon.toFixed(4)} gallon | ${input.value} gallon ${liter.toFixed(4)} liter `
}
function massConverter(){
    let pound = input.value * 2.20462262
    let kilogram = input.value / 2.20462262
    Mass.innerHTML = `${input.value} pound = ${kilogram.toFixed(4)} kilogram | ${input.value} pound ${pound.toFixed(4)} kilogram `
}