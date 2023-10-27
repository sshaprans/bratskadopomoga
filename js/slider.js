"use strict"
const swiper = new Swiper('.swiper', {

    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: true,
    speed: 1000,
    effect: 'cube', // cards, coverflow, flip, fade, cube
    // initialSlide: 2,
    // freeMode: true,
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 1500,
    },
});
//
//
// //! ============== var2 ==============
// const gallery = new Swiper('.gallery', {
//
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 20,
//     slidesPerView: 3,
//     slidesPerGroup: 1,
//
//     autoplay: {
//         delay: 3000,
//     },
//
//
//     breakpoints: {
//         1251: {
//             spaceBetween: 20,
//             slidesPerView: 3,
//         },
//
//         951: {
//             spaceBetween: 20,
//             slidesPerView: 2,
//         },
//
//         0: {
//             spaceBetween: 0,
//             slidesPerView: 1,
//         },
//     },
// });