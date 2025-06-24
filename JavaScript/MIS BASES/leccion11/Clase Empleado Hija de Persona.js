class Empleado extends Persona{
    
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, _sueldo){
        super(nombre, apellido, edad);
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