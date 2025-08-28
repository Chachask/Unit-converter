let numEl = document.getElementById("num");

let lengthOut = document.getElementById("length-output");
let volumeOut = document.getElementById("volume-output");
let massOut   = document.getElementById("mass-output");

const conv = document.getElementById("sub");

conv.addEventListener("click", () => {
    const value = Number(numEl.value);

    if (isNaN(value)) {
        lengthOut.textContent = "❌ Enter a valid number.";
        volumeOut.textContent = "";
        massOut.textContent   = "";
        return;
    }

    // Length conversion
    let feet = value * 3.28084;
    let meter = value * 0.3048;
    lengthOut.textContent = `${value} meters = ${feet.toFixed(2)} feet | ${value} feet = ${meter.toFixed(2)} meters`;

    // Volume conversion
    let gallons = value * 0.2641720524;
    let litres = value * 3.785411784;
    volumeOut.textContent = `${value} litres = ${gallons.toFixed(2)} gallons | ${value} gallons = ${litres.toFixed(2)} litres`;

    // Mass conversion
    let lbs = value * 2.2046226218;
    let kgs = value * 0.45359237;
    massOut.textContent = `${value} kg = ${lbs.toFixed(2)} lbs | ${value} lbs = ${kgs.toFixed(2)} kg`;
});
