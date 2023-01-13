window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');
  //   // * ===== Nice Select
  //   // $('select').niceSelect();

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

  //   // * ===== Slider
  //   (function slider() {
  //     const sliderEl = document.querySelector('.price-list-top__slider');
  //     new Swiper(sliderEl, {
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       slideToClickedSlide: true,
  //       initialSlide: 4,
  //       spaceBetween: 20,
  //       navigation: {
  //         nextEl: '.price-list-top__slider .swiper-button-next',
  //         prevEl: '.price-list-top__slider .swiper-button-prev',
  //       },
  //     });
  //   })();

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

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();
  //   // * ===== Toggle Tabs
  //   function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //     const header = document.querySelectorAll(headerSelector);
  //     const tab = document.querySelectorAll(tabSelector);
  //     const content = document.querySelectorAll(contentSelector);
  //     header.forEach((el) => {
  //       if (el) {
  //         hideTabContent();
  //         showTabContent();
  //         function hideTabContent() {
  //           content.forEach((item) => {
  //             item.classList.remove('active');
  //           });
  //           tab.forEach((item) => {
  //             item.classList.remove(activeClass);
  //           });
  //         }
  //         function showTabContent(i = 0) {
  //           content[i].classList.add('active');
  //           tab[i].classList.add(activeClass);
  //         }
  //         header.forEach((item) => {
  //           if (item) {
  //             item.addEventListener('click', (e) => {
  //               const target = e.target;
  //               if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //                 tab.forEach((item, i) => {
  //                   if (target == item || target.parentNode == item) {
  //                     hideTabContent();
  //                     showTabContent(i);
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  //   someTabs('.contacts', '.contacts-top__item', '.contacts__content', 'active');
});
