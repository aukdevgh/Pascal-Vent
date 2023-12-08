const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--mobile');
});
