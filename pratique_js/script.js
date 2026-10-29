let score = 0

let choix = prompt("veuillez choissir la liste : mots ou phrases")
while(choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir mots ou phrases");
}
    

if (choix === "mots") {
for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
        score++
    }    
}
console.log("votre score est de " + score + " sur " + listeMots.length)

} else {
    for (let i = 0; i < listephrases.length; i++) {
    let motUtilisateur = prompt("Entrez la phrase : " + listephrases[i])
    if (motUtilisateur === listephrases[i]) {
        score++
    }    
}
console.log("votre score est de " + score + " sur " + listephrases.length)
}

function retournerMessageScore(score, nombremotMax) {
    let message = "le score est de " + score + " sur " + nombremotMax
    return message
}

let retourfonction = retournerMessageScore(1, 3)
console.log(retourfonction)