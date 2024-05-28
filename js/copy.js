const quotesToCopy = document.getElementById('result');
const copyButton = document.getElementById('copyButton');
const alertElement = document.getElementById('alert');

copyButton.addEventListener('click', () => {
  const textToCopy = quotesToCopy.textContent.trim();

  if (navigator.clipboard) {
    // Utiliser l'API Clipboard pour copier le texte
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Modifier le texte du bouton
        copyButton.textContent = '🎉 Texte copié. Fais-toi plaisir amigo !';
        setTimeout(() => {
          copyButton.textContent = 'Copier le texte';
        }, 3500); // Réinitialiser le texte après 3 secondes
      })
      .catch((err) => {
        console.error('Échec de la copie du texte: ', err);
      });
  } else {
    // Utiliser la méthode de secours pour les navigateurs plus anciens
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Modifier le texte du bouton
    copyButton.textContent = '🎉 Texte copié. Fais-toi plaisir amigo !';
    setTimeout(() => {
      copyButton.textContent = 'Copier le texte';
    }, 3500); // Réinitialiser le texte après 3 secondes
  }
});



