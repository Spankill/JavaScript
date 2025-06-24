//declarando una funcion
function miFuncion( a , b ){
    return a + b;
}

// llamamos a la Funcion

let Resultado = miFuncion(3,1);
console.log(Resultado);


//Declaracion Funcion de tipo Expresion

let z = function( x, y ){ return x + y };
let resultado = z(1,2);
console.log(resultado);

// Funciones de tipo Self INVOKIng (se llama a si misma)

(function(a,b){
    console.log('ejecuta la funcion: ' + ( a + b ));
})(3,4);

//Funciones como Objetos

function mifuncion(a,b){
    console.log(arguments.length);
    return a + b;
}


var miFuncionTexto =  mifuncion.toString();
console.log(miFuncionTexto);

//Funciones Flecha (ES6) (equivale a una Funcion de tipo Expresion)

const sumarFuncionFlecha = (a,b) => a + b;

console.log(sumarFuncionFlecha(1,2));

//Parametros y argumentos en Funciones
let suma = function(a = 4,b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}

resultado = suma(3,6,5);
console.log(resultado);

//Ejemplo Sumar Todos los Argumentos

let resultado1 = sumarTodo( 5, 4, 13, 10, 9)
console.log( resultado1 );

function sumarTodo(){
    let suma = 0;
    for(let i =0; i < arguments.length; i++){
         //suma = suma + arguments[i]
        suma += arguments[i];
    }
    return suma;
}

// Paso por valor en funciones

let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);


let f = 10;
function cambiarValor(g){
    g = 20;
}
cambiarValor(f);
console.log(f);
console.log(g);

// Paso por Referencia en Funciones

const persona = {
    nombre: 'carlitos',
    apellido: 'lopez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Aruhiza';
}

//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
