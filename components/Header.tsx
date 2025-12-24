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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

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
          height: '70px'
        }} className="header-container">
          {/* Logo */}
          <Link href="/" aria-label="SINMEVACO - Página Inicial" style={{ zIndex: 1003 }}>
            <Image
              src="/images/logo.png"
              alt="SINMEVACO"
              width={150}
              height={50}
              style={{ height: 'auto', width: 'auto', maxHeight: '45px' }}
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

          {/* Toggle Mobile - Hamburger */}
          <button
            onClick={toggleMenu}
            className="menu-toggle-mobile"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
              zIndex: 1003,
              width: '48px',
              height: '48px',
              position: 'relative'
            }}
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: isScrolled || isMobileMenuOpen ? 'var(--verde-500)' : 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transformOrigin: 'center',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: isScrolled || isMobileMenuOpen ? 'var(--verde-500)' : 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
              transform: isMobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: isScrolled || isMobileMenuOpen ? 'var(--verde-500)' : 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transformOrigin: 'center',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none'
            }}></span>
          </button>
        </div>
      </header>

      {/* Overlay Mobile */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 998,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      />

      {/* Menu Mobile Drawer */}
      <nav
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '320px',
          background: 'white',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1002,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          boxShadow: isMobileMenuOpen ? '-10px 0 30px rgba(0,0,0,0.2)' : 'none'
        }}
      >
        <div style={{ padding: '90px 1.5rem 2rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {menuItems.map((item, index) => (
              <li key={item.href} style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`
              }}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.875rem 1rem',
                    color: pathname === item.href ? 'var(--verde-500)' : 'var(--preto-soft)',
                    fontWeight: pathname === item.href ? 600 : 500,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    background: pathname === item.href ? 'var(--cinza-50)' : 'transparent',
                    marginBottom: '0.25rem',
                    transition: 'background 0.2s ease'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--cinza-100)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.3s ease ${menuItems.length * 0.05}s, transform 0.3s ease ${menuItems.length * 0.05}s`
            }}>
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
            </li>
          </ul>

          {/* Info adicional no menu mobile */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--cinza-100)',
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: 'opacity 0.3s ease 0.4s'
          }}>
            <a
              href="https://wa.me/5531997178316"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                color: 'var(--cinza-600)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                borderRadius: '8px',
                transition: 'background 0.2s ease'
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
                padding: '0.75rem 1rem',
                color: 'var(--cinza-600)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                borderRadius: '8px',
                transition: 'background 0.2s ease'
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
          height: 70px;
        }
        .header-logo {
          max-height: 40px !important;
        }

        @media (min-width: 768px) {
          .header-container {
            padding: 0 1.5rem;
            height: 80px;
          }
          .header-logo {
            max-height: 50px !important;
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
          .header-logo {
            max-height: 55px !important;
          }
        }

        .menu-active {
          color: var(--laranja-500) !important;
        }
      `}</style>
    </>
  );
}
