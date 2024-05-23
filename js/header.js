const logoImage = document.getElementById('logoImage');
const logoText = document.getElementById('logoText');
const logoSrc = './media/LeGrandDetournement.png';
const logoHoverSrc = './media/LeGrandDetournement-dead.png';

const setStyle = (element, styles) => {
  Object.assign(element.style, styles);
};

const changeImageOnHover = () => {
  logoImage.src = logoHoverSrc;
};

const resetImageOnMouseOut = () => {
  logoImage.src = logoSrc;
};

const rotateImage = () => {
  setStyle(logoImage, { transform: 'rotate(10deg)' });
};

const resetRotation = () => {
  setStyle(logoImage, { transform: 'rotate(-3deg)' });
};

const showLogoText = () => {
  setStyle(logoText, { display: 'block' });
};

const hideLogoText = () => {
  setStyle(logoText, { display: 'none' });
};

logoImage.addEventListener('mouseover', () => {
  changeImageOnHover();
  rotateImage();
  showLogoText();
});

logoImage.addEventListener('mouseout', () => {
  resetImageOnMouseOut();
  resetRotation();
  hideLogoText();
});

