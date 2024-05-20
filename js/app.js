function displayQuotes(n) {
    const quotesToDisplay = quotes.slice(0, n);
    resultElement.innerHTML = quotesToDisplay.join('\n');
};

