//no existe Hoisting en las Clases
//let persona22 = new Persona1('anacleto', 'lopez');

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Carlos', 'Aruhiza');
console.log(persona1);

let persona2 = new Persona('Anne', 'Miusha');
console.log(persona2);

//metodos Get y Set de una Clase

class Persona1{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}
// 
let personaa = new Persona1('Carlos', 'Aruhiza');
//set 
personaa.nombre = 'Roberto Carlos';
// get
console.log(personaa.nombre);

let personaD = new Persona1('Anacleto1', 'Lopez1');
console.log(personaD);
