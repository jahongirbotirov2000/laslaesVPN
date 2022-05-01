const burgerBtn = document.querySelector(".header__mob-btn");
const mobileMenu = document.querySelector("#mob__menu");
const closeBtn = document.querySelector(".header__mob-close-btn")

burgerBtn.addEventListener('click', () => {
    console.log('bosl')
    mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('falsy');
    closeBtn.classList.toggle("show__close-btn")

});