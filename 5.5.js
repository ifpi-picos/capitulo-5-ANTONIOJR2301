function converterTemperatura() {
    const escolha = prompt("Escolha a conversão:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius");
    
    switch (escolha) {
      case "1":
        const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
        if (!isNaN(celsius)) {
          const fahrenheit = (celsius * 9/5) + 32;
          console.log(`${celsius}°C equivale a ${fahrenheit}°F`);
        } else {
          console.log("Erro: Valor inválido.");
        }
        break;
      
      case "2":
        const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
        if (!isNaN(fahrenheit)) {
          const celsius = (fahrenheit - 32) * 5/9;
          console.log(`${fahrenheit}°F equivale a ${celsius}°C`);
        } else {
          console.log("Erro: Valor inválido.");
        }
        break;
      
      default:
        console.log("Erro: Opção inválida.");
    }
  }
  
  converterTemperatura()
