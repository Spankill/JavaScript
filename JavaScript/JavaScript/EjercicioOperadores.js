// 1. Crea una variable para cada operación aritmética
let x = 30
let y = 6


suma = x + y
console.log(suma);
resta = x - y
console.log(resta);
multiplicacion = x * y
console.log(multiplicacion);
division = x / y
console.log(division);
modulo = x % y
console.log(modulo);
exponente = x ** y
console.log(exponente);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
poop -= x
poop += x
poop *= x
poop /= x
poop %= x
poop -= y
poop *= y
poop /= y
poop %= y

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma > resta);
console.log(suma >= resta);
console.log(suma != resta);
console.log(multiplicacion != division);
console.log(suma != division);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(multiplicacion == division);
console.log(suma <= resta);
console.log(suma < resta);
console.log(suma === resta);
console.log(multiplicacion == division);
console.log(suma == division);
console.log(resta == multiplicacion);
console.log(resta == division);
// 5. Utiliza el operador lógico and
console.log(x && y);
// 6. Utiliza el operador lógico or
console.log(x || y);

// 7. Combina ambos operadores lógicos
console.log((resta < suma) && (suma < suma) || (suma > division));
// 8. Añade alguna negación
console.log(suma != division);
// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas
and = (suma && resta)
console.log(and);

or = (suma || resta)
console.log(or);