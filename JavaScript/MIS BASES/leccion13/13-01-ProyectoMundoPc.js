class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

let dispositivo1 = new DispositivoEntrada('Usb', 'Dell');
console.log(dispositivo1);


class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [ID _raton:${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca ${this._marca}]`
    }
}

let raton1 = new Raton('bluetooth', 'Lenovo');
console.log(raton1.toString());
let raton2 = new Raton('Usb', 'AOC');
let raton3 = new Raton('cable', 'Hp');
raton3.marca = 'Dell'
console.log(raton3.toString());



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super( tipoEntrada, marca);
        this._idteclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idteclado;
    }
    toString(){
        return `Teclado: [ ${this._idteclado},TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

let teclado1 = new Teclado('Coaxial', 'Toshiba');
let teclado2 = new Teclado('Usb', 'Dell');
let teclado3 = new Teclado('Bluetooth', 'MSI');
console.log(teclado1.toString());
console.log(teclado3.toString());



class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamanio(){
        return this._tamanio;
    }
    set tamanio(tamanio){
        this._tamanio = tamanio;
    }
    get contadorMonitores(){
        return Monitor.contadorMonitores;
    }
    toString(){
        return `Monitor: [IDMonitor: ${this._idMonitor}, Marca:  ${this._marca}, Tamanio: ${this._tamanio}]`
    }
}

let monitor1 = new Monitor('Asus', '21 pulgadas');
console.log(monitor1.toString());
let monitor2 = new Monitor('HP', '24 pulgadas');
console.log(monitor2.toString());
let monitor3 = new Monitor('AOC', '27 pulgadas');
console.log(monitor3.toString());


class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora: [ID Computadora: ${this._idComputadora}, Nombre: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`
    }
}

let compu1 = new Computadora('Combo PC', monitor1, teclado1, raton1);
console.log(compu1.toString());
console.log(`${compu1}`);

let compu2 = new Computadora('Combo2', monitor2, teclado2, raton2 );
console.log(compu2.toString());
console.log(`${compu2}`);

let compu3 = new Computadora('Combo3', monitor3, teclado3, raton3);
console.log(compu3.toString());
console.log(`${compu3}`);

class Orden{
    static ContadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.ContadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    get computadoras(){
        return this._computadoras;
    }
    set computadoras(computadoras){
        this.computadoras = computadoras;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras){
            computadorasOrden += `\n${computadora} `;
        }
        console.log(`Orden: ${this._idOrden} Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);
orden2.agregarComputadora(compu3);
orden2.agregarComputadora(compu1);
orden3.agregarComputadora(compu2);
orden3.agregarComputadora(compu3);
orden3.agregarComputadora(compu1);
orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();
