const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar_menu')

//Display Mobile Menu
const openMenu = () => {
    mobileMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
//Add an event listner to toggle
mobileMenu.addEventListener('click', openMenu);

//Show Active menu when scrolling
const highlightMenu = () => {
    const homeNav = document.querySelector('#home_section')
    const aboutNav = document.querySelector('.#about_section')
    const portfolioNav = document.querySelector('#portfolio_section')
    const contactNav = document.querySelector('#contact-section')
    let scrollDisplay = window.scrollY
    


}
