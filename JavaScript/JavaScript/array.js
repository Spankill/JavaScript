let miArray = []
let miArray2 = new Array();

console.log(miArray);
console.log(miArray2);

//Inicializando Arrays 
miArray = [3]
miArray2 = new Array(3);

console.log(miArray);
console.log(miArray2);

miArray = [1, 2, 3, 4, 5, 6]
miArray2 = new Array(1, 2, 3, 4, 5, 6)

console.log(miArray);
console.log(miArray2);

miArray = ["Carlos", "Aruhiza", "Bolivia", 100, true]
miArray2 = new Array("Carlos", "Aruhiza", "Bolivia", 100, true)

console.log(miArray);
console.log(miArray2);

miArray2 = new Array(3)
miArray2[2] = "La Paz"
// miArray2[0] =
miArray2[1] = "kollinga"
miArray2[4] = "kollinga"

console.log(miArray2);

miArray = []
miArray[2] = "Salvietty"
miArray[1] = "Duende"

console.log(miArray);


//Metodos comunes
myArray = []

//PUSH Y POP
myArray.push("Carlos")  //inserta elemento al array
myArray.push("Aruhiza")
myArray.push("Bolivia")
myArray.push("100")

console.log(myArray)

console.log(myArray.pop());  //elimina el ultimo y lo devuelve
myArray.pop(); //elimina el ultimo y lo devuelve

console.log(myArray)

//UNSHIFT Y SHIFT

console.log(myArray.shift());
console.log(myArray);

myArray.unshift("Carlos", "Bolivia")
console.log(myArray);

//LENGTH
console.log(myArray.length);

//CLEAR
myArray = []
myArray.length = 0
console.log(myArray);

//SLICE
myArray = ["Carlos", "Aruhiza", "Bolivia", 100, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray);
console.log(myNewArray);

//SPLICE
myArray.splice(1, 3)
console.log(myArray);

myArray = ["Carlos", "Aruhiza", "Bolivia", 100, true]

myArray.splice(1, 0, "oops", "Nueva DATA")
console.log(myArray);

