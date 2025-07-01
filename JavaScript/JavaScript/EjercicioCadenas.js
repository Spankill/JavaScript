// 1. Concatena dos cadenas de texto
let cadena1 = "Club"
let cadena2 = "Bolivar Campeon del Bi-Centenario"
console.log(cadena1 + " " + cadena2);
// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena2[0], cadena2[cadena2.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
console.log(`B\no\nl\ni\nv\na\nr ${cadena2} `);

// 6. Interpola el valor de una variable en un string
let ggg = "VIVA !"
console.log(`${ggg} el ${cadena1} ${cadena2} !!! `);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena3 = "estamos perdidos"
console.log(cadena3.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena3.includes("perdidos"));

// 9. Comprueba si dos strings son iguales
console.log(cadena1.toLowerCase == cadena3.toLowerCase);
// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena2.length === cadena3.length);