class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this._departamento}`
    }
}
function determinarTipo(variable){
    console.log( variable.obtenerDetalles());
    if(variable instanceof Gerente){
        console.log('Es un Gerente');
        console.log(variable._departamento);
    }
    else if(variable instanceof Empleado){
        console.log('Es un Empleado');
        console.log(variable._departamento);
    }
    else if(variable instanceof Object){
        console.log('Es un objeto');
    }

}

let empleado1 = new Empleado('Anne', 54000);
let gerente1 = new Gerente('Carlos', 10223, 'Sistemas');

determinarTipo( gerente1 );
determinarTipo( empleado1 );
