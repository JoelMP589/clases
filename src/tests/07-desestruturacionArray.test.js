import { retornaArreglo } from "../ejemplos/07-desestruturacionArray";

describe('prueba para archivo de desestructuracion', () => {

    test('debe regresar un string y un numero', () => {
        const [mensaje, numero] = retornaArreglo();
        expect(mensaje).toBe("Hola");
        expect(typeof numero).toBe('number');
    })

});
