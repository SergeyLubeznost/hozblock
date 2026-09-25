'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function About() {
  return (
    <section id="company" className="bg-white py-5">
      <Container>
        {/* gy-4 добавляет отступы между колонками, когда они перестраиваются на мобилке вертикально */}
        <Row className="align-items-start gy-4 justify-content-between">
          
          {/* Левая колонка: Заголовок, подзаголовок и кнопка */}
          {/* xs={12} - на мобилке на всю ширину. md={4} - на планшете занимает 4 колонки. lg={3} - на ПК */}
          <Col xs={12} md={4} lg={3} className="text-start">
            <h2 className="display-6 fw-bold text-dark mb-1">
              Компания
            </h2>
            
            <p className="fw-medium mb-4" style={{ color: '#DA8402' }}>
              15 лет на рынке
            </p>
            
            <Button
              href="#callback-modal"
              className="fw-medium text-white border-0 py-2 px-3 small-btn-adaptive"
              style={{
                backgroundColor: '#DA8402',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              Заказать обратный звонок
            </Button>
          </Col>

          {/* Правая колонка: Основной текст */}
          {/* md={8} - на планшете занимает оставшиеся 8 колонок. lg={8} - на ПК */}
          <Col xs={12} md={8} lg={8}>
            <p 
              className="text-dark mb-0 lh-base fw-medium text-about-adaptive"
              style={{ 
                fontSize: '18px',
                textAlign: 'justify' // Выравнивание по ширине, как в макете ПК
              }}
            >
              Мы предлагаем как проверенные типовые проекты премиум-класса, 
              так и проектирование эксклюзивных строений с нуля. 
              Наши архитекторы воплотят в жизнь любую вашу идею, создав 
              идеальный хозблок, навес или беседку для вашего участка. 
              Доставляем и строим по всей территории России.
            </p>
          </Col>

        </Row>
      </Container>
    </section>
  );
}