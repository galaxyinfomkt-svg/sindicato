'use client';

import { useState } from 'react';
import Link from 'next/link';

// FAQ Data
const faqData = [
  {
    question: "Como funciona o processo de filiação?",
    answer: "O processo é simples e rápido. Basta preencher o formulário nesta página ou entrar em contato pelo WhatsApp. Nossa equipe entrará em contato para finalizar a documentação e você já começa a aproveitar os benefícios imediatamente."
  },
  {
    question: "Quanto custa a mensalidade?",
    answer: "Para informações sobre valores de mensalidade e condições de pagamento, entre em contato conosco pelo WhatsApp (31) 99717-8316. Nossa equipe fornecerá todos os detalhes sobre investimento e formas de pagamento."
  },
  {
    question: "Médicos de todas as especialidades podem se associar?",
    answer: "Sim! O SINMEVACO representa médicos de todas as especialidades que atuam no Vale do Aço. Independente da sua área de atuação, você pode se associar e contar com nossa representação."
  },
  {
    question: "Como funciona o programa de indicação?",
    answer: "Quando você indica um colega médico que se associa, ambos ganham 1 mês de mensalidade grátis. Quanto mais você indica, mais meses grátis você acumula!"
  },
  {
    question: "Os benefícios começam a valer imediatamente?",
    answer: "Sim! Após a confirmação da sua filiação, você já pode começar a usufruir de todos os benefícios do SINMEVACO, incluindo apoio jurídico, descontos em educação, economia na conta de energia e muito mais."
  }
];

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

export default function AssocieSe() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    crm: '',
    especialidade: '',
    cidade: '',
    indicadoPor: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecionar para WhatsApp com os dados do formulário
    const message = `Olá! Gostaria de me associar ao SINMEVACO.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0ACRM: ${formData.crm}%0AEspecialidade: ${formData.especialidade}%0ACidade: ${formData.cidade}${formData.indicadoPor ? `%0AIndicado por: ${formData.indicadoPor}` : ''}${formData.mensagem ? `%0AMensagem: ${formData.mensagem}` : ''}`;
    window.open(`https://wa.me/5531997178316?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Filiação ao SINMEVACO",
            "description": "Associe-se ao Sindicato dos Médicos do Vale do Aço e tenha acesso a apoio jurídico, benefícios exclusivos e representação sindical.",
            "provider": {
              "@type": "Organization",
              "name": "SINMEVACO"
            },
            "areaServed": ["Ipatinga", "Timóteo", "Coronel Fabriciano", "Vale do Aço"]
          })
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="hero" style={{ paddingTop: '180px', paddingBottom: '100px' }}>
        <div className="hero-content container" style={{ textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Associe-se</span>
          </nav>

          <div className="badge badge-white" style={{ marginBottom: '25px', padding: '12px 25px' }}>
            🎁 Indique um colega e ganhe 1 mês grátis!
          </div>

          <h1 style={{ color: 'white', marginBottom: '25px' }}>Faça Parte do SINMEVACO</h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '22px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7'
          }}>
            Junte-se ao sindicato que defende seus direitos há mais de 32 anos. Apoio jurídico, benefícios exclusivos e representação forte.
          </p>
        </div>
      </section>

      {/* ========== POR QUE SE ASSOCIAR ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Por que se associar ao SINMEVACO?</h2>
          <p className="section-subtitle">
            Benefícios reais que fazem a diferença na sua carreira e na sua vida
          </p>

          <div className="grid-3">
            {[
              { icon: '⚖️', title: 'Apoio Jurídico', desc: 'Assessoria especializada em direito médico, trabalhista, administrativo e sindical. Defesa completa dos seus direitos.' },
              { icon: '🎓', title: 'Educação', desc: 'Até 45% de desconto em instituições de ensino parceiras para você e sua família.' },
              { icon: '⚡', title: 'Economia de Energia', desc: 'Até 20% de economia na conta de luz através de parcerias exclusivas.' },
              { icon: '🛡️', title: 'Seguros Especiais', desc: 'Condições diferenciadas em seguros de vida, responsabilidade civil e outros.' },
              { icon: '🏥', title: 'Saúde e Bem-estar', desc: 'Descontos em clínicas, laboratórios e serviços de saúde parceiros.' },
              { icon: '🤝', title: 'Representação Forte', desc: 'Voz ativa nas negociações coletivas e defesa dos interesses da categoria.' }
            ].map((item, index) => (
              <div key={index} className="card card-gray" style={{ textAlign: 'center' }}>
                <span className="icon-xl">{item.icon}</span>
                <h3 style={{ marginBottom: '15px' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROGRAMA DE INDICAÇÃO ========== */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c61 100%)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="icon-xl" style={{ fontSize: '80px' }}>🎁</span>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Programa de Indicação</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '20px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Indique colegas médicos e ganhe benefícios exclusivos. Para cada indicação efetivada, você e o novo associado ganham <strong>1 mês de mensalidade grátis!</strong>
          </p>

          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>1️⃣</span>
              <h4 style={{ color: 'white', marginBottom: '10px' }}>Indique</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>Convide colegas médicos</p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>2️⃣</span>
              <h4 style={{ color: 'white', marginBottom: '10px' }}>Associação</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>Colega se filia ao sindicato</p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderRadius: '20px',
              border: '3px solid white'
            }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>🎉</span>
              <h4 style={{ color: 'white', marginBottom: '10px' }}>Ganhem!</h4>
              <p style={{ color: 'white', fontSize: '15px', fontWeight: '700' }}>1 mês grátis para ambos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FORMULÁRIO DE FILIAÇÃO ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '60px' }}>
            {/* Formulário */}
            <div>
              <h2 style={{ marginBottom: '15px' }}>Preencha seus dados</h2>
              <p style={{ fontSize: '17px', marginBottom: '30px' }}>
                Complete o formulário abaixo e nossa equipe entrará em contato para finalizar sua filiação.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2" style={{ gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Nome Completo *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">CRM *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.crm}
                      onChange={(e) => setFormData({ ...formData, crm: e.target.value })}
                      placeholder="Seu CRM"
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">E-mail *</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      className="form-input"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Especialidade</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.especialidade}
                      onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                      placeholder="Sua especialidade médica"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cidade *</label>
                    <select
                      className="form-input"
                      required
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    >
                      <option value="">Selecione sua cidade</option>
                      <option value="Ipatinga">Ipatinga</option>
                      <option value="Timóteo">Timóteo</option>
                      <option value="Coronel Fabriciano">Coronel Fabriciano</option>
                      <option value="Outra cidade do Vale do Aço">Outra cidade do Vale do Aço</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Indicado por (opcional)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.indicadoPor}
                    onChange={(e) => setFormData({ ...formData, indicadoPor: e.target.value })}
                    placeholder="Nome do médico que indicou você"
                  />
                  <small style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                    Se foi indicado por um colega, informe o nome para que ambos ganhem 1 mês grátis!
                  </small>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensagem (opcional)</label>
                  <textarea
                    className="form-textarea"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Alguma informação adicional?"
                    rows={3}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Enviar Solicitação de Filiação
                </button>
              </form>
            </div>

            {/* Informações laterais */}
            <div>
              <div className="card card-green" style={{ marginBottom: '30px' }}>
                <h3 style={{ color: 'white', marginBottom: '20px' }}>Contato Direto</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.95)', marginBottom: '25px' }}>
                  Prefere falar diretamente com nossa equipe? Entre em contato pelo WhatsApp!
                </p>
                <a
                  href="https://wa.me/5531997178316?text=Ol%C3%A1%21%20Gostaria%20de%20me%20associar%20ao%20SINMEVACO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  💬 WhatsApp: (31) 99717-8316
                </a>
              </div>

              <div className="card" style={{ background: 'var(--light-gray)' }}>
                <h4 style={{ marginBottom: '20px' }}>✅ Ao se associar você terá:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Apoio jurídico especializado',
                    'Até 45% de desconto em educação',
                    'Até 20% de economia na energia',
                    'Seguros com condições especiais',
                    'Representação sindical forte',
                    'Programa de indicação (1 mês grátis)'
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '10px 0',
                      borderBottom: index < 5 ? '1px solid var(--medium-gray)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ color: 'var(--primary-green)', fontWeight: '700' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Dúvidas sobre Filiação</h2>
          <p className="section-subtitle">
            Perguntas frequentes sobre como se associar ao SINMEVACO
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '25px' }}>
            Não deixe para depois!
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '20px', marginBottom: '40px', lineHeight: '1.7' }}>
            Associe-se hoje e comece a aproveitar todos os benefícios do SINMEVACO. Juntos somos mais fortes!
          </p>
          <a
            href="https://wa.me/5531997178316?text=Ol%C3%A1%21%20Gostaria%20de%20me%20associar%20ao%20SINMEVACO."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white btn-lg"
          >
            💬 Falar no WhatsApp Agora
          </a>
        </div>
      </section>
    </>
  );
}
