"use client";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// 1. Используем предоставленные вами интерфейсы для строгой типизации
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
  price?: number; // Добавили необязательное поле цены для отображения на витрине
}

// Вспомогательный массив базовых спецификаций, чтобы не раздувать код дублированием
const defaultSpecs: ProjectSpec[] = [
  {
    label: "Основание пола",
    value: "брус 100х150мм естественной влажности сорт 1",
  },
  {
    label: "Лаги пола",
    value: "доска 40х100мм с шагом 600мм естественной влажности сорт 1",
  },
  {
    label: "Черновой пол",
    value: "доска 25х150мм естественной влажности сорт 2",
  },
  {
    label: "Чистовой пол",
    value: "доска 25х150мм естественной влажности сорт 2",
  },
  { label: "Каркас стен", value: "брус 50х50мм естественной влажности сорт 2" },
  { label: "Наружная отделка", value: "вагонка сорт С" },
  {
    label: "Утепление",
    value: "50мм каменной ватой Роквул + ветрозащита + пароизоляция",
  },
  { label: "Внутренняя отделка", value: "вагонка сорта С" },
  {
    label: "Окно",
    value:
      "800х800мм деревянное открывающееся, 1шт. в душе и форточка 400х500мм в туалете, 1шт.",
  },
  {
    label: "Двери",
    value:
      "деревянные каркасные, обшиты вагонкой, с проушинами под навесной замок",
  },
  { label: "Стропила", value: "доска 40х100мм с шагом 600мм сорт 1" },
  { label: "Обрешетка кровли", value: "доска 25х150мм сорт 2" },
  { label: "Кровельное покрытие", value: "ондулин" },
  { label: "Свесы кровли", value: "по 10см с каждой стороны" },
];

// 2. Генерируем массив из 16 элементов, дублируя описание и распределяя заголовки/картинки
const catalogProjects: ProjectCard[] = Array.from(
  { length: 16 },
  (_, index) => {
    const baseId = (index % 4) + 1;
    let img = "/hozblockobj_11zon.webp";
    let title = "Скандинавский уют";
    let subtitle = "для любителей минимализма.";

    if (baseId === 2) {
      img = "/navecobj_11zon.webp";
      title = "Премиум-защита";
      subtitle = "акцент на надежности для авто.";
    } else if (baseId === 3) {
      img = "/becedkaobj_11zon.webp";
      title = "Терраса Loft";
      subtitle = "подчеркивает современный деревянный стиль.";
    } else if (baseId === 4) {
      img = "/minidomobj_11zon.webp";
      title = "Архитектура будущего";
      subtitle = "фокус на беседке и стильной плоской кровле.";
    }

    return {
      id: index + 1,
      img,
      title,
      subtitle,
      specs: defaultSpecs,
      price: 96000, // Базовая цена из вашего макета
    };
  },
);

export function CatalogGrid(): React.ReactNode {
  // На ПК по умолчанию показываем 6, на мобильных/планшетах — 4.
  // Для универсальности и статического билда изначально ставим 6, управление сделаем через шаг пагинации.
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const handleShowMore = (): void => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 6, catalogProjects.length),
    );
  };

  return (
    <section id="catalog-grid" className="bg-white py-5">
      <Container>
        {/* Адаптивная сетка карточек:
            xs={6} — 2 карточки в ряд на мобильных устройствах (как на макете 3)
            md={6} — 2 карточки в ряд на планшетах (как на макете 2)
            lg={4} — 3 карточки в ряд на мониторах ПК (как на макете 1) 
            gy-4, gx-2/gx-md-4 настраивают адаптивные расстояния между карточками */}
        <Row className="gy-4 gx-2 gx-md-4 justify-content-center">
          {catalogProjects
            .slice(0, visibleCount)
            .map((project: ProjectCard) => (
              <Col key={project.id} xs={6} md={6} lg={4}>
                <div className="catalog-grid-card h-100 d-flex flex-column bg-white text-center">
                  {/* Обертка картинки товара */}
                  <div className="catalog-grid-img-wrapper mb-2 overflow-hidden rounded">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid w-100 h-100 object-cover catalog-grid-img"
                    />
                  </div>

                  {/* Текстовое описание товара */}
                  <div className="catalog-grid-info flex-grow-1 d-flex flex-column justify-content-between px-1">
                    <p className="text-dark mb-2 lh-sm catalog-grid-title">
                      <span className="fw-bold">{project.title}</span> —{" "}
                      {project.subtitle}
                    </p>

                    {/* Вывод стоимости */}
                    <div className="mb-2">
                      <span className="text-muted small catalog-grid-price-label">
                        Цена:{" "}
                      </span>
                      <span className="fw-bold text-dark catalog-grid-price-value">
                        {project.price?.toLocaleString("ru-RU")} руб
                      </span>
                    </div>

                    {/* Оранжевая кнопка "Подробнее" */}
                    <Button
                      href={`#project-${project.id}`}
                      className="w-100 border-0 fw-medium py-1 py-md-2 mt-auto text-white catalog-grid-btn"
                      style={{
                        backgroundColor: "#DA8402",
                        borderRadius: "20px", // Закругленная кнопка по форме макета
                        fontSize: "13px",
                      }}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
        </Row>

        {/* Кнопка "Показать еще" отображается только если видны не все 16 элементов */}
        {visibleCount < catalogProjects.length && (
          <div className="text-center mt-5">
            <Button
              onClick={handleShowMore}
              className="border-0 fw-semibold px-4 py-2 text-white catalog-more-btn"
              style={{
                backgroundColor: "#DA8402",
                borderRadius: "4px",
                fontSize: "15px",
              }}
            >
              Показать еще
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
