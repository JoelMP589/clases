import { getSaludo } from "../ejemplos/02-templateString"


test('Tiene que regresar un saludo a Joel', () => {
    expect(getSaludo("Joel")).toBe("Hola Joel");
})

test('Tiene que regresar un saludo a Jose si no se manda un nombre', () => {
    expect(getSaludo()).toBe("Hola Jose");
})