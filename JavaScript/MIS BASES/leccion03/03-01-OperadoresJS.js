//Operadores Matematicos 

//Suma
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

//Resta
z = a - b;
console.log("Resultado de la resta: " + z);

//multiplicacion
z = a * b;
console.log("Resultado de la multiplicacion: " + z);

//division
z = a / b;
console.log("Resultado de la division: " + z);

//Modulo (recibimos el residuo de la division)
z = a % b;
console.log("Resultado del modulo (residuo): " + z);

//Exponente
z = a ** b;
console.log("Resultado del exponente: " + z);

//Operadores de Incremento y Decremento

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento (el operador -- antes de la variable)
z = --a;
console.log(a);
console.log(z);

//Post-decremento (el operador -- despues de la variable)
z = b--;
console.log(b);
console.log(z);

//Precedencia de Operadores

let  a1 = 3, b1 = 2, c1 = 1, d=4;

let z1 = a1 * b1;
console.log(z1);

z1 = a1 * b1 + c1;
console.log(z1);

z1 = c1 + a1 * b1;
console.log(z1);

z1 = a1 * b1 + c1 / d;
console.log(z1);

z1 = c1 + a1 * b1 / d;
console.log(z1);

z1 = ( c1 + a1 ) * b1 / c1;
console.log(z1);

//Operadores de Asignacion
let a2 = 1;

// a2 = a2 +3
a2 += 3;
console.log(a2);

//a2 = a2 - 2
a2 -= 2;
console.log(a2);

//a2 = a2 * 2
a2 *= 2;
console.log(a2);

//a2 = a2 / 2
a2 /= 2;
console.log(a2);

//a2 = a2 ** 2
a2 **= 2;
console.log(a2);

//a2 = a2 % 2
a2 %= 2;
console.log(a2);

// Operadores de Comparacion

let a3 = 3, b3 = 2, c3 = '3';

//compara el valor sin importar el tipo de dato
let z3 = a3 == b3;  
console.log(z3);

//compara el valor y el tipo de dato
z3 = a3 === b3;
z3 = a3 === c3
console.log(z3);
console.log(z3);

//Operador distinto
z3 = a3 != b3;
console.log(z3);
z3 = a3 !== b3;
console.log(z3);
z3 = a3 != c3;
console.log(z3);
z3 = a3 !== c3;
console.log(z3);

//Operadores Relacionales
z3 = a3 < b3;
console.log(z3);
z3 = a3 > b3;
console.log(z3);
z3 = a3 <= b3;
console.log(z3);
z3 = a3 >= b3;
console.log(z3);

//ejercicio numero par 
let f = 10;

if( f % 2 == 0 ){
    console.log("El numero es par");
}
else{
    console.log("El numero es impar");
}

//ejercicio mayor de edad 

let edad = 18

if (edad >= 18 ){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}

// Operador AND (&&) todos deben ser verdaderos el resultado sera verdadero

let a4=5;
let valMinimo = 0;
let valMaximo = 10;

if( a4 >= valMinimo && a4 <= valMaximo){
    console.log("dentro del rango");
}
else {
    console.log("fuera del rango");
}

// Operador OR ( || ) cualquiera es verdadero el resultado sera verdadero

let vacaciones = false, diaDescanso = false;


if( vacaciones || diaDescanso){
    console.log("Puede asistir al juego");
}
else{
    console.log("No puede asistir al juego");
}

// Operador ternario ( ? : ) 

let resultado = ( 3  > 2 ) ? 'verdadero' : 'falso';
console.log(resultado);

let resultado2 = ( 3  < 2 ) ? 'verdadero' : 'falso';
console.log(resultado2);

let resultado3 = ( 3  == 2 ) ? 'verdadero' : 'falso';
console.log(resultado3);

let resultado4 = ( 3  != 2 ) ? 'verdadero' : 'falso';
console.log(resultado4);

let resultado5 = ( 3  >= 2 ) ? 'verdadero' : 'falso';
console.log(resultado5);

let resultado6 = ( 3  <= 2 ) ? 'verdadero' : 'falso';
console.log(resultado6);

let resultado7 = ( 3  !== 2 ) ? 'verdadero' : 'falso';
console.log(resultado7);

let resultado8 = ( 3  === 2 ) ? 'verdadero' : 'falso';
console.log(resultado8);

let numero = 9;
resultado = (numero % 2 == 0) ? 'Par' : 'Impar';
console.log(resultado);

//convertir  de String a Number

let miNumero = '10';

//console.log(miNumero);
//console.log(typeof miNumero);

let edad1 = Number(miNumero);

console.log(edad);
console.log(typeof edad);

if( edad >= 18){
    console.log("Puedes votar");
}
else{
    console.log("Muy joven para votar");
}

let resultado9 = (edad >= 18) ? 'Puedes votar' : 'Muy joven para votar';
console.log(resultado9);

//Funcion isNaN para saber si es un numero
let miNumero2 = '10x';

console.log(typeof miNumero2);

if( isNaN(miNumero2) ){
    console.log("No es un numero");
}
else{
    resultado10 = (miNumero2 >= 18) ? 'puedes votar' : 'muy jover para votar';
    console.log(resultado10);
}

// Precedencia de Operadores
// () -> ** -> * / % -> + -

let xe = 5;
let ye = 10;

let ze = ++xe + ye--;

console.log(xe);
console.log(ye);
console.log(ze);

//4 + ((5*6)/3)
let resul = 4 + 5 * 6 / 3;

console.log(resul);

res = ( 4 + 5 ) * 6 / 3;
console.log(res);
