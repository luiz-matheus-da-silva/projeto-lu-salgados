let menuMobile = document.getElementById('menu-mobile');
let menuBotao = document.getElementById('botao-abrir');

function menuShow() {
    if (menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active");
        document.body.style.overflow = "visible";
    } else {
        menuMobile.classList.add("active");
        menuBotao.classList.remove("active");
        document.body.style.overflow = "hidden";
    }
}