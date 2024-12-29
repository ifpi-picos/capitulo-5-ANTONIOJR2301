function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 101);
    let tentativas = 10;
  
    while (tentativas > 0) {
      const palpite = parseInt(prompt(`Tentativa ${11 - tentativas}: Digite um número entre 1 e 100:`));
  
      if (!isNaN(palpite) && palpite >= 1 && palpite <= 100) {
        if (palpite === numeroSecreto) {
          console.log(`Parabéns! Você acertou em ${11 - tentativas} tentativas.`);
          return;
        } else if (palpite < numeroSecreto) {
          console.log("O número secreto é maior.");
        } else {
          console.log("O número secreto é menor.");
        }
        tentativas--;
      } else {
        console.log("Erro: Valor inválido.");
      }
    }
  
    console.log(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
  }
  
  jogoAdivinhacao();