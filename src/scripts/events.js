/**
 * Responsabilidad: gestionar los eventos
 * */
import { fizzBuzz } from "./fizzBuzz.js"
import { showResult } from "./dom.js"

document.getElementById("processBtn").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value
    const number = parseInt(input)

    const output = fizzBuzz(number)
    showResult(output)
})