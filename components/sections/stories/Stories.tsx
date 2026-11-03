"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { storiesData, StoryItem } from '../../data/storiesData';

// Импорт базовых стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export function Stories() {
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
                    
                    {/* Легкий градиент и аккуратная кнопка Play по центру с вашим фирменным значком */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                         style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%)' }}>
                      <div className="bg-black bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center shadow" 
                           style={{ width: '48px', height: '48px', backdropFilter: 'blur(3px)' }}>
                        {/* Ваш фирменный оранжевый знак проигрывания в векторе */}
                        <svg 
                          xmlns="http://w3.org" 
                          viewBox="0 0 24 24" 
                          width="30" 
                          height="30" 
                          fill="none" 
                          stroke="#DA8402" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{ marginLeft: '2px' }} /* Оптическое смещение для идеального центра */
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="10 8 16 12 10 16 10 8" fill="#DA8402" />
                        </svg>
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
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-85"
          style={{ zIndex: 9999999999 }} // Экстремальный z-index, чтобы Jivo Chat гарантированно уходил под подложку
          onClick={closeStory}
        >
          {/* Контейнер-обертка, удерживающий кнопку и плеер в безопасной мобильной зоне */}
          <div 
            className="position-relative w-100 mh-100 p-3 d-flex flex-column align-items-center"
            style={{ maxWidth: '420px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия (крестик) */}
            <button 
              className="btn d-flex align-items-center justify-content-center text-white mb-2" 
              onClick={closeStory}
              aria-label="Закрыть"
              style={{ 
                border: 'none', 
                background: 'rgba(255, 255, 255, 0.2)', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                backdropFilter: 'blur(4px)',
                alignSelf: 'flex-end' // Всегда сверху справа прямо над видео
              }}
            >
              <svg xmlns="http://w3.org" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>

            {/* Само вертикальное видео */}
            <div className="w-100" style={{ height: '75vh' }}>
              <video 
                src={activeVideo} 
                className="w-100 h-100 rounded-4 shadow-lg object-fit-cover"
                controls 
                autoPlay 
                playsInline
              />
            </div>
          </div>
        </div>
      )}

      {/* Стилизация анимаций */}
      <style jsx global>{`
        .card-story-rectangular:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(218, 132, 2, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
