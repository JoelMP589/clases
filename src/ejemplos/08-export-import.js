import soldados, { owners } from "../data/soldados";

//console.log(owners);


export const getSoldadoById = (id) => {
    return soldados.find(soldado => soldado.id === id);
}

//console.log(getSoldadoById(2));

export const getSoldadosByOwner = (owner) => {
    return soldados.filter(soldado => soldado.owner === owner);
}

//console.log(getSoldadosByOwner('Infanteria'));