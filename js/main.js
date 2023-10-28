(function () {
  // =========================================================Бургер
  const burgerIcon = document.querySelector('.burger-icon')
  const body = document.body
  const bodyOpenedMenu = document.querySelector('.body--opened-menu')

  const openMenu = () => {
    body.classList.add('body--opened-menu')
  }
  const closeMenu = () => {
    body.classList.remove('body--opened-menu')
  }

  burgerIcon.addEventListener('click', openMenu)

  body.addEventListener('click', event => {
    const target = event.target
    if (target && event.target.classList.contains('body') || target.classList.contains('burger-icon') || target.classList.contains('nav__menu-link')) {
      closeMenu()
    }
  })

  // =========================================================Аккордеон-бургер
  const burgaccordionList = document.querySelector('.nav__list');

  burgaccordionList.addEventListener('click', (event) => {

    const burgaccordionList = event.currentTarget
    const burgaccordionOpenedItem = burgaccordionList.querySelector('.nav__item--opened')
    const burgaccordionOpenedContent = burgaccordionList.querySelector('.nav__item--opened .nav__menu-list')

    const burgaccordionControl = event.target.closest('.nav__link');
    if (!burgaccordionControl) return
    event.preventDefault()
    const burgaccordionItem = burgaccordionControl.parentElement;
    const burgaccordionContent = burgaccordionControl.nextElementSibling;

    if (burgaccordionOpenedItem && burgaccordionItem != burgaccordionOpenedItem) {
      burgaccordionOpenedItem.classList.remove('nav__item--opened');
      burgaccordionOpenedContent.style.maxHeight = null;
    }

    burgaccordionItem.classList.toggle('nav__item--opened');

    if (burgaccordionItem.classList.contains('nav__item--opened')) {
      burgaccordionContent.style.maxHeight = burgaccordionContent.scrollHeight + 'px';
    } else {
      burgaccordionContent.style.maxHeight = null;
    }

  });
  // =========================================================Модалка
  const btnOpen1 = document.querySelector('.header__button')
  const btnOpen2 = document.querySelector('.hero__button')
  const btnOpen3 = document.querySelector('.footer__button')
  const modal = document.querySelector('.modal')

  const openModal = () => {
    body.classList.add('body--opened-modal')
  }
  const closeModal = () => {
    body.classList.remove('body--opened-modal')
  }

  btnOpen1.addEventListener('click', openModal)
  btnOpen2.addEventListener('click', openModal)
  btnOpen3.addEventListener('click', openModal)

  body.addEventListener('click', event => {
    const target = event.target
    if (target && event.target.classList.contains('modal') || target.classList.contains('modal__cancel') || target.classList.contains('modal__button')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
      closeModal()
    }
  })
  // =========================================================Хиро слайдер

  new Swiper('.hero__slider', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
  });

  // =========================================================Табы 
  const tabControls = document.querySelector('.tab-controls')

  const togleTab = (event => {

    const tabControl = event.target.closest('.tab-controls__link')

    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    console.log(tabControl.getAttribute('href'))

    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.projects__slider--show')

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('projects__slider--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('projects__slider--show')
  })

  // =========================================================Видео-плеер
  videojs(document.querySelector('.video-js'))

  // =========================================================Проект-слайдер
  tabControls.addEventListener('click', togleTab)

  new Swiper('.projects__slider', {

    spaceBetween: 15,
    slidesPerView: 2,

    pagination: {
      el: '.projects__pagination',
      clickable: true,
    },

    breakpoints: {
      801: {
        slidesPerView: 4,
      },
      1501: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },

  });
  // =========================================================Слайдер отзывов
  new Swiper('.testimonials__slider', {

    spaceBetween: 62,
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
      el: '.testimonials__pagination',
      clickable: true,
    },

    breakpoints: {
      801: {
        spaceBetween: 0,
      },
      1501: {
        spaceBetween:0,
        slidesPerView: 1.53,
      },
    }
  });
  // =========================================================Аккордеон-футер
  const footaccordionList = document.querySelector('.footer__nav');


  footaccordionList.addEventListener('click', (event) => {

    const footaccordionList = event.currentTarget
    const footaccordionOpenedItem = footaccordionList.querySelector('.footer__nav-list--opened')
    const footaccordionOpenedContent = footaccordionList.querySelector('.footer__nav-list--opened .footer__nav-content')

    const footaccordionControl = event.target.closest('.footer__nav-control');
    if (!footaccordionControl) return
    event.preventDefault()
    const footaccordionItem = footaccordionControl.parentElement;
    const footaccordionContent = footaccordionControl.nextElementSibling;

    if (footaccordionOpenedItem && footaccordionItem != footaccordionOpenedItem) {
      footaccordionOpenedItem.classList.remove('footer__nav-list--opened');
      footaccordionOpenedContent.style.maxHeight = null;
    }
    footaccordionItem.classList.toggle('footer__nav-list--opened');

    if (footaccordionItem.classList.contains('footer__nav-list--opened')) {
      footaccordionContent.style.maxHeight = footaccordionContent.scrollHeight + 'px';
    } else {
      footaccordionContent.style.maxHeight = null;
    }

  });
  // =========================================================Аккордеон
  const accordionList = document.querySelector('.accordion-list');


  accordionList.addEventListener('click', (event) => {

    const accordionList = event.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

    const accordionControl = event.target.closest('.accordion-list__control');
    if (!accordionControl) return
    event.preventDefault()
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened');
      accordionOpenedContent.style.maxHeight = null;
    }
    accordionItem.classList.toggle('accordion-list__item--opened');

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }

  });
})()