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
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90px'
      }}>
        {/* Logo */}
        <Link href="/" aria-label="SINMEVACO - Página Inicial">
          <Image
            src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png"
            alt="SINMEVACO"
            width={180}
            height={60}
            style={{ height: 'auto', width: 'auto', maxHeight: '55px' }}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="menu-desktop" style={{ display: 'none' }}>
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

        {/* Toggle Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="menu-toggle-mobile"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 1002
          }}
        >
          <span style={{
            width: '28px',
            height: '3px',
            background: isScrolled ? 'var(--verde-500)' : 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}></span>
          <span style={{
            width: '28px',
            height: '3px',
            background: isScrolled ? 'var(--verde-500)' : 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '28px',
            height: '3px',
            background: isScrolled ? 'var(--verde-500)' : 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}></span>
        </button>
      </div>

      {/* Overlay Mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 998
          }}
        />
      )}

      {/* Menu Mobile */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '400px',
          background: 'white',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: 1001,
          overflowY: 'auto',
          padding: '100px 2rem 2rem'
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem 1.25rem',
                  color: pathname === item.href ? 'var(--verde-500)' : 'var(--preto-soft)',
                  fontWeight: pathname === item.href ? 600 : 500,
                  fontSize: '1.0625rem',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-md)',
                  background: pathname === item.href ? 'var(--cinza-50)' : 'transparent',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--cinza-100)' }}>
            <Link
              href="/associe-se"
              onClick={() => setIsMobileMenuOpen(false)}
              className="botao botao-laranja botao-grande"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Associe-se Agora
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        @media (min-width: 1200px) {
          .menu-desktop {
            display: block !important;
          }
          .menu-toggle-mobile {
            display: none !important;
          }
        }
        .menu-active {
          color: var(--laranja-500) !important;
        }
      `}</style>
    </header>
  );
}
