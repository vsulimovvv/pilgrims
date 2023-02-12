window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * Show More
  (function showMore() {
    // Сделаю позже через slice
    const rows = document.querySelectorAll('.schedule__row.hidden');
    const btn = document.querySelector('.schedule__btn');

    if (btn) {
      btn.addEventListener('click', (e) => {
        rows.forEach((row) => {
          row.classList.toggle('hidden');

          if (row.classList.contains('hidden')) {
            btn.textContent = 'Посмотреть весь список';
          } else {
            btn.textContent = 'Скорыть';
          }
        });
      });
    }
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.excursions__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.excursions__content .swiper-button-next',
        prevEl: '.excursions__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.photos__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.photos__content .swiper-button-next',
        prevEl: '.photos__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.reviews__content .swiper-button-next',
        prevEl: '.reviews__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 15,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.stock__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.stock__content .swiper-button-next',
        prevEl: '.stock__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 15,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.articles-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.articles-slider__content .swiper-button-next',
        prevEl: '.articles-slider__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.videos__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.videos__content .swiper-button-next',
        prevEl: '.videos__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.pilgrims__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.pilgrims__content .swiper-button-next',
        prevEl: '.pilgrims__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 30,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.hero__slider .swiper-button-next',
        prevEl: '.hero__slider .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 10) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 10) {
        header.classList.add('scroll-header');
      }
    }
    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.schedule__row', '.popup--order', '.popup__close');
    bindModal('.product-btn', '.popup--product', '.popup__close');
    bindModal('.text-btn', '.popup--text', '.popup__close');
  })();

  // * ===== Slider Thumbs
  (function verticalSlider() {
    const sliderWrap = document.querySelectorAll('.slider-thumbs');
    sliderWrap.forEach((el) => {
      if (el) {
        const sliderNav = el.querySelector('.slider-thumbs__nav-wrap');
        const sliderMain = el.querySelector('.slider-thumbs__main');

        console.log(sliderNav);

        let mySwiperNav = new Swiper(sliderNav, {
          slidesPerView: 'auto',
          spaceBetween: 17,
          direction: 'horizontal',
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });

        new Swiper(sliderMain, {
          spaceBetween: 10,
          loopedSlides: 4,
          thumbs: {
            swiper: mySwiperNav,
          },
        });
      }
    });
  })();

  // * ==== Single Product
  // (function verticalSlider() {
  //   let mySwiperNav = new Swiper('#slider-nav', {
  //     slidesPerView: 'auto',
  //     spaceBetween: 17,
  //     direction: 'horizontal',
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  //   });

  //   let mySwiper = new Swiper('#slider-main', {
  //     spaceBetween: 10,
  //     loopedSlides: 4,
  //     thumbs: {
  //       swiper: mySwiperNav,
  //     },
  //   });
  // })();
});
