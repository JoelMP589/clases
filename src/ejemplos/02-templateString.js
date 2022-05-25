export function getSaludo(nombre = "Jose") {
    return "Hola " + nombre;
}
console.log(`Esto es un saludo ${getSaludo("Juan")}`);