"use client";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { ProjectSpec } from "@/components/data/data";
import { ProjectCard } from "@/components/data/data";
import { catalogProjects } from "@/components/data/data";

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
                    <Link href={`/catalog/${project.id}`}>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="img-fluid w-100 h-100 object-cover catalog-grid-img"
                      />
                    </Link>
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
                    <Link href={`/catalog/${project.id}`}>
                      <Button
                        className="w-100 border-0 fw-medium py-1 py-md-2 mt-auto text-white catalog-grid-btn"
                        style={{
                          backgroundColor: "#DA8402",
                          borderRadius: "20px", // Закругленная кнопка по форме макета
                          fontSize: "13px",
                        }}
                      >
                        Подробнее
                      </Button>
                    </Link>
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
