const face = document.getElementById('face');

// Save the original image source
const originalSrc = face.src;

// What to change to on hover
const hoverSrc = 'romu-hover.png';

face.addEventListener('mouseenter', () => {
  face.style.animationPlayState = 'paused';
  face.src = hoverSrc; // Change the image
});

face.addEventListener('mouseleave', () => {
  face.style.animationPlayState = 'running';
  face.src = originalSrc; // Change it back
});