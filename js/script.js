window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_list'),
        menuItem = document.querySelectorAll('.menu_list_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
        })
    })
})