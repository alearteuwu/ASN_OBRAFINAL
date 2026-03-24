const slider = document.querySelector('.CARRUSEL');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // Guardamos la posición inicial del ratón
    startX = e.pageX - slider.offsetLeft;
    // Guardamos cuánto scroll tenía ya el contenedor
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Si no estamos haciendo clic, no hacemos nada
    e.preventDefault();
    
    // Calculamos cuánto se ha movido el ratón
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // El '2' es la velocidad de movimiento
    
    // Movemos el scroll del contenedor
    slider.scrollLeft = scrollLeft - walk;
});