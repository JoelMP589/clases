const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    altura: 1.80,
    sexo: 'masculino',
    telefono: '5523663022'
}

const usecontext = ({ nombre, apellido, edad, telefono = '5523663021' }) => {
    return {
        nombreCompleto: `${nombre} ${apellido}`,
        anios: edad,
        latlng: {
            lat: -34.6037,
            lng: -58.3816
        },
    }
}
const { nombreCompleto, anios, latlng } = usecontext(persona);
const { lat, lng } = latlng;

console.log(nombreCompleto, anios);
console.log(lat, lng);

/* const { apellido, edad, nombre, altura, sexo } = persona;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(altura);
console.log(sexo);

 */