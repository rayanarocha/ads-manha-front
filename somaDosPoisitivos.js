console.clear()
const prompt = require('prompt-sync')();

let num = Number(prompt("Digite o número: "))

let soma = 0;
while(num >= 0){
    soma += num;
    num = Number(prompt('Digite o numero: '))
}

console.log(`A soma é: ${soma}`)