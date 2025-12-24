'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ============================================================
// JURÍDICO - LAYOUT 100% NOVO - SINMEVACO
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

const areasAtuacao = [
  { icone: '💼', titulo: 'Direito Trabalhista', descricao: 'Defesa em processos trabalhistas, rescisões, horas extras, adicional de insalubridade e demais questões laborais.', cor: 'var(--verde-500)' },
  { icone: '🏛️', titulo: 'Direito Administrativo', descricao: 'Acompanhamento em processos administrativos, concursos públicos e questões com órgãos governamentais.', cor: 'var(--laranja-500)' },
  { icone: '🤝', titulo: 'Direito Sindical', descricao: 'Negociações coletivas, acordos sindicais e representação da categoria médica.', cor: 'var(--verde-400)' }
]

const comoFunciona = [
  { numero: '01', titulo: 'Entre em Contato', descricao: 'Agende um atendimento pelo WhatsApp ou formulário.' },
  { numero: '02', titulo: 'Análise do Caso', descricao: 'Nossos advogados analisam sua situação detalhadamente.' },
  { numero: '03', titulo: 'Orientação Jurídica', descricao: 'Você recebe orientação personalizada sobre seus direitos.' },
  { numero: '04', titulo: 'Acompanhamento', descricao: 'Se necessário, representamos você em todo o processo.' }
]

const faqJuridico = [
  { pergunta: 'O apoio jurídico é gratuito para associados?', resposta: 'Sim! Todos os associados têm direito a orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical.' },
  { pergunta: 'Posso consultar sobre qualquer assunto jurídico?', resposta: 'O apoio jurídico do sindicato é focado em questões relacionadas à profissão médica: trabalhistas, previdenciárias e administrativas.' },
  { pergunta: 'Quanto tempo demora para ser atendido?', resposta: 'Buscamos atender todas as demandas em até 48 horas úteis. Para urgências, oferecemos atendimento prioritário.' },
  { pergunta: 'O sindicato pode me representar em processos?', resposta: 'Sim, além da orientação, podemos representar você em processos trabalhistas, administrativos e sindicais.' }
]

export default function JuridicoPage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null)
  const [formEnviado, setFormEnviado] = useState(false)

  return (
    <main>
      {/* HERO */}
      <section className="hero-verde" style={{ minHeight: '65vh', paddingTop: '140px' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <span className="etiqueta etiqueta-clara" style={{ marginBottom: '2rem', display: 'inline-flex' }}>⚖️ Apoio Especializado</span>
              <h1 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Apoio Jurídico <span className="texto-gradiente">Especializado</span></h1>
              <p className="texto-claro-90" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', maxWidth: '700px', margin: '0 auto var(--space-xl)', lineHeight: 1.8 }}>
                Assessoria jurídica completa para médicos nas áreas trabalhista, administrativa e sindical. Defesa dos seus direitos com profissionais experientes.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#formulario" className="botao botao-laranja botao-grande">Solicitar Atendimento<span style={{ marginLeft: '0.5rem' }}>→</span></a>
                <a href="https://wa.me/5531997178316" target="_blank" rel="noopener noreferrer" className="botao botao-outline-claro botao-grande">Falar pelo WhatsApp</a>
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

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="secao" style={{ background: 'var(--branco-soft)' }}>
        <div className="wrapper">
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>📋 Áreas de Atuação</span>
              <h2 className="texto-escuro">Em que podemos <span className="texto-gradiente">ajudar</span></h2>
              <div className="divisor" style={{ marginTop: '1.5rem' }}></div>
            </div>
          </AnimarAoScroll>
          <div className="grade-3">
            {areasAtuacao.map((area, index) => (
              <AnimarAoScroll key={index} atraso={index * 0.15}>
                <div className="card-novo" style={{ textAlign: 'center', padding: 'var(--space-xl)', height: '100%', borderTop: `4px solid ${area.cor}` }}>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto var(--space-lg)', background: `linear-gradient(145deg, ${area.cor}, ${area.cor}dd)`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.25rem', boxShadow: `0 8px 24px ${area.cor}40` }}>{area.icone}</div>
                  <h3 style={{ color: 'var(--preto-soft)', fontSize: '1.375rem', marginBottom: '0.75rem' }}>{area.titulo}</h3>
                  <p style={{ color: 'var(--cinza-500)', lineHeight: 1.8 }}>{area.descricao}</p>
                </div>
              </AnimarAoScroll>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM + COMO FUNCIONA */}
      <section className="secao" style={{ background: 'var(--branco)' }}>
        <div className="wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-3xl)', alignItems: 'center' }} className="grade-como-funciona">
            <AnimarAoScroll classe="animar-esquerda">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--sombra-forte)' }}>
                <Image src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18ca7298052f138331.jpg" alt="Apoio Jurídico SINMEVACO" width={600} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))', color: 'white', padding: '1rem 1.5rem', borderRadius: 'var(--radius-lg)', fontWeight: 700 }}>Apoio Gratuito para Associados</div>
              </div>
            </AnimarAoScroll>
            <AnimarAoScroll classe="animar-direita" atraso={0.2}>
              <div>
                <span className="etiqueta" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>🔄 Como Funciona</span>
                <h2 className="texto-escuro" style={{ marginBottom: 'var(--space-lg)' }}>Processo <span className="texto-gradiente">Simples</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  {comoFunciona.map((passo, index) => (
                    <div key={index} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', background: 'linear-gradient(145deg, var(--verde-500), var(--verde-400))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{passo.numero}</div>
                      <div>
                        <h4 style={{ color: 'var(--preto-soft)', marginBottom: '0.25rem' }}>{passo.titulo}</h4>
                        <p style={{ color: 'var(--cinza-500)', fontSize: '0.9375rem' }}>{passo.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimarAoScroll>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="formulario" className="secao bg-verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <AnimarAoScroll>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                <span className="etiqueta etiqueta-clara" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>📞 Solicite Atendimento</span>
                <h2 className="texto-claro">Entre em Contato</h2>
              </div>
            </AnimarAoScroll>
            <AnimarAoScroll atraso={0.2}>
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: 'var(--sombra-forte)' }}>
                {formEnviado ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                    <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>✅</div>
                    <h3 style={{ color: 'var(--verde-600)', marginBottom: '0.5rem' }}>Solicitação Enviada!</h3>
                    <p style={{ color: 'var(--verde-500)' }}>Nossa equipe jurídica entrará em contato em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormEnviado(true); }}>
                    <div className="form-grupo"><label className="form-label">Nome completo *</label><input type="text" className="form-input" placeholder="Dr. João Silva" required /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-grid-2">
                      <div className="form-grupo"><label className="form-label">E-mail *</label><input type="email" className="form-input" placeholder="seu@email.com" required /></div>
                      <div className="form-grupo"><label className="form-label">WhatsApp *</label><input type="tel" className="form-input" placeholder="(31) 99999-9999" required /></div>
                    </div>
                    <div className="form-grupo"><label className="form-label">Tipo de demanda *</label><select className="form-input form-select" required><option value="">Selecione</option><option value="trabalhista">Trabalhista</option><option value="administrativa">Administrativa</option><option value="sindical">Sindical</option><option value="outra">Outra</option></select></div>
                    <div className="form-grupo"><label className="form-label">Descreva sua situação *</label><textarea className="form-input form-textarea" placeholder="Conte-nos sobre sua demanda jurídica..." required></textarea></div>
                    <button type="submit" className="botao botao-verde botao-grande" style={{ width: '100%' }}>Enviar Solicitação<span style={{ marginLeft: '0.5rem' }}>→</span></button>
                  </form>
                )}
              </div>
            </AnimarAoScroll>
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
            {faqJuridico.map((item, index) => (
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
              <span className="etiqueta etiqueta-laranja" style={{ marginBottom: '2rem', display: 'inline-flex' }}>🤝 Faça Parte</span>
              <h2 className="texto-claro" style={{ marginBottom: '1.5rem' }}>Ainda não é associado?</h2>
              <p className="texto-claro-90" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xl)', lineHeight: 1.8 }}>Associe-se ao SINMEVACO e tenha acesso a apoio jurídico gratuito e muitos outros benefícios.</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/associe-se" className="botao botao-laranja botao-grande">Quero me Associar<span style={{ marginLeft: '0.5rem' }}>→</span></Link>
                <Link href="/beneficios" className="botao botao-outline-claro botao-grande">Ver Benefícios</Link>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .grade-como-funciona { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
