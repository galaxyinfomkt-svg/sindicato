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
      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-[1.875rem] flex items-center justify-between h-[90px]">
        {/* Logo */}
        <div className="flex items-center gap-[15px]">
          <Link href="/" className="flex items-center no-underline" aria-label="SINMEVACO - Página Inicial">
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

        {/* Menu Desktop - Escondido em telas menores que 1200px */}
        <nav className="hidden xl:block" aria-label="Menu principal">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`no-underline text-dark font-medium text-[0.9375rem] transition-colors duration-300 relative py-2
                    hover:text-primary
                    after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300
                    hover:after:w-full
                    ${pathname === item.href ? 'text-primary after:w-full' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/associe-se"
                className="bg-primary text-white px-6 py-3 rounded-[50px] no-underline font-semibold text-[0.9375rem] transition-all duration-300 shadow-[0_4px_15px_rgba(23,93,59,0.3)] inline-flex items-center gap-2 hover:bg-light-green hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(23,93,59,0.4)]"
              >
                Associe-se Agora
              </Link>
            </li>
          </ul>
        </nav>

        {/* Toggle Menu Mobile - Visível apenas em telas menores que 1200px */}
        <button
          className={`xl:hidden mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
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
        className={`fixed inset-0 bg-black/50 opacity-0 invisible transition-all duration-300 z-[998] xl:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Mobile */}
      <nav
        className={`fixed top-[90px] left-0 right-0 bottom-0 bg-white transform translate-x-full transition-transform duration-300 z-[999] overflow-y-auto p-8 xl:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : ''}`}
        aria-label="Menu mobile"
      >
        <ul className="list-none m-0 p-0 flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-4 px-5 text-dark font-medium text-[1.0625rem] no-underline rounded-xl transition-all duration-300
                  hover:bg-light hover:text-primary hover:pl-6
                  ${pathname === item.href ? 'bg-light text-primary pl-6' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-6 pt-6 border-t border-gray/20">
            <Link
              href="/associe-se"
              className="btn btn-primary btn-lg w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Associe-se Agora
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
