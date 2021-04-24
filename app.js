const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar_menu')

//Display Mobile Menu
const openMenu = () => {
    mobileMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
//Add an event listner to toggle
mobileMenu.addEventListener('click', openMenu);


// Close mobile menu when a menu item is clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        mobileMenu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }   
};

menuLinks.addEventListener('click' , hideMobileMenu);
navLogo.addEventListener('click' , hideMobileMenu);


