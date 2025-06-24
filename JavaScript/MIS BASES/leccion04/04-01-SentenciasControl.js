let condicion = false;

if( condicion  ){
    console.log('condicion verdadera');
}
else{
    console.log('condicion falsa');
}

// Ejemplo IF-ELSE 
let numero = 3;

if(numero == 1){
    console.log('numero 1');
}
else if( numero == 2){
    console.log('numero 2');
}
else if( numero == 3){
    console.log('Numero 3');
}
else if ( numero == 4){
    console.log('numero 4');
}
else{
    console.log('otro numero');
}

//Ejeercicio Calculo de la estacio ndel anio

let mes = 4 ;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = 'Invierno';
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = 'Primavera';
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = 'Verano';
}
else if( mes == 9 || mes == 10 || mes == 11){
    estacion = 'Otonio'
}
else{
    estacion = 'Mes incorrecto';
}

console.log(estacion);

// ejecricio Calculo Hora del dia 

let hora = 4;

if ( hora > 6 && hora <= 11){
    console.log('Buenos Dias !!');
}
else if( hora >= 12 && hora <= 18){
    console.log('Buenas Tardes !! ');
}
else if ( hora >= 19 && hora <= 24 ){
    console.log('Buenas Noches !!');
}
else if( hora >= 0 && hora <= 6){
    console.log('Durmiendo !!');
}
else{
    console.log('Hora incorrecta');
}

// Estructura SWITCH  

let nume = 4;
let numTexto = 'Valor Desconocido';

switch( nume ){
    case 1 :
        numTexto = 'Numero uno';
        break;
    case 2 :
        numTexto = 'Numero dos';
        break;
    case 3 :
        numTexto = 'Numero tres';
        break;
    case 4 :
        numTexto = 'Numero cuatro';
        break;
    default :
        numTexto = 'Numero incorrecto';
}

console.log(numTexto);

//Ejercicio Calculo Estacion de anio

let mess = 11;
let station = 'Estacion Desconocida';

switch( mess ){
    case 1 :
    case 2 :
    case 12 :
        station = 'Invierno';
        break;
    case 3 :
    case 4 :
    case 5 :
        station = 'Primavera';
        break;
    case 6 :
    case 7 :
    case 8 :
        station = 'Verano';
        break;
    case 9 :
    case 10 :
    case 11 :
        station = 'Otonio';
        break;
    default :
        station = 'Mes incorrecto';
}

console.log(station);

//Comparacion Estricta al usar SWITCH
