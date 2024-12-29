function calcularFatorial() {
    const num = parseInt(prompt("Digite um número inteiro positivo:"));
  
    if (!isNaN(num) && num >= 0) {
      let fatorial = 1;
      for (let i = 1; i <= num; i++) {
        fatorial *= i;
      }
      console.log(`Fatorial de ${num}: ${fatorial}`);
    } else {
      console.log("Erro: Valor inválido.");
    }
  }
  
  calcularFatorial();