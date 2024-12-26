document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Evento de rolagem para ocultar/exibir o menu
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Alternar imagem de fundo da seção Hero
    let heroBg = document.querySelector('.hero');
    setInterval(() => {
        heroBg.style.backgroundImage = "url(img/bg-light.jpg)";
        setTimeout(() => {
            heroBg.style.backgroundImage = "url(img/bg.jpg)";
        }, 1000);
    }, 2200);
});

