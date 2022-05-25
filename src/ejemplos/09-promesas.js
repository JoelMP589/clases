import { getSoldadoById } from "./08-export-import";

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const soldado = getSoldadoById(1)
        //resolve(soldado);
        reject('no se pudo encontrar el soldado');
    }, 2000);
});
promesa.then((respuesta) => {
    console.log('Promesa resuelta: ', respuesta);
}).catch((error) => {
    console.log('Promesa rechazada: ', error);
}); */

export const getSoldadoByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const soldado = getSoldadoById(id)
            if (soldado) {
                resolve(soldado);
            } else {
                reject('no se pudo encontrar el soldado');
            }
        }, 1000);
    });
}

/* getSoldadoByIdAsync(10).then((soldado) => {
    console.log('Promesa resuelta: ', soldado);
}).catch((error) => {
    console.log('Promesa rechazada: ', error);
}); */
