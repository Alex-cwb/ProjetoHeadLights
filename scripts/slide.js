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

function mostrarConteudo(conteudo, ocultar1, ocultar2) {
    /* Função para a transição de categoria */
    var display = document.getElementById(conteudo).style.display;

    if (display == "none") {
        document.getElementById(conteudo).style.display = "block";
        document.getElementById("slide").style.display = "none";
        document.getElementById(ocultar1).style.display = "none";
        document.getElementById(ocultar2).style.display = "none";
    } else {
        document.getElementById(conteudo).style.display = "none";
        document.getElementById("slide").style.display = "block";
    }
}