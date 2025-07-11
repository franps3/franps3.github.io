const overlay = document.getElementById('overlay');
const overlayImg = overlay.querySelector('img');
const closeBtn = document.getElementById('closeBtn');

// Al hacer clic en cualquier imagen pequeña de la galería
document.querySelectorAll('.article-imagen img').forEach(img => {
img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
    overlayImg.alt = img.alt;
});
});

// Al hacer clic en la X cerrar
closeBtn.addEventListener('click', () => {
overlay.style.display = 'none';
overlayImg.src = '';
});

// Opcional: cerrar al hacer clic fuera de la imagen
overlay.addEventListener('click', (e) => {
if(e.target === overlay) {
    overlay.style.display = 'none';
    overlayImg.src = '';
}
});