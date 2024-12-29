function calcularIMC() {
    const altura = parseFloat(prompt("Digite sua altura (em metros):"));
    const peso = parseFloat(prompt("Digite seu peso (em kg):"));
  
    if (!isNaN(altura) && !isNaN(peso)) {
      const imc = peso / (altura * altura);
      const classificacao = getClassificacao(imc);
  
      console.log(`IMC: ${imc.toFixed(2)}`);
      console.log(`Classificação: ${classificacao}`);
    } else {
      console.log("Erro: Valores inválidos.");
    }
  }
  
  function getClassificacao(imc) {
    switch (true) {
      case imc < 18.5:
        return "Abaixo do peso";
      case imc >= 18.5 && imc < 25:
        return "Peso normal";
      case imc >= 25 && imc < 30:
        return "Sobrepeso";
      default:
        return "Obesidade";
    }
  }
  
  calcularIMC()