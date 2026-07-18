const menu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
}

const nav = document.querySelector("nav");
let logo = document.getElementById("logo");
const spanMenu = document.querySelector("nav span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 75) {
        nav.classList.add("nav-fixed");
        nav.classList.add("animate");
            
        logo.src = "../images/logo.png";
        spanMenu.style.color = "#0b090a";                             
    } else {
        nav.classList.remove("nav-fixed", "animate");

        logo.src = "../images/logoWhite.png";          
        spanMenu.style.color = "#e2eafc";                             
    }
});
