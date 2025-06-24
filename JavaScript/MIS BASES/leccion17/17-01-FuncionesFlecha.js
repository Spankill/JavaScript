let miFuncion = function(){
    console.log('Hola desde mi funcion');
}


// const miFuncionFlecha = () => {
//     console.log('Hola desde mi funcion flecha');
// }

const miFuncionFlecha = () => console.log('Hola desde mi funcion flecha');

//miFuncion();
//miFuncionFlecha();


// const saludar = () => {
//     return 'Hola desde el return de mi funcion flecha';
// }

const saludar = () => 'saluditos desde funcion flecha'
console.log(saludar());


const regresaObjeto =() => {
    return {
        nombre: 'Carlos',
        apellido: 'Aruhiza'
    }
}

console.log(regresaObjeto());



const funcionConParametros = (mensaje) => {
    console.log(mensaje);
}

funcionConParametros('Mensaje desde la funcion flecha con parametros');


const funcionConParametros2 = (mensaje) => console.log(mensaje);
funcionConParametros2('Mensaje desde la funcion flecha con parametros');

//con varios argumentos
const funcionConParametros3 = (a,b) => a + b;

console.log(funcionConParametros3(1,2));


//con varios argumentos y return
const funcionConParametros4 = (a,b) => {
    return `Resultado es: ${a + b}`;
}

console.log(funcionConParametros4(4,2));
