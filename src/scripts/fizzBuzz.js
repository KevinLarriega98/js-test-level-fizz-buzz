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
export function fizzBuzz(number) {
    try {
        if (isNaN(number)) {
            throw new Error("El valor introducido no es un número")
        }

        if (number <= 0) {
            throw new Error("El valor introducido debe ser mayor a 0")
        }

        let result = ""
        let message = ""

        if (number % 3 === 0 && number % 5 === 0) {
            result = "FizzBuzz"
            message = "El número es divisible por 3 y 5"
        } else if (number % 3 === 0) {
            result = "Fizz"
            message = "El número es divisible por 3"
        } else if (number % 5 === 0) {
            result = "Buzz"
            message = "El número es divisible por 5"
        } else {
            result = number
            message = "El número no es divisible por 3 y 5"
        }

        return {
            status: "ok",
            message,
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