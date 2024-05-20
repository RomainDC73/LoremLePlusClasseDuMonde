function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function displayQuotes(n) {
    const shuffledQuotes = shuffleArray(quotes.slice());
    const quotesToDisplay = shuffledQuotes.slice(0, n);
    resultElement.innerHTML = quotesToDisplay.join('\n');
};

