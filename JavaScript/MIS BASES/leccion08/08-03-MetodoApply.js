let persona1 = {
    nombre: 'Carlos',
    apellido: 'Aruhiza',
    nombreCompleto: function(titulo,telefono){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona2 = {
    nombre: 'Anne',
    apellido: 'Miusha',
}

console.log(persona1.nombreCompleto('Lic ', '9239293'));

let arreglo = ['Ingeniero(a)', '765432'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));