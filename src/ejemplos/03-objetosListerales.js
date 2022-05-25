let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Madrid',
        pais: 'España',
        codigoPostal: '28001'
    },
    telefonos: ['612345678', '612345679']
}

let persona2 = {
    ...persona
};
persona2.nombre = 'Pedro';
console.log(persona);
console.log(persona2);