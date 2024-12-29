
const prompt = require('prompt-sync')();
function verificarMaiorIdade() {

    const anoNascimento = parseInt(prompt('Digite o seu ano de nascimento: '));

    const anoAtual = new Date().getFullYear();

    const idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        console.log('Você é maior de idade!');
    } else {
        console.log('Você ainda é menor de idade.');
    }
}


verificarMaiorIdade();

