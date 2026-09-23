document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Abre/Fecha menu no celular
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Lida com dropdowns no celular
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                // Previne que feche se for um link de navegação real dentro do dropdown
                if(e.target.tagName !== 'A' || e.target.getAttribute('href') === '#') {
                     this.classList.toggle('active');
                }
            }
        });
    });

    // Fecha o menu mobile automaticamente ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navList.classList.remove('active');
                // Remove active de todos os dropdowns também
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        });
    });
});
