function classificarTriangulo() {
    const lado1 = parseFloat(prompt("Digite o valor do lado 1:"));
    const lado2 = parseFloat(prompt("Digite o valor do lado 2:"));
    const lado3 = parseFloat(prompt("Digite o valor do lado 3:"));
  
    if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
      if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo equilátero.");
      } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("Triângulo isósceles.");
      } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        console.log("Triângulo escaleno.");
      } else {
        console.log("Triângulo inválido.");
      }
    } else {
      console.log("Erro: Valores inválidos.");
    }
  }
  
  classificarTriangulo()
