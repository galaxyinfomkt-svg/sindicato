'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ============================================================
// NOTÍCIAS / BLOG - LAYOUT 100% NOVO - SINMEVACO
// ============================================================

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
    <div ref={ref} className={`${classe} ${visivel ? 'animado' : ''}`} style={{ transitionDelay: `${atraso}s` }}>
      {children}
    </div>
  )
}

// Notícias do blog
const noticias = [
  {
    id: 1,
    titulo: 'Direitos trabalhistas do médico: o que todo profissional precisa saber',
    resumo: 'Conheça os principais direitos garantidos aos médicos pela CLT, acordos coletivos e legislação específica. Saiba como o SINMEVACO pode ajudar na defesa dos seus direitos.',
    categoria: 'Direitos',
    data: '20 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
    destaque: true,
    tempo: '8 min de leitura'
  },
  {
    id: 2,
    titulo: 'Piso Salarial dos Médicos: Decisão em Votação Pode Garantir Valorização Histórica',
    resumo: 'Acompanhe as últimas atualizações sobre a votação do piso salarial nacional para médicos e como isso pode impactar sua remuneração.',
    categoria: 'Piso Salarial',
    data: '18 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    destaque: true,
    tempo: '6 min de leitura'
  },
  {
    id: 3,
    titulo: 'Aposentadoria especial para médicos: como garantir seu direito',
    resumo: 'Médicos expostos a agentes nocivos têm direito à aposentadoria especial. Entenda os requisitos e como comprovar as condições de trabalho.',
    categoria: 'Previdência',
    data: '15 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '7 min de leitura'
  },
  {
    id: 4,
    titulo: 'Jornada de trabalho do médico: limites e direitos que você precisa conhecer',
    resumo: 'Qual a jornada máxima de trabalho? Quanto tempo de descanso entre plantões? Tire todas as suas dúvidas sobre a carga horária médica.',
    categoria: 'Trabalho',
    data: '12 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '5 min de leitura'
  },
  {
    id: 5,
    titulo: 'Adicional de insalubridade: quando o médico tem direito?',
    resumo: 'Exposição a agentes biológicos, químicos ou físicos pode garantir adicional de insalubridade. Saiba como funciona e como solicitar.',
    categoria: 'Direitos',
    data: '10 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '6 min de leitura'
  },
  {
    id: 6,
    titulo: 'Defesa profissional: como agir diante de processos éticos',
    resumo: 'Orientações importantes para médicos que enfrentam processos junto ao CRM. O SINMEVACO oferece apoio jurídico especializado.',
    categoria: 'Ética',
    data: '08 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '9 min de leitura'
  },
  {
    id: 7,
    titulo: 'Benefícios exclusivos para médicos associados ao sindicato',
    resumo: 'Descubra todas as vantagens de ser associado ao SINMEVACO: descontos em educação, energia, seguros e muito mais.',
    categoria: 'Benefícios',
    data: '05 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '4 min de leitura'
  },
  {
    id: 8,
    titulo: 'Telemedicina: regulamentação e direitos do médico',
    resumo: 'Com a expansão da telemedicina, novas questões surgem. Entenda a regulamentação atual e seus direitos como médico.',
    categoria: 'Regulamentação',
    data: '02 Dez 2024',
    imagem: 'https://images.unsplash.com/photo-1609904603780-28e55b8e7e8b?w=800&h=500&fit=crop',
    destaque: false,
    tempo: '7 min de leitura'
  }
]

const categorias = ['Todas', 'Direitos', 'Piso Salarial', 'Previdência', 'Trabalho', 'Ética', 'Benefícios', 'Regulamentação']

export default function NoticiasPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')

  const noticiasFiltradas = categoriaAtiva === 'Todas'
    ? noticias
    : noticias.filter(n => n.categoria === categoriaAtiva)

  const noticiasDestaque = noticias.filter(n => n.destaque)
  const noticiasLista = noticiasFiltradas.filter(n => !n.destaque || categoriaAtiva !== 'Todas')

  return (
    <main>
      {/* HERO */}
      <section className="hero-verde" style={{ minHeight: '50vh', paddingTop: '140px', paddingBottom: 'var(--space-2xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                📰 Blog & Informações
              </span>
              <h1 className="texto-claro" style={{ marginBottom: 'var(--space-md)' }}>
                Notícias e <span className="texto-gradiente">Informações</span>
              </h1>
              <p className="texto-claro-90" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                Fique por dentro das últimas novidades sobre direitos médicos, legislação, benefícios e tudo que impacta sua carreira.
              </p>
            </div>
          </AnimarAoScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--branco-soft)"/>
          </svg>
        </div>
      </section>

      {/* NOTÍCIAS EM DESTAQUE */}
      {categoriaAtiva === 'Todas' && (
        <section className="secao-pequena" style={{ background: 'var(--branco-soft)' }}>
          <div className="wrapper">
            <AnimarAoScroll>
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 className="texto-escuro" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'var(--space-sm)' }}>
                  🔥 Destaques
                </h2>
                <div className="divisor" style={{ margin: 0 }}></div>
              </div>
            </AnimarAoScroll>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="destaques-grid">
              {noticiasDestaque.map((noticia, index) => (
                <AnimarAoScroll key={noticia.id} atraso={index * 0.1}>
                  <article
                    className="card-novo"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: 'var(--space-lg)',
                      padding: 0,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = 'var(--sombra-forte)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'var(--sombra-card)'
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }} className="destaque-imagem">
                      <Image
                        src={noticia.imagem}
                        alt={noticia.titulo}
                        fill
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 'var(--space-md)',
                        left: 'var(--space-md)',
                        background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8125rem',
                        fontWeight: 600
                      }}>
                        {noticia.categoria}
                      </div>
                    </div>
                    <div style={{ padding: '0 var(--space-lg) var(--space-lg)' }}>
                      <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)', fontSize: '0.875rem', color: 'var(--cinza-500)' }}>
                        <span>{noticia.data}</span>
                        <span>•</span>
                        <span>{noticia.tempo}</span>
                      </div>
                      <h3 style={{ color: 'var(--preto-soft)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', marginBottom: 'var(--space-sm)', lineHeight: 1.3 }}>
                        {noticia.titulo}
                      </h3>
                      <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>
                        {noticia.resumo}
                      </p>
                      <span style={{
                        color: 'var(--verde-500)',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'gap 0.3s ease'
                      }}>
                        Ler mais <span>→</span>
                      </span>
                    </div>
                  </article>
                </AnimarAoScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FILTROS E LISTA DE NOTÍCIAS */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          {/* Filtros */}
          <AnimarAoScroll>
            <div style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-2xl)',
              justifyContent: 'center'
            }}>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: categoriaAtiva === cat
                      ? 'linear-gradient(145deg, var(--verde-500), var(--verde-400))'
                      : 'var(--cinza-50)',
                    color: categoriaAtiva === cat ? 'white' : 'var(--cinza-700)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-display)'
                  }}
                  onMouseEnter={(e) => {
                    if (categoriaAtiva !== cat) {
                      e.currentTarget.style.background = 'var(--cinza-100)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (categoriaAtiva !== cat) {
                      e.currentTarget.style.background = 'var(--cinza-50)'
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimarAoScroll>

          {/* Grid de Notícias */}
          <div className="grade-3">
            {(categoriaAtiva === 'Todas' ? noticiasLista.slice(2) : noticiasLista).map((noticia, index) => (
              <AnimarAoScroll key={noticia.id} atraso={index * 0.1}>
                <article
                  className="card-novo"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = 'var(--sombra-card-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--sombra-card)'
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <Image
                      src={noticia.imagem}
                      alt={noticia.titulo}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 'var(--space-sm)',
                      left: 'var(--space-sm)',
                      background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                      color: 'white',
                      padding: '0.375rem 0.875rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {noticia.categoria}
                    </div>
                  </div>
                  <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)', fontSize: '0.8125rem', color: 'var(--cinza-500)' }}>
                      <span>{noticia.data}</span>
                      <span>•</span>
                      <span>{noticia.tempo}</span>
                    </div>
                    <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.125rem', marginBottom: 'var(--space-sm)', lineHeight: 1.4, flex: 1 }}>
                      {noticia.titulo}
                    </h3>
                    <p style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                      {noticia.resumo.substring(0, 120)}...
                    </p>
                    <span style={{
                      color: 'var(--verde-500)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9375rem'
                    }}>
                      Ler artigo completo <span>→</span>
                    </span>
                  </div>
                </article>
              </AnimarAoScroll>
            ))}
          </div>

          {/* Mensagem quando não há notícias na categoria */}
          {noticiasLista.length === 0 && (
            <AnimarAoScroll>
              <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: 'var(--space-lg)' }}>📭</span>
                <h3 className="texto-escuro" style={{ marginBottom: 'var(--space-sm)' }}>Nenhuma notícia encontrada</h3>
                <p style={{ color: 'var(--cinza-500)' }}>Não há notícias nesta categoria no momento.</p>
              </div>
            </AnimarAoScroll>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                📬 Fique Atualizado
              </span>
              <h2 className="texto-claro" style={{ marginBottom: 'var(--space-md)' }}>
                Receba Novidades
              </h2>
              <p className="texto-claro-90" style={{ marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>
                Cadastre-se para receber as últimas notícias sobre direitos médicos, benefícios e novidades do SINMEVACO diretamente no seu e-mail.
              </p>

              <form style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  style={{
                    flex: '1 1 300px',
                    maxWidth: '400px',
                    padding: '1.125rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'white'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                  }}
                />
                <button type="submit" className="botao botao-laranja botao-grande">
                  Inscrever-se
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </button>
              </form>

              <p className="texto-claro-70" style={{ fontSize: '0.875rem', marginTop: 'var(--space-md)' }}>
                Prometemos não enviar spam. Apenas conteúdo relevante para sua carreira.
              </p>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{
              background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-2xl)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%'
              }}></div>

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 className="texto-claro" style={{ marginBottom: 'var(--space-md)' }}>
                  Precisa de Orientação Jurídica?
                </h2>
                <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', maxWidth: '600px', margin: '0 auto var(--space-xl)', lineHeight: 1.8 }}>
                  Associados ao SINMEVACO têm acesso a apoio jurídico especializado e gratuito.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/associe-se" className="botao botao-branco botao-grande" style={{ color: 'var(--laranja-500)' }}>
                    Associe-se Agora
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </Link>
                  <Link href="/juridico" className="botao botao-outline-claro botao-grande">
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/5531997178316"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flutuante"
        aria-label="WhatsApp"
      >
        💬
      </a>

      <style jsx>{`
        @media (min-width: 768px) {
          .destaques-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .destaques-grid article {
            grid-template-columns: 1fr 1fr !important;
          }
          .destaque-imagem {
            aspect-ratio: auto !important;
            min-height: 280px;
          }
        }
        input::placeholder {
          color: rgba(255,255,255,0.7);
        }
      `}</style>
    </main>
  )
}
