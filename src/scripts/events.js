/**
 * Responsabilidad: gestionar los eventos
 * */
// import { fizzBuzz } from "./fizzBuzz"
// import { showResult } from "./dom"

document.getElementById("processBtn").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value
    const number = parseInt(input)

    const output = fizzBuzz(number)
    showResult(output)
})