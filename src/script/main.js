const buttons = document.querySelectorAll(".personagens__card__btn");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const card = event.currentTarget.closest(".personagens__card");
        const description = card.querySelector(
            ".personagens__card__description",
        );
        description.classList.toggle(
            "personagens__card__description--is-visible",
        );
    });
});

const header = document.querySelector(".header");
const sinopse = document.querySelector(".sinopse");
const icon = document.querySelector(".header__icon");

window.addEventListener("scroll", () => {
    const sinopseTop = sinopse.getBoundingClientRect().top;
    const showHeaderMenu = sinopseTop <= 0;

    // Aplica a classe para esconder os botões e deixar só a imagem
    header.classList.toggle("header--scrolled", showHeaderMenu);

    // Fecha o menu caso a rolagem volte pra cima da sinopse
    if (!showHeaderMenu) {
        header.classList.remove("header--menu-open");
    }
});

document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
        header.classList.remove("header--menu-open");
    }
});

// Abre e fecha menu ao clicar na imagem quando header estiver no estado "scrolled"
icon.addEventListener("click", () => {
    if (header.classList.contains("header--scrolled")) {
        header.classList.toggle("header--menu-open");
    }
});
