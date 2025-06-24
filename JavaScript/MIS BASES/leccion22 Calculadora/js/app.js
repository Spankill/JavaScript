console.log('App Calculadora');


function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no es valida';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no es valida';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no es valida';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no es valida';
    if(operandoB.value <= 0)
        parseFloat(resultado) = 'La operacion no es valida';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}