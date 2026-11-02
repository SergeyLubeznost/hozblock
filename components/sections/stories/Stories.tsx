"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { storiesData, StoryItem } from '../../data/storiesData';

// Импорт базовых стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export  function Stories() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openStory = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeStory = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container">
        
        {/* Красивый структурированный заголовок секции */}
        <div className="mb-5 text-center text-md-start">
          <h2 className="display-6 fw-bold text-dark mb-2 position-relative d-inline-block">
            Истории компании
            <span 
              className="position-absolute bottom-0 start-0 w-50" 
              style={{ height: '4px', transform: 'translateY(8px)', backgroundColor: '#DA8402' }}
            ></span>
          </h2>
          <p className="text-muted mt-3" style={{ maxWidth: '600px' }}>
            Посмотрите процесс создания премиальных построек изнутри. Живые видео с объектов, отзывы и этапы производства.
          </p>
        </div>

        {/* Слайдер со сториз */}
        <div className="position-relative px-md-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2.3} // Удобный недокрут для мобилок
            navigation={false}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="stories-swiper p-2"
          >
            {storiesData.map((story: StoryItem) => (
              <SwiperSlide key={story.id}>
                <div className="d-flex flex-column align-items-center text-center">
                  
                  {/* Прямоугольная карточка-превью (как ВКонтакте / Instagram) */}
                  <div 
                    className="position-relative overflow-hidden rounded-4 shadow-sm w-100 card-story-rectangular"
                    onClick={() => openStory(story.videoUrl)}
                    style={{ 
                      cursor: 'pointer', 
                      transition: 'all 0.2s ease-in-out',
                      border: '3px solid #DA8402',
                      aspectRatio: '9 / 16', // Идеальный вертикальный формат для историй
                    }}
                  >
                    {/* Чистое изображение-превью без лишнего текста внутри */}
                    <img 
                      src={story.previewImg} 
                      alt={story.title} 
                      className="img-fluid object-fit-cover w-100 h-100"
                    />
                    
                    {/* Легкий градиент и аккуратная кнопка Play в углу или по центру */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                         style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)' }}>
                      <div className="bg-black bg-opacity-40 rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '44px', height: '44px', backdropFilter: 'blur(2px)' }}>
                        <i className="bi bi-play-fill text-white fs-4"></i>
                      </div>
                    </div>
                  </div>

                  {/* Заголовок вынесен СНИЗУ под карточку */}
                  <span className="mt-2 text-dark fw-medium small text-truncate w-100 px-1">
                    {story.title}
                  </span>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Попап плеера */}
      {activeVideo && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75"
          style={{ zIndex: 1050 }}
          onClick={closeStory}
        >
          <button 
            className="btn position-absolute top-0 end-0 m-3 text-white fs-1" 
            onClick={closeStory}
            style={{ border: 'none', background: 'none' }}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <div 
            className="position-relative w-100 mh-100 p-2 d-flex justify-content-center"
            style={{ maxWidth: '420px', height: '85vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={activeVideo} 
              className="w-100 h-100 rounded-4 shadow-lg object-fit-cover"
              controls 
              autoPlay 
              playsInline
            />
          </div>
        </div>
      )}

      {/* Стилизация стрелок навигации Swiper */}
      <style jsx global>{`
        .stories-swiper .swiper-button-next,
        .stories-swiper .swiper-button-prev {
          color: #DA8402 !important;
          background: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: transform 0.2s ease;
        }
        .stories-swiper .swiper-button-next:after,
        .stories-swiper .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: bold;
        }
        .stories-swiper .swiper-button-next:hover,
        .stories-swiper .swiper-button-prev:hover {
          transform: scale(1.1);
        }
        .card-story-rectangular:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(218, 132, 2, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
