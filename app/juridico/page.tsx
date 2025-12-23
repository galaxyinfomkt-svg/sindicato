'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function JuridicoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Sou ${formData.nome} e preciso de apoio jurídico.%0A%0A*Assunto:* ${formData.assunto}%0A*E-mail:* ${formData.email}%0A%0A*Descrição:*%0A${formData.mensagem}`;
    window.open(`https://wa.me/5531997178316?text=${message}`, '_blank');
  };

  const areasAtuacao = [
    {
      icon: "⚖️",
      title: "Direito Trabalhista",
      description: "Defesa em ações trabalhistas, revisão de contratos, cálculo de verbas rescisórias e assédio moral.",
      items: ["Ações trabalhistas", "Revisão de contratos", "Cálculos de verbas", "Assédio moral", "Horas extras", "Insalubridade"]
    },
    {
      icon: "🏛️",
      title: "Direito Administrativo",
      description: "Representação em processos administrativos, concursos públicos e questões com órgãos de saúde.",
      items: ["Processos administrativos", "Concursos públicos", "PAD e sindicâncias", "Licenças", "Aposentadoria", "Gratificações"]
    },
    {
      icon: "🤝",
      title: "Direito Sindical",
      description: "Negociações coletivas, acordos e convenções, representação em conflitos coletivos.",
      items: ["Acordos coletivos", "Convenções", "Negociações salariais", "Pisos salariais", "Condições de trabalho", "Greves"]
    }
  ];

  const etapas = [
    { numero: "01", titulo: "Contato Inicial", descricao: "Entre em contato pelo WhatsApp ou formulário" },
    { numero: "02", titulo: "Análise do Caso", descricao: "Nossa equipe analisa sua situação" },
    { numero: "03", titulo: "Orientação", descricao: "Você recebe orientação especializada" },
    { numero: "04", titulo: "Acompanhamento", descricao: "Se necessário, encaminhamos para escritório parceiro" }
  ];

  const faqData = [
    { question: "O apoio jurídico é gratuito para associados?", answer: "Sim! Associados têm acesso a orientação jurídica gratuita. Para ações judiciais, há condições especiais com escritórios parceiros." },
    { question: "Quanto tempo tenho para entrar com uma ação trabalhista?", answer: "O prazo é de 2 anos após o término do contrato, podendo reclamar os últimos 5 anos de direitos." },
    { question: "Como funciona o atendimento jurídico?", answer: "Entre em contato para agendar uma consulta. Nossa equipe analisará seu caso e indicará o melhor caminho." },
    { question: "Posso ser representado em processos éticos?", answer: "Sim, oferecemos apoio em processos junto ao CRM e outros órgãos." },
    { question: "O sindicato pode intervir em negociações com hospitais?", answer: "Sim, atuamos em negociações coletivas buscando melhores condições de trabalho." },
    { question: "Como solicitar apoio jurídico?", answer: "Entre em contato pelo WhatsApp (31) 99717-8316, preencha o formulário ou compareça à sede." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sinmevaco.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Jurídico", "item": "https://sinmevaco.com.br/juridico" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Apoio Jurídico SINMEVACO",
    "description": "Serviço de apoio jurídico especializado para médicos do Vale do Aço.",
    "provider": { "@type": "Organization", "name": "SINMEVACO" },
    "areaServed": ["Ipatinga", "Timóteo", "Coronel Fabriciano", "Vale do Aço"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative pt-32 pb-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-up">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
                <span className="text-white/50">/</span>
                <span className="text-white">Jurídico</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">Apoio Jurídico Especializado</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
                Assessoria <span className="text-gradient">Jurídica</span> para Médicos
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
                Conte com apoio jurídico especializado nas áreas trabalhista, administrativa
                e sindical. Defendemos seus direitos com experiência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <a
                  href="https://wa.me/5531997178316?text=Olá! Preciso de apoio jurídico do SINMEVACO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-xl"
                >
                  Solicitar Apoio Agora
                </a>
                <a href="#areas" className="btn btn-outline-white btn-xl">
                  Ver Áreas de Atuação
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18ca7298052f138331.jpg"
                    alt="Apoio Jurídico SINMEVACO"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">32+</div>
                      <div className="text-gray-600 text-sm">Anos defendendo médicos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ÁREAS DE ATUAÇÃO ========== */}
      <section id="areas" className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Especialidades</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos apoio jurídico em todas as áreas relevantes para a carreira médica
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {areasAtuacao.map((area, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full group hover:border-primary/30 border-2 border-transparent">
                  <div className="icon-box mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{area.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMO FUNCIONA ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Processo</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Como Funciona o <span className="text-primary">Apoio Jurídico</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo simples e transparente para garantir seus direitos
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative">
                  <div className="card h-full text-center group">
                    <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                      {etapa.numero}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{etapa.titulo}</h3>
                    <p className="text-gray-600 text-sm">{etapa.descricao}</p>
                  </div>
                  {index < etapas.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl">
                      →
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ESTATÍSTICAS ========== */}
      <section className="section bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Médicos atendidos" },
              { number: "32+", label: "Anos de experiência" },
              { number: "95%", label: "Taxa de sucesso" },
              { number: "100%", label: "Comprometimento" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="stat-card h-full text-center">
                  <div className="text-5xl font-extrabold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUANDO PROCURAR + FORMULÁRIO ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <span className="section-badge">Orientação</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quando Procurar <span className="text-primary">Apoio Jurídico?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Situações em que o apoio jurídico especializado faz a diferença na sua carreira.
              </p>

              <div className="space-y-3">
                {[
                  "Demissão ou rescisão contratual",
                  "Falta de pagamento de verbas trabalhistas",
                  "Assédio moral ou sexual no trabalho",
                  "Condições inadequadas de trabalho",
                  "Problemas com concursos públicos",
                  "Processos administrativos ou éticos",
                  "Dúvidas sobre contratos de trabalho",
                  "Negociações salariais coletivas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-light hover:bg-primary/5 transition-colors">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-light rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite Apoio Jurídico</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto *</label>
                    <select
                      required
                      value={formData.assunto}
                      onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="Trabalhista">Direito Trabalhista</option>
                      <option value="Administrativo">Direito Administrativo</option>
                      <option value="Sindical">Direito Sindical</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Descreva sua situação *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white resize-none"
                      placeholder="Conte-nos brevemente sobre sua situação..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-xl w-full">
                    Enviar Solicitação
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre o <span className="text-primary">Apoio Jurídico</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Respondemos às perguntas mais frequentes sobre nossos serviços
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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
              Não Enfrente Essa Batalha Sozinho
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              O SINMEVACO está ao seu lado para defender seus direitos.
              Entre em contato agora e tenha o suporte que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531997178316?text=Olá! Preciso de apoio jurídico do SINMEVACO."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-xl"
              >
                Falar pelo WhatsApp
              </a>
              <Link href="/contato" className="btn btn-outline-white btn-xl">
                Outras Formas de Contato
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
