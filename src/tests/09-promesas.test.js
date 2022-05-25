import soldados from "../data/soldados";
import { getSoldadoByIdAsync } from "../ejemplos/09-promesas";

describe('Pruebas con promesa', () => {

    test('get soldado by id assync debe regresar un soldado async', (done) => {
        const id = 1;
        getSoldadoByIdAsync(id).then((soldado) => {
            expect(soldado).toEqual(soldados[0]);
            done();
        }).catch(done)
    })

});
