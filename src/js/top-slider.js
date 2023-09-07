import Swiper from 'swiper';

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// init Swiper:
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    // If we need pagination
    loop: true,
    direction: "vertical",    //add
    // autoplay: {
    //     delay: 2000,
    // },
    pagination: {
        el: '.top-slider__pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.top-slider__prev',
        prevEl: '.top-slider__next',
    },
});