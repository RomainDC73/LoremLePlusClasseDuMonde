// Sélection des éléments du DOM
const numberInput = document.getElementById('numberInput');
const okButton = document.getElementById('okButton');
const resultElement = document.getElementById('result');

// Fonction pour vérifier si la valeur est un nombre et limiter à 20
function isValidNumber(value) {
    const number = parseInt(value);
    return !isNaN(number) && number >= 0 && number <= quotes.length;
}

// Vider le champ de saisie lors du chargement de la page
window.addEventListener('load', function() {
    numberInput.value = '';
  });

  okButton.addEventListener('click', function() {
    const inputValue = parseInt(numberInput.value.trim());
  
    if (isValidNumber(inputValue)) {
      displayQuotes(inputValue);
    } else {
      resultElement.textContent = `Veuillez entrer un nombre entier entre 0 et ${quotes.length}.`;
    }
  
    numberInput.value = '';
  });
  
  numberInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const inputValue = parseInt(numberInput.value.trim());
  
      if (isValidNumber(inputValue)) {
        displayQuotes(inputValue);
      } else {
        resultElement.textContent = `Veuillez entrer un nombre entier entre 0 et ${quotes.length}.`;
      }
  
      numberInput.value = '';
    }
  });
  
  numberInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });