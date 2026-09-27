"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";

// Импортируем базовые стили Swiper
import "swiper/css";

// 1. Описываем строгий интерфейс для данных нашего объекта
interface RealizedObject {
  id: number;
  img: string;
  title: string;
  desc: string;
}

// 2. Явно типизируем массив данных, которые в будущем придут из базы данных PHP/MySQL
const initialObjects: RealizedObject[] = [
  {
    id: 1,
    img: "/hozblockobj_11zon.webp",
    title: "Скандинавский уют",
    desc: "для любителей минимализма.",
  },
  {
    id: 2,
    img: "/navecobj_11zon.webp",
    title: "Премиум-защита",
    desc: "акцент на надежности для авто.",
  },
  {
    id: 3,
    img: "/becedkaobj_11zon.webp",
    title: "Терраса Loft",
    desc: "подчеркивает современный деревянный стиль.",
  },
  {
    id: 4,
    img: "/minidomobj_11zon.webp",
    title: "Архитектура будущего",
    desc: "фокус на беседке и стильной плоской кровле.",
  },
];

// 3. Указываем возвращаемый тип для функционального компонента
export function Objects(): React.ReactNode {
  return (
    <section id="objects" className="bg-white py-5">
      <Container>
        {/* Заголовок и подзаголовок блока */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">
            Реализованные <span style={{ color: "#DA8402" }}>объекты</span>
          </h2>
          <p
            className="text-muted mx-auto lh-sm"
            style={{ maxWidth: "500px", fontSize: "15px" }}
          >
            Это лишь небольшая часть наших работ, которыми мы особенно гордимся
          </p>
        </div>

        {/* 1. Мобильная и планшетная версия: Два слайдера один под другим (d-lg-none) */}
        <div className="d-block d-lg-none">
          {/* ВЕРХНИЙ СЛАЙДЕР: Первая половина элементов (индексы 0 и 1) */}
          <div className="mb-4">
            <Swiper
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1.15 },
                576: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
              }}
              centeredSlides={false}
              className="pb-2"
            >
              {initialObjects.slice(0, 2).map((obj: RealizedObject) => (
                <SwiperSlide key={obj.id}>
                  <div className="object-card">
                    <div className="object-img-container mb-3 overflow-hidden rounded">
                      <img
                        src={obj.img}
                        alt={obj.title}
                        className="img-fluid w-100 h-100 object-cover"
                      />
                    </div>
                    <p className="text-dark small lh-sm">
                      <span className="fw-bold">{obj.title}</span> — {obj.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* НИЖНИЙ СЛАЙДЕР: Вторая половина элементов (индексы 2 и 3) */}
          <div>
            <Swiper
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1.15 },
                576: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
              }}
              centeredSlides={false}
              className="pb-3"
            >
              {initialObjects.slice(2, 4).map((obj: RealizedObject) => (
                <SwiperSlide key={obj.id}>
                  <div className="object-card">
                    <div className="object-img-container mb-3 overflow-hidden rounded">
                      <img
                        src={obj.img}
                        alt={obj.title}
                        className="img-fluid w-100 h-100 object-cover"
                      />
                    </div>
                    <p className="text-dark small lh-sm">
                      <span className="fw-bold">{obj.title}</span> — {obj.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* 2. ПК версия: Статическая сетка 2х2 (d-none d-lg-flex) */}
        {/* ИСПРАВЛЕНО: Заменили d-md-flex на d-lg-flex, чтобы сетка не перекрывала слайдер на планшетах */}
        <Row className="d-none d-lg-flex gy-5 justify-content-center">
          {initialObjects.map((obj: RealizedObject) => (
            /* ИСПРАВЛЕНО: Убрали класс md={6}, оставив только lg={6} для контроля на больших мониторах */
            <Col key={obj.id} lg={6}>
              <div className="object-card h-100">
                <div className="object-img-container mb-3 overflow-hidden rounded">
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="img-fluid w-100 h-100 object-cover object-img-hover"
                  />
                </div>
                <p className="text-dark fs-6 lh-sm">
                  <span className="fw-bold">{obj.title}</span> — {obj.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
