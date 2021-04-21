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
// const highlightMenu = () => {
//     const homeNav = document.querySelector('#home_section')
//     const aboutNav = document.querySelector('.#about_section')
//     const portfolioNav = document.querySelector('#portfolio_section')
//     const contactNav = document.querySelector('#contact-section')
//     let scrollDisplay = window.scrollY

    //adding 'highlight' class to menu items on full screen only
//     if(window.innerWidth > 960 && scrollDisplay < 600) {
//     homeNav.classList.add('highlight')
//     aboutNav.classList.remove('highlight')
//     return 
//     } else if(window.innerWidth > 960 && scrollDisplay < 1400) {
//         aboutNav.classList.add('highlight')
//         homeNav.classList.remove('highlight')
//         contactNav.classList.remove('highlight')
//         return
//     } else if(window.innerWidth > 960 && scrollDisplay < 2345) {
//         portfolioNav.classList.add('highlight')
//         homeNav.classList.remove('highlight')
//         contactNav.classList.remove('highlight')
//         return
// }

// if ((homeNav && window.innerWidth < 960 && scrollDisplay <600 )) || homeNav) {
//     homeNav.classList.remove('highlight')
//     }
// }

// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);

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


