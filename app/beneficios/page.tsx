'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// BENEFÍCIOS - LAYOUT 100% NOVO - SINMEVACO
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

const beneficiosPrincipais = [
  { icone: '⚖️', titulo: 'Apoio Jurídico', descricao: 'Assessoria jurídica gratuita em questões trabalhistas, administrativas e sindicais.', destaque: 'Gratuito', cor: 'var(--verde-500)' },
  { icone: '🎓', titulo: 'Educação', descricao: 'Até 45% de desconto em graduação, pós-graduação e cursos de especialização em instituições parceiras.', destaque: 'Até 45%', cor: 'var(--laranja-500)' },
  { icone: '⚡', titulo: 'Economia de Energia', descricao: 'Programa exclusivo que proporciona até 20% de economia na conta de luz.', destaque: 'Até 20%', cor: 'var(--verde-400)' },
  { icone: '🎁', titulo: 'Programa de Indicação', descricao: 'Indique colegas médicos e ganhe 1 mês grátis de mensalidade para cada indicação.', destaque: '1 mês grátis', cor: 'var(--laranja-400)' }
]

const outrosBeneficios = [
  { icone: '🏥', titulo: 'Saúde e Bem-estar', descricao: 'Descontos em academias, clínicas e serviços de saúde parceiros.' },
  { icone: '🛡️', titulo: 'Defesa Profissional', descricao: 'Representação e acompanhamento em processos éticos e disciplinares.' },
  { icone: '📰', titulo: 'Informação', descricao: 'Acesso a conteúdos exclusivos, notícias e atualizações da categoria.' },
  { icone: '🎪', titulo: 'Eventos', descricao: 'Participação em eventos, congressos e encontros promovidos pelo sindicato.' },
  { icone: '🏦', titulo: 'Convênios Financeiros', descricao: 'Condições especiais em bancos e instituições financeiras parceiras.' },
  { icone: '🚗', titulo: 'Seguros', descricao: 'Descontos em seguros de vida, automóvel e responsabilidade civil.' }
]

const faqBeneficios = [
  { pergunta: 'Como acesso os descontos em educação?', resposta: 'Após a filiação, você recebe um guia com todas as instituições parceiras e os códigos de desconto para utilizar no momento da matrícula.' },
  { pergunta: 'O programa de economia de energia funciona como?', resposta: 'Cadastramos sua conta de energia em nosso programa de gestão energética, que otimiza seu consumo e gera economia de até 20%.' },
  { pergunta: 'Quantas indicações posso fazer?', resposta: 'Não há limite! A cada colega que se filiar por sua indicação, você ganha 1 mês grátis de mensalidade.' },
  { pergunta: 'Os benefícios valem desde o primeiro dia?', resposta: 'Sim! Assim que sua filiação é aprovada, você já pode usufruir de todos os benefícios disponíveis.' }
]

export default function BeneficiosPage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)

  return (
    <main>
      {/* HERO */}
      <section className="hero-verde" style={{ minHeight: '65vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>🎁 Exclusivo para Associados</span>
              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Benefícios <span className="texto-gradiente">Exclusivos</span></h1>
              <p className="texto-claro-90" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', maxWidth: '700px', margin: '0 auto var(--space-xl)', lineHeight: 1.8 }}>
                Descubra todas as vantagens de ser associado ao SINMEVACO. Economia, proteção e muito mais para você e sua família.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">Quero esses Benefícios<span style={{ marginLeft: '0.5rem' }}>→</span></Link>
                <a href="#beneficios" className="botao botao-outline-claro botao-grande">Ver Todos</a>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--branco-soft)"/>
          </svg>
        </div>
      </section>

      {/* BENEFÍCIOS PRINCIPAIS */}
      <section id="beneficios" className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>⭐ Destaques</span>
              <h2 className="texto-escuro">Benefícios <span className="texto-gradiente">Principais</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-2">
            {beneficiosPrincipais.map((beneficio, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{ padding: 'var(--space-xl)', height: '100%', borderTop: `4px solid ${beneficio.cor}`, position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: `${beneficio.cor}`, color: 'white', padding: '0.375rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8125rem', fontWeight: 700 }}>{beneficio.destaque}</span>
                  <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}>
                    <div style={{ width: '70px', height: '70px', background: `linear-gradient(145deg, ${beneficio.cor}, ${beneficio.cor}dd)`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0, boxShadow: `0 6px 20px ${beneficio.cor}40` }}>{beneficio.icone}</div>
                    <div>
                      <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.375rem', marginBottom: '0.75rem' }}>{beneficio.titulo}</h3>
                      <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{beneficio.descricao}</p>
                    </div>
                  </div>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMA DE INDICAÇÃO - DESTAQUE */}
      <section className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <AnimarAoScroll>
              <div style={{ fontSize: '4rem', marginBottom: 'var(--space-lg)' }}>🎁</div>
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Programa Especial</span>
              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Indique e Ganhe</h2>
              <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>
                Indique colegas médicos para se associarem ao SINMEVACO e ganhe <strong style={{ color: 'var(--laranja-400)' }}>1 mês grátis</strong> de mensalidade para cada indicação que se filiar. Não há limite de indicações!
              </p>
              <div className="grade-3" style={{ marginTop: 'var(--space-xl)' }}>
                {[{ num: '1', txt: 'Indique um colega' }, { num: '2', txt: 'Ele se filia' }, { num: '3', txt: 'Você ganha 1 mês' }].map((step, i) => (
                  <AnimarAoScroll key={i} atraso={i * 0.15}>
                    <div className="card-glass" style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--laranja-400)', marginBottom: '0.5rem' }}>{step.num}</div>
                      <p className="texto-claro">{step.txt}</p>
                    </div>
                  </AnimarAoScroll>
                ))}
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* OUTROS BENEFÍCIOS */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>✨ Mais Vantagens</span>
              <h2 className="texto-escuro">Outros <span className="texto-gradiente">Benefícios</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-3">
            {outrosBeneficios.map((beneficio, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.1}>
                <div className="card-novo" style={{ textAlign: 'center', padding: 'var(--space-xl)', height: '100%' }}>
                  <div style={{ width: '70px', height: '70px', margin: '0 auto var(--space-lg)', background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>{beneficio.icone}</div>
                  <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{beneficio.titulo}</h3>
                  <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{beneficio.descricao}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="secao" style={{ background: 'var(--cinza-50)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>💰 Economia Real</span>
              <h2 className="texto-escuro">Quanto você pode <span className="texto-gradiente">economizar</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <AnimarAoScroll>
              <div className="card-novo" style={{ padding: 'var(--space-xl)' }}>
                {[
                  { item: 'Pós-graduação (anual)', economia: 'R$ 6.000', desc: '45% de desconto' },
                  { item: 'Conta de energia (anual)', economia: 'R$ 2.400', desc: '20% de economia' },
                  { item: 'Programa de indicação', economia: 'Ilimitado', desc: '1 mês grátis por indicação' },
                  { item: 'Apoio jurídico', economia: 'R$ 5.000+', desc: 'Gratuito para associados' }
                ].map((linha, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-md) 0', borderBottom: index < 3 ? '1px solid var(--cinza-100)' : 'none' }}>
                    <div>
                      <h4 style={{ color: 'var(--preto-soft)', fontSize: '1rem', marginBottom: '0.25rem' }}>{linha.item}</h4>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--cinza-500)' }}>{linha.desc}</span>
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--verde-500)' }}>{linha.economia}</span>
                  </div>
                ))}
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>❓ Dúvidas</span>
              <h2 className="texto-escuro">Perguntas <span className="texto-gradiente">Frequentes</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqBeneficios.map((item, index) => (
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
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>🚀 Comece Agora</span>
              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Aproveite todos esses benefícios</h2>
              <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>Associe-se ao SINMEVACO e comece a economizar e ter apoio profissional hoje mesmo.</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">Quero me Associar<span style={{ marginLeft: '0.5rem' }}>→</span></Link>
                <Link href="/contato" className="botao botao-outline-claro botao-grande">Fale Conosco</Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

    </main>
  )
}
