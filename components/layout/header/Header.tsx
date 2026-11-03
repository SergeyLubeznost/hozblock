"use client";

import { useState, useEffect } from "react";
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
  const isCatalogPage = pathname.startsWith("/catalog");
  const [selectedMenu, setSelectedMenu] = useState<string>("company");
  
  // Состояние для отображения кнопки "Наверх"
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Следим за прокруткой страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция плавного скролла на самый верх сайта
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = (menuId: string) => {
    setSelectedMenu(menuId);
    console.log("Пользователь нажал на пункт:", menuId);
  };

  const getLinkStyle = (menuId: string) => {
    return selectedMenu === menuId ? "#DA8402" : "#212529";
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-white py-2 border-bottom shadow-sm fixed-top"
        expanded={isOpen}
        onSelect={() => setIsOpen(false)}
      >
        <Container className="position-relative">
          <NavbarBrand 
            as={Link} 
            href="/" 
            className="py-0"
            onClick={() => {
              if (typeof setSelectedMenu === "function") {
                setSelectedMenu("company");
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
                onClick={() => handleMenuClick("catalog-grid")}
                style={{ color: getLinkStyle("catalog-grid") }}
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

      {/* Адаптивная кнопка "Наверх" */}
      <button
        onClick={scrollToTop}
        className={`btn-scroll-top ${showScrollTop ? "visible" : ""}`}
        aria-label="Наверх"
      >
        <svg 
          xmlns="http://w3.org" 
          width="20" 
          height="20" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path 
            fillRule="evenodd" 
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </button>

      {/* Стили для плавной анимации и адаптивного позиционирования */}
      <style jsx global>{`
        .btn-scroll-top {
          position: fixed;
          bottom: 24px;
          left: 24px; /* Кнопка расположена слева, чтобы не конфликтовать с Jivo Chat справа */
          width: 46px;
          height: 46px;
          background-color: #DA8402;
          color: #ffffff;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease-in-out;
          z-index: 1040; /* Чуть ниже попапа с видео, но выше контента сайта */
        }

        .btn-scroll-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .btn-scroll-top:hover {
          background-color: #be7302;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(218, 132, 2, 0.4);
        }

        /* Адаптивность для мобильных телефонов */
        @media (max-width: 576px) {
          .btn-scroll-top {
            bottom: 16px;
            left: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
