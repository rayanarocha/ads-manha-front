const prompt = require ("prompt-sync")();

// para receber um número e compará-lo dentro do switch, é preciso dizer ao JS que você espera um número,
// pois, se você não o fizer, ele vai ler o valor preenchido como string e vai dar erro

let diaSemana = Number(prompt("Insira um valor entre 1 e 7 para selecionar o dia da semana: "));
let diaSemanaNome;

  switch (diaSemana) {
    case 1:
      diaSemanaNome = "Domingo";
      break;
    case 2:
      diaSemanaNome = "Segunda-feira";
      break;
    case 3:
      diaSemanaNome = "Terça-feira";
      break;
    case 4:
      diaSemanaNome = "Quarta-feira";
      break;
    case 5:
      diaSemanaNome = "Quinta-feira";
      break;
    case 6:
      diaSemanaNome = "Sexta-feira";
      break;
    case 7:
      diaSemanaNome = "Sábado";
      break;
    default:
      diaSemanaNome = "Dia inválido";
  }

  console.log(diaSemanaNome);



