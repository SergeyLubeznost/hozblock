'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface StepItem {
  number: number;
  title: string;
  desc: string;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    title: 'Проектирование',
    desc: 'При разработке проекта дома учитываются все пожелания клиента',
  },
  {
    number: 2,
    title: 'Строительство',
    desc: 'Фундамент, стены, окна, двери и кровля',
  },
  {
    number: 3,
    title: 'Монтаж внутренних систем',
    desc: 'Канализация и система отопления',
  },
  {
    number: 4,
    title: 'Отделочные работы',
    desc: 'Интерьер проекта',
  },
];

export function Steps(): React.ReactNode {
  return (
    <section id="steps" className="bg-white py-5 overflow-hidden">
      <Container>
        {/* Заголовки блока */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Этапы реализации
          </h2>
          <p className="text-muted mx-auto small" style={{ maxWidth: '600px' }}>
            Процесс строительства проекта можно разделить на следующие этапы
          </p>
        </div>

        {/* 1. ВЕРСИЯ ДЛЯ ПК (Начиная с разрешения 992px -> d-none d-lg-block) */}
        <div className="d-none d-lg-block">
          <div className="d-flex justify-content-between position-relative pt-3">
            {/* Единственная ровная линия-подложка для ПК */}
            <div 
              className="position-absolute start-0 end-0" 
              style={{ height: '2px', backgroundColor: '#DA8402', top: '34px', zIndex: 1 }} 
            />
            
            {stepsData.map((step: StepItem) => (
              <div key={step.number} className="text-center position-relative" style={{ width: '22%', zIndex: 2 }}>
                <div className="step-number-circle d-flex align-items-center justify-content-center mx-auto mb-3 fw-semibold">
                  {step.number}
                </div>
                <h3 className="fs-6 fw-bold text-dark mb-2">{step.title}</h3>
                <p className="text-muted small lh-sm px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ВЕРСИЯ ДЛЯ МОБИЛЬНЫХ И ПЛАНШЕТОВ (До 992px -> d-block d-lg-none) */}
        <div className="d-block d-lg-none">
          {/* Первая строка матрицы (Этапы 1 и 2) */}
          <Row className="mb-5 text-center justify-content-center">
            {stepsData.slice(0, 2).map((step: StepItem, idx: number) => (
              <Col xs={6} sm={5} key={step.number} className="position-relative">
                {/* Соединительная линия рисуется строго между 1 и 2 кружком */}
                {idx === 0 && <div className="step-mobile-connector" />}
                <div className="step-number-circle d-flex align-items-center justify-content-center mx-auto mb-3 fw-semibold">
                  {step.number}
                </div>
                <h3 className="fs-6 fw-bold text-dark mb-2 lh-sm">{step.title}</h3>
                <p className="text-muted small lh-sm">{step.desc}</p>
              </Col>
            ))}
          </Row>

          {/* Вторая строка матрицы (Этапы 3 и 4) */}
          <Row className="text-center justify-content-center">
            {stepsData.slice(2, 4).map((step: StepItem, idx: number) => (
              <Col xs={6} sm={5} key={step.number} className="position-relative">
                {/* Соединительная линия рисуется строго между 3 и 4 кружком */}
                {idx === 0 && <div className="step-mobile-connector" />}
                <div className="step-number-circle d-flex align-items-center justify-content-center mx-auto mb-3 fw-semibold">
                  {step.number}
                </div>
                <h3 className="fs-6 fw-bold text-dark mb-2 lh-sm">{step.title}</h3>
                <p className="text-muted small lh-sm">{step.desc}</p>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
}
