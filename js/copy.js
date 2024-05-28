const quotesToCopy = document.getElementById('result');
const copyButton = document.getElementById('copyButton');
const alertElement = document.getElementById('alert');

copyButton.addEventListener('click', () => {
  const textToCopy = quotesToCopy.textContent.trim();

  if (navigator.clipboard) {
    // Utiliser l'API Clipboard pour copier le texte
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // console.log('Texte copié !');
      })
      .catch((err) => {
        // console.error('Échec de la copie du texte: ', err);
      });

      alertElement.textContent = '🎉 Texte copié. Fais-toi plaisir amigo !';
      alertElement.style.display = 'block';
      setTimeout(function() {
        alertElement.style.opacity = '1';
      }, 10);
  
      setTimeout(function() {
        alertElement.style.opacity = '0';
        setTimeout(function() {
          alertElement.style.display = 'none';
        }, 500);
      }, 3000);

  } else {
    // Utiliser la méthode de secours pour les navigateurs plus anciens
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);



  }
});



