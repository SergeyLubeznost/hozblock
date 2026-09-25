"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

export function Footer() {
  return (
    // Используем py-4 или py-5 для сохранения таких же вертикальных отступов, как в хедере
    <footer className="bg-white py-5 border-top shadow-sm mt-auto">
      <Container>
        <Row className="gy-4 justify-content-between">
          {/* Блок 1: Логотип и меню навигации (на ПК слева, на мобильных в стек) */}
          <Col xs={12} md={4} lg={3}>
            <div className="mb-4">
              <img
                src="/logo.svg"
                alt="Проплотник"
                height="50"
                className="d-inline-block align-top"
              />
            </div>
            {/* Вертикальное меню, как на макетах */}
            <Nav className="flex-column align-items-start">
              <NavLink
                href="#company"
                className="fw-medium text-dark ps-0 py-1"
              >
                Компания
              </NavLink>
              <NavLink
                href="#services"
                className="fw-medium text-dark ps-0 py-1"
              >
                Услуги
              </NavLink>
              <NavLink
                href="#objects"
                className="fw-medium text-dark ps-0 py-1"
              >
                Объекты
              </NavLink>
              <NavLink
                href="#reviews"
                className="fw-medium text-dark ps-0 py-1"
              >
                Отзывы
              </NavLink>
              <NavLink
                href="#callback"
                className="fw-medium text-dark ps-0 py-1"
              >
                Оставить заявку
              </NavLink>
            </Nav>
          </Col>

          {/* Блок 2: Часы работы, Телефон и Адрес (Центральная колонка на планшетах и ПК) */}
          <Col xs={12} md={5} lg={5}>
            <div className="mb-4">
              <span
                className="fw-medium d-block mb-1"
                style={{ color: "#DA8402" }}
              >
                Ежедневно с 9.00-19.00
              </span>
              <a
                href="#callback-modal"
                className="text-muted text-decoration-none d-block small mb-2"
              >
                Заказать обратный звонок
              </a>
              <a
                href="tel:+78124494645"
                className="fs-4 fw-bold d-block text-decoration-none"
                style={{ color: "#DA8402" }}
              >
                +7 (812) 449-46-45
              </a>
            </div>

            <div className="mt-4">
              <span
                className="fw-semibold d-block mb-2 small"
                style={{ color: "#DA8402" }}
              >
                Наш адрес:
              </span>
              <p className="text-dark mb-0 small lh-sm">
                Ленинградская обл., Всеволожский р-н., д.Вартемяги,
                <br />
                Приозерское шоссе, 115
                <br />
                <span className="text-muted">
                  (съезд с КАД возле МЕГА Парнас или Осиновая Роща).
                </span>
              </p>
            </div>
          </Col>

          {/* Блок 3: Социальные сети (На ПК справа, на планшетах переносится) */}
          <Col
            xs={12}
            md={3}
            lg={3}
            className="d-flex flex-column align-items-start align-items-md-end"
          >
            <div className="text-start text-md-end">
              <span className="fw-medium d-block mb-2 text-dark">
                Наши соц. сети:
              </span>
              {/* Ряд иконок */}
              <div className="d-flex gap-2 justify-content-start justify-content-md-end">
                <a href="https://wa.me" target="_blank" rel="noreferrer">
                  <img
                    src="/Maxlogo.svg"
                    alt="Max"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="https://vk.ru/proplotnik47" target="_blank" rel="noreferrer">
                  <img
                    src="/Group.svg"
                    alt="ВКонтакте"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="https://t.me/proplitnik" target="_blank" rel="noreferrer">
                  <img
                    src="/Group 67.svg"
                    alt="Telegram"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
