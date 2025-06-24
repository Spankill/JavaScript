// async y await 

async function funcionConPromesayAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con Await');
    });

    console.log( await miPromesa);
}

//funcionConPromesayAwait();


// Promesa, Await , Async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio de la funcion');
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver('Promesa con Await y Timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin');
}

funcionConPromesaAwaitTimeout()