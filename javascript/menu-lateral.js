const menu = document.querySelector(".menu-lateral")
const botaoMenu = document.querySelector(".cabecalho__menu")
const elementosMenu = document.querySelectorAll(".menu-lateral__link")

botaoMenu.addEventListener('click', () => {

    mostrarMenu()

})

function mostrarMenu() {
    menu.classList.toggle("menu-lateral--ativo")
}

elementosMenu.forEach(link => {
    
    link.addEventListener("click", (event) => { 
        event.preventDefault()
        link.classList.toggle("menu-lateral__link--ativo")
    })
});
