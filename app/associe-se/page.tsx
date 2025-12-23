'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Hook para animações ao scroll
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Componente de animação
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-fade-up ${isVisible ? 'animate-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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

export default function AssocieSe() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      <section className="hero-gradient min-h-[70vh] flex items-center relative pt-32 pb-20">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-up">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Associe-se</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up animate-pulse">
              <span className="text-lg">🎁</span>
              <span className="text-sm font-bold">Indique um colega e ganhe 1 mês grátis!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Faça Parte do <span className="text-gradient">SINMEVACO</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Junte-se ao sindicato que defende seus direitos há mais de <strong>32 anos</strong>.
              Apoio jurídico, benefícios exclusivos e representação forte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
              <a href="#formulario" className="btn btn-accent btn-xl">
                Quero me Associar
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="https://wa.me/5531997178316?text=Olá! Gostaria de me associar ao SINMEVACO."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== POR QUE SE ASSOCIAR ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Vantagens Exclusivas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que se <span className="text-primary">associar</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefícios reais que fazem a diferença na sua carreira e na sua vida
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚖️', title: 'Apoio Jurídico', desc: 'Assessoria especializada em direito médico, trabalhista, administrativo e sindical.' },
              { icon: '🎓', title: 'Educação', desc: 'Até 45% de desconto em instituições de ensino parceiras para você e sua família.' },
              { icon: '⚡', title: 'Economia de Energia', desc: 'Até 20% de economia na conta de luz através de parcerias exclusivas.' },
              { icon: '🛡️', title: 'Seguros Especiais', desc: 'Condições diferenciadas em seguros de vida, responsabilidade civil e outros.' },
              { icon: '🏥', title: 'Saúde e Bem-estar', desc: 'Descontos em clínicas, laboratórios e serviços de saúde parceiros.' },
              { icon: '🤝', title: 'Representação Forte', desc: 'Voz ativa nas negociações coletivas e defesa dos interesses da categoria.' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full text-center group hover:border-primary/30 border-2 border-transparent">
                  <div className="icon-box mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROGRAMA DE INDICAÇÃO ========== */}
      <section className="section bg-gradient-to-br from-accent to-orange-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-6xl mb-4 block">🎁</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Programa de Indicação
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Indique colegas médicos e ganhe benefícios exclusivos.
              Para cada indicação efetivada, você e o novo associado ganham <strong>1 mês grátis!</strong>
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { num: '1', title: 'Indique', desc: 'Convide colegas médicos' },
              { num: '2', title: 'Associação', desc: 'Colega se filia ao sindicato' },
              { num: '🎉', title: 'Ganhem!', desc: '1 mês grátis para ambos', highlight: true }
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 ${step.highlight ? 'border-white bg-white/20' : 'border-white/20'}`}>
                  <div className="w-14 h-14 bg-white text-accent rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={step.highlight ? 'font-bold' : 'text-white/80'}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <div className="text-5xl font-extrabold mb-2">∞</div>
              <div className="text-xl font-semibold mb-4">Indicações Ilimitadas!</div>
              <div className="space-y-2 text-white/90">
                <p>5 indicações = 5 meses grátis</p>
                <p className="font-bold text-lg">12 indicações = 1 ano grátis!</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== FORMULÁRIO DE FILIAÇÃO ========== */}
      <section id="formulario" className="section bg-light overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulário */}
            <AnimatedSection>
              <span className="section-badge">Cadastro</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preencha seus <span className="text-primary">dados</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete o formulário abaixo e nossa equipe entrará em contato para finalizar sua filiação.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">CRM *</label>
                    <input
                      type="text"
                      required
                      value={formData.crm}
                      onChange={(e) => setFormData({ ...formData, crm: e.target.value })}
                      placeholder="Seu CRM"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(31) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Especialidade</label>
                    <input
                      type="text"
                      value={formData.especialidade}
                      onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                      placeholder="Sua especialidade médica"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cidade *</label>
                    <select
                      required
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    >
                      <option value="">Selecione sua cidade</option>
                      <option value="Ipatinga">Ipatinga</option>
                      <option value="Timóteo">Timóteo</option>
                      <option value="Coronel Fabriciano">Coronel Fabriciano</option>
                      <option value="Outra cidade do Vale do Aço">Outra cidade do Vale do Aço</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Indicado por (opcional)</label>
                  <input
                    type="text"
                    value={formData.indicadoPor}
                    onChange={(e) => setFormData({ ...formData, indicadoPor: e.target.value })}
                    placeholder="Nome do médico que indicou você"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Se foi indicado por um colega, informe o nome para que ambos ganhem 1 mês grátis!
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem (opcional)</label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Alguma informação adicional?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-xl w-full">
                  Enviar Solicitação de Filiação
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </AnimatedSection>

            {/* Informações laterais */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {/* Contato Direto */}
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Contato Direto</h3>
                  <p className="text-white/90 mb-6">
                    Prefere falar diretamente com nossa equipe? Entre em contato pelo WhatsApp!
                  </p>
                  <a
                    href="https://wa.me/5531997178316?text=Olá! Gostaria de me associar ao SINMEVACO."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp: (31) 99717-8316
                  </a>
                </div>

                {/* Lista de Benefícios */}
                <div className="card">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-primary">✓</span> Ao se associar você terá:
                  </h4>
                  <div className="space-y-4">
                    {[
                      'Apoio jurídico especializado',
                      'Até 45% de desconto em educação',
                      'Até 20% de economia na energia',
                      'Seguros com condições especiais',
                      'Representação sindical forte',
                      'Programa de indicação (1 mês grátis)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-light hover:bg-primary/5 transition-colors">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre <span className="text-primary">Filiação</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perguntas frequentes sobre como se associar ao SINMEVACO
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                  <div
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="cta-section section text-white overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Não deixe para depois!
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Associe-se hoje e comece a aproveitar todos os benefícios do SINMEVACO.
              Juntos somos mais fortes!
            </p>

            <a
              href="https://wa.me/5531997178316?text=Olá! Gostaria de me associar ao SINMEVACO."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp Agora
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
