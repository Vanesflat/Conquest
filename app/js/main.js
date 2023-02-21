const burgerBtn = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active');
  menuList.classList.toggle('menu__list--active');

  if (window.innerWidth < 585) {
    document.body.classList.toggle('overflow');
  }
})