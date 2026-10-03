"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ProjectCard } from "@/components/data/data";
import OrderModal from "@/components/modals/OrderModal";

interface ProjectDetailClientProps {
  project: ProjectCard;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  // Управление стейтом активной вкладки
  const [activeTab, setActiveTab] = useState<string>("description");
  // Оставляем только один логический стейт: открыто окно или закрыто
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <main
      className="bg-light min-vh-100 pb-4"
      style={{
        // Адаптивный отступ: на мобилках меньше (70px), на компьютерах больше (115px)
        paddingTop: "calc(45px + 2vw)",
      }}
    >
      <Container className="bg-white rounded shadow-sm p-3 p-md-5">
        {/* 1. Адаптивные и компактные хлебные крошки */}
        <nav aria-label="breadcrumb" className="mb-3 mb-md-4 overflow-hidden">
          <ol
            className="breadcrumb small m-0 flex-nowrap align-items-center"
            style={{
              background: "transparent",
              padding: 0,
              fontSize: "13px",
              whiteSpace: "nowrap",
              overflowX: "auto", // Позволяет скроллить крошки пальцем, если название очень длинное
              WebkitOverflowScrolling: "touch",
            }}
          >
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none text-muted">
                Главная
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                href="/#catalog-grid"
                className="text-decoration-none text-muted"
              >
                Каталог
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-dark fw-medium text-truncate"
              aria-current="page"
              style={{ maxWidth: "160px" }}
            >
              {project.title}
            </li>
          </ol>
        </nav>

        {/* 2. Адаптивный заголовок (Уменьшен на мобильных, крупный на ПК) */}
        <h1
          className="fw-bold text-dark mb-3 d-md-none"
          style={{ fontSize: "20px", lineHeight: "1.2" }}
        >
          {project.title}
        </h1>

        <Row className="g-4 mb-4 mb-md-5">
          <Col xs={12} md={6} lg={7}>
            <div
              className="position-relative overflow-hidden rounded border bg-light d-flex align-items-center justify-content-center"
              style={{ minHeight: "300px", maxHeight: "480px" }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* Правая колонка: Спецификации преимуществ и покупка */}
          <Col
            xs={12}
            md={6}
            lg={5}
            className="d-flex flex-column justify-content-between"
          >
            <div>
              {/* Десктопный заголовок */}
              <h1 className="fs-2 fw-bold text-dark d-none d-md-block mb-2">
                {project.title}
              </h1>
              <p className="text-muted mb-4 small" style={{ fontSize: "14px" }}>
                {project.subtitle}
              </p>

              {/* Технические преимущества с макета */}
              <div
                className="bg-light p-3 rounded mb-4 border-start border-warning border-3"
                style={{ fontSize: "13.5px" }}
              >
                <div className="d-flex align-items-start mb-2">
                  <span className="me-2 text-warning">☀️</span>
                  <div>
                    <strong>Защита от осадков:</strong> до 2 м снега, ветра до
                    12 баллов
                  </div>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <span className="me-2 text-warning">🧱</span>
                  <div>
                    <strong>Крепкие стены:</strong> поддержка навесных доп.
                    систем хранения
                  </div>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <span className="me-2 text-warning">🔧</span>
                  <div>
                    <strong>Сборно-разборная конструкция</strong> за пару часов
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <span className="me-2 text-warning">🪵</span>
                  <div>
                    <strong>Материалы:</strong> пиломатериал хвойных пород, сорт
                    1-2
                  </div>
                </div>
              </div>

              {/* Мини-таблица габаритов */}
              <Row className="g-2 text-center mb-4">
                <Col xs={6}>
                  <div className="p-2 border rounded bg-light">
                    <span
                      className="text-muted d-block"
                      style={{ fontSize: "11px" }}
                    >
                      Размер (ДхШхВ):
                    </span>
                    <strong className="text-dark small">{project.size}</strong>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="p-2 border rounded bg-light">
                    <span
                      className="text-muted d-block"
                      style={{ fontSize: "11px" }}
                    >
                      Вес строения:
                    </span>
                    <strong className="text-dark small">
                      {project.weight}
                    </strong>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Расчет цены и кнопка заказа */}
            <div className="border-top pt-3 mt-auto">
              <div className="d-flex align-items-baseline justify-content-between mb-3">
                <div>
                  <span className="text-muted small d-block">
                    Итоговая стоимость:
                  </span>
                  <span className="fs-2 fw-bold text-dark">
                    {project.price?.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <span className="text-success small fw-semibold">
                  Есть рассрочка
                </span>
              </div>

              <Button
                className="w-100 border-0 fw-bold py-3 text-white text-uppercase"
                onClick={() => setModalOpen(true)}
                style={{
                  backgroundColor: "#DA8402",
                  borderRadius: "6px",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                Оставить заявку на объект
              </Button>
            </div>
          </Col>
        </Row>

        {/* Вкладки (Tabs Navigation) */}
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || "description")}
          className="mb-4"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="description"
              className={`fw-medium px-4 ${activeTab === "description" ? "text-dark fw-bold border-bottom-0" : "text-muted"}`}
            >
              Описание
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="specs"
              className={`fw-medium px-4 ${activeTab === "specs" ? "text-dark fw-bold border-bottom-0" : "text-muted"}`}
            >
              Характеристики
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Динамическое наполнение контента вкладок */}
        <div className="tab-content py-1">
          {activeTab === "description" && (
            <div className="lh-base text-dark" style={{ fontSize: "15px" }}>
              <p className="fw-medium text-secondary mb-3">
                {project.descriptionText.intro}
              </p>
              <h5 className="fw-bold mt-4 mb-2" style={{ color: "#DA8402" }}>
                Мобильность и транспортировка
              </h5>
              <p className="text-muted">{project.descriptionText.mobility}</p>
              <h5 className="fw-bold mt-4 mb-2" style={{ color: "#DA8402" }}>
                Цикличность и долговечность
              </h5>
              <p className="text-muted mb-0">
                {project.descriptionText.durability}
              </p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="table-responsive">
              <Table
                striped
                bordered
                hover
                className="align-middle border-light mb-0"
              >
                <thead>
                  <tr className="table-dark">
                    <th
                      className="ps-3 py-2 w-50"
                      style={{ fontSize: "13.5px" }}
                    >
                      Конструктивный узел
                    </th>
                    <th
                      className="ps-3 py-2 w-50"
                      style={{ fontSize: "13.5px" }}
                    >
                      Материал / Спецификация
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.specs.map((spec, index) => (
                    <tr key={index}>
                      <td
                        className="ps-3 py-3 fw-medium text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        {spec.label}
                      </td>
                      <td
                        className="ps-3 py-3 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </Container>
       {/* КРИТИЧЕСКИЙ СТРОКА: Передаем стейт в импортированный компонент модального окна */}
      <OrderModal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        projectTitle={project.title}
        projectId={project.id}
      />
    </main>
  );
}
