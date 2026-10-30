function afficherResultat(score, nombremotproposes) {
console.log("votre score est de " + score + " sur " + nombremotproposes)
}

function choisirphraseouMots() {
    let choix = prompt("veuillez choissir la liste : mots ou phrases")
    while(choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veuillez choisir mots ou phrases");
    } 
   return choix   
}

function LancerBoucleDeJeu(listeproposition) {
    let score = 0
    for (let i = 0; i < listeproposition.length; i++) {
        motUtilisateur = prompt("Entrez la phrase : " + listeproposition[i])
        if (motUtilisateur === listeproposition[1]) {
            score++
        }    
    } 
    return score
}

function lancerjeu() {
     let choix = choisirphraseouMots()
     let score = 0   
     let nombremotproposes = 0

     if (choix === "mots") {
        score = LancerBoucleDeJeu(listeMots)
          nombremotproposes = listeMots.length
     } else {
        score = LancerBoucleDeJeu(listephrases)
          nombremotproposes = listephrases.length
     }

    afficherResultat(score, nombremotproposes)

} 

lancerjeu()

function retournerMessageScore(score, nombremotMax) {
    let message = "le score est de " + score + " sur " + nombremotMax
    return message
}

let retourfonction = retournerMessageScore(1, 3)
console.log(retourfonction)

