const watchMovieButton = document.getElementById('watchMovieButton');

watchMovieButton.addEventListener('click', openInNewTab);

function openInNewTab() {
  const url = 'https://www.youtube.com/watch?v=PFB6HnYODW8';
  window.open(url, '_blank');
}