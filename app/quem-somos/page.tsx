'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ============================================================
// QUEM SOMOS - LAYOUT 100% NOVO - SINMEVACO
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

// Valores do sindicato
const valores = [
  {
    icone: '⚖️',
    titulo: 'Ética Profissional',
    descricao: 'Defendemos os mais altos padrões de conduta ética na prática médica e nas relações profissionais.'
  },
  {
    icone: '🛡️',
    titulo: 'Defesa Intransigente',
    descricao: 'Lutamos incansavelmente pelos direitos trabalhistas, previdenciários e pela valorização da categoria.'
  },
  {
    icone: '🤝',
    titulo: 'União da Categoria',
    descricao: 'Fortalecemos os laços entre os médicos do Vale do Aço, promovendo solidariedade e cooperação.'
  },
  {
    icone: '📚',
    titulo: 'Educação Continuada',
    descricao: 'Investimos na formação e atualização profissional através de parcerias educacionais exclusivas.'
  },
  {
    icone: '💡',
    titulo: 'Inovação',
    descricao: 'Buscamos soluções modernas para os desafios da profissão, sempre à frente das mudanças do setor.'
  },
  {
    icone: '🌱',
    titulo: 'Sustentabilidade',
    descricao: 'Promovemos práticas sustentáveis e responsabilidade social em todas as nossas ações.'
  }
]

// Estatísticas
const estatisticas = [
  { numero: '32+', label: 'Anos de História' },
  { numero: '100%', label: 'Compromisso' },
  { numero: '3', label: 'Cidades Atendidas' },
  { numero: '24h', label: 'Suporte Jurídico' }
]

// Áreas de atuação
const areasAtuacao = [
  {
    titulo: 'Negociação Coletiva',
    descricao: 'Representamos a categoria nas negociações com hospitais, clínicas e órgãos públicos.',
    icone: '📋'
  },
  {
    titulo: 'Apoio Jurídico',
    descricao: 'Assessoria jurídica especializada em direito trabalhista, administrativo e sindical.',
    icone: '⚖️'
  },
  {
    titulo: 'Defesa Profissional',
    descricao: 'Acompanhamento em processos éticos e defesa perante conselhos e instituições.',
    icone: '🛡️'
  },
  {
    titulo: 'Benefícios Exclusivos',
    descricao: 'Parcerias que proporcionam economia em educação, saúde, energia e muito mais.',
    icone: '🎁'
  }
]

export default function QuemSomosPage() {
  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-verde" style={{ minHeight: '70vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center'
          }} className="hero-grid">

            <AnimarAoScroll>
              <div style={{ textAlign: 'center' }}>
                <span className="etiqueta etiqueta-clara" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                  🏛️ Nossa História
                </span>

                <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                  Mais de <span className="texto-gradiente">32 Anos</span> Defendendo
                  <br />os Médicos do Vale do Aço
                </h1>

                <p className="texto-claro-90" style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  maxWidth: '750px',
                  margin: '0 auto var(--space-xl)',
                  lineHeight: 1.8
                }}>
                  Desde 1992, o SINMEVACO trabalha incansavelmente pela valorização
                  profissional, condições dignas de trabalho e defesa dos direitos
                  dos médicos de Ipatinga, Timóteo, Coronel Fabriciano e região.
                </p>

                <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/diretoria" className="botao botao-branco">
                    Conheça a Diretoria
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </Link>
                  <Link href="/associe-se" className="botao botao-laranja">
                    Associe-se Agora
                  </Link>
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>

        {/* Onda decorativa */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--branco-soft)"/>
          </svg>
        </div>
      </section>

      {/* ========== ESTATÍSTICAS ========== */}
      <section style={{
        background: 'var(--branco-soft)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-3xl)'
      }}>
        <div className="wrapper">
          <div className="grade-4">
            {estatisticas.map((stat, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="stat-card">
                  <div className="stat-numero">{stat.numero}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOSSA HISTÓRIA ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center'
          }} className="grade-historia">

            <AnimarAoScroll classe="animar-esquerda">
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                boxShadow: 'var(--sombra-forte)'
              }}>
                <Image
                  src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg"
                  alt="Eventos do SINMEVACO"
                  width={600}
                  height={450}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />

                {/* Badge flutuante */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: 700,
                  boxShadow: 'var(--sombra-media)'
                }}>
                  Desde 1992
                </div>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div>
                <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  📖 Nossa Trajetória
                </span>

                <h2 className="texto-escuro" style={{ marginBottom: '1.5rem' }}>
                  Uma história de <span className="texto-gradiente">luta e conquistas</span>
                </h2>

                <p style={{
                  color: 'var(--cinza-500)',
                  marginBottom: 'var(--space-md)',
                  lineHeight: 1.9
                }}>
                  O <strong>SINMEVACO</strong> nasceu da necessidade de unir os médicos do Vale do Aço
                  em torno de causas comuns: melhores condições de trabalho, remuneração justa
                  e respeito à dignidade profissional.
                </p>

                <p style={{
                  color: 'var(--cinza-500)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: 1.9
                }}>
                  Ao longo de mais de três décadas, conquistamos vitórias importantes nas negociações
                  coletivas, ampliamos os benefícios para os associados e nos consolidamos como
                  referência na defesa dos direitos médicos na região.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--cinza-50)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>✅</div>
                    <span style={{ color: 'var(--cinza-700)', fontWeight: 500 }}>
                      Negociações<br />Coletivas
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--cinza-50)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>✅</div>
                    <span style={{ color: 'var(--cinza-700)', fontWeight: 500 }}>
                      Apoio<br />Jurídico
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--cinza-50)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>✅</div>
                    <span style={{ color: 'var(--cinza-700)', fontWeight: 500 }}>
                      Benefícios<br />Exclusivos
                    </span>
                  </div>
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== MISSÃO, VISÃO, VALORES ========== */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Padrão decorativo */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                🎯 Propósito
              </span>
              <h2 className="texto-claro" style={{ marginBottom: '1rem' }}>
                Missão, Visão e Valores
              </h2>
              <div className="divisor divisor-claro"></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            <AnimarAoScroll atraso={0.1}>
              <div className="card-glass" style={{ height: '100%' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-md)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}>🎯</div>
                <h3 className="texto-claro" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Missão
                </h3>
                <p className="texto-claro-80" style={{ lineHeight: 1.8 }}>
                  Defender intransigentemente os direitos dos médicos do Vale do Aço,
                  promovendo condições dignas de trabalho, valorização profissional
                  e o bem-estar da categoria.
                </p>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll atraso={0.2}>
              <div className="card-glass" style={{ height: '100%' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-md)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}>👁️</div>
                <h3 className="texto-claro" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Visão
                </h3>
                <p className="texto-claro-80" style={{ lineHeight: 1.8 }}>
                  Ser referência nacional em representação sindical médica,
                  reconhecido pela excelência no atendimento, inovação nas soluções
                  e efetividade na defesa dos associados.
                </p>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll atraso={0.3}>
              <div className="card-glass" style={{ height: '100%' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-md)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}>💎</div>
                <h3 className="texto-claro" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Valores
                </h3>
                <p className="texto-claro-80" style={{ lineHeight: 1.8 }}>
                  Ética, transparência, compromisso com a verdade,
                  respeito à dignidade humana, solidariedade entre colegas
                  e excelência em tudo que fazemos.
                </p>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== NOSSOS VALORES ========== */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                💪 O Que Nos Move
              </span>
              <h2 className="texto-escuro">
                Princípios que <span className="texto-gradiente">nos guiam</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {valores.map((valor, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{
                  height: '100%',
                  textAlign: 'center',
                  padding: 'var(--space-xl)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto var(--space-lg)',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.25rem',
                    boxShadow: '0 8px 24px rgba(23, 93, 59, 0.25)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {valor.icone}
                  </div>

                  <h3 style={{
                    color: 'var(--preto-soft)',
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem'
                  }}>
                    {valor.titulo}
                  </h3>

                  <p style={{
                    color: 'var(--cinza-500)',
                    lineHeight: 1.8,
                    fontSize: '0.9375rem'
                  }}>
                    {valor.descricao}
                  </p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ÁREAS DE ATUAÇÃO ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                🎯 Atuação Sindical
              </span>
              <h2 className="texto-escuro">
                Como trabalhamos <span className="texto-gradiente">por você</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-2">
            {areasAtuacao.map((area, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo card-borda-esquerda" style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  alignItems: 'flex-start',
                  padding: 'var(--space-xl)'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    flexShrink: 0,
                    boxShadow: '0 6px 20px rgba(23, 93, 59, 0.2)'
                  }}>
                    {area.icone}
                  </div>

                  <div>
                    <h3 style={{
                      color: 'var(--preto-soft)',
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem'
                    }}>
                      {area.titulo}
                    </h3>
                    <p style={{
                      color: 'var(--cinza-500)',
                      lineHeight: 1.8
                    }}>
                      {area.descricao}
                    </p>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRESIDENTE ========== */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center'
          }} className="grade-presidente">

            <AnimarAoScroll classe="animar-esquerda">
              <div style={{
                position: 'relative',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                {/* Moldura decorativa */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '15px',
                  bottom: '15px',
                  border: '4px solid var(--verde-400)',
                  borderRadius: 'var(--radius-2xl)',
                  zIndex: 0
                }}></div>

                <div style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--sombra-forte)',
                  zIndex: 1
                }}>
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                    alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                    width={400}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div>
                <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  👨‍⚕️ Liderança
                </span>

                <h2 className="texto-escuro" style={{ marginBottom: '0.5rem' }}>
                  Dr. Carlos Henrique
                </h2>
                <h3 style={{
                  color: 'var(--verde-500)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: 'var(--space-lg)'
                }}>
                  Quintão Valeriano
                </h3>

                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--cinza-700)',
                  fontWeight: 500,
                  marginBottom: 'var(--space-md)'
                }}>
                  Presidente do SINMEVACO
                </p>

                <p style={{
                  color: 'var(--cinza-500)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: 1.9
                }}>
                  À frente do sindicato, Dr. Carlos Henrique lidera com dedicação e
                  compromisso a luta pelos direitos dos médicos do Vale do Aço.
                  Sua gestão é marcada pela transparência, proximidade com os associados
                  e busca constante por melhores condições para a categoria.
                </p>

                <blockquote style={{
                  background: 'var(--branco)',
                  borderLeft: '4px solid var(--verde-500)',
                  padding: 'var(--space-lg)',
                  borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
                  fontStyle: 'italic',
                  color: 'var(--cinza-700)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-lg)'
                }}>
                  &ldquo;Nosso compromisso é defender cada médico, em cada batalha,
                  para que a profissão seja exercida com dignidade e respeito.&rdquo;
                </blockquote>

                <Link href="/diretoria" className="botao botao-verde">
                  Conheça Toda a Diretoria
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== REGIÃO DE ATUAÇÃO ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                📍 Onde Atuamos
              </span>
              <h2 className="texto-escuro">
                Região do <span className="texto-gradiente">Vale do Aço</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {['Ipatinga', 'Timóteo', 'Coronel Fabriciano'].map((cidade, index) => (
              <AnimarAoScroll key={cidade} atraso={index * 0.15}>
                <div style={{
                  background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-20%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%'
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>📍</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{cidade}</h3>
                    <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>Minas Gerais</p>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>

          <AnimarAoScroll atraso={0.4}>
            <p style={{
              textAlign: 'center',
              color: 'var(--cinza-500)',
              marginTop: 'var(--space-xl)',
              maxWidth: '700px',
              margin: 'var(--space-xl) auto 0',
              lineHeight: 1.8
            }}>
              Nossa atuação abrange toda a região metropolitana do Vale do Aço,
              atendendo médicos que atuam em hospitais, clínicas, UBS e demais
              estabelecimentos de saúde.
            </p>
          </AnimarAoScroll>
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
                Junte-se a nós nessa luta
              </h2>

              <p className="texto-claro-90" style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-xl)',
                lineHeight: 1.8
              }}>
                Seja parte do sindicato que há mais de 32 anos defende
                os interesses dos médicos do Vale do Aço com dedicação e resultados.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">
                  Quero me Associar
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
                <Link href="/contato" className="botao botao-outline-claro botao-grande">
                  Fale Conosco
                </Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .grade-historia,
          .grade-presidente {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </main>
  )
}
