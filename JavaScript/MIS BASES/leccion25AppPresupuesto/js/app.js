const ingresos = [
    new Ingreso('Sueldazo', 2100.00),
    new Ingreso('Venta Chanchito', 1100.00),
];

const egresos = [
    new Egreso('Choco', 1900),
    new Egreso('Ropa', 700),
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for( let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos =() => {
    let totalegresos = 0;
    for( let egreso of egresos){
        totalegresos += egreso.valor;
    }
    return totalegresos;
}
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

}

const formatoMoneda = (valor) => {
    return valor.toLocaleString(
        'es-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString(
        'en-US',
        {
            style: 'percent',
            minimumFractionDigits: 2
        });
}


const cargarIngresos = () => {
    let ingresoHTML = '';
    for(let ingreso of ingresos){
        ingresoHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresoHTML;
}


const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="add-circle"
                        onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
        return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresoHTML = '';
    for(let egreso of egresos){
        egresoHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;
}



const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion"> ${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="add-circle"
                        onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
        return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value == 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push( new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}