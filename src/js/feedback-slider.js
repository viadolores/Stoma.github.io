import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules'

const swiper = new Swiper('.feedback__swiper ', {
    // Optional parameters
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        prevEl: '.feedback-slider__button-prev',
        nextEl: '.feedback-slider__button-next',
    }
});