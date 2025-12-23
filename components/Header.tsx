'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Definição dos itens do menu
const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/diretoria', label: 'Diretoria' },
  { href: '/associe-se', label: 'Associe-se' },
  { href: '/direitos-do-medico', label: 'Direitos do Médico' },
  { href: '/juridico', label: 'Jurídico' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/beneficios', label: 'Benefícios' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <Link href="/" className="logo-link" aria-label="SINMEVACO - Página Inicial">
            <Image
              src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png"
              alt="SINMEVACO - Sindicato dos Médicos do Vale do Aço"
              width={180}
              height={60}
              className="logo"
              priority
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="nav-desktop" aria-label="Menu principal">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/associe-se" className="btn-associar-header">
                Associe-se Agora
              </Link>
            </li>
          </ul>
        </nav>

        {/* Toggle Menu Mobile */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Mobile */}
      <nav
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label="Menu mobile"
      >
        <ul className="mobile-menu-list">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`mobile-menu-link ${pathname === item.href ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mobile-menu-cta">
            <Link
              href="/associe-se"
              className="btn btn-primary btn-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Associe-se Agora
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.875rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* Menu Desktop */
        .nav-desktop {
          display: none;
        }

        @media (min-width: 1200px) {
          .nav-desktop {
            display: block;
          }
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--dark-text);
          font-weight: 500;
          font-size: 0.9375rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-green);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: var(--primary-green);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .btn-associar-header {
          background: var(--primary-green);
          color: var(--white);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(23, 93, 59, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-associar-header:hover {
          background: var(--light-green);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(23, 93, 59, 0.4);
        }

        /* Mobile Menu Toggle - Só aparece em telas menores */
        @media (min-width: 1200px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 998;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 90px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--white);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 999;
          overflow-y: auto;
          padding: 2rem;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        @media (min-width: 1200px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-menu-link {
          display: block;
          padding: 1rem 1.25rem;
          color: var(--dark-text);
          font-weight: 500;
          font-size: 1.0625rem;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .mobile-menu-link:hover,
        .mobile-menu-link.active {
          background: var(--light-gray);
          color: var(--primary-green);
          padding-left: 1.5rem;
        }

        .mobile-menu-cta {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--medium-gray);
        }

        .mobile-menu-cta .btn {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </header>
  );
}
