
miFuncion2();
miFuncion1();


function miFuncion1(){
    console.log('funcion1');
}

function miFuncion2(){
    console.log('funcion2');
}


// Funciones de tipo CallBack
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(a, b, funcionCallBack){
    let resultado = a + b;
    funcionCallBack(`Resultado: ${resultado}`);

}

sumar ( 3, 4, imp );


//Llamadas asincronas con uso de setTimeout
function miFuncionCallBack1(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallBack1, 3000);
setTimeout(function(){console.log('Saludo asincrono 2')},4000)

setTimeout( () => console.log('Saludo asincrono3'), 1000);

//Funcion de tipo setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(` ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj, 5000); 