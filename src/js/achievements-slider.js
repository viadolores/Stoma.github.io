import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules'

const swiper = new Swiper('.achievements__swiper', {
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
        prevEl: '.achievements-slider__button-prev',
        nextEl: '.achievements-slider__button-next',
    }

});
