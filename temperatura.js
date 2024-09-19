
// neste exemplo, verificamos a temperatura dentro de alguns intervalos
// >= 0 && <= 15 : frio
// > 15 && <= 25 : ameno
// > 25 && <= 35 : quente
// > 35 : pegando fogo

// let temperatura = Number(prompt("Digite uma temperatura: "))

if(temperatura >= 0 && temperatura <= 15){
  console.log("Está frio!")
} else if (temperatura > 15 && temperatura <= 25 ) {
  console.log("Está ameno!")
} else if (temperatura > 25 && temperatura <= 35) {
  console.log("Está quente!")
} else {
  console.log("Está pegando fogo!")
}




