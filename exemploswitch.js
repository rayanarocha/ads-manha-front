const prompt = require("prompt-sync")();

switch (prompt("Como está o tempo? ")) {
    case "chuvoso":
        console.log("Lembre-se de levar guarda-chuva.")
        break
    case "ensolarado":
        console.log("Vista roupas leves.")
        break
    case "nublado":
        console.log("Se agasalhe.")
        break
    default:
        console.log("Tempo desconhecido.")
        break
}