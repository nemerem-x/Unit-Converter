/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("#input")
const btn = document.querySelector("#convert")
const meters = document.querySelector("#meters")
const liters = document.querySelector("#liters")
const kilos = document.querySelector("#kilos")

// if(input.value.length > 999) {
//     input.classList.add("expand")
// }

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let number = input.value
    if (number && !Number.isNaN(number)){
        // length(Meter/Feet)
        let meter = number * 3.281
        let feet = number / 3.281
        meters.textContent = ` ${number} meters = ${meter.toFixed(3)} feet | ${number} feet = ${feet.toFixed(3)} meters`

        // Volume
        let liter = number * 0.264
        let gallon = number / 0.264
        liters.textContent = ` ${number} liters = ${liter.toFixed(3)} gallons | ${number} gallons = ${gallon.toFixed(3)} liters`

        //mass
        let kilogram = number * 2.204
        let pound = number / 2.204
        kilos.textContent = `${number} kilos = ${kilogram.toFixed(3)} pounds | ${number} pounds = ${pound.toFixed(3)} kilograms`

        input.value = ""
        input.classList.remove("red")
    } else {
        input.classList.add("red")

        setTimeout(function(){
            input.classList.remove("red")
        }, 2000)
              
        // input.classList.add("red")
    }
    
})