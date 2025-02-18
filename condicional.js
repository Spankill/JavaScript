let edad = 100

if (edad == 100) {
    console.log("El valor de edad es igual a 100")
}

if (edad == 100) {
    console.log("la edad es 100");
}
else {
    console.log("la edad no es 100");
}

//else id (si,no,si)
if (edad == 100) {
    console.log("La edad es 100");
}
else if (edad < 18) {
    console.log("es menor de edad");
}
else {
    console.log("la edad no es 100 ,y no es menor de edad");
}


//operador TERNARIO
const message = edad == 100 ? "la edad es 100" : "la edad no es 100"
console.log(message);

//switch

let day = 6
let dayName

switch (day) {
    case 0:
        dayName = "lunes"
        break;
    case 1:
        dayName = "martes"
        break;
    case 2:
        dayName = "miercoles"
        break;
    case 3:
        dayName = "jueves"
        break;
    case 4:
        dayName = "viernes"
        break;
    case 5:
        dayName = "sabado"
        break;
    case 6:
        dayName = "domingo"
        break;
    default:
        dayName = "Dia invalido"
}
console.log(dayName);