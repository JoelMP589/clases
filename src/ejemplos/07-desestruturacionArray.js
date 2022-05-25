const personas = ["persona1", "persona2", "persona3"];
const [, ps2] = personas;
//console.log(ps2);

export const retornaArreglo = () => {
    return ["Hola", 123];
}
const [, , signo] = retornaArreglo();

//console.log(signo);

const usestate = (nombre) => {
    return [nombre, (valor) => { console.log(valor); }];

}

const [nombre, setNombre] = usestate("Juan");

console.log(nombre);
setNombre("Pedro");


/* console.log(personas[0]);
console.log(personas[1]);
console.log(personas[2]); */