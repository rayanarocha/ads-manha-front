const prompt = require ("prompt-sync")();

// let diaSemana = Number(prompt("Insira um valor entre 1 e 7 para selecionar o dia da semana: "));
// let diaSemanaNome;

//   switch (diaSemana) {
//     case 1:
//       diaSemanaNome = "Domingo";
//       break;
//     case 2:
//       diaSemanaNome = "Segunda-feira";
//       break;
//     case 3:
//       diaSemanaNome = "Terça-feira";
//       break;
//     case 4:
//       diaSemanaNome = "Quarta-feira";
//       break;
//     case 5:
//       diaSemanaNome = "Quinta-feira";
//       break;
//     case 6:
//       diaSemanaNome = "Sexta-feira";
//       break;
//     case 7:
//       diaSemanaNome = "Sábado";
//       break;
//     default:
//       diaSemanaNome = "Dia inválido";
//   }

//   console.log(diaSemanaNome);

let temperatura = Number(prompt("Digite uma temperatura: "))

if(temperatura >= 0 && temperatura < 15){
  console.log("Está frio!")
} else if (temperatura > 15 && temperatura <= 25 ) {
  console.log("Está ameno!")
} else if (temperatura > 25 && temperatura <= 35) {
  console.log("Está quente!")
} else {
  console.log("Está pegando fogo!")
}

