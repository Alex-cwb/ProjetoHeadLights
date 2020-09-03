var slideIndex = 0;
showSlides();

function showSlides() {

    /* Definindo as variáveis, com as classes que serão utilizadas */
    var i;
    var slides = document.getElementsByClassName("slider ");
    var dots = document.getElementsByClassName("marcador ");

    /* Não sei exatamente o que faz esse trecho */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none ";
    }

    /* Incrementa para iniciar a animação do slide */
    slideIndex++;

    /* Se a variável for maior que o tamanho do slide, o valor volta a ser o valor inicial */
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    /* Sincroniza os marcadores, junto a imagem do slide */
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", " ");
    }

    /* Onde faz a transição das imagens do slide */
    slides[slideIndex - 1].style.display = "block ";
    dots[slideIndex - 1].className += " active ";
    setTimeout(showSlides, 3000);
}