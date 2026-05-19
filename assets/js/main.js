document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio BIM/MEP cargado correctamente.');

    const menuToggle = document.querySelector('.menu-toggle');
    const menuTrigger = document.querySelector('.menu-trigger');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
        menuToggle?.classList.toggle('active');
        navLinks?.classList.toggle('active');
    };

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', toggleMenu);
        
        if (menuTrigger) {
            menuTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMenu();
            });
        }

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});