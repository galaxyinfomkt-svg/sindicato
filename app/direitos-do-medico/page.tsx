'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// DIREITOS DO MÉDICO - LAYOUT 100% NOVO - SINMEVACO
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

const direitosTrabalhistas = [
  { icone: '💰', titulo: 'Piso Salarial', descricao: 'Direito ao piso salarial da categoria conforme acordos coletivos.' },
  { icone: '⏰', titulo: 'Jornada de Trabalho', descricao: 'Limites de carga horária e direito a descanso entre plantões.' },
  { icone: '🏖️', titulo: 'Férias e 13º', descricao: 'Férias remuneradas, 13º salário e demais benefícios trabalhistas.' },
  { icone: '🏥', titulo: 'Condições de Trabalho', descricao: 'Ambiente seguro com EPIs e estrutura adequada para exercer a profissão.' }
]

const direitosPrevidenciarios = [
  { icone: '👴', titulo: 'Aposentadoria Especial', descricao: 'Direito a aposentadoria especial por exposição a agentes nocivos.' },
  { icone: '🤕', titulo: 'Auxílio-Doença', descricao: 'Proteção em caso de afastamento por problemas de saúde.' },
  { icone: '👶', titulo: 'Licença-Maternidade', descricao: 'Direito à licença-maternidade de 120 a 180 dias conforme a legislação.' },
  { icone: '🛡️', titulo: 'Seguro de Vida', descricao: 'Cobertura para o médico e sua família em casos de invalidez ou falecimento.' }
]

const faqDireitos = [
  { pergunta: 'O médico tem direito a aposentadoria especial?', resposta: 'Sim, médicos que trabalham em condições insalubres podem ter direito à aposentadoria especial com tempo reduzido de contribuição.' },
  { pergunta: 'Qual a jornada máxima de trabalho do médico?', resposta: 'A jornada varia conforme o vínculo, mas há limites estabelecidos em acordos coletivos. Entre plantões deve haver descanso mínimo.' },
  { pergunta: 'O sindicato pode me ajudar em processos trabalhistas?', resposta: 'Sim! O SINMEVACO oferece apoio jurídico completo para questões trabalhistas, administrativas e sindicais.' },
  { pergunta: 'Tenho direito a adicional de insalubridade?', resposta: 'Médicos expostos a agentes biológicos, químicos ou físicos nocivos têm direito ao adicional de insalubridade.' }
]

export default function DireitosMedicoPage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)

  return (
    <main>
      {/* HERO */}
      <section className="hero-verde" style={{ minHeight: '60vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                ⚖️ Seus Direitos
              </span>
              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>
                Direitos do <span className="texto-gradiente">Médico</span>
              </h1>
              <p className="texto-claro-90" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                Conheça seus direitos trabalhistas, previdenciários e éticos. O SINMEVACO está aqui para defender e orientar você.
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

      {/* DIREITOS TRABALHISTAS */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>💼 Trabalhistas</span>
              <h2 className="texto-escuro">Direitos <span className="texto-gradiente">Trabalhistas</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-2">
            {direitosTrabalhistas.map((item, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo card-borda-esquerda" style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', padding: 'var(--space-xl)' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>{item.icone}</div>
                  <div>
                    <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.titulo}</h3>
                    <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{item.descricao}</p>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DIREITOS PREVIDENCIÁRIOS */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>🏛️ Previdenciários</span>
              <h2 className="texto-claro">Direitos Previdenciários</h2>
              <div className="divisor divisor-claro" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-2">
            {direitosPrevidenciarios.map((item, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-glass" style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', padding: 'var(--space-xl)' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{item.icone}</div>
                  <div>
                    <h3 className="texto-claro" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.titulo}</h3>
                    <p className="texto-claro-80" style={{ lineHeight: 1.8 }}>{item.descricao}</p>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEFESA PROFISSIONAL */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>🛡️ Defesa Profissional</span>
              <h2 className="texto-escuro">Proteção <span className="texto-gradiente">Completa</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-3">
            {[
              { icone: '⚖️', titulo: 'Processos Éticos', desc: 'Acompanhamento em processos junto ao CRM e conselhos de ética.' },
              { icone: '📋', titulo: 'Defesa Administrativa', desc: 'Representação em processos administrativos junto a instituições.' },
              { icone: '🤝', titulo: 'Negociação Coletiva', desc: 'Participação nas negociações por melhores condições de trabalho.' }
            ].map((item, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{ textAlign: 'center', padding: 'var(--space-xl)', height: '100%' }}>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto var(--space-lg)', background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.25rem' }}>{item.icone}</div>
                  <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.titulo}</h3>
                  <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>❓ Dúvidas</span>
              <h2 className="texto-escuro">Perguntas <span className="texto-gradiente">Frequentes</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqDireitos.map((item, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className={`faq-item ${faqAberto === index ? 'active' : ''}`} style={{ marginBottom: 'var(--space-md)' }}>
                  <div className="faq-question" onClick={() => setFaqAberto(faqAberto === index ? null : index)}>
                    <h3>{item.pergunta}</h3>
                    <div className="faq-toggle">+</div>
                  </div>
                  <div className="faq-answer"><div className="faq-answer-inner"><p>{item.resposta}</p></div></div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="secao cta-verde" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>🆘 Precisa de Ajuda?</span>
              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Conte com nosso apoio jurídico</h2>
              <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>
                O SINMEVACO oferece assessoria jurídica especializada para defender seus direitos.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/juridico" className="botao botao-laranja botao-grande">Apoio Jurídico<span style={{ marginLeft: '0.5rem' }}>→</span></Link>
                <Link href="/contato" className="botao botao-outline-claro botao-grande">Fale Conosco</Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      <a href="https://wa.me/5531997178316" target="_blank" rel="noopener noreferrer" className="whatsapp-flutuante" aria-label="WhatsApp">💬</a>
    </main>
  )
}
