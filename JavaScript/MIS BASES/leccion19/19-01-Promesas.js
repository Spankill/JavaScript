let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion == true){
        resolver('Promesa Cumplida');
    }
    else{
        rechazar('Promesa Rechazada');
    }
});


// miPromesa.then(
//     valor => console.log(valor), 
//     error => console.log(error)
// );

miPromesa
.then( valor => console.log(valor))
.catch(error=>console.log(error));

//Funcione setTimeout y promesas 

let promesa = new Promise((resolver)=>{
    console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y timeout'), 5000);
    console.log('Fin promesa');
});

promesa.then( valor => console.log(valor));

