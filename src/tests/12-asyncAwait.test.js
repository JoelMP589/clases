import { getImagen } from "../ejemplos/12-asyncAwait";

describe('Pruebas de tipo async y await ', () => {
    test('debe de retornar el url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })
});
