import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

const portfolioSwiper = new Swiper('.portfolio__swiper-container', {
    speed: 500,
    spaceBetween: '30px',

    navigation: {
        nextEl: '.portfolio__next-btn',
        prevEl: '.portfolio__prev-btn',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        280: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        },
        // desktop >= 991
        991: {
            slidesPerView: 3,
        },
        1440: {
            centeredSlides: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            simulateTouch: false,
            noSwiping: true,
            noSwipingClass: 'swiper-slide',
        },
    },
});

const container = document.querySelector('.portfolio__swiper-container');

const portfolio__next = document.querySelector('.portfolio__next-btn');
const portfolio__prev = document.querySelector('.portfolio__prev-btn');

portfolio__next.addEventListener('click', () => {
    if (portfolioSwiper.activeIndex == 1 && window.innerWidth >= 1440) {
        container.style.transform = 'translateX(-280px)';
    }
});
portfolio__prev.addEventListener('click', () => {
    if (portfolioSwiper.activeIndex == 0 && window.innerWidth >= 1440) {
        container.style.transform = 'translateX(-400px)';
    }
});

const reviewsSwiper = new Swiper('.reviews__swiper-container', {
    speed: 500,
    slidesPerView: 'auto',
    spaceBetween: '20px',

    navigation: {
        nextEl: '.reviews__next-btn',
        prevEl: '.reviews__prev-btn',
    },
});
