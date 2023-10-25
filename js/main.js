(function () {
  const btnOpen1 = document.querySelector('.header__button')
  const btnOpen2 = document.querySelector('.hero__button')
  const btnOpen3 = document.querySelector('.footer__button')
  const body = document.body
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
  // =========================================================Модалка

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

  tabControls.addEventListener('click', togleTab)
  // =========================================================Проект-слайдер

  new Swiper('.projects__slider', {

    spaceBetween: 30,
    slidesPerView: 4,

    pagination: {
      el: '.projects__pagination',
      clickable: true,
    },
  });
  // =========================================================Слайдер отзывов
  new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1.51,
    centeredSlides: true,

    pagination: {
      el: '.testimonials__pagination',
      clickable: true,
    },
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