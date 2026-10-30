console.log("Bonjour ! Mon fichier JavaScript fonctionne.");

// Récupérer le bouton dans la page HTML
const boutonTheme = document.querySelector("#boutonTheme");

// Écouter le clic sur le bouton
boutonTheme.addEventListener("click", function () {

    // Ajouter ou retirer la classe sombre sur le body
    document.body.classList.toggle("sombre");

});


// Récupérer le bouton du menu
const boutonMenu = document.querySelector("#boutonMenu");

// Récupérer le menu
const menu = document.querySelector("#menu");

// Écouter le clic sur le bouton
boutonMenu.addEventListener("click", function () {

    // Ajouter ou retirer la classe ouvert
    menu.classList.toggle("ouvert");

});