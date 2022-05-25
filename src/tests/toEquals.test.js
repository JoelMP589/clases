test('Los objetos deben ser iguales', () => {
    const objeto = {
        nombre: "Joel",
        edad: 30
    }

    const objeto2 = {
        nombre: "Joel",
        edad: 30,
        apellido: "Garcia"
    }

    expect(objeto).toEqual(objeto2);
})