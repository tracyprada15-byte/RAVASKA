document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico para el pie de página
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Menú Responsive Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('active');
    });

    // Cerrar menú móvil tras hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

/**
 * Función preparada para lanzar o incrustar el videojuego real en HTML.
 */
function iniciarModoJuego() {
  const gameArea = document.getElementById('gameArea');
  
  // Mensaje amigable respetando que no hay un iframe/link real aún configurado
  alert('¡Prepárate! El contenedor de juego está configurado. Inserta la dirección o archivo HTML de RAVASKA para comenzar a jugar.');
  
  /* Ejemplo técnico de incrustación una vez se disponga del juego real:
  gameArea.innerHTML = `
    <iframe 
      src="ruta_del_juego/index.html" 
      width="100%" 
      height="600px" 
      style="border: 3px solid var(--green);" 
      allowfullscreen>
    </iframe>
  `;
  */
}