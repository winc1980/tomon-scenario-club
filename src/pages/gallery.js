import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle'

export function gallerySwiper() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: '16vw',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    
    
        
}

     
