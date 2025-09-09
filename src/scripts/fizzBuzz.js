/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */
function fizzBuzz(number) {
    try {
        if (isNaN(number)) {
            throw new Error("El valor introducido no es un número")
        }

        if (number <= 0) {
            throw new Error("El valor introducido debe ser mayor a 0")
        }

        let result = ""
        if (number % 3 === 0 && number % 5 === 0) {
            result = "FizzBuzz"
        } else if (number % 3 === 0) {
            result = "Fizz"
        } else if (number % 5 === 0) {
            result = "Buzz"
        } else {
            result = number.toString()
        }

        return {
            status: "ok",
            message: "Operación realizada correctamente",
            data: { number, result }
        }

    } catch (error) {
        return {
            status: "error",
            message: error.message,
            data: { number, result: null }
        }
    }
}