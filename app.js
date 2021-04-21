const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar_menu')

//Display Mobile Menu
const openMenu = () => {
    mobileMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
//Add an event listner to toggle
mobileMenu.addEventListener('click', openMenu);
