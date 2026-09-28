'use client';

import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Типизируем структуру для каждого отзыва
interface ReviewItem {
  id: number;
  img: string;
  alt: string;
}

// Заносим все ваши 11 файлов отзывов из папки imageComments в массив
const reviewsData: ReviewItem[] = [
  { id: 1, img: '/imageComments/3a994f72-1394-4286-91bc-a01fbf044ee0_11zon.webp', alt: 'Отзыв клиента 1' },
  { id: 2, img: '/imageComments/3f291658-3d39-43a8-ab0c-f6be66083d4d_11zon_11zon.webp', alt: 'Отзыв клиента 2' },
  { id: 3, img: '/imageComments/15d1f3ea-dfcf-4376-a7e9-69b0f42c7155_11zon.webp', alt: 'Отзыв клиента 3' },
  { id: 4, img: '/imageComments/96ecfacf-6a1e-407a-a1f4-e31b333032da_11zon.webp', alt: 'Отзыв клиента 4' },
  { id: 5, img: '/imageComments/902c95bd-f518-4715-a082-8369a899b8ef_11zon.webp', alt: 'Отзыв клиента 5' },
  { id: 6, img: '/imageComments/994ffce9-e6d6-4c6e-a294-69378a2fc08f_11zon.webp', alt: 'Отзыв клиента 6' },
  { id: 7, img: '/imageComments/7022a4c2-aa9d-431b-8f6a-aa51f22492a3_11zon.webp', alt: 'Отзыв клиента 7' },
  { id: 8, img: '/imageComments/62301a76-60d6-4523-ad1f-b15c152781c1_11zon.webp', alt: 'Отзыв клиента 8' },
  { id: 9, img: '/imageComments/7001174d-45e9-4eed-ae39-6fd50579575f_11zon.webp', alt: 'Отзыв клиента 9' },
  { id: 10, img: '/imageComments/f59a2676-c3da-42c2-8107-620c4793a040_11zon.webp', alt: 'Отзыв клиента 10' },
  { id: 11, img: '/imageComments/fda380bb-49bf-487d-9196-2d17ed57ffc5_11zon.webp', alt: 'Отзыв клиента 11' },
];

export function Reviews(): React.ReactNode {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="reviews" className="bg-white py-5">
      {/* Ограничиваем максимальную ширину всей секции, чтобы на ПК слайды не расползались */}
      <Container className="position-relative px-4 px-md-5" style={{ maxWidth: '1100px' }}>
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">
            Отзывы клиентов
          </h2>
          <p className="text-muted mx-auto lh-sm small" style={{ maxWidth: '600px' }}>
            За 15 лет у нас накопилось огромное количество положительных отзывов, вот некоторые из них
          </p>
        </div>

        {/* 🌟 КРУПНЫЕ СТАБИЛЬНЫЕ СТРЕЛКИ НАВИГАЦИИ ПО БОКАМ (Вынесены из слайдера) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="border-0 bg-transparent position-absolute start-0 top-50 translate-middle-y z-3 d-none d-sm-block reviews-arrow-btn"
          aria-label="Предыдущий отзыв"
        >
          ‹
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y z-3 d-none d-sm-block reviews-arrow-btn"
          aria-label="Следующий отзыв"
        >
          ›
        </button>

        <div className="reviews-slider-wrapper mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            onBeforeInit={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            pagination={{ 
              clickable: true,
              el: '.reviews-custom-pagination'
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {reviewsData.map((review: ReviewItem) => (
              <SwiperSlide key={review.id}>
                {/* Обертка центрирует карточку, не давая ей растягиваться на широких мониторах */}
                <div className="d-flex justify-content-center w-100">
                  <div className="review-card-wrapper bg-white border rounded overflow-hidden shadow-sm">
                    <img
                      src={review.img}
                      alt={review.alt}
                      className="w-100 h-100 review-screenshot-img"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Точки пагинации */}
        <div className="reviews-custom-pagination d-flex justify-content-center gap-2 mt-4" />

      </Container>
    </section>
  );
}