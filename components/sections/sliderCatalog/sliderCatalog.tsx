'use client';

import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';

interface ProjectSpec {
  label: string;
  value: string;
}

interface ProjectCard {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  specs: ProjectSpec[];
}

const catalogProjects: ProjectCard[] = [
  {
    id: 1,
    img: '/hozblockobj_11zon.webp',
    title: 'Скандинавский уют',
    subtitle: 'для любителей минимализма.',
    specs: [
      { label: 'Основание пола', value: 'брус 100х150мм естественной влажности сорт 1' },
      { label: 'Лаги пола', value: 'доска 40х100мм с шагом 600мм естественной влажности сорт 1' },
      { label: 'Черновой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Чистовой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Каркас стен', value: 'брус 50х50мм естественной влажности сорт 2' },
      { label: 'Наружная отделка', value: 'вагонка сорт С' },
      { label: 'Утепление', value: '50мм каменной ватой Роквул + ветрозащита + пароизоляция' },
      { label: 'Внутренняя отделка', value: 'вагонка сорта С' },
      { label: 'Окно', value: '800х800мм деревянное открывающееся, 1шт. в душе и форточка 400х500мм в туалете, 1шт.' },
      { label: 'Двери', value: 'деревянные каркасные, обшиты вагонкой, с проушинами под навесной замок' },
      { label: 'Стропила', value: 'доска 40х100мм с шагом 600мм сорт 1' },
      { label: 'Обрешетка кровли', value: 'доска 25х150мм сорт 2' },
      { label: 'Кровельное покрытие', value: 'ондулин' },
      { label: 'Свесы кровли', value: 'по 10см с каждой стороны' },
    ]
  },
  {
    id: 2,
    img: '/navecobj_11zon.webp',
    title: 'Премиум-защита',
    subtitle: 'акцент на надежности для авто.',
    specs: [
      { label: 'Основание пола', value: 'брус 100х150мм естественной влажности сорт 1' },
      { label: 'Лаги пола', value: 'доска 40х100мм с шагом 600мм естественной влажности сорт 1' },
      { label: 'Черновой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Чистовой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Каркас стен', value: 'брус 50х50мм естественной влажности сорт 2' },
      { label: 'Наружная отделка', value: 'вагонка сорт С' },
      { label: 'Утепление', value: '50мм каменной ватой Роквул + ветрозащита + пароизоляция' },
      { label: 'Внутренняя отделка', value: 'вагонка сорта С' },
      { label: 'Окно', value: '800х800мм деревянное открывающееся, 1шт. в душе и форточка 400х500мм в туалете, 1шт.' },
      { label: 'Двери', value: 'деревянные каркасные, обшиты вагонкой, с проушинами под навесной замок' },
      { label: 'Стропила', value: 'доска 40х100мм с шагом 600мм сорт 1' },
      { label: 'Обрешетка кровли', value: 'доска 25х150мм сорт 2' },
      { label: 'Кровельное покрытие', value: 'ондулин' },
      { label: 'Свесы кровли', value: 'по 10см с каждой стороны' },
    ]
  },
  {
    id: 3,
    img: '/becedkaobj_11zon.webp',
    title: 'Терраса Loft',
    subtitle: 'подчеркивает современный деревянный стиль.',
    specs: [
      { label: 'Основание пола', value: 'брус 100х150мм естественной влажности сорт 1' },
      { label: 'Лаги пола', value: 'доска 40х100мм с шагом 600мм естественной влажности сорт 1' },
      { label: 'Черновой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Чистовой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Каркас стен', value: 'брус 50х50мм естественной влажности сорт 2' },
      { label: 'Наружная отделка', value: 'вагонка сорт С' },
      { label: 'Утепление', value: '50мм каменной ватой Роквул + ветрозащита + пароизоляция' },
      { label: 'Внутренняя отделка', value: 'вагонка сорта С' },
      { label: 'Окно', value: '800х800мм деревянное открывающееся, 1шт. в душе и форточка 400х500мм в туалете, 1шт.' },
      { label: 'Двери', value: 'деревянные каркасные, обшиты вагонкой, с проушинами под навесной замок' },
      { label: 'Стропила', value: 'доска 40х100мм с шагом 600мм сорт 1' },
      { label: 'Обрешетка кровли', value: 'доска 25х150мм сорт 2' },
      { label: 'Кровельное покрытие', value: 'ондулин' },
      { label: 'Свесы кровли', value: 'по 10см с каждой стороны' },
    ]
  },
  {
    id: 4,
    img: '/minidomobj_11zon.webp',
    title: 'Архитектура будущего',
    subtitle: 'фокус на беседке и стильной плоской кровле.',
    specs: [
      { label: 'Основание пола', value: 'брус 100х150мм естественной влажности сорт 1' },
      { label: 'Лаги пола', value: 'доска 40х100мм с шагом 600мм естественной влажности сорт 1' },
      { label: 'Черновой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Чистовой пол', value: 'доска 25х150мм естественной влажности сорт 2' },
      { label: 'Каркас стен', value: 'брус 50х50мм естественной влажности сорт 2' },
      { label: 'Наружная отделка', value: 'вагонка сорт С' },
      { label: 'Утепление', value: '50мм каменной ватой Роквул + ветрозащита + пароизоляция' },
      { label: 'Внутренняя отделка', value: 'вагонка сорта С' },
      { label: 'Окно', value: '800х800мм деревянное открывающееся, 1шт. в душе и форточка 400х500мм в туалете, 1шт.' },
      { label: 'Двери', value: 'деревянные каркасные, обшиты вагонкой, с проушинами под навесной замок' },
      { label: 'Стропила', value: 'доска 40х100мм с шагом 600мм сорт 1' },
      { label: 'Обрешетка кровли', value: 'доска 25х150мм сорт 2' },
      { label: 'Кровельное покрытие', value: 'ондулин' },
      { label: 'Свесы кровли', value: 'по 10см с каждой стороны' },
    ]
  }
];


export function CatalogSwiper(): React.ReactNode {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="catalog" className="bg-white py-5">
      {/* Контейнеру задаем position-relative, чтобы контролировать абсолютные координаты внутри */}
      <Container style={{ maxWidth: '800px' }} className="position-relative">
        
        {/* 🌟 ИСПРАВЛЕНО: Кнопки навигации вынесены в отдельный независимый слой.
            Они позиционируются СНИЗУ контейнера, поднимаясь вверх ровно к строке заголовка. */}
        <div 
          className="catalog-arrows-container"
          style={{ 
            position: 'absolute',
            right: '12px', 
            // Прижимаем к низу контейнера и поднимаем наверх, пропуская всю высоту спецификации
            bottom: '100%', 
            zIndex: 10,
          }}
        >
          <div className="d-flex gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="border-0 bg-transparent p-0 fs-4 catalog-nav-btn"
              style={{ color: '#DA8402', cursor: 'pointer', lineHeight: 1 }}
              aria-label="Предыдущий проект"
            >
              ←
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="border-0 bg-transparent p-0 fs-4 catalog-nav-btn"
              style={{ color: '#DA8402', cursor: 'pointer', lineHeight: 1 }}
              aria-label="Следующий проект"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          className="w-100"
        >
          {catalogProjects.map((project: ProjectCard) => (
            <SwiperSlide key={project.id}>
              <div className="catalog-card-wrapper">
                
                {/* 1. Главная картинка хозблока */}
                <div className="catalog-img-container mb-4 overflow-hidden rounded shadow-sm">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid w-100 h-100 object-cover"
                  />
                </div>

                {/* 2. Блок заголовка */}
                <div className="mb-3 mt-2 pe-5 title-container-adaptive">
                  <h3 className="fs-4 text-dark mb-0">
                    <span className="fw-bold">{project.title}</span> — {project.subtitle}
                  </h3>
                </div>

                {/* 3. Список подробных технических характеристик */}
                <div className="catalog-specs-list pt-2">
                  {project.specs.map((spec: ProjectSpec, idx: number) => (
                    <div 
                      key={idx} 
                      className="d-flex flex-column flex-sm-row justify-content-start align-items-start mb-2 pb-2 border-bottom border-light"
                      style={{ fontSize: '14px', lineHeight: '1.4' }}
                    >
                      <span className="fw-bold text-dark text-nowrap pe-2" style={{ minWidth: '170px' }}>
                        {spec.label} :
                      </span>
                      <span className="text-muted">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
}
