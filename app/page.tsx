'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ============================================================
// HOME PAGE - LAYOUT 100% NOVO - SINMEVACO
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

const faqData = [
  { pergunta: 'Como faço para me associar ao SINMEVACO?', resposta: 'O processo é simples e rápido! Basta clicar no botão "Associe-se", preencher o formulário com seus dados e nossa equipe entrará em contato para finalizar sua filiação.' },
  { pergunta: 'Quais são os benefícios de ser associado?', resposta: 'Associados têm acesso a apoio jurídico especializado, descontos de até 45% em educação, economia de até 20% na conta de energia, programa de indicação com 1 mês grátis, e muito mais!' },
  { pergunta: 'O apoio jurídico é gratuito para associados?', resposta: 'Sim! Oferecemos orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical. Para ações judiciais, temos condições especiais com escritórios parceiros.' },
  { pergunta: 'O SINMEVACO atua em quais cidades?', resposta: 'Atuamos em toda a região do Vale do Aço, incluindo Ipatinga, Timóteo, Coronel Fabriciano e municípios vizinhos.' },
  { pergunta: 'Como funciona o Programa de Indicação?', resposta: 'Indique um colega médico para se associar e ganhe 1 mês de anuidade grátis por indicação. Não há limite de indicações!' },
  { pergunta: 'Posso cancelar minha filiação a qualquer momento?', resposta: 'Sim, você pode solicitar o cancelamento quando desejar. Basta entrar em contato conosco pelo WhatsApp ou e-mail.' }
]

const beneficios = [
  { icone: '🎓', titulo: 'Educação', desconto: 'até 45%', desc: 'Graduação e Pós-Graduação' },
  { icone: '⚡', titulo: 'Energia', desconto: 'até 20%', desc: 'Na conta de luz' },
  { icone: '⚖️', titulo: 'Jurídico', desconto: 'Gratuito', desc: 'Orientação especializada' },
  { icone: '🛡️', titulo: 'Seguros', desconto: 'até 30%', desc: 'Vida e automóvel' }
]

export default function HomePage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.resposta
      }
    }))
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============ HERO SECTION ============ */}
      <section className="hero-verde" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: 'var(--space-3xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="hero-grid">
            {/* Conteúdo */}
            <AnimarAoScroll>
              <div style={{ textAlign: 'center' }} className="hero-content">
                <span className="etiqueta etiqueta-clara" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
                  ✨ Há mais de 32 anos defendendo médicos
                </span>

                <h1 className="texto-claro" style={{ marginBottom: 'var(--space-lg)' }}>
                  Sindicato dos Médicos do{' '}
                  <span className="texto-gradiente">Vale do Aço</span>
                </h1>

                <p className="texto-claro-90" style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-xl)',
                  lineHeight: 1.8
                }}>
                  Defendendo seus direitos, fortalecendo sua carreira e oferecendo benefícios exclusivos para médicos de Ipatinga, Timóteo e Coronel Fabriciano.
                </p>

                <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-2xl)' }}>
                  <Link href="/associe-se" className="botao botao-laranja botao-grande">
                    Associe-se Agora
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </Link>
                  <Link href="/beneficios" className="botao botao-outline-claro botao-grande">
                    Ver Benefícios
                  </Link>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'var(--space-lg)',
                  paddingTop: 'var(--space-xl)',
                  borderTop: '1px solid rgba(255,255,255,0.2)'
                }}>
                  {[
                    { numero: '32+', label: 'Anos de história' },
                    { numero: '500+', label: 'Médicos atendidos' },
                    { numero: '100%', label: 'Compromisso' }
                  ].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div className="texto-claro" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1 }}>{stat.numero}</div>
                      <div className="texto-claro-70" style={{ fontSize: '0.9375rem', marginTop: '0.5rem' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimarAoScroll>

            {/* Imagem Hero - Desktop */}
            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{ position: 'relative' }} className="hero-image-container">
                <div style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--sombra-forte)'
                }}>
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg"
                    alt="Eventos SINMEVACO"
                    width={600}
                    height={500}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Floating Card */}
                <div className="flutuar" style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-md) var(--space-lg)',
                  boxShadow: 'var(--sombra-forte)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>⚖️</div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--verde-500)' }}>Gratuito</div>
                    <div style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem' }}>Apoio Jurídico</div>
                  </div>
                </div>

                {/* Badge */}
                <div className="pulsar" style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'linear-gradient(145deg, var(--laranja-500), var(--laranja-400))',
                  color: 'white',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)'
                }}>
                  1 mês grátis na indicação!
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>

        {/* Wave Bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--branco-soft)"/>
          </svg>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '140px', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
          <div className="flutuar" style={{ opacity: 0.7 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ============ SOBRE O SINMEVACO ============ */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                Quem Somos
              </span>
              <h2 className="texto-escuro">
                Conheça o <span className="texto-gradiente">SINMEVACO</span>
              </h2>
              <p style={{ color: 'var(--cinza-500)', maxWidth: '700px', margin: 'var(--space-md) auto 0' }}>
                Há mais de 32 anos trabalhando pela valorização e defesa dos médicos do Vale do Aço
              </p>
              <div className="divisor" style={{ marginTop: 'var(--space-lg)' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {[
              { icone: '🏛️', titulo: 'Nossa História', desc: 'Fundado há mais de três décadas, o SINMEVACO nasceu da necessidade de unir os médicos do Vale do Aço em defesa de seus direitos.' },
              { icone: '🛡️', titulo: 'Defesa da Classe', desc: 'Atuamos incansavelmente na defesa dos direitos trabalhistas, éticos e profissionais de todos os médicos da região.' },
              { icone: '⚖️', titulo: 'Ética e Transparência', desc: 'Nossa gestão é pautada pela ética, transparência e pelo compromisso com os interesses de cada associado.' }
            ].map((item, i) => (
              <AnimarAoScroll key={i} atraso={i * 0.1}>
                <div className="card-novo" style={{ textAlign: 'center', height: '100%', padding: 'var(--space-xl)' }}>
                  <div className="icone-box" style={{ margin: '0 auto var(--space-lg)' }}>
                    <span>{item.icone}</span>
                  </div>
                  <h3 style={{ color: 'var(--preto-soft)', marginBottom: 'var(--space-sm)' }}>{item.titulo}</h3>
                  <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRESIDENTE ============ */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="presidente-grid">
            <AnimarAoScroll classe="animar-esquerda">
              <div className="presidente-content">
                <span className="etiqueta" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                  Liderança
                </span>
                <h2 className="texto-escuro" style={{ marginBottom: 'var(--space-lg)' }}>
                  Dr. Carlos Henrique<br />
                  <span className="texto-gradiente">Quintão Valeriano</span>
                </h2>
                <p style={{ color: 'var(--cinza-500)', marginBottom: 'var(--space-lg)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                  Presidente do SINMEVACO, o Dr. Carlos Henrique lidera nossa instituição com
                  dedicação e compromisso inabaláveis com a classe médica do Vale do Aço.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                  {[
                    'Médico com vasta experiência na região',
                    'Defensor incansável dos direitos da classe',
                    'Liderança ativa nas negociações coletivas',
                    'Comprometido com cada associado'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span style={{ color: 'var(--cinza-700)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <blockquote style={{
                  background: 'var(--cinza-50)',
                  borderLeft: '4px solid var(--verde-500)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  margin: 0
                }}>
                  <p style={{ color: 'var(--cinza-700)', fontStyle: 'italic', marginBottom: 'var(--space-sm)', lineHeight: 1.8 }}>
                    "Nossa missão é garantir que cada médico do Vale do Aço tenha seus direitos respeitados e sua carreira valorizada."
                  </p>
                  <cite style={{ color: 'var(--verde-500)', fontWeight: 600, fontStyle: 'normal' }}>
                    — Dr. Carlos Henrique Quintão Valeriano
                  </cite>
                </blockquote>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--sombra-forte)'
                }}>
                  <Image
                    src="/images/presidente.jpg"
                    alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                    width={600}
                    height={700}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>

                {/* Badge Presidente */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '20px',
                  right: '20px',
                  background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-lg)',
                  textAlign: 'center',
                  boxShadow: 'var(--sombra-forte)'
                }}>
                  <div className="texto-claro" style={{ fontWeight: 700, fontSize: '1.125rem' }}>Presidente do SINMEVACO</div>
                  <div className="texto-claro-80" style={{ fontSize: '0.9375rem' }}>Gestão comprometida com você</div>
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMA DE INDICAÇÃO ============ */}
      <section className="secao" style={{
        background: 'linear-gradient(145deg, var(--laranja-600), var(--laranja-500), var(--laranja-400))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', border: '3px solid rgba(255,255,255,0.15)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '400px', height: '400px', border: '3px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>

        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="indicacao-grid">
            <AnimarAoScroll>
              <div className="indicacao-content">
                <span className="etiqueta etiqueta-clara" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
                  🎁 Novidade Exclusiva
                </span>
                <h2 className="texto-claro" style={{ marginBottom: 'var(--space-lg)' }}>
                  Programa de Indicação
                </h2>
                <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>
                  Indique colegas médicos para se associarem e ganhe <strong>1 mês de anuidade grátis</strong> por cada indicação bem-sucedida. Sem limites!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                  {[
                    { num: '1', texto: 'Indique um colega' },
                    { num: '2', texto: 'Ele se associa' },
                    { num: '3', texto: 'Você ganha 1 mês' }
                  ].map((step, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-lg) var(--space-md)',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'white',
                        color: 'var(--laranja-500)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        margin: '0 auto var(--space-sm)'
                      }}>{step.num}</div>
                      <div className="texto-claro" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>{step.texto}</div>
                    </div>
                  ))}
                </div>

                <Link href="/associe-se" className="botao botao-branco botao-grande">
                  Quero Participar
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div className="card-glass" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
                <div className="texto-claro" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>∞</div>
                <div className="texto-claro" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-xl)' }}>Indicações Ilimitadas</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  {[
                    '1 indicação = 1 mês grátis',
                    '5 indicações = 5 meses grátis',
                    '12 indicações = 1 ano grátis!'
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-md)',
                      background: 'rgba(255,255,255,0.12)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-md) var(--space-lg)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--laranja-500)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="texto-claro" style={{ fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ============ APOIO JURÍDICO ============ */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="juridico-grid">
            <AnimarAoScroll>
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--sombra-forte)'
                }}>
                  <Image
                    src="/images/equipe-juridica.jpg"
                    alt="Apoio Jurídico SINMEVACO - Presidente com Equipe Jurídica"
                    width={600}
                    height={500}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>

                {/* Stats Overlay */}
                <div className="flutuar" style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-lg) var(--space-xl)',
                  boxShadow: 'var(--sombra-forte)'
                }}>
                  <div className="texto-claro" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>95%</div>
                  <div className="texto-claro-80" style={{ fontSize: '0.9375rem' }}>Taxa de sucesso</div>
                </div>
              </div>
            </AnimarAoScroll>

            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div className="juridico-content">
                <span className="etiqueta" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                  Apoio Jurídico
                </span>
                <h2 className="texto-escuro" style={{ marginBottom: 'var(--space-lg)' }}>
                  Assessoria Jurídica <span className="texto-gradiente">Especializada</span>
                </h2>
                <p style={{ color: 'var(--cinza-500)', marginBottom: 'var(--space-xl)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                  Conte com apoio jurídico especializado e gratuito para associados. Nossa equipe está preparada para defender seus direitos.
                </p>

                <div className="grade-2" style={{ marginBottom: 'var(--space-xl)' }}>
                  {[
                    { icone: '⚖️', titulo: 'Trabalhista', desc: 'Defesa em ações e contratos' },
                    { icone: '🏛️', titulo: 'Administrativo', desc: 'Processos e concursos' },
                    { icone: '🤝', titulo: 'Sindical', desc: 'Negociações coletivas' },
                    { icone: '📋', titulo: 'Ético', desc: 'Defesa junto ao CRM' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-md)',
                      padding: 'var(--space-md)',
                      background: 'var(--cinza-50)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{ fontSize: '1.75rem' }}>{item.icone}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--preto-soft)' }}>{item.titulo}</div>
                        <div style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/juridico" className="botao botao-verde">
                  Saiba Mais
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* ============ BENEFÍCIOS ============ */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                Vantagens Exclusivas
              </span>
              <h2 className="texto-claro">
                Benefícios para <span className="texto-gradiente">Associados</span>
              </h2>
              <p className="texto-claro-90" style={{ maxWidth: '700px', margin: 'var(--space-md) auto 0' }}>
                Aproveite descontos exclusivos e vantagens que fazem diferença no seu dia a dia
              </p>
              <div className="divisor divisor-claro" style={{ marginTop: 'var(--space-lg)' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-4">
            {beneficios.map((b, i) => (
              <AnimarAoScroll key={i} atraso={i * 0.1}>
                <div className="card-glass" style={{ textAlign: 'center', padding: 'var(--space-xl)', height: '100%' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--space-md)' }}>{b.icone}</span>
                  <h3 className="texto-claro" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{b.titulo}</h3>
                  <div className="texto-gradiente" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{b.desconto}</div>
                  <p className="texto-claro-80" style={{ fontSize: '0.9375rem' }}>{b.desc}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>

          <AnimarAoScroll atraso={0.4}>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
              <Link href="/beneficios" className="botao botao-branco botao-grande">
                Ver Todos os Benefícios
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* ============ REGIÃO DE ATUAÇÃO ============ */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                Cobertura Regional
              </span>
              <h2 className="texto-escuro">
                Onde <span className="texto-gradiente">Atuamos</span>
              </h2>
              <p style={{ color: 'var(--cinza-500)', maxWidth: '600px', margin: 'var(--space-md) auto 0' }}>
                Representamos médicos de toda a região do Vale do Aço
              </p>
              <div className="divisor" style={{ marginTop: 'var(--space-lg)' }}></div>
            </div>
          </AnimarAoScroll>

          <div className="grade-3">
            {[
              { cidade: 'Ipatinga', icone: '🏙️', desc: 'Sede principal do SINMEVACO' },
              { cidade: 'Timóteo', icone: '🌆', desc: 'Atendimento completo' },
              { cidade: 'Coronel Fabriciano', icone: '🏛️', desc: 'Suporte integral' }
            ].map((local, i) => (
              <AnimarAoScroll key={i} atraso={i * 0.1}>
                <div className="stat-card" style={{ cursor: 'pointer' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--space-md)' }}>{local.icone}</span>
                  <h3 className="texto-claro" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{local.cidade}</h3>
                  <p className="texto-claro-80">{local.desc}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
                Dúvidas Frequentes
              </span>
              <h2 className="texto-escuro">
                Perguntas <span className="texto-gradiente">Frequentes</span>
              </h2>
              <p style={{ color: 'var(--cinza-500)', maxWidth: '600px', margin: 'var(--space-md) auto 0' }}>
                Tire suas principais dúvidas sobre o SINMEVACO
              </p>
              <div className="divisor" style={{ marginTop: 'var(--space-lg)' }}></div>
            </div>
          </AnimarAoScroll>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((faq, i) => (
              <AnimarAoScroll key={i} atraso={i * 0.05}>
                <div className={`faq-item ${faqAberto === i ? 'active' : ''}`} style={{ marginBottom: 'var(--space-md)' }}>
                  <div className="faq-question" onClick={() => setFaqAberto(faqAberto === i ? null : i)}>
                    <h3>{faq.pergunta}</h3>
                    <div className="faq-toggle">+</div>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <p>{faq.resposta}</p>
                    </div>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="secao cta-verde" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="texto-claro" style={{ marginBottom: 'var(--space-lg)' }}>
                Faça Parte do SINMEVACO
              </h2>
              <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>
                Junte-se a centenas de médicos que já contam com nosso apoio jurídico, benefícios exclusivos e representação forte no Vale do Aço.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-gigante">
                  Associe-se Agora
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </Link>
                <a
                  href="https://wa.me/5531997178316?text=Olá! Quero saber mais sobre o SINMEVACO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao botao-outline-claro botao-gigante"
                >
                  💬 Falar no WhatsApp
                </a>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* Estilos responsivos inline */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-content {
            text-align: left !important;
          }
          .hero-content > div:last-child {
            justify-content: flex-start !important;
          }
          .presidente-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .indicacao-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .juridico-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .hero-image-container {
            display: none;
          }
        }
      `}</style>
    </main>
  )
}
