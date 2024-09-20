var prompt = require('prompt-sync')();
var n = Number(prompt('Insira um numero inteiro.'));
var m = 0;

while (n >= 0) {
    m = n + m;
    var n = Number(prompt('Insira um numero inteiro.'));
}

console.log("Voçê inseriu um numero negativo. Encerrando programa...");
console.log("A soma dos numeros em total é " + m);