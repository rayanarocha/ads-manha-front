
// Soma dos Números Positivos: Crie um programa que peça ao usuário para inserir números inteiros. 
// O programa deve continuar solicitando números enquanto o usuário inserir números positivos. 
// Se o usuário inserir um número negativo, o programa deve parar e imprimir a soma dos números positivos inseridos. 
// Utilize while para o loop e if para verificar se o número é positivo ou negativo.

const prompt = require("prompt-sync")();

var soma = 0

var numero = Number(prompt("Digite um número: "))

while(numero > 0) {
    soma = numero + soma
    var numero = Number(prompt("Digite um número: "))
}

console.log("A soma dos números positivos digitados é igual a: ", soma)