let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve ('saludos con promesa y timeout'),1500);
});

async function miFuncionConPromesa(){
    return 'Saludos con promesa y Async';
}

//se puede usar sobre el resultado de una promesa
function miFuncionConPromesa1(){
    return Promise.resolve('Saludos con Promesa y ASync 2 ');
}


//Async hace que la funcion regresa una promesa
miFuncionConPromesa().then(valor => console.log(valor));

miFuncionConPromesa1().then(valor1 => console.log(valor1));

promesa.then(mensaje => console.log(mensaje));