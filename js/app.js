// Affichage de citations depuis un index aléatoire
function displayQuotes(n) {
    const startIndex = Math.floor(Math.random() * (quotes.length - n + 1));
    const quotesToDisplay = quotes.slice(startIndex, startIndex + n);
    resultElement.textContent = quotesToDisplay.join('\n\n');
    resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.onload = function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    yearElement.textContent = currentYear;
  };
