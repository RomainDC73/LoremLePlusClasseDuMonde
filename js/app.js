// Affichage de citations depuis un index aléatoire
function displayQuotes(n) {
    const startIndex = Math.floor(Math.random() * (quotes.length - n + 1));
    const quotesToDisplay = quotes.slice(startIndex, startIndex + n);
    resultElement.textContent = quotesToDisplay.join('\n\n');
};


