// Scroll suave al hacer click en los links del nav
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const selector = this.getAttribute('href');
    const seccion = document.querySelector(selector);
    if (seccion) {
      seccion.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Cierra el menú si está abierto en móvil
    document.getElementById('menu').classList.remove('active');
  });
});

// Toggle del menú hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('active');
});


