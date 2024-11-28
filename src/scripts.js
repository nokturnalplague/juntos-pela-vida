document.addEventListener('DOMContentLoaded', () => {
    const menuIconContainer = document.querySelector('.menu-icon-container');
    const navigationItems = document.querySelector('.navigation__itens');

    menuIconContainer.addEventListener('click', () => {
        navigationItems.classList.toggle('navigation__itens--active');
        menuIconContainer.classList.toggle('menu-icon-container--active')
    });
});