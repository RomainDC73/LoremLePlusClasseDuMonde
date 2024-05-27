// Sélection des éléments du DOM
const numberInput = document.getElementById('numberInput');
const okButton = document.getElementById('okButton');
const resultElement = document.getElementById('result');

// Fonction pour vérifier si la valeur est un nombre et limiter la plage de valeurs
function isValidNumber(value) {
    const number = parseInt(value);
    return !isNaN(number) && number >= 0 && number <= quotes.length;
}

// Affichage de citations depuis un index aléatoire
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

    copyButton.style.display = 'block';
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
  // Limiter la saisie à des chiffres uniquement
  numberInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });