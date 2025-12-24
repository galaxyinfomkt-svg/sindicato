'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// CONTATO - LAYOUT 100% NOVO - SINMEVACO
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

// Dados dos canais de contato
const canaisContato = [
  {
    icone: '📱',
    titulo: 'WhatsApp',
    subtitulo: 'Resposta rápida',
    info: '(31) 99717-8316',
    link: 'https://wa.me/5531997178316',
    destaque: true,
    cor: '#25D366'
  },
  {
    icone: '📞',
    titulo: 'Telefone',
    subtitulo: 'Atendimento direto',
    info: '(31) 99717-8316',
    link: 'tel:+5531997178316',
    destaque: false,
    cor: 'var(--verde-500)'
  },
  {
    icone: '✉️',
    titulo: 'E-mail',
    subtitulo: 'Envie sua mensagem',
    info: 'sinmevaco@gmail.com',
    link: 'mailto:sinmevaco@gmail.com',
    destaque: false,
    cor: 'var(--laranja-500)'
  },
  {
    icone: '📍',
    titulo: 'Localização',
    subtitulo: 'Vale do Aço - MG',
    info: 'Ipatinga, Timóteo, Coronel Fabriciano',
    link: '#mapa',
    destaque: false,
    cor: 'var(--verde-400)'
  }
]

// FAQ
const faqContato = [
  {
    pergunta: 'Qual o horário de atendimento do SINMEVACO?',
    resposta: 'Nosso atendimento funciona de segunda a sexta-feira, das 8h às 18h. Para urgências jurídicas, temos plantão via WhatsApp.'
  },
  {
    pergunta: 'Como posso me associar ao sindicato?',
    resposta: 'Você pode se associar diretamente pelo nosso site na página Associe-se, ou entrar em contato conosco via WhatsApp para um atendimento personalizado.'
  },
  {
    pergunta: 'O atendimento jurídico é gratuito para associados?',
    resposta: 'Sim! Todos os associados têm direito a orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical.'
  },
  {
    pergunta: 'Posso agendar uma reunião presencial?',
    resposta: 'Sim, agendamentos podem ser feitos pelo WhatsApp ou telefone. Nossa equipe está pronta para atendê-lo presencialmente quando necessário.'
  }
]

export default function ContatoPage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)
  const [formEnviado, setFormEnviado] = useState(false)

  const toggleFaq = (index: number) => {
    setFaqAberto(faqAberto === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormEnviado(true)
    setTimeout(() => setFormEnviado(false), 5000)
  }

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-verde" style={{ minHeight: '50vh', paddingTop: 'clamp(120px, 18vw, 160px)', paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                💬 Estamos aqui para você
              </span>

              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Fale com o <span className="texto-gradiente">SINMEVACO</span>
              </h1>

              <p className="texto-claro-90" style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.8
              }}>
                Sua voz importa. Entre em contato conosco e conte com o apoio
                do sindicato que defende os médicos do Vale do Aço há mais de 32 anos.
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

      {/* ========== CANAIS DE CONTATO ========== */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                📞 Canais de Atendimento
              </span>
              <h2 className="texto-escuro">
                Escolha a melhor forma de <span className="texto-gradiente">falar conosco</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-4">
            {canaisContato.map((canal, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <a
                  href={canal.link}
                  target={canal.link.startsWith('http') ? '_blank' : undefined}
                  rel={canal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-novo link-limpo"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: 'var(--space-xl) var(--space-lg)',
                    border: canal.destaque ? `2px solid ${canal.cor}` : undefined,
                    background: canal.destaque ? 'linear-gradient(145deg, #f0fdf4, #ffffff)' : undefined
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: 'var(--space-md)',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                  }}>
                    {canal.icone}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    color: 'var(--preto-soft)',
                    marginBottom: '0.5rem'
                  }}>
                    {canal.titulo}
                  </h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--cinza-500)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    {canal.subtitulo}
                  </p>

                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: canal.cor
                  }}>
                    {canal.info}
                  </p>

                  {canal.destaque && (
                    <span style={{
                      display: 'inline-block',
                      marginTop: 'var(--space-md)',
                      padding: '0.5rem 1rem',
                      background: canal.cor,
                      color: 'white',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8125rem',
                      fontWeight: 600
                    }}>
                      Recomendado
                    </span>
                  )}
                </a>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FORMULÁRIO + INFO ========== */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
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
                    ✍️ Envie sua mensagem
                  </span>
                  <h2 className="texto-escuro" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                    Formulário de Contato
                  </h2>
                  <p style={{ color: 'var(--cinza-500)', marginTop: '0.75rem' }}>
                    Preencha os campos abaixo e retornaremos em até 24 horas úteis.
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
                    <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>✅</div>
                    <h3 style={{ color: 'var(--verde-600)', marginBottom: '0.5rem' }}>
                      Mensagem Enviada!
                    </h3>
                    <p style={{ color: 'var(--verde-500)' }}>
                      Obrigado pelo contato. Nossa equipe responderá em breve.
                    </p>
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
                        <label className="form-label">E-mail *</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="form-grupo">
                        <label className="form-label">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="(31) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="form-grupo">
                      <label className="form-label">Assunto *</label>
                      <select className="form-input form-select" required>
                        <option value="">Selecione o assunto</option>
                        <option value="filiacao">Quero me filiar</option>
                        <option value="juridico">Atendimento jurídico</option>
                        <option value="beneficios">Dúvidas sobre benefícios</option>
                        <option value="imprensa">Imprensa</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>

                    <div className="form-grupo">
                      <label className="form-label">Mensagem *</label>
                      <textarea
                        className="form-input form-textarea"
                        placeholder="Descreva como podemos ajudá-lo..."
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="botao botao-verde botao-grande" style={{ width: '100%' }}>
                      Enviar Mensagem
                      <span style={{ marginLeft: '0.5rem' }}>→</span>
                    </button>
                  </form>
                )}
              </div>
            </AnimarAoScroll>

            {/* Coluna de Informações */}
            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

                {/* Card WhatsApp Destaque */}
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
                      Atendimento via WhatsApp
                    </h3>
                    <p style={{ opacity: 0.9, marginBottom: 'var(--space-lg)', lineHeight: 1.7 }}>
                      Prefere uma resposta rápida? Fale conosco pelo WhatsApp
                      e receba atendimento imediato da nossa equipe.
                    </p>
                    <a
                      href="https://wa.me/5531997178316"
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

                {/* Card Horário */}
                <div className="card-novo card-borda-esquerda" style={{ padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                    <div className="icone-box-pequeno" style={{
                      background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      flexShrink: 0
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🕐</span>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--preto-soft)', marginBottom: '0.5rem' }}>
                        Horário de Atendimento
                      </h4>
                      <p style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                        <strong>Segunda a Sexta:</strong> 8h às 18h<br />
                        <strong>Plantão WhatsApp:</strong> Urgências jurídicas
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Região */}
                <div className="card-novo card-borda-esquerda" style={{
                  padding: 'var(--space-lg)',
                  borderLeftColor: 'var(--laranja-500)'
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
                      <span style={{ fontSize: '1.5rem' }}>📍</span>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--preto-soft)', marginBottom: '0.5rem' }}>
                        Área de Atuação
                      </h4>
                      <p style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                        Ipatinga, Timóteo, Coronel Fabriciano<br />
                        e toda a região do Vale do Aço - MG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="card-novo" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--preto-soft)', marginBottom: 'var(--space-md)' }}>
                    Siga-nos nas Redes
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)' }}>
                    <a
                      href="https://instagram.com/sinmevaco"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'linear-gradient(145deg, #E1306C, #F56040)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      }}
                    >
                      📸
                    </a>
                    <a
                      href="https://facebook.com/sinmevaco"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'linear-gradient(145deg, #1877F2, #0C5DC7)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      }}
                    >
                      👍
                    </a>
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
                ❓ Dúvidas Frequentes
              </span>
              <h2 className="texto-escuro">
                Perguntas sobre <span className="texto-gradiente">Contato</span>
              </h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqContato.map((item, index) => (
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
                🤝 Faça Parte
              </span>

              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Ainda não é associado?
              </h2>

              <p className="texto-claro-90" style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-xl)',
                lineHeight: 1.8
              }}>
                Junte-se a milhares de médicos que confiam no SINMEVACO
                para defender seus direitos e conquistar benefícios exclusivos.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">
                  Quero me Associar
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
                <Link href="/beneficios" className="botao botao-outline-claro botao-grande">
                  Ver Benefícios
                </Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

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
