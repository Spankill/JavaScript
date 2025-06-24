class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio} Bs`;
    }
}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrdene(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            //totalVenta = totalVenta + producto.precio
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' '; 
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Camisa', 100);
console.log(producto1.toString());

let producto2 = new Producto('Pantalon', 200);
console.log(producto2.toString());

let producto3 = new Producto('Zapatos', 300);
console.log(producto3.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

console.log(orden1);