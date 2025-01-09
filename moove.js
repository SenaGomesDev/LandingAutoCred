const heroBg = document.querySelector('.hero');
const images = ['img/bg.jpg', 'img/bg-light.jpg']; // Array com as imagens
let currentIndex = 0;

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

// Chamada da função de pré-carregamento
preloadImages(images, () => {
    // Código a ser executado após todas as imagens serem carregadas
    // Por exemplo, iniciar a animação ou exibir as imagens
    console.log('Todas as imagens foram carregadas!');
    // Aqui você pode chamar a função que troca o fundo
    changeBackground();
});

// Função para trocar o fundo
function changeBackground() {
    heroBg.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Alterna o índice
}

// Adiciona uma transição suave para a propriedade backgroundImage
heroBg.style.transition = 'background-image 1s ease-in-out';

// Inicia o pré-carregamento das imagens e começa a animação após o carregamento
preloadImages(images, () => {
    // Troca o fundo automaticamente após todas as imagens serem carregadas
    setInterval(changeBackground, 3000); // Troca a cada 3 segundos
});
