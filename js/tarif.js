'use strict';

const contactFrom = document.querySelector('.contact-scroll');
const contactTo = document.querySelector('.form-container');

contactFrom.addEventListener('click', () => {
  scrollTo({
    top: 850,
    behavior: 'smooth',
  });
});
