
class Persona{
    // atributo de clase
    static contadorObjetosPersona = 0;
    // Atributos de instancia de la clase(Objeto)
    email = 'Default email';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrememnta contador:'+ Persona.contadorObjetosPersona);
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
        return this._nombre + ' ' + this._apellido;
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
// get de la clase padre
console.log(persona1.toString());
let empleado1 = new Empleado('Anne', 'Miusha', 'Sistemas');
console.log(empleado1);
// get de la clase padre y de la clase hija , el get de la clase padre se hereda
console.log(empleado1.nombreCompleto());
//Clase Object , Metodo toString, Sobreescritura, Polimorfismo
console.log(empleado1.toString());


//no es posible llamar al metodo estatico desde la instancia
//persona1.saludar();
// llamando al metodo estatico desde la clase padre
Persona.saludar();
Persona.saludar2(persona1);
// llamando al metodo estatico desde la instancia de la clase hija
Empleado.saludar();
Empleado.saludar2(empleado1);


//Atributos Estaticos
persona1.contadorObjetosPersona;
// accedemos al atributo estatico de la instancia no se puede acceder
console.log(persona1.contadorObjetosPersona);
// accedemos al atributo estatico de la clase padre se puede acceder
console.log(Persona.contadorObjetosPersona);
// accedemos al atributo estatico de la clase hija se puede acceder
console.log(Empleado.contadorObjetosPersona);


// accedemos al Atributo email de la clase
console.log(persona1.email);
// accedemos al Atributo email de la clase hija
console.log(empleado1.email);
// accedemos al Atributo email de la clase padre
console.log(Persona.email);
// accedemos al Atributo email de la clase hija
console.log(Empleado.email);

