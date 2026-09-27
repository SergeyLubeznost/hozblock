"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Navbar
      expand="lg"
      className="bg-white py-2 border-bottom shadow-sm fixed-top"
      expanded={isOpen}
      // 1. Автоматически закрываем меню при выборе любого пункта внутри
      onSelect={() => setIsOpen(false)}
    >
      <Container className="position-relative">
        <NavbarBrand href="#home" className="py-0">
          <img
            src="/logo.svg"
            alt="Проплотник"
            style={{ height: "35px" }}
            className="d-inline-block align-top logo-adaptive"
          />
        </NavbarBrand>

        <NavbarToggle
          aria-controls="basic-navbar-nav"
          className="border-0 p-0 shadow-none focus-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ outline: "none" }}
        >
          <div
            className="d-flex flex-column justify-content-between"
            style={{
              width: "20px",
              height: "14px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <span
              style={{
                backgroundColor: "#DA8402",
                height: "2px",
                width: "100%",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen
                  ? "rotate(45deg) translate(4px, 4px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#DA8402",
                height: "2px",
                width: "100%",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#DA8402",
                height: "2px",
                width: "100%",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : "none",
              }}
            ></span>
          </div>
        </NavbarToggle>

        {/* Добавляем кастомный класс mobile-menu-overlay для стилизации шторки в CSS */}
        <NavbarCollapse id="basic-navbar-nav" className="mobile-menu-overlay">
          <Nav className="ms-auto align-items-center pt-3 pt-lg-0">
            <NavLink
              href="#company"
              className="fw-semibold px-3 position-relative"
              style={{
                color: "#DA8402",
                borderBottom: "2px solid #DA8402",
                paddingBottom: "2px",
                marginBottom: "0px",
              }}
            >
              Компания
            </NavLink>

            <NavLink
              href="#services"
              className="fw-medium text-dark px-3 py-2 py-lg-0"
            >
              Услуги
            </NavLink>
            <NavLink
              href="#objects"
              className="fw-medium text-dark px-3 py-2 py-lg-0"
            >
              Объекты
            </NavLink>
            <NavLink
              href="#reviews"
              className="fw-medium text-dark px-3 py-2 py-lg-0"
            >
              Отзывы
            </NavLink>
            <NavLink
              href="#callback"
              className="fw-medium text-dark px-3 py-2 py-lg-0"
            >
              Оставить заявку
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
