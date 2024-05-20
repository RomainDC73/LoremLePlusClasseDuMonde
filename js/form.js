// Sélection des éléments du DOM
const numberInput = document.getElementById('numberInput');
const okButton = document.getElementById('okButton');
const resultElement = document.getElementById('result');

// Fonction pour vérifier si la valeur est un nombre et limiter à 20
function isValidNumber(value) {
    const number = parseInt(value);
    return !isNaN(value) && number >= 0 && number <= 20;
}

// Vider le champ de saisie lors du chargement de la page
window.onload = () => {
  numberInput.value = '';
  resultElement.textContent = '';
};

// Événement de clic sur le bouton OK
okButton.addEventListener('click', () => {
    const inputValue = numberInput.value.trim();

    if (isValidNumber(inputValue)) {
      resultElement.textContent = 'Vous avez entré le nombre : '+ inputValue;
    } else {
      resultElement.textContent = 'Vous devez entrer un nombre entre 0 et 20.';
    }

    numberInput.value = '';
});

// Événement de saisie dans le champ de saisie et filtrage des caractères non numériques
numberInput.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '');
});