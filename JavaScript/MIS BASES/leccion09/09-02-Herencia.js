class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set (){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set(){
        this._apellid0 = apellido;
    }
}



class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        // llamar al constructor de la clase padre
        super(nombre, apellido); 
        // agregar un nuevo atributo
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set(){
        this._departamento = departamento;
    }
}


let persona1 = new Persona('Carlos', 'Aruhiza');
console.log(persona1);

let empleado1 = new Empleado('Carlos', 'Aruhiza', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);
