// Calcular el indice de masa corporal

function calcularIMC(peso, altura) {
      const resultado = peso / (altura * altura);
      if (resultado<18.5){
            return "Bajo peso";
      }
      else if(resultado < 24.9){
            return "Normal";
      }
      else if (resultado < 29.9){
            return "Sobrepeso";
      }
      else{
            return "Obesidad";
      }
}

console.log(calcularIMC(65,1.8));
console.log(calcularIMC(72,1.6));