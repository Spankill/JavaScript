//tip ode dato string (cadena de texto)
/*
ejemplo de tipos de dato en JS
*/
var nombre = "Carlos";
console.log(nombre);

//tipo de dato numerico
var numero = 400;
console.log(numero);

//tipo de dato Objeto
var objeto = {
    nombre: "Carlos",
    apellido: "Aruhiza",
    edad: 30
}

console.log(objeto);
//typeof sirve para saber el tipo de dato
console.log(typeof objeto);

//tipo de dato Booleano (true, false)
var verdadero1 = true;
var verdadero2 = false;
console.log(verdadero1);
console.log(verdadero2);
console.log(typeof verdadero1);
console.log(typeof verdadero2);

//tipo de dato function (FUNCION)
function miFuncion(){

}

console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dato Symbol 
var simbolo = Symbol('mi simbolo');
console.log(simbolo);
console.log(typeof simbolo);


// tipo de clase de una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//tipo de dato Undefined (Valor No definido)
var z;
console.log(z);
console.log(typeof z);
//si asignanmos undefined
z = undefined;
console.log(z);
console.log(typeof z);

//tipo de dato Null (ausencia de valor)
var a = null;

console.log(a);
console.log(typeof a);

//tipo de dato Array (Arreglo)
var motos = ["Suzuki", "Yamaha", "Honda", "Kawasaki"];
console.log(motos);
console.log(typeof motos);

//tipo de dato Empty String (cadena vacia)
var numeros = '';
console.log(numeros);
console.log(typeof numeros);

//Concatenar Cadenas de texto
var nombre = "Carlos";
var apellido = "Aruhiza";

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Kvitcha' + ' ' + 'Kvaratskelia';
console.log(nombreCompleto2);


var g = nombre + 2025 + 45;
console.log(g);

g = nombre + (2025 + 25);
console.log(g);

g = 15 + 5 + nombre;
console.log(g);

//usos de Var Let y Const
let nombrecito;
nombrecito = "Pedro";
console.log(nombrecito);

const apellido1 = "Perez";
//apellido1 = "Porro"

let nombreCompleto3 = "Carlos Aruhiza";
let nombrecompleto3 = "Aristoteles de Pilatos";
console.log(nombreCompleto3);
console.log(nombrecompleto3);

// let 1nombreCompleto; no se puede iniciar con un numero la variable
let $nombreCompleto;
let $5nombreCompleto;
let _nombreCompleto;
let NombreCompleto;


// leet break = 10;     no se puede iniciar con una palabra reservada la variable

