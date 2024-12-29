function numerosPares() {
    const num = parseInt(prompt("Digite um número positivo:"));
  
    if (!isNaN(num) && num > 0) {
      let i = 0;
      while (i <= num) {
        if (i % 2 === 0) {
          console.log(i);
        }
        i++;
      }
    } else {
      console.log("Erro: Valor inválido.");
    }
  }
  
  numerosPares();