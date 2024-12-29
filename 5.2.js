const numero1 = Number(prompt("numero 1:"))
const numero2 = Number(prompt("numero 2:"))
const numero3 = Number(prompt("numero 3:"))
let maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}

// Exibir o maior número
console.log(`O maior número é: ${maiorNumero}`);
