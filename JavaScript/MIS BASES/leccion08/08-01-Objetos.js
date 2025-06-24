// Crear Objetos con {} tradicional 
let persona = {
    nombre: 'Carlos',
    apellido: 'Aruhiza',
    edad: 30,
    email: 'aruhiza87@gmail',
    idioma: 'ES_BO',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    // objeto normal declare como function name(params) {}

    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;

    },
    miFuncion(){
        
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

//console.log(persona.nombreCompleto());
console.log(persona.miFuncion());

console.log(persona);


//crear objetos  con new Object() 
let persona2 = new Object();
persona2.nombre = 'Alberto';
persona2.direccion = 'Los Alamos';
persona2.telefono = '8765432';

console.log(persona2);
console.log(persona2.telefono);

// formas de acceder a la sp ropiedades de los objetos 

persona['apellido'];
console.log(persona['apellido']);

// accediendo con For In

for (i in persona ){
    console.log( i );
    console.log(persona[ i ]);
}

// Agregar y eliminar propiedades a Objetos 

persona.telefono = '99999990';
persona.telefono = '33333330';

console.log(persona);


//para borrar propiedades

delete persona.telefono;

console.log(persona);


// como mandar a imprimir un objeto concatenando

console.log(persona.nombre + ',' + persona.apellido);

//FOR IN para recorrer propiedades (i ouede ser cualquier nombre)

for(i in persona){
    console.log(persona[i]);
}

//object pero impreso en un ARRAY como arreglos me muestra las propiedades

let personaArray = Object.values( persona );
    console.log(personaArray);


// JSON stringify que convierte un objeto en un string 
// Json es un formato de intercambio de datos de texto
//stringify convierte un objeto en un string

let personaString = JSON.stringify(persona);
console.log(personaString);


//Metodo Get que extrae una propiedad de un objeto
//establecer en el objeto la propiedad objeto tiene la palabra get por delante y la propiedad sin dos puntos 



console.log(persona.nombreCompleto);

//Metodo Set que establece una propiedad de un objeto
//establecer en el objeto la propiedad objeto tiene la palabra set por delante y la propiedad sin dos puntos

console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

// Metodo Constructor de Objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    };
}

let padre = new Persona('Carlos', 'Aruhiza', 'aruhiza87@gmail');
console.log(padre.nombreCompleto());

let madre = new Persona('Anne', 'Miusha', 'aruhiza87@gmail');
console.log(madre.nombreCompleto());


padre.nombre = 'Pedrito';

console.log(padre);
console.log(madre);

//Agregar Metodos a Un Objeto Constructor

//this.nombreCompleto = function(){
//        return this.nombre + ' ' + this.apellido;
//    };

//Distintas formas de crear Objetos
//de forma tradicional 
let miObjeto = new Object();
//simplificando seria:
let miObjeto2 = {};

//Para crear Cadenas de Texto de forma tradicional
let miCadena1 = new String('Hola');
//simplificando seria:
let miCadena2 = 'Hola';

// Para crear Numeros de forma tradicional
let niNumero = new Number(1);
//simplificando seria:
let miNumero = 1;
// Para crear Booleans de forma tradicional
let miBoolean = new Boolean(true);
//simplificando seria:
let miBoolean2 = true;
// Para crear Arreglos de forma tradicional
let miArreglo = new Array();
//simplificando seria:
let miArreglo1 = [];
// Para crear Funciones de forma tradicional
let miFuncion = new Function();
//simplificando seria:
let miFuncion1 = function(){

};

//Uso de Prototypes para crear Objetos
Persona.prototype.telefono = '65030532';

console.log(padre.telefono);
console.log(madre.telefono);

