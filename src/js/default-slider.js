import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules'

const swiper = new Swiper('.video-info__swiper ', {
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
        prevEl: '.default-slider__button-prev',
        nextEl: '.default-slider__button-next',
    }
});