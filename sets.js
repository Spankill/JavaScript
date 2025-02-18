let mySet = new Set()

console.log(mySet);

//inicializando

mySet = new Set(["Carlos", "Aruhiza", "Vizcacha87", 100, true, "aruhiza87@gmail.com"])

console.log(mySet);

//metodos 
//ADD
mySet.add("https://www.vizkcha87.com")
console.log(mySet);

//DELETE
mySet.delete("https://www.vizkcha87.com")
console.log(mySet);

//has

console.log(mySet.has("Carlos")); // true
console.log(mySet.has("Aruhiza")); // true

//Size
console.log(mySet.size);

//Conversion de set a un array
let myArray = Array.from(mySet)
console.log(myArray);

//Conversion de un Array a Set
mySet = new Set(myArray)
console.log(mySet);

//Iteracion

for (let value of mySet) {
    console.log(value);
}

//Agregar multiples elementos

mySet.add("Carlos").add("Aruhiza").add("Vizcacha87")
console.log(mySet);

//Agregar un elemento que ya existe

mySet.add("Carlos")
console.log(mySet);

//Agregar un elemento que no es un string

mySet.add(100)
console.log(mySet);


mySet.add(true)
console.log(mySet);


mySet.add("aruhiza87@gmail.com")
console.log(mySet);


mySet.add(null)
console.log(mySet);


mySet.add(undefined)
console.log(mySet);

//Agregar un elemento que no es un objeto

mySet.add({})
console.log(mySet);

//Agregar un elemento que no es un numero

mySet.add("100")
console.log(mySet);

//Agregar un elemento que no es un boolean

mySet.add("true")
console.log(mySet);
