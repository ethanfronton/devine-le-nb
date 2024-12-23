let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essaisRestants = 10;

function deviner() {

    let tentative = parseInt(document.getElementById("tentative").value);
    let message = document.getElementById("message");

    if (isNaN(tentative) || tentative < 1 || tentative > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        message.className = "red";
        return;
    }
    essaisRestants--;

    if (tentative === nombreSecret) {
        message.textContent = `Bravo ! Vous avez deviné le nombre ${nombreSecret} en ${10 - essaisRestants} essais ! 🎉`;
        message.className = "green";
    } else if (essaisRestants === 0) {
        message.textContent = `Dommage ! Vous avez épuisé tous vos essais. Le nombre secret était ${nombreSecret}. 😢`;
        message.className = "red";
    } else if (tentative < nombreSecret) {
        message.textContent = `C'est plus grand ! Il vous reste ${essaisRestants} essais.`;
        message.className = "orange";
    } else if (tentative > nombreSecret) {
        message.textContent = `C'est plus petit ! Il vous reste ${essaisRestants} essais.`;
        message.className = "orange";
    }

    // Réinitialise l'input après chaque tentative
    document.getElementById("tentative").value = "";
}
