//let  motos = new Array('Suzuki', 'Honda', 'Kawasaki', 'Yamaha');


const motos = ['Suzuki', 'Honda', 'Kawasaki', 'Yamaha'];

console.log(motos);

//recorrer elementos de un arreglo (array)

motos[0];
console.log(motos[3]);


for(let i=0; i < motos.length; i++){
    console.log(i + ' : ' +motos[i]);

}

//Modificar los elementos de un arreglo (array)
motos[1] = 'KTM';
console.log(motos[1]);

motos.push('Husqvarna');
console.log(motos);

// Agregar Elementos a un arreglo (array)
console.log(motos.length);

motos[motos.length] = 'BMW';
console.log(motos);

motos[7] = 'Honda';
console.log(motos)

// Como preguntar si es un arreglo (array)
console.log(Array.isArray(motos));

console.log(motos instanceof Array);

