const heroBg = document.querySelector('.hero');
const images = ['img/bg.jpg', 'img/bg-light.jpg']; // Array com as imagens
let currentIndex = 0;

// Função para trocar o fundo
function changeBackground() {
    if (heroBg) {
        heroBg.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length; // Alterna o índice
    }
}

// Função para pré-carregar as imagens
function preloadImages(imageArray, callback) {
    let loadedImages = 0;
    const totalImages = imageArray.length;

    imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback(); // Chama a função após todas as imagens carregarem
            }
        };
    });
}

// Adiciona uma transição suave para o fundo
if (heroBg) {
    heroBg.style.transition = 'background-image 1s ease-in-out';
}

// Precarrega as imagens e inicia a troca de fundo
preloadImages(images, () => {
    changeBackground(); // Define a imagem inicial
    setInterval(changeBackground, 3000); // Troca a cada 3 segundos
});
