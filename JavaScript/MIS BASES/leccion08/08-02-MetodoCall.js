let persona1 = {
    nombre: 'Carlos',
    apellido: 'Aruhiza', 
    nombreCompleto: function (titulo, telefono){
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona2 = {
    nombre: 'Anne',
    apellido: 'Miusha',
}

// uso del metodo CALL para invocar el metodo de un objeto
// el metodo persona1.nombreCompleeto con los datos de persona 2
console.log(persona1.nombreCompleto('Ingeniero(a)','765432'));

console.log(persona1.nombreCompleto.call(persona2));

// Paso de Argumentos al Metodo Call
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero(a)', '72061785'));

