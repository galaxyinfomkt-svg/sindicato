'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ============================================================
// DIRETORIA - LAYOUT 100% NOVO - SINMEVACO
// ============================================================

// Componente de Animação ao Scroll
function AnimarAoScroll({
  children,
  classe = 'animar-surgir',
  atraso = 0
}: {
  children: React.ReactNode
  classe?: string
  atraso?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${classe} ${visivel ? 'animado' : ''}`}
      style={{ transitionDelay: `${atraso}s` }}
    >
      {children}
    </div>
  )
}

// Diretoria Executiva
const diretoriaExecutiva = [
  { cargo: 'Vice-Presidente', nome: 'Dr. Membro da Diretoria', especialidade: 'Medicina Geral' },
  { cargo: 'Secretário Geral', nome: 'Dra. Membro da Diretoria', especialidade: 'Medicina do Trabalho' },
  { cargo: 'Tesoureiro', nome: 'Dr. Membro da Diretoria', especialidade: 'Clínica Médica' },
  { cargo: 'Diretor Social', nome: 'Dra. Membro da Diretoria', especialidade: 'Pediatria' },
  { cargo: 'Diretor Jurídico', nome: 'Dr. Membro da Diretoria', especialidade: 'Medicina Legal' },
  { cargo: 'Diretor de Comunicação', nome: 'Dr. Membro da Diretoria', especialidade: 'Cardiologia' }
]

// Conselho Fiscal
const conselhoFiscal = [
  { cargo: 'Presidente', nome: 'Dr. Conselheiro Fiscal' },
  { cargo: 'Membro Titular', nome: 'Dra. Conselheira Fiscal' },
  { cargo: 'Membro Titular', nome: 'Dr. Conselheiro Fiscal' },
  { cargo: 'Suplente', nome: 'Dr. Conselheiro Suplente' },
  { cargo: 'Suplente', nome: 'Dra. Conselheira Suplente' }
]

// Delegados
const delegados = [
  { nome: 'Dr. Delegado Sindical', local: 'Hospital Municipal de Ipatinga' },
  { nome: 'Dra. Delegada Sindical', local: 'Hospital Márcio Cunha' },
  { nome: 'Dr. Delegado Sindical', local: 'UBS Região Central' },
  { nome: 'Dr. Delegado Sindical', local: 'Hospital de Timóteo' }
]

export default function DiretoriaPage() {
  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-verde" style={{ minHeight: '60vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                👥 Nossa Equipe
              </span>

              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Diretoria do <span className="texto-gradiente">SINMEVACO</span>
              </h1>

              <p className="texto-claro-90" style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.8
              }}>
                Conheça os profissionais dedicados que trabalham diariamente
                pela defesa dos direitos e valorização dos médicos do Vale do Aço.
              </p>
            </div>
          </AnimarAoScroll>
        </div>

        {/* Onda decorativa */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--branco-soft)"/>
          </svg>
        </div>
      </section>

      {/* ========== PRESIDENTE ========== */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                👨‍⚕️ Presidência
              </span>
              <h2 className="texto-escuro">
                Nosso <span className="texto-gradiente">Presidente</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }} className="grade-presidente">

            <AnimarAoScroll classe="animar-esquerda">
              <div style={{
                position: 'relative',
                maxWidth: '380px',
                margin: '0 auto'
              }}>
                {/* Círculo decorativo atrás */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110%',
                  height: '110%',
                  background: 'linear-gradient(145deg, var(--verde-400), var(--verde-500))',
                  borderRadius: '50%',
                  opacity: 0.15,
                  zIndex: 0
                }}></div>

                <div style={{
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 'var(--sombra-forte)',
                  zIndex: 1,
                  border: '6px solid white'
                }}>
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                    alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                    width={380}
                    height={380}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      aspectRatio: '1/1'
                    }}
                  />
                </div>

                {/* Badge de cargo */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  boxShadow: 'var(--sombra-media)',
                  zIndex: 2,
                  whiteSpace: 'nowrap'
                }}>
                  Presidente
                </div>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{ textAlign: 'center' }} className="texto-presidente">
                <h2 className="texto-escuro" style={{ marginBottom: '0.5rem', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                  Dr. Carlos Henrique
                </h2>
                <h3 style={{
                  color: 'var(--verde-500)',
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  marginBottom: 'var(--space-lg)'
                }}>
                  Quintão Valeriano
                </h3>

                <p style={{
                  color: 'var(--cinza-500)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: 1.9,
                  fontSize: '1.0625rem'
                }}>
                  Médico com vasta experiência e comprometido com a defesa dos direitos
                  da categoria, Dr. Carlos Henrique lidera o SINMEVACO com dedicação,
                  transparência e proximidade com os associados. Sua gestão é marcada
                  por conquistas importantes e pela busca constante de melhorias
                  para os médicos do Vale do Aço.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    background: 'var(--branco)',
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--sombra-card)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🏆</div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--cinza-500)' }}>Liderança</span>
                  </div>
                  <div style={{
                    background: 'var(--branco)',
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--sombra-card)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>⚖️</div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--cinza-500)' }}>Ética</span>
                  </div>
                  <div style={{
                    background: 'var(--branco)',
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--sombra-card)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🤝</div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--cinza-500)' }}>Compromisso</span>
                  </div>
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== DIRETORIA EXECUTIVA ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                🏛️ Diretoria Executiva
              </span>
              <h2 className="texto-escuro">
                Nossa <span className="texto-gradiente">Equipe de Gestão</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {diretoriaExecutiva.map((membro, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{
                  textAlign: 'center',
                  padding: 'var(--space-xl)',
                  height: '100%'
                }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto var(--space-lg)',
                    background: 'linear-gradient(145deg, var(--cinza-100), var(--cinza-50))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    border: '4px solid var(--verde-400)'
                  }}>
                    👨‍⚕️
                  </div>

                  <span style={{
                    display: 'inline-block',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    {membro.cargo}
                  </span>

                  <h3 style={{
                    color: 'var(--preto-soft)',
                    fontSize: '1.125rem',
                    marginBottom: '0.375rem'
                  }}>
                    {membro.nome}
                  </h3>

                  <p style={{
                    color: 'var(--cinza-500)',
                    fontSize: '0.875rem'
                  }}>
                    {membro.especialidade}
                  </p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONSELHO FISCAL ========== */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                📊 Fiscalização
              </span>
              <h2 className="texto-claro">
                Conselho Fiscal
              </h2>
              <div className="divisor divisor-claro" style={{ marginTop: '1.5rem' }}></div>
              <p className="texto-claro-80" style={{
                maxWidth: '600px',
                margin: '1.5rem auto 0',
                lineHeight: 1.8
              }}>
                Responsável por fiscalizar as contas e garantir a transparência
                na gestão dos recursos do sindicato.
              </p>
            </div>
          </AnimarAoScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {conselhoFiscal.map((membro, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-glass" style={{
                  textAlign: 'center',
                  padding: 'var(--space-lg)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto var(--space-md)',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    👤
                  </div>

                  <span style={{
                    display: 'block',
                    color: 'var(--laranja-400)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem'
                  }}>
                    {membro.cargo}
                  </span>

                  <h4 className="texto-claro" style={{
                    fontSize: '1rem',
                    fontWeight: 600
                  }}>
                    {membro.nome}
                  </h4>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DELEGADOS SINDICAIS ========== */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                🏥 Representação Local
              </span>
              <h2 className="texto-escuro">
                Delegados <span className="texto-gradiente">Sindicais</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
              <p style={{
                color: 'var(--cinza-500)',
                maxWidth: '600px',
                margin: '1.5rem auto 0',
                lineHeight: 1.8
              }}>
                Profissionais que representam o sindicato diretamente nos locais de trabalho,
                garantindo a defesa dos direitos dos médicos.
              </p>
            </div>
          </AnimarAoScroll>

          <div className="grade-2">
            {delegados.map((delegado, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo card-borda-esquerda" style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'center',
                  padding: 'var(--space-lg)'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    🏥
                  </div>

                  <div>
                    <h4 style={{
                      color: 'var(--preto-soft)',
                      fontSize: '1.0625rem',
                      marginBottom: '0.25rem'
                    }}>
                      {delegado.nome}
                    </h4>
                    <p style={{
                      color: 'var(--cinza-500)',
                      fontSize: '0.875rem'
                    }}>
                      📍 {delegado.local}
                    </p>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRANSPARÊNCIA ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center'
          }} className="grade-transparencia">

            <AnimarAoScroll classe="animar-esquerda">
              <div>
                <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  ✨ Gestão Transparente
                </span>

                <h2 className="texto-escuro" style={{ marginBottom: '1.5rem' }}>
                  Compromisso com a <span className="texto-gradiente">Transparência</span>
                </h2>

                <p style={{
                  color: 'var(--cinza-500)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: 1.9
                }}>
                  A diretoria do SINMEVACO trabalha com total transparência na gestão
                  dos recursos e na prestação de contas aos associados. Mantemos
                  canais abertos de comunicação e divulgamos regularmente os
                  resultados das nossas ações.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-md)'
                }}>
                  {[
                    { icone: '📋', texto: 'Prestação de contas regular' },
                    { icone: '📢', texto: 'Comunicação constante com associados' },
                    { icone: '🤝', texto: 'Assembleias periódicas' },
                    { icone: '📊', texto: 'Relatórios de atividades públicos' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      padding: 'var(--space-sm) var(--space-md)',
                      background: 'var(--cinza-50)',
                      borderRadius: 'var(--radius-md)'
                    }}>
                      <span style={{ fontSize: '1.25rem' }}>{item.icone}</span>
                      <span style={{ color: 'var(--cinza-700)', fontWeight: 500 }}>{item.texto}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{
                background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-2xl)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-20%',
                  width: '250px',
                  height: '250px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>📞</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Fale com a Diretoria
                  </h3>
                  <p style={{ opacity: 0.9, marginBottom: 'var(--space-lg)', lineHeight: 1.8 }}>
                    Sua participação é fundamental. Entre em contato conosco para
                    sugestões, dúvidas ou para agendar uma reunião.
                  </p>
                  <a
                    href="https://wa.me/5531997178316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao botao-branco"
                    style={{ color: 'var(--verde-500)' }}
                  >
                    Entrar em Contato
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </a>
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="secao cta-verde" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                🤝 Faça Parte
              </span>

              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Una-se à nossa causa
              </h2>

              <p className="texto-claro-90" style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-xl)',
                lineHeight: 1.8
              }}>
                Juntos somos mais fortes. Associe-se ao SINMEVACO e tenha uma diretoria
                comprometida trabalhando em sua defesa.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">
                  Quero me Associar
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
                <Link href="/quem-somos" className="botao botao-outline-claro botao-grande">
                  Conheça o Sindicato
                </Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* ========== WHATSAPP FLUTUANTE ========== */}
      <a
        href="https://wa.me/5531997178316"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flutuante"
        aria-label="Fale conosco pelo WhatsApp"
      >
        💬
      </a>

      <style jsx>{`
        @media (min-width: 1024px) {
          .grade-presidente {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
          .texto-presidente {
            text-align: left !important;
          }
          .grade-transparencia {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
