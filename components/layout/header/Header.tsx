'use client';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    // 1. Изменили py-3 на py-2 для уменьшения общей высоты хедера на всех версиях сайта
    <Navbar expand="lg" className="bg-white py-3 border-bottom shadow-sm fixed-top">
      <Container>
        <NavbarBrand href="#home" className="py-0">
          {/* 2. Адаптивная высота логотипа:
              На мобильных (по умолчанию) — height: 35px. 
              На больших экранах (классы для CSS) уменьшим до 45px вместо прошлых 50px */}
          <img
            src="/logo.svg"
            alt="Проплотник"
            style={{
              height: '45px', // Высота для мобильной версии сайта
            }}
            className="d-inline-block align-top logo-adaptive"
          />
        </NavbarBrand>

        <NavbarToggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 p-0 shadow-none focus-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ outline: 'none' }}
        >
          {/* Бургер-меню тоже пропорционально уменьшили (было 24х16, стало 20х14) */}
          <div 
            className="d-flex flex-column justify-content-between" 
            style={{ width: '20px', height: '14px', cursor: 'pointer', position: 'relative' }}
          >
            <span style={{ 
              backgroundColor: '#DA8402', height: '2px', width: '100%', borderRadius: '2px',
              transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
            }}></span>
            <span style={{ 
              backgroundColor: '#DA8402', height: '2px', width: '100%', borderRadius: '2px',
              transition: 'all 0.3s ease', opacity: isOpen ? 0 : 1
            }}></span>
            <span style={{ 
              backgroundColor: '#DA8402', height: '2px', width: '100%', borderRadius: '2px',
              transition: 'all 0.3s ease', transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
            }}></span>
          </div>
        </NavbarToggle>

        <NavbarCollapse id="basic-navbar-nav">
          {/* pt-2 для мобильного меню, чтобы пункты не прилипали */}
          <Nav className="ms-auto align-items-center pt-2 pt-lg-0">
            <NavLink 
              href="#company" 
              className="fw-semibold px-3 position-relative"
              style={{
                color: '#DA8402',
                borderBottom: '2px solid #DA8402',
                paddingBottom: '2px',
                marginBottom: '0px'
              }}
              onClick={() => setIsOpen(false)}
            >
              Компания
            </NavLink>

            {/* Снизили вертикальные паддинги py-1 на мобилках, чтобы выпадающее меню было компактным */}
            <NavLink href="#services" className="fw-medium text-dark px-3 py-1 py-lg-0" onClick={() => setIsOpen(false)}>
              Услуги
            </NavLink>
            <NavLink href="#objects" className="fw-medium text-dark px-3 py-1 py-lg-0" onClick={() => setIsOpen(false)}>
              Объекты
            </NavLink>
            <NavLink href="#reviews" className="fw-medium text-dark px-3 py-1 py-lg-0" onClick={() => setIsOpen(false)}>
              Отзывы
            </NavLink>
            <NavLink href="#callback" className="fw-medium text-dark px-3 py-1 py-lg-0" onClick={() => setIsOpen(false)}>
              Оставить заявку
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
