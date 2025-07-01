// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Carlos"

console.log(name);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "carlitos"
let password = 12345

if (usuario === "Carlitos" && password == "12345") {
    console.log("Usuario y contraseña incorrectos")
}
else {
    console.log("Usuario y contraseña correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let a = 9

if (a > 0) {
    console.log("el numero es positivo");
} else if (a < 0) {
    console.log("el numero es negativo");
}
else {
    console.log("el numero es CERO");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let voto_edad = 16

if (voto_edad >= 18) {
    console.log("esta habilitado");
}
else {
    console.log("no esta habilitado");
    let diferencia = 18 - voto_edad;
    console.log("le faltan: " + diferencia + " anios");

}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edad = 29
const asignar = edad >= 18 ? "adulto" : "menor";

console.log(asignar)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "febrero"

switch (mes) {
    case "enero":
    case "febrero":
    case "diciembre":
        console.log("Estacion: Invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Estacion: Primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("Estacion: Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Estacion: Otoño");
        break;
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
let days = mes

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("Este mes tiene 31 dias");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("Este mes tiene 30 dias");
        break;
    case "febrero":
        console.log("Este mes tiene 28 dias");
        break;
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "english"

switch (idioma) {
    case "english":
        console.log("Hello World!");
        break;
    case "español":
        console.log("Hola Mundo!");
        break;
    case "français":
        console.log("Bonjour le monde!");
        break;
    default:
        console.log("Idioma no soportado");
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7