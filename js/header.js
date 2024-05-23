const logoImage = document.getElementById('logoImage');

const logoHoverSrc = './media/LeGrandDetournement-dead.png';

function changeImageOnHover() {
    logoImage.src = logoHoverSrc;
}

function resetImageOnMouseOut() {
    logoImage.src = './media/LeGrandDetournement.png';
}

logoImage.addEventListener('mouseover', changeImageOnHover);

logoImage.addEventListener('mouseout', resetImageOnMouseOut);