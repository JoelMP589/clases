import soldados from "../data/soldados";
import { getSoldadoById, getSoldadosByOwner } from "../ejemplos/08-export-import";

describe('pruebas en funciones de soldado', () => {
    //que pasi mando un id coreecto y se encuentra el soldado
    //que pasa si mando un id correcto y no se encuentra el soldado
    test('debe regresar un soldado por id', () => {
        const id = 1;
        const soldado = getSoldadoById(id);
        const soldadoData = soldados.find(s => s.id === id);
        expect(soldado).toEqual(soldadoData);
    });

    test('debe retornar undefine si el soldado no existe', () => {
        const id = 1000;
        const soldado = getSoldadoById(id);
        console.log(soldado);
        expect(soldado).toBeUndefined();
    })

    //que pasa si el owner no existe
    //que pasa si el owner existe y se encuentran los soldados
    //que pasa si el owner existe y no se encuentran los soldados
    test('debe retornar un arreglo de soldados por owner', () => {
        const owner = 'Infanteria';
        const soldadosconst = getSoldadosByOwner(owner);
        const soldadosData = soldados.filter(s => s.owner === owner);
        expect(soldadosconst).toEqual(soldadosData);
    });
    test('debe retornar un arreglo vacio si el ownwer no existe', () => {
        const owner = 'otro';
        const soldadosconst = getSoldadosByOwner(owner);
        expect(soldadosconst.length).toBe(0);
    })
    test('debe retornar un length de 3 al tener Infantería', () => {
        const owner = 'Infanteria';
        const soldadosconst = getSoldadosByOwner(owner);
        expect(soldadosconst.length).toBe(3);
    })
})