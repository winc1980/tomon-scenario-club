import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function historySwiper() {
  const swiper = new Swiper('#history-swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    centeredSlides: true,
    spaceBetween: 23,
    slidesPerView: 1.3,
  
    pagination: {
      el: '#history .swiper-pagination',
      type: "progressbar",
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      769: {
        spaceBetween: 31,
        slidesPerView: 3.3,
      }
    }
  });
}

export async function fetchHistoryContents() {
  const apiUrl = 'https://tomon-scenario-club.microcms.io/api/v1/history?limit=100&orders=publishedAt';
  const apiKey = 'DEKFxXeuBqVkz26B8swYBEePfaGTrji9Bf53';
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    const swiperWrapper = document.querySelector('#history-swiper .swiper-wrapper');

    if (data.contents) {
      data.contents.forEach(content => {
        const embedHtml = `
          <div class="swiper-slide">
            <Image src=${content.image.url} alt='historyのイメージ画像' class="mx-auto h-[294px] w-full object-cover" />
          </div>
        `
        swiperWrapper.innerHTML += embedHtml;
      })
    }
  } catch (error) {
    console.error(error);
  }
}