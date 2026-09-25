'use client';

import { useState } from 'react'; // 1. Импортируем useState для отслеживания клика
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export function Header() {
  // 2. Создаем стейт: true — меню открыто (крестик), false — закрыто (бургер)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="bg-white py-3 border-bottom shadow-sm"
      expanded={isOpen} // Контролируем состояние открытия через наш стейт
    >
      <Container>
        <NavbarBrand href="#home">
          <img
            src="/logo.svg"
            alt="Проплотник"
            height="50"
            className="d-inline-block align-top"
          />
        </NavbarBrand>

        {/* Изменяем стейт при каждом клике на кнопку */}
        <NavbarToggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 p-0 shadow-none focus-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ outline: 'none' }}
        >
          {/* Контейнер для полосок */}
          <div 
            className="d-flex flex-column justify-content-between" 
            style={{ 
              width: '24px', 
              height: '16px', 
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {/* Верхняя полоска: при открытии смещается вниз и поворачивается на 45 градусов */}
            <span style={{ 
              backgroundColor: '#DA8402', 
              height: '2px', 
              width: '100%', 
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></span>
            
            {/* Средняя полоска: при открытии просто исчезает (становится прозрачной) */}
            <span style={{ 
              backgroundColor: '#DA8402', 
              height: '2px', 
              width: '100%', 
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isOpen ? 0 : 1
            }}></span>
            
            {/* Нижня полоска: при открытии смещается вверх и поворачивается на -45 градусов */}
            <span style={{ 
              backgroundColor: '#DA8402', 
              height: '2px', 
              width: '100%', 
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }}></span>
          </div>
        </NavbarToggle>

        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center pt-3 pt-lg-0">
            <NavLink 
              href="#company" 
              className="fw-semibold px-3 position-relative"
              style={{
                color: '#DA8402',
                borderBottom: '2px solid #DA8402',
                paddingBottom: '6px',
                marginBottom: '0px'
              }}
              onClick={() => setIsOpen(false)} // Закрываем меню при клике на пункт (удобно для мобилок)
            >
              Компания
            </NavLink>

            <NavLink href="#services" className="fw-medium text-dark px-3 py-2 py-lg-0" onClick={() => setIsOpen(false)}>
              Услуги
            </NavLink>
            <NavLink href="#objects" className="fw-medium text-dark px-3 py-2 py-lg-0" onClick={() => setIsOpen(false)}>
              Объекты
            </NavLink>
            <NavLink href="#reviews" className="fw-medium text-dark px-3 py-2 py-lg-0" onClick={() => setIsOpen(false)}>
              Отзывы
            </NavLink>
            <NavLink href="#callback" className="fw-medium text-dark px-3 py-2 py-lg-0" onClick={() => setIsOpen(false)}>
              Оставить заявку
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
