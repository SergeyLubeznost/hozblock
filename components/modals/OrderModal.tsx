"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface OrderModalProps {
  show: boolean;
  onHide: () => void;
  projectTitle: string;
  projectId: number;
}

interface FormDataState {
  name: string;
  phone: string;
  email: string;
  comment: string;
  agree: boolean;
  security_honey: string;
}

interface FormErrorsState {
  name?: string;
  phone?: string;
  email?: string;
  agree?: string;
}

export default function OrderModal({
  show,
  onHide,
  projectTitle,
  projectId,
}: OrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    phone: "",
    email: "",
    comment: "",
    agree: true,
    security_honey: "",
  });

  const [errors, setErrors] = useState<FormErrorsState>({});

  // Нативная надежная функция маски для СНГ номеров формата +7 (999) 123-45-67
  const formatPhoneNumber = (value: string): string => {
    // Вытаскиваем только чистые цифры из инпута
    const digits = value.replace(/\D/g, "");

    // Если пользователь стирает всё, очищаем поле полностью
    if (!digits.length) return "";

    // Обработка первой цифры (автоматически приводим к 7)
    let cleaned = digits;
    if (cleaned[0] === "7" || cleaned[0] === "8") {
      cleaned = cleaned.substring(1);
    }

    // Пошагово собираем маску по длине введенных цифр
    let result = "+7 ";
    if (cleaned.length > 0) {
      result += `(${cleaned.substring(0, 3)}`;
    }
    if (cleaned.length >= 4) {
      result += `) ${cleaned.substring(3, 6)}`;
    }
    if (cleaned.length >= 7) {
      result += `-${cleaned.substring(6, 8)}`;
    }
    if (cleaned.length >= 9) {
      result += `-${cleaned.substring(8, 11)}`;
    }

    return result;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } else if (name === "phone") {
      // Применяем маску к вводимому значению номера телефона
      const maskedValue = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: maskedValue }));
      setErrors((prev) => ({ ...prev, phone: undefined }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrorsState = {};

    if (formData.security_honey !== "") return false;

    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }

    // Длина полностью заполненной валидной маски ровно 18 символов
    if (!formData.phone.trim() || formData.phone.length < 18) {
      newErrors.phone = "Неверный формат. Пример: +7 (999) 123-45-67";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Неверный формат email адреса";
      }
    }

    if (!formData.agree) {
      newErrors.agree = "Необходимо согласие на обработку данных";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const sanitize = (text: string) =>
      text.replace(
        /[&<>"']/g,
        (m) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
          })[m] || m,
      );

    const cleanPayload = {
      projectTitle,
      projectId,
      name: sanitize(formData.name),
      phone: sanitize(formData.phone),
      email: sanitize(formData.email),
      comment: sanitize(formData.comment),
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Защищенные экранированные данные отправлены:", cleanPayload);

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setSubmitSuccess(null);
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="rounded-4 border-0 p-2 p-md-4 shadow-lg"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold fs-3 text-dark">
          Заказ товара
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-2">
        <p className="text-muted small mb-4">
          Вы заказываете:{" "}
          <strong style={{ color: "#DA8402" }}>{projectTitle}</strong>
        </p>

        {submitSuccess === true ? (
          <div className="text-center py-4">
            <span className="fs-1">🎉</span>
            <h4 className="fw-bold text-success mt-2">
              Заявка успешно принята!
            </h4>
            <p className="text-muted small mt-2">
              Наш менеджер свяжется с вами в ближайшее время.
            </p>
            <Button
              onClick={handleClose}
              className="border-0 text-white mt-3 px-4 rounded-pill"
              style={{ backgroundColor: "#DA8402" }}
            >
              Закрыть окно
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="security_honey"
              value={formData.security_honey}
              onChange={handleInputChange}
              style={{ display: "none" }}
              autoComplete="off"
            />

            <Row className="g-3">
              {/* Поле: Имя */}
              <Col xs={12} md={6}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleInputChange}
                    isInvalid={!!errors.name}
                    className="py-2.5 rounded-3 border-light-subtle"
                    style={{ fontSize: "14px" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Поле: Номер телефона с интерактивной маской */}
              <Col xs={12} md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="+7 (999) 123-45-67 *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    isInvalid={!!errors.phone}
                    className="py-2.5 rounded-3 border-light-subtle"
                    style={{ fontSize: "14px" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Поле: Email */}
              <Col xs={12}>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Ваш e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                    className="py-2.5 rounded-3 border-light-subtle"
                    style={{ fontSize: "14px" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Поле: Текстовый Комментарий — СВОБОДНЫЙ ДЛЯ ВВОДА */}
              <Col xs={12}>
                <Form.Group controlId="formComment">
                  <Form.Control
                    as="textarea"
                    name="comment"
                    rows={3}
                    placeholder="Ваш вопрос или комментарий к заказу"
                    value={formData.comment}
                    onChange={handleInputChange} // Передаем обработчик, чтобы поле стало изменяемым
                    className="rounded-3 border-light-subtle text-dark"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>
              </Col>
              {/* Чекбокс */}
              <Col xs={12}>
                <Form.Group controlId="formAgree">
                  <Form.Check
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    isInvalid={!!errors.agree}
                    label={
                      <span
                        className="text-muted"
                        style={{ fontSize: "11px", lineHeight: "1.3" }}
                      >
                        Я согласен с обработкой моих персональных данных в
                        соответствии с{" "}
                        <a
                          href="#"
                          className="text-decoration-underline text-dark fw-medium"
                        >
                          политикой конфиденциальности
                        </a>
                      </span>
                    }
                    feedback={errors.agree}
                    feedbackType="invalid"
                  />
                </Form.Group>
              </Col>

              {/* Кнопка отправки формы */}
              <Col xs={12} className="mt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100 border-0 fw-bold py-3 text-white text-uppercase"
                  style={{
                    backgroundColor: "#DA8402",
                    borderRadius: "30px",
                    fontSize: "15px",
                  }}
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
              </Col>
            </Row>
          </Form>
        )}

        {/* Вывод ошибки при сбое отправки */}
        {submitSuccess === false && (
          <p className="text-danger small text-center mt-3 mb-0">
            Ошибка отправки запроса. Пожалуйста, попробуйте еще раз.
          </p>
        )}

        {/* Информационный текст под формой */}
        <p
          className="text-muted text-center mt-4 mb-0"
          style={{ fontSize: "11px", lineHeight: "1.4" }}
        >
          После отправки формы, мы свяжемся с Вами для уточнения деталей заказа.
        </p>
      </Modal.Body>
    </Modal>
  );
}
