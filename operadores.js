let a = 2
let b = 8

console.log(a + b)
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b);
console.log(a ** b);

a++
console.log(a);

b--
console.log(b);

//asignacion
let myVariable = 2
console.log(myVariable);
myVariable += 2
console.log(myVariable);

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Comparacion
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6);
console.log(a == "6");
console.log(a == a);
console.log(a === a);
console.log(a === 6);
console.log(a === "6");
console.log(a != 6);
console.log(a != "6");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == '');
console.log(0 == "hello");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);


//OPERADORES LOGICOS
//AND (&&)
console.log(3 > 10 && 15 > 60);
console.log(3 < 10 && 15 < 60);
console.log(3 < 10 && 15 > 60);
console.log(3 > 10 && 15 < 60);

//OR (||)
console.log(3 > 10 || 15 > 60);
console.log(3 < 10 || 15 < 60);
console.log(3 < 10 || 15 > 60);
console.log(3 > 10 || 15 < 60 || 30 > 40);
console.log(3 > 10 && 15 > 60 || 30 < 40);

//NOT (!)

console.log(!true);
console.log(!false);
console.log(!(3 > 10 && 15 > 60));
console.log(!(5 > 10 || 15 > 60));
console.log(!"hello");

//TERNARIO
//ejemplo largo
let x = 10
let result = x > 5 ? "mayor que 5" : "Menor o igual que : 5"
console.log(result);

result = x < 5 ? "Mayor que 5" : "Menor o igual que: 5"

//simplificado
const isRaining = false
isRaining ? console.log("Esta Lloviendo") : console.log("No esta lloviendo");;