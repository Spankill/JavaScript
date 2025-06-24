let contador = 0;

while ( contador < 3){
    console.log(contador);
    contador++;
}
console.log('Fin ciclo While');

// Ciclo DO-WHILE

let contado = 0;
do{
    console.log(contado);
    contado++;
}while( contado < 3);

console.log('Fin ciclo DO-WHILE');

// Ciclo FOR

for( let conta = 0; conta < 3; conta++){
    console.log(conta);
}
console.log('Fin ciclo FOR');

//palabra BREAK
for( let cont = 0; cont <= 10; cont++){
    console.log(cont);
    if( cont % 2 == 0){
        console.log(cont);
        break;
    }
    
}

console.log('Fin Ciclo FOR - break');

// palabra CONTINUE 
for( contador=0; contador <= 10 ; contador++ ){
    if( contador %2 !== 0){
        continue;  //saltar la iteracion actual
    }
    else{
        console.log(contador);
    }
}

//Labels en los ciclos
inicio:
for( conta=0; conta <= 10 ; conta++ ){
    if( conta %2 !== 0){
        continue inicio;  //saltar la iteracion actual
    }
    else{
        console.log(conta);
    }
}