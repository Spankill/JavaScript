class Persona{
    // atributo de clase
    static contadorPersonas = 0;

    static get MAX_OBJETOS(){
        return 5;
    }
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJETOS){
            this.idPerson = ++Persona.contadorPersonas;
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    // en Clases no ess necesario poner function
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescribir un metodo de la clase padre
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
    //sobreescribiendo el metodo toString de la clase Object (Padre)
    toString(){
        //se aplica el polimorfismo (multiples formas de ejecucion)
        // se invoca segun el contexto en el que se encuentra el metodo Padre o hijo
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Carlos', 'Aruhiza');
console.log(persona1);
console.log(persona1.toString());
console.log(Persona.contadorPersonas);

let empleado1 = new Empleado('Anne', 'Miusha', 'Sistemas');
console.log(empleado1);
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Anacleto', 'Lopez');
console.log(persona2);
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Fulanito', 'Lz');
console.log(persona3);
console.log(Persona.contadorPersonas);
let empleado2 = new Empleado('Fulanito', 'Lz', 'Sistemas');
console.log(empleado2);
console.log(Persona.contadorPersonas);

let persona4 = new Persona('florecita','Alegre');
console.log(persona4);
console.log(Persona.contadorPersonas);
console.log(persona4.toString());

console.log(Persona.MAX_OBJETOS);
Persona.MAX_OBJETOS = 10;
console.log(Persona.MAX_OBJETOS);
