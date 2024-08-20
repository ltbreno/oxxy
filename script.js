document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const handleScroll = () => {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();

            // Verifica se o elemento está na viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('in-view');
            } 
        });
    };

    // Chame handleScroll no carregamento e no scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicialize na carga da página
});
