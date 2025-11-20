/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const len = document.getElementById("length")
const vol = document.getElementById("volume")
const mass = document.getElementById("mass")


convertBtn.addEventListener("click", function(){
    render()
    inputEl.value = ''
})

function render(){
    let meterToFeetVal = meterToFeet()
    let feetToMeterVal = feetToMeter()
    let literToGallonsVal = literToGallons()
    let gallonsToLitersVal = gallonsToLiters()
    let kilogramToPoundVal = kilogramToPound()
    let poundToKilogramVal = poundToKilogram()

    let lenTemp = `${inputEl.value} meters = ${meterToFeetVal} feet | ${inputEl.value} feet = ${feetToMeterVal} meters`
    let volTemp = `${inputEl.value} liters = ${literToGallonsVal} gallons | ${inputEl.value} gallons = ${gallonsToLitersVal} liters`
    let massTemp = `${inputEl.value} kilos = ${kilogramToPoundVal} pounds | ${inputEl.value} pounds = ${poundToKilogramVal} kilos`
    len.textContent = lenTemp
    vol.textContent = volTemp
    mass.textContent = massTemp
}

function meterToFeet(){
    let output = Number(inputEl.value) * 3.281
    return output.toFixed(3)
}

function feetToMeter(){
    let output = Number(inputEl.value) / 3.281
    return output.toFixed(3)
}

function literToGallons(){
    let output = Number(inputEl.value) * 0.264
    return output.toFixed(3)
}

function gallonsToLiters(){
    let output = Number(inputEl.value) / 0.264
    return output.toFixed(3)
}

function kilogramToPound(){
    let output = Number(inputEl.value) * 2.204
    return output.toFixed(3)
}

function poundToKilogram(){
    let output = Number(inputEl.value) / 2.204
    return output.toFixed(3)
}