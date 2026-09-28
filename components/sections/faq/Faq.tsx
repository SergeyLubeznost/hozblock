'use client';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode; // Позволяет передавать верстку со списками внутрь ответа
}

// Тематические вопросы и ответы под ключ для производства хозблоков
const faqData: FaqItem[] = [
  {
    id: '0',
    question: 'Что включено в стоимость проекта?',
    answer: (
      <div className="text-white-50">
        <p className="fw-bold text-white mb-2">Материалы и контур:</p>
        <ul className="ps-3 mb-3 small">
          <li>Полный силовой каркас (калиброванный брус, лаги, стропильная система).</li>
          <li>Внутренняя и наружная отделка стен (имитация бруса или вагонка по выбору).</li>
          <li>Кровельное покрытие (на выбор: ондулин, металлочерепица или мягкая кровля).</li>
        </ul>
        <p className="fw-bold text-white mb-2">Монтаж и сервис:</p>
        <ul className="ps-3 mb-0 small">
          <li>Сборка строения на вашем участке профессиональной бригадой за 1–2 дня.</li>
          <li>Установка базового оконного и дверного блоков с фурнитурой.</li>
          <li>Официальная гарантия от производителя сроком до 5 лет.</li>
        </ul>
      </div>
    )
  },
  {
    id: '1',
    question: 'Что нужно подготовить к приезду строителей?',
    answer: (
      <div className="text-white-50 small">
        <p className="text-white fw-bold mb-2">Для успешного монтажа потребуется:</p>
        <ul className="ps-3 mb-0">
          <li>Обеспечить свободный подъезд грузового транспорта к участку.</li>
          <li>Подготовить и очистить пятно застройки от крупных камней, пней и деревьев.</li>
          <li>Предоставить доступ к электросети (если электричества нет, предупредите нас заранее — мы привезем генератор).</li>
        </ul>
      </div>
    )
  },
  {
    id: '2',
    question: 'Что НЕ входит в базовую стоимость?',
    answer: (
      <div className="text-white-50 small">
        <p className="text-white fw-bold mb-2">Дополнительно рассчитываются индивидуально:</p>
        <ul className="ps-3 mb-0">
          <li>Монтаж фундамента (свайный, блочный или плитный).</li>
          <li>Прокладка скрытых инженерных коммуникаций (электрика, водоснабжение, канализация).</li>
          <li>Покраска фасада защитными составами и антисептирование скрытых элементов каркаса.</li>
        </ul>
      </div>
    )
  },
  {
    id: '3',
    question: 'Возможно ли переделать типовой проект под мои размеры?',
    answer: (
      <p className="text-white-50 small mb-0">
        Да, конечно! Мы предлагаем бесплатную адаптацию любого типового проекта под нужды вашего участка. Наши штатные архитекторы могут изменить общую площадь, перенести перегородки, добавить дополнительные окна, двери или пристроить навес/террасу. Любые изменения детально фиксируются в техническом задании перед производством.
      </p>
    )
  }
];

// Кастомный компонент заголовка для стилизации оранжевой галочки и черного фона
interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: string;
  activeKey: string | null;
}

function CustomToggle({ children, eventKey, activeKey }: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeKey === eventKey;

  return (
    <div
      onClick={decoratedOnClick}
      className="faq-trigger-header d-flex justify-content-between align-items-center px-4 py-3"
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <span className="fs-5 fw-bold text-white lh-sm">{children}</span>
      {/* Кастомная оранжевая стрелочка, которая плавно переворачивается */}
      <span 
        className="faq-arrow" 
        style={{ transform: isCurrentEventKey ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        ▼
      </span>
    </div>
  );
}

export function Faq(): React.ReactNode {
  // Отслеживаем активную открытую вкладку для анимации стрелочек
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-white py-5">
      <Container style={{ maxWidth: '840px' }}>
        
        {/* Главный заголовок секции */}
        <h2 className="display-5 fw-bold text-dark mb-5 text-center">
          FAQ
        </h2>

        {/* Компонент аккордеона */}
        <Accordion 
          activeKey={activeKey} 
          onSelect={(key) => setActiveKey(key as string | null)}
          className="d-flex flex-column gap-3"
        >
          {faqData.map((item: FaqItem) => (
            <div key={item.id} className="faq-item-wrapper rounded overflow-hidden shadow-sm">
              
              {/* Шапка вопроса с кастомным переключателем */}
              <CustomToggle eventKey={item.id} activeKey={activeKey}>
                {item.question}
              </CustomToggle>

              {/* Выпадающее тело ответа */}
              <Accordion.Collapse eventKey={item.id}>
                <div className="faq-body-content px-4 pb-4 pt-2">
                  {item.answer}
                </div>
              </Accordion.Collapse>

            </div>
          ))}
        </Accordion>

      </Container>
    </section>
  );
}
