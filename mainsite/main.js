const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');

    // Agrega esta línea para evitar que la imagen desaparezca y vuelva a aparecer rápidamente
    showcase.style.transition = 'none';
})
