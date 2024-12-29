function verificarMultiplo() {
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));
  
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num1 % num2 === 0 || num2 % num1 === 0) {
        console.log("Pelo menos um dos números é múltiplo do outro.");
      } else {
        console.log("Nenhum dos números é múltiplo do outro.");
      }
    } else {
      console.log("Erro: Valores inválidos.");
    }
  }
  
  verificarMultiplo()
