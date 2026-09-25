'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function Hero() {
  return (
    <section className="position-relative overflow-hidden w-100 d-flex align-items-center" style={{ minHeight: '85vh' }}>
      
      {/* Фоновое видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/previmage_11zon.webp"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }}
      >
        <source src="/2936215046796.webm" />
        <source src="/2936215046796.mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Затемняющий оверлей поверх видео, чтобы белый текст макета Figma легко читался */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.45)', // Корректируйте прозрачность (0.45 — это 45% затемнения)
          zIndex: 2 
        }} 
      />

      {/* Контентная сетка поверх видео (за счет zIndex: 3) */}
      <Container className="position-relative" style={{ zIndex: 3 }}>
        <Row className="py-5">
          <Col xs={12} lg={10} xl={8} className="text-white">
            
            {/* Главный заголовок из вашего макета */}
            <h1 className="display-4 fw-bold mb-3 text-white lh-sm">
              Строительство <span style={{ color: '#E19C37' }}>премиальных</span> хозблоков,<br className="d-none d-md-inline" /> 
              беседок и навесов под ключ
            </h1>
            
            <p className="lead mb-4 text-white-50 fs-5" style={{ maxWidth: '600px' }}>
              Создаем надежные и стильные строения на вашем участке по индивидуальным проектам с гарантией качества от производителя.
            </p>

            {/* Блок с кнопками */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              {/* Главная кнопка "Подробнее" в фирменном оранжевом цвете */}
              <Button 
                href="#catalog"
                className="px-4 py-3 fw-semibold border-0 text-white"
                style={{ 
                  backgroundColor: '#DA8402',
                  borderRadius: '4px'
                }}
              >
                Подробнее
              </Button>
              
              {/* Прозрачная кнопка "Заказать звонок" с белой рамкой */}
              <Button 
                variant="outline-light"
                href="#callback"
                className="px-4 py-3 fw-semibold"
                style={{ 
                  borderRadius: '4px'
                }}
              >
                Заказать звонок
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}