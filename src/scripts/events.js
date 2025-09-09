/**
 * Responsabilidad: gestionar los eventos
 * */
document.getElementById("processBtn").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value
    const number = parseInt(input)

    const output = fizzBuzz(number)
    showResult(output)
})