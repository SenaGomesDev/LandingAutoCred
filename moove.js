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
})

const heroBg = document.querySelector('.hero');
const images = ['img/bg.jpg', 'img/bg-light.jpg']; // Array com as imagens
let currentIndex = 0;

// Pré-carrega as imagens
function preloadImages(imageArray) {
    imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

// Função para trocar o fundo
function changeBackground() {
    heroBg.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Alterna o índice
}

// Adiciona uma transição suave para a propriedade backgroundImage
heroBg.style.transition = 'background-image 1s ease-in-out';

// Pré-carrega as imagens antes de iniciar a troca
preloadImages(images);

// Configura o intervalo para mudar o fundo automaticamente
setInterval(changeBackground, 1000); // Troca a cada 3 segundos
