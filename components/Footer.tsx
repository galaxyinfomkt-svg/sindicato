'use client';

import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/diretoria', label: 'Diretoria' },
  { href: '/associe-se', label: 'Associe-se' },
  { href: '/direitos-do-medico', label: 'Direitos do Médico' },
  { href: '/juridico', label: 'Jurídico' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/beneficios', label: 'Benefícios' },
  { href: '/contato', label: 'Contato' },
];

const beneficios = [
  { label: 'Apoio Jurídico', href: '/juridico' },
  { label: 'Educação - até 45%', href: '/beneficios' },
  { label: 'Energia - até 20%', href: '/beneficios' },
  { label: 'Programa de Indicação', href: '/associe-se' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer style={{
        background: 'linear-gradient(180deg, var(--verde-600) 0%, var(--verde-700) 50%, var(--verde-800) 100%)',
        color: 'white',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-lg)'
      }}>
        <div className="wrapper">
          {/* CTA Banner */}
          <div style={{
            background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '200px',
              height: '200px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%'
            }}></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="texto-claro" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                Ainda não é associado?
              </h3>
              <p className="texto-claro-90" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Junte-se ao SINMEVACO e tenha acesso a todos os benefícios exclusivos.
              </p>
            </div>

            <Link href="/associe-se" className="botao botao-branco" style={{ color: 'var(--laranja-500)', position: 'relative', zIndex: 2 }}>
              Associe-se Agora
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </Link>
          </div>

          {/* Grid Principal */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-xl)'
          }} className="footer-grid">

            {/* Coluna 1 - Logo e Descrição */}
            <div>
              <Link href="/" aria-label="SINMEVACO" style={{ display: 'inline-block', marginBottom: 'var(--space-md)' }}>
                <Image
                  src="/images/logo.png"
                  alt="SINMEVACO Logo"
                  width={180}
                  height={60}
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.95, height: 'auto', maxWidth: '160px' }}
                />
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 'var(--space-md)', fontSize: '0.9375rem' }}>
                Sindicato dos Médicos do Vale do Aço – Há mais de 32 anos defendendo os direitos dos médicos em Ipatinga, Timóteo, Coronel Fabriciano e região.
              </p>

              {/* Redes Sociais */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href="https://www.instagram.com/sinmevaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/5531997178316"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/sinmevaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-md)', color: 'white' }}>
                Links Rápidos
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.href} style={{ marginBottom: '0.625rem' }}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.75)',
                        textDecoration: 'none',
                        fontSize: '0.9375rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Benefícios */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-md)', color: 'white' }}>
                Benefícios
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {beneficios.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.625rem' }}>
                    <Link
                      href={item.href}
                      style={{
                        color: 'rgba(255,255,255,0.75)',
                        textDecoration: 'none',
                        fontSize: '0.9375rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{ color: 'var(--laranja-400)' }}>✓</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Contato */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-md)', color: 'white' }}>
                Contato
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <a
                  href="tel:+5531997178316"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem'
                  }}
                >
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem'
                  }}>📞</span>
                  (31) 99717-8316
                </a>
                <a
                  href="https://wa.me/5531997178316"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem'
                  }}
                >
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem'
                  }}>💬</span>
                  WhatsApp
                </a>
                <a
                  href="mailto:sinmevaco@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem'
                  }}
                >
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem'
                  }}>✉️</span>
                  sinmevaco@gmail.com
                </a>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.9375rem'
                }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    flexShrink: 0
                  }}>📍</span>
                  <span>Coronel Fabriciano - MG<br/>Vale do Aço</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: 'var(--space-xl)',
            paddingTop: 'var(--space-lg)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', margin: 0 }}>
                © {currentYear} SINMEVACO - Sindicato dos Médicos do Vale do Aço. Todos os direitos reservados.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', margin: 0 }}>
                Desenvolvido por <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Galaxy IT & Marketing</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante - FORA do footer */}
      <a
        href="https://wa.me/5531997178316"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flutuante"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style jsx>{`
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr !important;
          }
        }
      `}</style>
    </>
  );
}
