const menuBtnOpen = document.querySelector('.mobile-menu-open-btn');
const menu = document.querySelector('.mobile-menu');
const menuBtnClose = document.querySelector('.mobile-menu-close-btn');

menuBtnOpen.addEventListener('click', function () {
  menu.classList.add('is-open');
});

menuBtnClose.addEventListener('click', function () {
  menu.classList.remove('is-open');
});
