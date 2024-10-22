const textoRolante = document.querySelector('.texto-rolante');

textoRolante.addEventListener('mouseover', () => {
  textoRolante.style.overflowY = 'auto';
});

textoRolante.addEventListener('mouseout', () => {
  textoRolante.style.overflowY = 'hidden';
});