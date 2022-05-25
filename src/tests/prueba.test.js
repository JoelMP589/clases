
describe('Este es el archivo de prueba.test', () => {
    test('Los dos String deben ser iguales', () => {
        // Arrange iniciacion de variables
        const mensaje = 555;

        // Act estimulo
        const mensaje2 = 555;

        // Assert resultados
        expect(mensaje).toBe(mensaje2);

    })
    test('este hace lo mismo pero con otras lineas', () => {
        // Arrange iniciacion de variables
        const mensaje = 555;

        // Act estimulo
        const mensaje2 = 555;

        // Assert resultados
        expect(mensaje).toBe(mensaje2);

    })
})
