'use strict';

try{
    let x=20;
    throw 'Mi error';
}
catch(error){
    console.log(error);
}
finally{
    console.log('Esto se ejecuta siempre');
}

console.log('continuamos...');




let res = '-90';

try{
    //x=67;
    if( isNaN(res)) throw 'No es un numero';
    else if(res === '') throw 'Es cadena Vacia';
    else if(res >=0) throw 'Es positivo';
    else if(res < 0) throw 'Es negativo';
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Esto se ejecuta siempre');
}