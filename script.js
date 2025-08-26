let numEl = document.getElementById("num");
let outputEl = document.getElementById("output");
let typeEl = document.getElementById("type");

const conv = document.getElementById("sub");
conv.addEventListener("click", () => {
    const value = Number(numEl.value);
    const type = typeEl.value;

    if (isNaN(value)) {
        outputEl.textContent = "Please enter a valid number.";
        return;
    }

    if (type === "length") {
        let feet = value * 3.28084;
        let meter = value * 0.3048;
        outputEl.textContent = `${value} meters = ${feet.toFixed(2)} feet | ${value} feet = ${meter.toFixed(2)} meters`;
    } 
    else if (type === "volume") {
        let gallons = value * 0.2641720524;
        let litres = value * 3.785411784;
        outputEl.textContent = `${value} litres = ${gallons.toFixed(2)} gallons | ${value} gallons = ${litres.toFixed(2)} litres`;
    } 
    else if (type === "mass") {
        let lbs = value * 2.2046226218;
        let kgs = value * 0.45359237;
        outputEl.textContent = `${value} kg = ${lbs.toFixed(2)} lbs | ${value} lbs = ${kgs.toFixed(2)} kg`;
    }
});
