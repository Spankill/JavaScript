// cadenas de texto
// concatenacion
let myName = "Carlos"
let greeting = "Saludos, " + myName + "!"
console.log(greeting);
console.log(typeof greeting);

//Longitud

console.log(greeting.length);

//acceso a caracteres

console.log(greeting[0]);
console.log(greeting[7]);

//metodos Comunes
console.log(greeting.toUpperCase()); // convertir a mayusculas
console.log(greeting.toLowerCase()); // convertir a minusculas
console.log(greeting.indexOf("Saludos")); //indice
console.log(greeting.indexOf("Carlos")); //
console.log(greeting.includes("Como es !")); //Incluye
console.log(greeting.includes("Carlitos)"));
console.log(greeting.slice(0, 10)); //secciona o corta la cadena
console.log(greeting.replace("Carlos", "Tu PAPI")); //reemplaza cadenas

//Template literals
let message = 'saludos desde la tierra de los ancestros!'

console.log(`Este es un mensaje: ${message}`);
console.log(message);

// Interpolacion
let email = "arhiza87@gmail.com"

console.log('Hola, ${myNAME}! Tu email es ${email}.');

// Escapar caracteres

console.log('Hola, "Carlos"!');  //comillas simples y comillas dobles
console.log(`Hola, "Carlos"`);  //backticks y comillas dobles
console.log("Hola, 'Carlos'!"); //comillas dobles y backticks
console.log(`Hola, 'Carlos'!`);  //backticks y comillas simples

// Funciones de cadenas

console.log(greeting.split(" ")); //separa la cadena
console.log(greeting.repeat(3)); //repite la cadena

// Concatenar cadenas

let str1 = "Hola ";
let str2 = "Carlos!";
console.log(str1 + str2); // concatenacion
console.log(`${str1}${str2}`); //template literals

// Metodos de comparacion

console.log(greeting.localeCompare(greeting)); //compara las cadenas
console.log(greeting.localeCompare(greeting.toUpperCase())); //compara las cadenas en mayusculas

// Busqueda

console.log(greeting.search("Carlos")); //busca la cadena
console.log(greeting.search("Carlitos")); //

// Expresiones Regulares

let regex = /Carlos/i; // /i para ignorar las mayusculas y minusculas
console.log(regex.test(greeting)); // busca la cadena con la expresion regular
console.log(regex.exec(greeting)); // busca la cadena con la expresion regular y devuelve el resultado

// Conversion

console.log(Number.parseInt("10")); //convierte a numero entero
console.log(Number.parseFloat("10.5")); //convierte a numero decimal
console.log(Number.isNaN(NaN)); //comprueba si es un numero NaN
console.log(Number.isFinite(10)); //comprueba si es un numero finito
console.log(Number.isInteger(10)); //comprueba si es un numero entero

// Conversion a cadena

console.log(String(10)); //convierte a cadena
console.log(String(true)); //convierte a cadena
console.log(String(null)); //convierte a cadena
console.log(String(undefined)); //convierte a cadena
console.log(String([1, 2, 3])); //convierte a cadena

// Ejemplos

let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.split(" ")); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
console.log(sentence.repeat(3)); // The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
console.log(sentence.toUpperCase()); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(sentence.toLowerCase()); // the quick brown fox jumps over the lazy dog.
console.log(sentence.search("fox")); // 17
let regex2 = /fox/gi;
console.log(sentence.match(regex2)); // ["fox", "fox"]
console.log(sentence.replace("fox", "cat")); // The quick brown cat jumps over the lazy dog.
console.log(sentence.split(" ").length); // 9
