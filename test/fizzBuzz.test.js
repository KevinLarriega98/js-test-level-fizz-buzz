import { expect, describe, test } from "@jest/globals"
import { fizzBuzz } from "../src/scripts/fizzBuzz"

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('returns Fizz when multiple of 3', () => {
            // Gherking test
            /**
             * Scenario: Número divisible por 3
             * Given un número 9
             * When el número es procesado
             * Then se muestra "Fizz"
             */

            // Arrange: Preparar el escenario
            let valor_entrada = 9
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3", // Mensaje de validación
                data: {
                    number: 9,  // Número evaluado
                    result: "Fizz" // Resultado esperado
                }}

            // Act: ejecutar el escenario
            let resultado = fizzBuzz(valor_entrada)
        
            // Assert: Comprobar el escenario
            expect(typeof resultado.data.number).toBe("number") // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
            expect(resultado.data.result).toBe("Fizz") // valida que el valor output corresponda al expect
        })

        test('returns Buzz when multiple of 5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 5
             * Given un número 10
             * When el número es procesado
             * Then se muestra "Buzz"
             */

            // Arrange
            let valor_entrada = 10
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 5", // Mensaje de validación
                data: {
                    number: 10,  // Número evaluado
                    result: "Buzz" // Resultado esperado
                }}

            // Act
            let resultado = fizzBuzz(valor_entrada)
    
            // Assert
            expect(typeof resultado.data.number).toBe("number") // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
            expect(resultado.data.result).toBe("Buzz") // valida que el valor output corresponda al expect
        })

        test('returns FizzBuzz when multiple of 3 and 5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 3 y 5
             * Given un número 15
             * When el número es procesado
             * Then se muestra "FizzBuzz"
             */

            // Arrange
            let valor_entrada = 15
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3 y 5", // Mensaje de validación
                data: {
                    number: 15,  // Número evaluado
                    result: "FizzBuzz" // Resultado esperado
                }}

            // Act
            let resultado = fizzBuzz(valor_entrada)
    
            // Assert
            expect(typeof resultado.data.number).toBe("number") // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
            expect(resultado.data.result).toBe("FizzBuzz") // valida que el valor output corresponda al expect
        })

        test('returns number when is not multiple of 3 and 5', () => {
            //Gherking test
            /**
             * Scenario: Número no divisible por 3 ni 5
             * Given un número 8
             * When el número es procesado
             * Then se muestra el número ingresado
             */

            // Arrange
            let valor_entrada = 8
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número no es divisible por 3 y 5", // Mensaje de validación
                data: {
                    number: 8,  // Número evaluado
                    result: valor_entrada // Resultado esperado
                }}

            // Act
            let resultado = fizzBuzz(valor_entrada)
    
            // Assert
            expect(typeof resultado.data.number).toBe("number") // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
            expect(resultado.data.result).toBe(valor_entrada) // valida que el valor output corresponda al expect
        })
    }
)