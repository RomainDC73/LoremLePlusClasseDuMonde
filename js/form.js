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

// Fonction pour valider le champ de saisie
function validateInput() {
    const inputValue = numberInput.value.trim();
  
    // Vérifier si la valeur est un nombre entier entre 0 et 20
    if (isValidNumber(inputValue)) {
      resultElement.textContent = `Vous avez entré le nombre : ${inputValue}`;
    } else {
      resultElement.textContent = 'Veuillez entrer un nombre entier entre 0 et 20.';
    }
  
    // Vider le champ de saisie après validation
    numberInput.value = '';
  }
  
    // Ajouter un écouteur d'événement pour le bouton OK
    okButton.addEventListener('click', validateInput);

    // Ajouter un écouteur d'événement pour la touche "Entrée"
    numberInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
        validateInput();
    }
});

// Vider le champ de saisie lors du chargement de la page
window.addEventListener('load', function() {
    numberInput.value = '';
});

// Événement de saisie dans le champ de saisie et filtrage des caractères non numériques
numberInput.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '');
});