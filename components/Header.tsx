'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(20px)' : 'none',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px'
        }} className="header-container">
          {/* Logo */}
          <Link href="/" aria-label="SINMEVACO - Página Inicial" style={{ zIndex: 1003 }}>
            <Image
              src="/images/logo.png"
              alt="SINMEVACO"
              width={120}
              height={40}
              style={{ height: 'auto', width: 'auto', maxHeight: '38px' }}
              priority
              className="header-logo"
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="menu-desktop">
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: isScrolled ? 'var(--preto-soft)' : 'white',
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      padding: '0.5rem 0',
                      position: 'relative',
                      transition: 'color 0.3s ease'
                    }}
                    className={pathname === item.href ? 'menu-active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/associe-se"
                  className="botao botao-laranja"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Associe-se
                </Link>
              </li>
            </ul>
          </nav>

          {/* Toggle Mobile - Hamburger/X */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle-mobile"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 1003,
              width: '44px',
              height: '44px',
              position: 'relative'
            }}
          >
            {isMobileMenuOpen ? (
              /* X Icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isScrolled || isMobileMenuOpen ? '#175d3b' : 'white'} strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? '#175d3b' : 'white'} strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Overlay Mobile */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 999,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      />

      {/* Menu Mobile Full Screen */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          background: 'white',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          zIndex: 1001,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Close button inside menu */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1rem',
          borderBottom: '1px solid #eee'
        }}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#175d3b" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <div style={{ padding: '1rem 1.5rem 2rem', flex: 1 }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '1rem 0.5rem',
                    color: pathname === item.href ? '#175d3b' : '#1a2420',
                    fontWeight: pathname === item.href ? 600 : 500,
                    fontSize: '1.125rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href="/associe-se"
              onClick={() => setIsMobileMenuOpen(false)}
              className="botao botao-laranja"
              style={{
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                padding: '1rem 1.5rem',
                fontSize: '1rem'
              }}
            >
              Associe-se Agora
            </Link>
          </div>

          {/* Contato no menu mobile */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee'
          }}>
            <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contato
            </p>
            <a
              href="https://wa.me/5531997178316"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 0',
                color: '#374840',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>📱</span>
              (31) 99717-8316
            </a>
            <a
              href="mailto:sinmevaco@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 0',
                color: '#374840',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>✉️</span>
              sinmevaco@gmail.com
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .menu-desktop {
          display: none;
        }
        .menu-toggle-mobile {
          display: flex !important;
        }
        .header-container {
          padding: 0 1rem;
          height: 60px;
        }

        @media (min-width: 768px) {
          .header-container {
            padding: 0 1.5rem;
            height: 70px;
          }
        }

        @media (min-width: 1200px) {
          .menu-desktop {
            display: block !important;
          }
          .menu-toggle-mobile {
            display: none !important;
          }
          .header-container {
            padding: 0 2rem;
            height: 90px;
          }
        }

        .menu-active {
          color: var(--laranja-500) !important;
        }
      `}</style>
    </>
  );
}
