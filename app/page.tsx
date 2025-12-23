'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// FAQ Data para a Home
const faqData = [
  {
    question: "O que é o SINMEVACO?",
    answer: "O SINMEVACO é o Sindicato dos Médicos do Vale do Aço, atuando há mais de 32 anos na defesa dos direitos dos médicos. Representamos os profissionais de Ipatinga, Timóteo, Coronel Fabriciano e toda a região do Vale do Aço. Oferecemos apoio jurídico especializado, benefícios exclusivos e representação sindical para fortalecer a categoria médica."
  },
  {
    question: "Quais são os benefícios de se associar ao SINMEVACO?",
    answer: "Médicos associados ao SINMEVACO têm acesso a apoio jurídico especializado nas áreas trabalhista, administrativa e sindical. Também oferecemos descontos exclusivos em educação (até 45% em escolas), saúde, seguros e economia de até 20% na conta de energia. Além disso, você participa do programa de indicação que garante 1 mês grátis para você e para o colega indicado."
  },
  {
    question: "Como funciona o apoio jurídico para médicos sindicalizados?",
    answer: "O SINMEVACO oferece assessoria jurídica completa através de parcerias com escritórios especializados. Nossa atuação é preventiva e corretiva, garantindo defesa em questões trabalhistas, administrativas e sindicais. Atendemos médicos sindicalizados em todas as fases da carreira profissional."
  },
  {
    question: "Em quais cidades o SINMEVACO atua?",
    answer: "O SINMEVACO atua em todo o Vale do Aço, com presença consolidada em Ipatinga, Timóteo e Coronel Fabriciano. Representamos médicos de toda a região, oferecendo apoio e benefícios para fortalecer a categoria médica local."
  },
  {
    question: "Como funciona o programa de indicação?",
    answer: "No programa de indicação do SINMEVACO, quando você indica um colega médico que se associa, ambos ganham 1 mês de mensalidade grátis. É simples: você indica, o colega se associa e os dois recebem o benefício. Quanto mais você indica, mais meses grátis você acumula."
  },
  {
    question: "Como posso me associar ao SINMEVACO?",
    answer: "Para se associar ao SINMEVACO, você pode preencher o formulário de filiação no nosso site ou entrar em contato pelo WhatsApp (31) 99717-8316. Nossa equipe entrará em contato para finalizar o processo de associação. É rápido e você já começa a aproveitar os benefícios imediatamente."
  },
  {
    question: "O SINMEVACO atende médicos de todas as especialidades?",
    answer: "Sim, o SINMEVACO representa médicos de todas as especialidades que atuam no Vale do Aço. Independente da sua área de atuação, você pode se associar e contar com nossa representação. Defendemos os direitos de todos os profissionais médicos da região."
  },
  {
    question: "Quanto custa a mensalidade do sindicato?",
    answer: "Para informações sobre valores de mensalidade e condições de pagamento, entre em contato conosco pelo WhatsApp (31) 99717-8316 ou preencha o formulário no site. Nossa equipe fornecerá todos os detalhes sobre investimento e formas de pagamento. Lembre-se que você pode ganhar meses grátis indicando colegas."
  }
];

// Schema FAQPage para a Home
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

// Componente FAQ Item
function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        <span className="faq-toggle">+</span>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="hero" style={{ paddingTop: '200px', paddingBottom: '120px' }}>
        <div className="hero-content container" style={{ textAlign: 'center' }}>
          {/* Badge de destaque */}
          <div className="badge badge-white" style={{ marginBottom: '30px', padding: '15px 30px', fontSize: '16px' }}>
            🎁 Indique um colega e ganhe 1 mês grátis!
          </div>

          <h1 style={{ color: 'white', marginBottom: '25px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            Defendendo os direitos dos médicos do Vale do Aço há mais de 32 anos
          </h1>

          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '20px',
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '45px',
            lineHeight: '1.7'
          }}>
            Representatividade, apoio jurídico especializado e benefícios exclusivos para médicos sindicalizados em Ipatinga, Timóteo, Coronel Fabriciano e região.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/associe-se" className="btn btn-white btn-lg">
              🟢 Associe-se
            </Link>
            <Link href="/contato" className="btn btn-secondary btn-lg">
              ⚪ Fale com o Sindicato
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SOBRE O SINDICATO ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Sobre o SINMEVACO</h2>
          <p className="section-subtitle">
            Uma trajetória de mais de três décadas dedicada à defesa da categoria médica no Vale do Aço
          </p>

          <div className="grid-3">
            <div className="card card-gray" style={{ textAlign: 'center', border: '2px solid transparent' }}>
              <span className="icon-lg">🏛️</span>
              <h3 style={{ marginBottom: '15px' }}>Mais de 32 anos de atuação</h3>
              <p>Desde a nossa fundação, trabalhamos incansavelmente pela valorização e defesa dos direitos dos médicos da região.</p>
            </div>

            <div className="card card-gray" style={{ textAlign: 'center', border: '2px solid transparent' }}>
              <span className="icon-lg">⚕️</span>
              <h3 style={{ marginBottom: '15px' }}>Defesa da categoria médica</h3>
              <p>Representamos os interesses dos médicos em todas as esferas, garantindo condições dignas de trabalho e remuneração justa.</p>
            </div>

            <div className="card card-gray" style={{ textAlign: 'center', border: '2px solid transparent' }}>
              <span className="icon-lg">🤝</span>
              <h3 style={{ marginBottom: '15px' }}>Atuação ética e transparente</h3>
              <p>Nosso compromisso é com a verdade, a transparência e o bem-estar de todos os médicos sindicalizados.</p>
            </div>
          </div>

          {/* Presidente Info */}
          <div className="card card-green" style={{ textAlign: 'center', marginTop: '40px', padding: '40px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', opacity: '0.9', color: 'white' }}>
              Presidente do SINMEVACO
            </h4>
            <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>
              Dr. Carlos Henrique Quintão Valeriano
            </h3>
          </div>

          {/* CTA Box - Programa de Indicação */}
          <div style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c61 100%)',
            padding: '40px 50px',
            borderRadius: '20px',
            marginTop: '50px',
            boxShadow: '0 10px 40px rgba(255, 107, 53, 0.3)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '30px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }} className="cta-box-grid">
              <span style={{ fontSize: '60px' }}>🎁</span>
              <div>
                <h4 style={{ color: 'white', fontSize: '24px', fontWeight: '700', marginBottom: '8px', fontFamily: 'var(--font-poppins)' }}>
                  Indique um colega e ganhe 1 mês grátis!
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '16px' }}>
                  Você e seu colega ganham benefícios exclusivos
                </p>
              </div>
              <Link href="/associe-se" className="btn btn-white">
                👉 Indicar Agora
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/quem-somos" className="btn btn-primary">
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </section>

      {/* ========== APOIO JURÍDICO ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '25px' }}>Apoio Jurídico Completo ao Médico</h2>
              <p style={{ fontSize: '18px', marginBottom: '35px', lineHeight: '1.7' }}>
                O SINMEVACO oferece assessoria jurídica especializada através de parcerias com escritórios de advocacia renomados. Nossa atuação é preventiva e corretiva, garantindo a defesa dos seus direitos em todas as esferas.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div className="juridico-card">
                  <span style={{ fontSize: '36px' }}>📋</span>
                  <h4>Trabalhista</h4>
                </div>
                <div className="juridico-card">
                  <span style={{ fontSize: '36px' }}>🏢</span>
                  <h4>Administrativo</h4>
                </div>
                <div className="juridico-card">
                  <span style={{ fontSize: '36px' }}>⚖️</span>
                  <h4>Sindical</h4>
                </div>
              </div>

              <Link href="/juridico" className="btn btn-primary">
                👉 Solicitar Apoio Jurídico
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, var(--primary-green), var(--light-green))',
              borderRadius: '20px',
              padding: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ fontSize: '150px', opacity: '0.2', color: 'white' }} className="float">⚖️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROGRAMA DE INDICAÇÃO ========== */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="icon-xl bounce">🎁🎁</span>
            <h2 className="section-title section-title-white">Indique um Colega e Ganhe!</h2>
            <p className="section-subtitle section-subtitle-white">
              Fortaleça a categoria médica e ganhe benefícios exclusivos
            </p>
          </div>

          {/* Cards de passos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            <div className="indicacao-card">
              <div className="indicacao-step">1</div>
              <span className="icon-lg">🤝</span>
              <h3>Indique um Colega</h3>
              <p>Convide médicos da região para fazer parte do SINMEVACO</p>
            </div>

            <div className="indicacao-card">
              <div className="indicacao-step">2</div>
              <span className="icon-lg">✅</span>
              <h3>Colega se Associa</h3>
              <p>Seu colega realiza a filiação ao sindicato</p>
            </div>

            <div className="indicacao-card highlight">
              <div className="indicacao-step">3</div>
              <span className="icon-lg">🎁</span>
              <h3>Ambos Ganham!</h3>
              <p><strong style={{ color: 'var(--accent-orange)', fontSize: '18px' }}>1 MÊS GRÁTIS</strong> para você e para o novo sócio</p>
            </div>
          </div>

          {/* Benefícios */}
          <div className="grid-3" style={{ marginBottom: '50px' }}>
            <div className="benefit-box">
              <span className="icon-lg">🎯</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Você Ganha</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>1 mês de mensalidade grátis por cada indicação efetivada</p>
            </div>

            <div className="benefit-box">
              <span className="icon-lg">🌟</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Novo Sócio Ganha</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>1 mês grátis para começar a aproveitar os benefícios</p>
            </div>

            <div className="benefit-box">
              <span className="icon-lg">💪</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Categoria Fortalecida</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Mais médicos unidos significa mais força na representação</p>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/associe-se" className="btn btn-white btn-lg">
              👉 Quero Indicar
            </Link>
            <Link href="/beneficios" className="btn btn-secondary btn-lg">
              Ver Todos os Benefícios
            </Link>
          </div>
        </div>
      </section>

      {/* ========== DESTAQUES RÁPIDOS ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Por que se associar ao SINMEVACO?</h2>
          <p className="section-subtitle">
            Benefícios exclusivos que fazem a diferença na sua carreira médica
          </p>

          <div className="grid-3">
            <Link href="/juridico" className="card card-gray" style={{ textAlign: 'center', cursor: 'pointer', border: '2px solid transparent', position: 'relative', overflow: 'hidden' }}>
              <span className="icon-xl">⚖️</span>
              <h3>Apoio Jurídico</h3>
              <p>Assessoria especializada em direito médico, trabalhista e sindical</p>
            </Link>

            <Link href="/beneficios" className="card card-gray" style={{ textAlign: 'center', cursor: 'pointer', border: '2px solid transparent', position: 'relative', overflow: 'hidden' }}>
              <span className="icon-xl">🎓</span>
              <h3>Educação</h3>
              <p>Até 45% de desconto em instituições de ensino parceiras</p>
            </Link>

            <Link href="/beneficios" className="card card-gray" style={{ textAlign: 'center', cursor: 'pointer', border: '2px solid transparent', position: 'relative', overflow: 'hidden' }}>
              <span className="icon-xl">⚡</span>
              <h3>Economia de Energia</h3>
              <p>Até 20% de economia na conta de luz</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BENEFÍCIOS SLIDER ========== */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'
      }}>
        <div className="container">
          <h2 className="section-title section-title-white">Benefícios Exclusivos</h2>
          <p className="section-subtitle section-subtitle-white">
            Vantagens reais para você e sua família
          </p>

          {/* Slider Container */}
          <div style={{
            background: 'var(--white)',
            borderRadius: '20px',
            padding: '50px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            {/* Slide 1 - Educação */}
            {currentSlide === 0 && (
              <div className="fade-in">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <span style={{ fontSize: '48px' }}>🎓</span>
                  <h3 style={{ color: 'var(--primary-green)', fontSize: '32px', marginTop: '20px' }}>Educação</h3>
                </div>
                <div style={{
                  background: 'var(--light-gray)',
                  padding: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px'
                }}>
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: '10px' }}>Destaque</span>
                    <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Escolas e Universidades Parceiras</h4>
                    <p style={{ color: 'var(--text-gray)' }}>Descontos exclusivos para você e sua família</p>
                  </div>
                  <span style={{
                    background: 'var(--primary-green)',
                    color: 'white',
                    padding: '15px 25px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    Até 45% OFF
                  </span>
                </div>
              </div>
            )}

            {/* Slide 2 - Energia */}
            {currentSlide === 1 && (
              <div className="fade-in">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <span style={{ fontSize: '48px' }}>⚡</span>
                  <h3 style={{ color: 'var(--primary-green)', fontSize: '32px', marginTop: '20px' }}>Economia de Energia</h3>
                </div>
                <div style={{
                  background: 'var(--light-gray)',
                  padding: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px'
                }}>
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: '10px' }}>Economia Real</span>
                    <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Conta de Luz mais Barata</h4>
                    <p style={{ color: 'var(--text-gray)' }}>Parceria exclusiva para médicos sindicalizados</p>
                  </div>
                  <span style={{
                    background: 'var(--primary-green)',
                    color: 'white',
                    padding: '15px 25px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    Até 20% OFF
                  </span>
                </div>
              </div>
            )}

            {/* Slide 3 - Seguros */}
            {currentSlide === 2 && (
              <div className="fade-in">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <span style={{ fontSize: '48px' }}>🛡️</span>
                  <h3 style={{ color: 'var(--primary-green)', fontSize: '32px', marginTop: '20px' }}>Seguros e Proteção</h3>
                </div>
                <div style={{
                  background: 'var(--light-gray)',
                  padding: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px'
                }}>
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: '10px' }}>Segurança</span>
                    <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Seguros com Condições Especiais</h4>
                    <p style={{ color: 'var(--text-gray)' }}>Proteção para você e sua família</p>
                  </div>
                  <span style={{
                    background: 'var(--primary-green)',
                    color: 'white',
                    padding: '15px 25px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    Condições Especiais
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? '35px' : '12px',
                  height: '12px',
                  borderRadius: currentSlide === index ? '10px' : '50%',
                  background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/beneficios" className="btn btn-white">
              Ver Todos os Benefícios
            </Link>
          </div>
        </div>
      </section>

      {/* ========== REGIÃO DE ATUAÇÃO ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Nossa Área de Atuação</h2>
          <p className="section-subtitle">
            Presença consolidada nas principais cidades do Vale do Aço
          </p>

          <div className="grid-4">
            <div className="regiao-card">
              <span className="icon-lg">📍</span>
              <h3>Ipatinga</h3>
            </div>
            <div className="regiao-card">
              <span className="icon-lg">📍</span>
              <h3>Timóteo</h3>
            </div>
            <div className="regiao-card">
              <span className="icon-lg">📍</span>
              <h3>Coronel Fabriciano</h3>
            </div>
            <div className="regiao-card">
              <span className="icon-lg">📍</span>
              <h3>Vale do Aço</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre o SINMEVACO e como podemos ajudar você
          </p>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="cta-section section">
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '25px' }}>
            Fortaleça a sua profissão. Faça parte do SINMEVACO.
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '20px', marginBottom: '40px', lineHeight: '1.7' }}>
            Junte-se aos médicos que defendem seus direitos, valorizam sua profissão e constroem uma classe médica mais forte no Vale do Aço.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/associe-se" className="btn btn-white btn-lg">
              🟢 Associe-se Agora
            </Link>
            <Link href="/contato" className="btn btn-secondary btn-lg">
              ⚪ Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* CSS adicional para responsividade */}
      <style jsx>{`
        @media (max-width: 768px) {
          .cta-box-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
