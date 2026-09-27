'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Описываем строгий интерфейс для элемента преимущества
interface AdvantageItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const advantagesData: AdvantageItem[] = [
  {
    id: 1,
    icon: '/Vector.svg',
    title: 'Гарантия и качество',
    text: 'Качественные материалы, профессиональные монтажники и строгий контроль на всех этапах производства.',
  },
  {
    id: 2,
    icon: '/Vector1.svg',
    title: 'Безопасно и надежно',
    text: 'Используем сертифицированные крепежи, надежную кровлю и экологичные пропитки, безопасные для детей и домашних животных.',
  },
  {
    id: 3,
    icon: '/Vector2.svg',
    title: 'Соблюдение сроков',
    text: 'Полный цикл под ключ за 10 дней. Сами привезем материалы, соберем конструкцию и уберем за собой весь строительный мусор.',
  },
];

export function Advantages(): React.ReactNode {
  return (
    // Задаем фирменный фоновый цвет через встроенный инлайн-стиль, цвет текста белый (text-white)
    <section id="advantages" className="text-white py-5" style={{ backgroundColor: '#E19C37' }}>
      <Container className="py-3">
        
        {/* Заголовок блока */}
        <h2 className="display-6 fw-bold mb-5 text-start text-white">
          Преимущества
        </h2>

        {/* Сетка: gy-5 задает вертикальные отступы между блоками на мобильных устройствах */}
        <Row className="gy-5 justify-content-between">
          {advantagesData.map((item: AdvantageItem) => (
            // xs={12} — на мобилках на всю ширину (1 колонка)
            // md={4} — на планшетах и ПК делят экран поровну на 3 колонки
            <Col key={item.id} xs={12} md={4} className="text-start">
              
              {/* Обертка для иконки с фиксированной высотой, чтобы блоки стояли ровно */}
              <div className="mb-3 d-flex align-items-center" style={{ height: '45px' }}>
                <img
                  src={item.icon}
                  alt={item.title}
                  width="40"
                  height="40"
                  className="img-fluid"
                />
              </div>

              {/* Заголовок преимущества */}
              <h3 className="fs-5 fw-bold mb-3 text-white">
                {item.title}
              </h3>

              {/* Описание преимущества с легкой прозрачностью для лучшей читаемости */}
              <p className="mb-0 text-white-50 small lh-base" style={{ fontSize: '14.5px', textAlign: 'left' }}>
                {item.text}
              </p>
              
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
