'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// ASSOCIE-SE - LAYOUT 100% NOVO - SINMEVACO
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

// Benefícios
const beneficios = [
  {
    icone: '⚖️',
    titulo: 'Apoio Jurídico',
    descricao: 'Assessoria jurídica gratuita em questões trabalhistas, administrativas e sindicais.',
    destaque: true
  },
  {
    icone: '🎓',
    titulo: 'Educação',
    descricao: 'Até 45% de desconto em graduação, pós-graduação e cursos de especialização.',
    destaque: false
  },
  {
    icone: '⚡',
    titulo: 'Economia de Energia',
    descricao: 'Até 20% de economia na conta de luz com nosso programa exclusivo.',
    destaque: false
  },
  {
    icone: '🎁',
    titulo: 'Programa de Indicação',
    descricao: 'Indique colegas e ganhe 1 mês grátis de mensalidade para cada indicação.',
    destaque: true
  },
  {
    icone: '🏥',
    titulo: 'Saúde e Bem-estar',
    descricao: 'Descontos em academias, clínicas e serviços de saúde parceiros.',
    destaque: false
  },
  {
    icone: '🛡️',
    titulo: 'Defesa Profissional',
    descricao: 'Representação e acompanhamento em processos éticos e disciplinares.',
    destaque: false
  }
]

// Passos para se associar
const passos = [
  {
    numero: '01',
    titulo: 'Preencha o Formulário',
    descricao: 'Complete seus dados no formulário abaixo ou entre em contato pelo WhatsApp.'
  },
  {
    numero: '02',
    titulo: 'Análise Rápida',
    descricao: 'Nossa equipe analisa sua solicitação e entra em contato em até 24 horas.'
  },
  {
    numero: '03',
    titulo: 'Seja Bem-vindo!',
    descricao: 'Após aprovação, você já pode usufruir de todos os benefícios exclusivos.'
  }
]

// FAQ
const faqAssociacao = [
  {
    pergunta: 'Quem pode se associar ao SINMEVACO?',
    resposta: 'Podem se associar todos os médicos que atuam na região do Vale do Aço, incluindo Ipatinga, Timóteo, Coronel Fabriciano e cidades vizinhas.'
  },
  {
    pergunta: 'Qual o valor da mensalidade?',
    resposta: 'O valor da mensalidade é acessível e proporcional aos benefícios oferecidos. Entre em contato para conhecer as condições especiais de adesão.'
  },
  {
    pergunta: 'Os benefícios começam a valer imediatamente?',
    resposta: 'Sim! Assim que sua filiação é aprovada, você já pode usufruir de todos os benefícios do sindicato, incluindo apoio jurídico e descontos.'
  },
  {
    pergunta: 'Como funciona o programa de indicação?',
    resposta: 'A cada colega médico que você indicar e que se filiar ao sindicato, você ganha 1 mês grátis de mensalidade. Não há limite de indicações!'
  },
  {
    pergunta: 'Posso cancelar a qualquer momento?',
    resposta: 'Sim, você pode solicitar o cancelamento a qualquer momento. Porém, nossa taxa de satisfação é alta e temos certeza que você aproveitará muito os benefícios.'
  }
]

export default function AssociesePage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)
  const [formEnviado, setFormEnviado] = useState(false)

  const toggleFaq = (index: number) => {
    setFaqAberto(faqAberto === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormEnviado(true)
  }

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-verde" style={{ minHeight: '70vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                🎉 Oferta Especial
              </span>

              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Faça Parte do <span className="texto-gradiente">SINMEVACO</span>
              </h1>

              <p className="texto-claro-90" style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                maxWidth: '700px',
                margin: '0 auto var(--space-lg)',
                lineHeight: 1.8
              }}>
                Junte-se a milhares de médicos que confiam no sindicato
                para defender seus direitos e conquistar benefícios exclusivos.
              </p>

              {/* Destaque Programa de Indicação */}
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                maxWidth: '500px',
                margin: '0 auto var(--space-xl)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎁</div>
                <h3 className="texto-claro" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Programa de Indicação
                </h3>
                <p className="texto-claro-90" style={{ fontSize: '1rem' }}>
                  Indique colegas e ganhe <strong style={{ color: 'var(--laranja-400)' }}>1 mês grátis</strong> para cada indicação!
                </p>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#formulario" className="botao botao-laranja botao-grande">
                  Quero me Associar
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </a>
                <a href="#beneficios" className="botao botao-outline-claro botao-grande">
                  Ver Benefícios
                </a>
              </div>
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

      {/* ========== POR QUE SE ASSOCIAR ========== */}
      <section id="beneficios" className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                ✨ Vantagens Exclusivas
              </span>
              <h2 className="texto-escuro">
                Por que se <span className="texto-gradiente">associar?</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {beneficios.map((beneficio, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{
                  height: '100%',
                  padding: 'var(--space-xl)',
                  border: beneficio.destaque ? '2px solid var(--verde-400)' : undefined,
                  background: beneficio.destaque ? 'linear-gradient(145deg, #f0fdf4, #ffffff)' : undefined,
                  position: 'relative'
                }}>
                  {beneficio.destaque && (
                    <span style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '20px',
                      background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
                      color: 'white',
                      padding: '0.375rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      Destaque
                    </span>
                  )}

                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: 'var(--space-lg)',
                    boxShadow: '0 6px 20px rgba(23, 93, 59, 0.2)'
                  }}>
                    {beneficio.icone}
                  </div>

                  <h3 style={{
                    color: 'var(--preto-soft)',
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem'
                  }}>
                    {beneficio.titulo}
                  </h3>

                  <p style={{
                    color: 'var(--cinza-500)',
                    lineHeight: 1.8
                  }}>
                    {beneficio.descricao}
                  </p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>

          <AnimarAoScroll atraso={0.4}>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
              <Link href="/beneficios" className="botao botao-outline-verde">
                Ver Todos os Benefícios
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* ========== COMO FUNCIONA ========== */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                📋 Processo Simples
              </span>
              <h2 className="texto-claro">
                Como se Associar
              </h2>
              <div className="divisor divisor-claro" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {passos.map((passo, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.15}>
                <div className="card-glass" style={{
                  textAlign: 'center',
                  padding: 'var(--space-xl)',
                  height: '100%'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 'var(--space-md)'
                  }}>
                    {passo.numero}
                  </div>

                  <h3 className="texto-claro" style={{
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem'
                  }}>
                    {passo.titulo}
                  </h3>

                  <p className="texto-claro-80" style={{ lineHeight: 1.8 }}>
                    {passo.descricao}
                  </p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FORMULÁRIO ========== */}
      <section id="formulario" className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'start'
          }} className="grade-form">

            {/* Coluna do Formulário */}
            <AnimarAoScroll classe="animar-esquerda">
              <div className="card-novo" style={{ padding: 'var(--space-xl)' }}>
                <div style={{ marginBottom: 'var(--space-xl)' }}>
                  <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                    ✍️ Cadastro Rápido
                  </span>
                  <h2 className="texto-escuro" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                    Formulário de Filiação
                  </h2>
                  <p style={{ color: 'var(--cinza-500)', marginTop: '0.75rem' }}>
                    Preencha seus dados e entraremos em contato em até 24 horas.
                  </p>
                </div>

                {formEnviado ? (
                  <div style={{
                    background: 'linear-gradient(145deg, #f0fdf4, #dcfce7)',
                    border: '2px solid var(--verde-400)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-xl)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>🎉</div>
                    <h3 style={{ color: 'var(--verde-600)', marginBottom: '0.5rem' }}>
                      Solicitação Enviada!
                    </h3>
                    <p style={{ color: 'var(--verde-500)', marginBottom: 'var(--space-lg)' }}>
                      Obrigado pelo interesse! Nossa equipe entrará em contato em breve.
                    </p>
                    <a
                      href="https://wa.me/5531997178316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="botao botao-verde"
                    >
                      Falar pelo WhatsApp
                      <span style={{ marginLeft: '0.5rem' }}>💬</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-grupo">
                      <label className="form-label">Nome completo *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Dr. João Silva"
                        required
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-grid-2">
                      <div className="form-grupo">
                        <label className="form-label">CRM *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="CRM-MG 00000"
                          required
                        />
                      </div>
                      <div className="form-grupo">
                        <label className="form-label">Especialidade</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Clínica Médica"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-grid-2">
                      <div className="form-grupo">
                        <label className="form-label">E-mail *</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="form-grupo">
                        <label className="form-label">WhatsApp *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="(31) 99999-9999"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-grupo">
                      <label className="form-label">Cidade de atuação *</label>
                      <select className="form-input form-select" required>
                        <option value="">Selecione sua cidade</option>
                        <option value="ipatinga">Ipatinga</option>
                        <option value="timoteo">Timóteo</option>
                        <option value="coronel-fabriciano">Coronel Fabriciano</option>
                        <option value="outra">Outra cidade do Vale do Aço</option>
                      </select>
                    </div>

                    <div className="form-grupo">
                      <label className="form-label">Você foi indicado por algum associado?</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Nome do associado que indicou (opcional)"
                      />
                    </div>

                    <button type="submit" className="botao botao-laranja botao-grande" style={{ width: '100%' }}>
                      Enviar Solicitação
                      <span style={{ marginLeft: '0.5rem' }}>→</span>
                    </button>
                  </form>
                )}
              </div>
            </AnimarAoScroll>

            {/* Coluna de Informações */}
            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

                {/* Card WhatsApp */}
                <div style={{
                  background: 'linear-gradient(145deg, #25D366, #128C7E)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%'
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>📱</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                      Prefere WhatsApp?
                    </h3>
                    <p style={{ opacity: 0.9, marginBottom: 'var(--space-lg)', lineHeight: 1.7 }}>
                      Fale diretamente com nossa equipe e tire suas dúvidas sobre a filiação.
                    </p>
                    <a
                      href="https://wa.me/5531997178316?text=Olá! Tenho interesse em me filiar ao SINMEVACO."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="botao botao-branco"
                      style={{ color: '#25D366' }}
                    >
                      Iniciar Conversa
                      <span style={{ marginLeft: '0.5rem' }}>💬</span>
                    </a>
                  </div>
                </div>

                {/* Card Programa de Indicação */}
                <div className="card-novo card-borda-esquerda" style={{
                  padding: 'var(--space-lg)',
                  borderLeftColor: 'var(--laranja-500)',
                  borderLeftWidth: '4px'
                }}>
                  <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      flexShrink: 0
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🎁</span>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--preto-soft)', marginBottom: '0.5rem' }}>
                        Programa de Indicação
                      </h4>
                      <p style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                        Indique colegas e ganhe <strong style={{ color: 'var(--laranja-500)' }}>1 mês grátis</strong> de
                        mensalidade para cada médico que se filiar!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Estatísticas */}
                <div className="card-novo" style={{ padding: 'var(--space-lg)' }}>
                  <h4 style={{ color: 'var(--preto-soft)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
                    Por que médicos confiam no SINMEVACO
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}>
                    {[
                      { numero: '32+', label: 'Anos de história' },
                      { numero: '100%', label: 'Compromisso' },
                      { numero: '24h', label: 'Suporte jurídico' },
                      { numero: '45%', label: 'Desc. educação' }
                    ].map((stat, index) => (
                      <div key={index} style={{
                        textAlign: 'center',
                        padding: 'var(--space-sm)',
                        background: 'var(--cinza-50)',
                        borderRadius: 'var(--radius-md)'
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: 'var(--verde-500)',
                          fontFamily: 'var(--font-display)'
                        }}>
                          {stat.numero}
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--cinza-500)' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                ❓ Tire Suas Dúvidas
              </span>
              <h2 className="texto-escuro">
                Perguntas <span className="texto-gradiente">Frequentes</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqAssociacao.map((item, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div
                  className={`faq-item ${faqAberto === index ? 'active' : ''}`}
                  style={{ marginBottom: 'var(--space-md)' }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{item.pergunta}</h3>
                    <div className="faq-toggle">+</div>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <p>{item.resposta}</p>
                    </div>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="secao cta-verde" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                🚀 Não Perca Tempo
              </span>

              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Sua filiação está a um clique
              </h2>

              <p className="texto-claro-90" style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-xl)',
                lineHeight: 1.8
              }}>
                Não deixe para depois. Associe-se agora e comece a usufruir
                de todos os benefícios exclusivos do SINMEVACO.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#formulario" className="botao botao-laranja botao-grande">
                  Preencher Formulário
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </a>
                <a
                  href="https://wa.me/5531997178316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao botao-outline-claro botao-grande"
                >
                  Falar pelo WhatsApp
                </a>
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
          .grade-form {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }

        @media (max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
