'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Offers() {
  return (
    <section id="services" className="bg-white py-5">
      <Container>
        {/* Заголовок блока */}
        <h2 className="display-6 fw-bold text-dark mb-5 text-start">
          Мы предлагаем
        </h2>

        {/* gy-4 добавляет вертикальные отступы между карточками на мобилках */}
        <Row className="gy-4 justify-content-center">
          
          {/* Карточка 1: Премиальные хозблоки */}
          {/* На мобилках order-1 (первая), на ПК order-lg-1 */}
          <Col xs={12} md={6} lg={4} className="order-1 order-lg-1">
            <div className="offer-card text-center h-100">
              <div className="offer-img-wrapper mb-3 overflow-hidden rounded">
                <img
                  src="/hozblock2.webp"
                  alt="Премиальные хозблоки"
                  className="img-fluid w-100 h-100 object-cover offer-img"
                />
              </div>
              <h3 className="fs-5 fw-bold text-dark">
                Премиальные хозблоки
              </h3>
            </div>
          </Col>

          {/* Карточка 2: Эксклюзивные беседки */}
          {/* На мобилках order-3 (уходит вниз), на ПК возвращается в центр - order-lg-2 */}
          <Col xs={12} md={6} lg={4} className="order-3 order-lg-2">
            <div className="offer-card text-center h-100">
              <div className="offer-img-wrapper mb-3 overflow-hidden rounded">
                <img
                  src="/besedki.webp"
                  alt="Эксклюзивные беседки"
                  className="img-fluid w-100 h-100 object-cover offer-img"
                />
              </div>
              <h3 className="fs-5 fw-bold text-dark">
                Эксклюзивные беседки
              </h3>
            </div>
          </Col>

          {/* Карточка 3: Функциональные навесы */}
          {/* На мобилках order-2 (становится второй), на ПК встает в конец - order-lg-3 */}
          <Col xs={12} md={6} lg={4} className="order-2 order-lg-3">
            <div className="offer-card text-center h-100">
              <div className="offer-img-wrapper mb-3 overflow-hidden rounded">
                <img
                  src="/navec2.webp"
                  alt="Функциональные навесы"
                  className="img-fluid w-100 h-100 object-cover offer-img"
                />
              </div>
              <h3 className="fs-5 fw-bold text-dark">
                Функциональные навесы
              </h3>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
