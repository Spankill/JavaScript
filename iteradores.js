//Bucles
for (let i = 0; i < 5; i++) {
    console.log(`Saludo ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`);
}


//WHILE
let i = 0
while (i < 5) {
    console.log(`Saludo ${i}`);
    i++;
}

//DO-WHILE
i = 6
do {
    console.log(`saludo ${i}`)
    i++;
} while (i < 5)



//FOR-OF
myArray = [1, 2, 3, 4, 5, 6]
mySet = new Set(["Carlos", "Aruhiza", "Vizkacha87", 100, true, "aruhiza@gmail.com"])

myMap = new Map([
    ["name", "Carlos"],
    ["email", "aruhiza87@gmail.com"],
    ["nickname", "Vizkacha87"]
])

myString = "Saludos JavaScript! "

for (let value of myArray) {
    console.log(value);
}

for (let value of mySet.values()) {
    console.log(value);
}

for (let value of myMap) {
    console.log(value);
}

for (let value of myString) {
    console.log(value);
}


//BREAK
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Saludo ${i}`);
}