"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Интерфейс для хранения строго типизированных данных полей формы
interface FormData {
  name: string;
  email: string;
  phone: string;
}

export function Contacts(): React.ReactNode {
  // Инициализируем типизированный стейт формы
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Обработчик изменения значений в полях ввода
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // В будущем здесь будет отправка через fetch() на ваш PHP-скрипт на Спринтхосте
    console.log("Данные формы для отправки на PHP:", formData);

    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "" }); // Очищаем поля после отправки
  };

  return (
    <section id="callback" className="bg-white py-5">
      <Container style={{ maxWidth: "960px" }}>
        {/* Шапка текстового блока */}
        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold text-dark mb-2">Связаться с нами</h2>
          <p className="text-muted small">
            Наши менеджеры свяжутся с вами в течение 5 минут
          </p>
        </div>

        {/* 1. БЛОК С ТЕКСТОВЫМИ КОНТАКТАМИ
            xs={6} — на мобилках делит экран 2х2 (по два элемента в ряд, как на макете 3)
            md={3} — на планшетах и ПК выстраивает все 4 элемента в одну линию (как на макетах 1 и 2) 
            Изменено: d-flex у Col контролирует центрирование боксов на мобильных устройствах */}
        <Row className="gy-4 gx-2 justify-content-center mb-5 align-items-start px-2">
          
          {/* Телефон */}
          <Col xs={6} md={3} className="d-flex justify-content-start justify-content-md-center">
            <div className="contact-item-box d-flex align-items-center gap-2">
              <div className="contact-icon-fixed d-flex align-items-center justify-content-center">
                <img src="/Phone.svg" alt="Телефон" width="24" height="24" />
              </div>
              <a
                href="tel:+78124494645"
                className="text-dark text-decoration-none fw-medium text-nowrap"
              >
                +7 (812) 449-46-45
              </a>
            </div>
          </Col>

          {/* Адрес */}
          <Col xs={6} md={3} className="d-flex justify-content-start justify-content-md-center">
            <div className="contact-item-box d-flex align-items-start gap-2">
              <div className="contact-icon-fixed d-flex align-items-center justify-content-center pt-1">
                <img src="/place.svg" alt="Адрес" width="20" height="20" />
              </div>
              <a
                href="https://yandex.com/maps/-/CXUmI6LJ"
                className="text-dark text-decoration-none fw-medium text-start"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-dark lh-sm d-block" style={{ fontSize: "12px" }}>
                  ЛО, Всеволожский р-н,
                  <br />
                  д. Вартемяги, Приозерское ш. 115
                </span>
              </a>
            </div>
          </Col>

          {/* Почта */}
          <Col xs={6} md={3} className="d-flex justify-content-start justify-content-md-center">
            <div className="contact-item-box d-flex align-items-center gap-2">
              <div className="contact-icon-fixed d-flex align-items-center justify-content-center">
                <img src="/At.svg" alt="Почта" width="24" height="24" />
              </div>
              <a
                href="mailto:pro_plotnik@mail.ru"
                className="text-dark text-decoration-none fw-medium text-nowrap"
              >
                pro_plotnik@mail.ru
              </a>
            </div>
          </Col>

          {/* Ссылка на Max */}
          <Col xs={6} md={3} className="d-flex justify-content-start justify-content-md-center">
            <div className="contact-item-box d-flex align-items-center gap-2">
              <div className="contact-icon-fixed d-flex align-items-center justify-content-center">
                <img src="/Maxlogo.svg" alt="Max" width="24" height="24" />
              </div>
              <a
                href="https://max.ru/join/gUdHBamcP7UxtDw0mSpk6c3LiWMQ9glU30EJ_GMTvg0"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none fw-medium text-nowrap"
              >
                Перейти в Max
              </a>
            </div>
          </Col>
          
        </Row>

        {/* 2. БЛОК С ФОРМОЙ ОБРАТНОЙ СВЯЗИ */}
        <div className="mx-auto" style={{ maxWidth: "580px" }}>
          <div className="bg-white border rounded p-4 p-sm-5 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-4">
                <span className="fs-1 d-block mb-3">🎉</span>
                <h4 className="fw-bold text-success mb-2">
                  Заявка успешно отправлена!
                </h4>
                <p className="text-muted small mb-0">
                  Менеджер уже подготавливает расчет и свяжется с вами в течение
                  5 минут.
                </p>
                <Button
                  variant="link"
                  className="text-warning text-decoration-none mt-3 small fw-medium"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить еще одну заявку
                </Button>
              </div>
            ) : (
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                {/* Поле: Имя */}
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                    className="py-2 px-3 contact-input-field"
                  />
                </Form.Group>

                {/* Поле: Почта */}
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите вашу почту"
                    required
                    className="py-2 px-3 contact-input-field"
                  />
                </Form.Group>

                {/* Поле: Телефон */}
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="py-2 px-3 contact-input-field"
                  />
                </Form.Group>

                {/* Фирменная оранжевая кнопка отправки */}
                <div className="text-start mt-2">
                  <Button
                    type="submit"
                    className="border-0 fw-semibold px-4 py-2 text-white contact-submit-btn"
                    style={{
                      backgroundColor: "#DA8402",
                      borderRadius: "4px",
                      fontSize: "15px",
                    }}
                  >
                    Отправить
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
