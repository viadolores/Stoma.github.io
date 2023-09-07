import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules'

const swiper = new Swiper('.specialists__swiper', {
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
        prevEl: '.specialists-slider__button-prev',
        nextEl: '.specialists-slider__button-next',
    }

});
