// ejercicio de Herencia en JS

class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
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
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }

}

class Empleado extends Persona{
    
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this.sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}


class Cliente extends Persona{

    static contadorClientes = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}


//Prueba Clase Persona

let persona1 = new Persona('Carlos', 'Aruhiza', 25);
console.log(persona1);

let persona2 = new Persona('Anne', 'Miusha', 25);
console.log(persona2);

//Prueba Clase Empleado

let empleado1 = new Empleado('Anacleto','Papanatas','34',4223);
console.log(empleado1);

let empleado2 = new Empleado('Laura', 'Quintero', '33', 6000);
console.log(empleado2);

//Prueba Clase Cliente

let cliente1 = new Cliente('Miguel','Aguirre','35',new Date());
console.log(cliente1);
let cliente2 = new Cliente('Fulanito','deTal', '35', new Date());
console.log(cliente2);