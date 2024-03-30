const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})