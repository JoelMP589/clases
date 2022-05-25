const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`

console.log(saludar("Juan"));
console.log(saludar2("Juan"));

const obtenerData = () => ({ id: "1", nombre: "Juan" })

console.log(obtenerData());