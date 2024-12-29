function numerosImpares() {
    const num = parseInt(prompt("Digite um número positivo:"));
  
    if (!isNaN(num) && num > 0) {
      for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    } else {
      console.log("Erro: Valor inválido.");
    }
  }
  
  numerosImpares();