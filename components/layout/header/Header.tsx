"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  // Проверяем, находится ли пользователь на странице товара
  const isCatalogPage = pathname.startsWith("/catalog");
  // Переменная (состояние), в которую записывается активный пункт меню
  // По умолчанию на главной странице выбрана "company"
  const [selectedMenu, setSelectedMenu] = useState<string>("company");

  // Функция-обработчик клика. Записывает ID нажатого пункта в переменную
  const handleMenuClick = (menuId: string) => {
    setSelectedMenu(menuId);
    console.log("Пользователь нажал на пункт:", menuId); // Для проверки в консоли браузера
  };

  const getLinkStyle = (menuId: string) => {
  // Теперь цвет зависит ТОЛЬКО от того, какое ID записано в переменную при клике
  return selectedMenu === menuId ? "#DA8402" : "#212529";
};

  return (
    <Navbar
      expand="lg"
      className="bg-white py-2 border-bottom shadow-sm fixed-top"
      expanded={isOpen}
      // 1. Автоматически закрываем меню при выборе любого пункта внутри
      onSelect={() => setIsOpen(false)}
    >
      <Container className="position-relative">
     <NavbarBrand 
  as={Link} 
  href="/" 
  className="py-0"
  onClick={() => {
    if (typeof setSelectedMenu === "function") {
      setSelectedMenu("company"); // Возвращаем оранжевую подсветку на пункт "Компания"
    }
  }}
>
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
        as={Link}
        href="/#company"
        className="px-3 py-2 py-lg-0 menu-item-transition fw-semibold"
        onClick={() => handleMenuClick("company")}
        style={{ color: getLinkStyle("company") }}
      >
        Компания
      </NavLink>

      <NavLink
        as={Link}
        href="/#services"
        className="px-3 py-2 py-lg-0 menu-item-transition fw-semibold"
        onClick={() => handleMenuClick("services")}
        style={{ color: getLinkStyle("services") }}
      >
        Услуги
      </NavLink>
      
      <NavLink
        as={Link}
        href="/#catalog-grid"
        className="px-3 py-2 py-lg-0 menu-item-transition fw-semibold"
        onClick={() => handleMenuClick("catalog-grid")} // Передает catalog-grid в переменную
        style={{ color: getLinkStyle("catalog-grid") }} // Сверяет catalog-grid
      >
        Объекты
      </NavLink>
      
      <NavLink
        as={Link}
        href="/#reviews"
        className="px-3 py-2 py-lg-0 menu-item-transition fw-semibold"
        onClick={() => handleMenuClick("reviews")}
        style={{ color: getLinkStyle("reviews") }}
      >
        Отзывы
      </NavLink>
      
      <NavLink
        as={Link}
        href="/#callback"
        className="px-3 py-2 py-lg-0 menu-item-transition fw-semibold"
        onClick={() => handleMenuClick("callback")}
        style={{ color: getLinkStyle("callback") }}
      >
        Оставить заявку
      </NavLink>

    </Nav>
  </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
