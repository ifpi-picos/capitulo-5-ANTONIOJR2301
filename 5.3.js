const nota1 = Number(prompt("Nota 1:"))
const nota2 = Number(prompt("Nota 2: "))
const nota3 = Number(prompt("Nota 3: "))

const media = nota1 + nota2 + nota3 / 3
if(media >= 7) {
console.log("Aprovado!")
}else{
    console.log("Reprovado!")
}
