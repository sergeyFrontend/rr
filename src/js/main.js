const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1250: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const swiperThree = new Swiper(".reviews__slider", {
  autoHeight: "autu",
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
});

// burger

const burgerBtn = document.querySelector(".menu__btn");
const menuWrapper = document.querySelector(".header-top__inner");
const menuBtnActive = document.querySelector('.menu__btn--active')

burgerBtn.addEventListener("click", () => {
  menuWrapper.classList.toggle("header-top__inner--active");
  if (burgerBtn == document.querySelector('.menu__btn--active')) {
    burgerBtn.classList.remove('menu__btn--active')
  }
  else {
    burgerBtn.classList.add('menu__btn--active')
  }
});
