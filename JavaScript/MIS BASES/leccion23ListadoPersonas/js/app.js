const personas = [
    new Persona('Carlos', 'Aruhiza'),
    new Persona('Anacleto', 'Lopez'),
    new Persona('Fulanito', 'Lz')
];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for( let persona of personas){
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    //validando
    if(nombre.value != '' && apellido.value != ''){

        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('Ingrese Datos...');
    }
}