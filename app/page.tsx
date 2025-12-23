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

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  // Dados do FAQ
  const faqData = [
    {
      question: "Como faço para me associar ao SINMEVACO?",
      answer: "O processo é simples e rápido! Basta clicar no botão 'Associe-se', preencher o formulário com seus dados e nossa equipe entrará em contato para finalizar sua filiação."
    },
    {
      question: "Quais são os benefícios de ser associado?",
      answer: "Associados têm acesso a apoio jurídico especializado, descontos de até 45% em educação, economia de até 20% na conta de energia, programa de indicação com 1 mês grátis, e muito mais!"
    },
    {
      question: "O apoio jurídico é gratuito para associados?",
      answer: "Sim! Oferecemos orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical. Para ações judiciais, temos condições especiais com escritórios parceiros."
    },
    {
      question: "O SINMEVACO atua em quais cidades?",
      answer: "Atuamos em toda a região do Vale do Aço, incluindo Ipatinga, Timóteo, Coronel Fabriciano e municípios vizinhos."
    },
    {
      question: "Como funciona o Programa de Indicação?",
      answer: "Indique um colega médico para se associar e ganhe 1 mês de anuidade grátis por indicação. Não há limite de indicações!"
    },
    {
      question: "Posso cancelar minha filiação a qualquer momento?",
      answer: "Sim, você pode solicitar o cancelamento quando desejar. Basta entrar em contato conosco pelo WhatsApp ou e-mail."
    }
  ];

  // Benefícios para slider
  const beneficios = [
    { icon: "🎓", titulo: "Educação", desconto: "até 45%", desc: "Graduação e Pós" },
    { icon: "⚡", titulo: "Energia", desconto: "até 20%", desc: "Na conta de luz" },
    { icon: "⚖️", titulo: "Jurídico", desconto: "Gratuito", desc: "Orientação especializada" },
    { icon: "🛡️", titulo: "Seguros", desconto: "até 30%", desc: "Vida e auto" },
  ];

  // Auto-rotate benefícios
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % beneficios.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [beneficios.length]);

  // Schema FAQ
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============ HERO SECTION ============ */}
      <section className="hero-gradient min-h-screen flex items-center relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">Há mais de 32 anos defendendo médicos</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
                Sindicato dos Médicos do
                <span className="text-gradient block mt-2">Vale do Aço</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
                Defendendo seus direitos, fortalecendo sua carreira e oferecendo benefícios exclusivos para médicos de Ipatinga, Timóteo e Coronel Fabriciano.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <Link href="/associe-se" className="btn btn-accent btn-lg">
                  <span>Associe-se Agora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/beneficios" className="btn btn-outline-white btn-lg">
                  Ver Benefícios
                </Link>
              </div>

              {/* Stats Mini */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">32+</div>
                  <div className="text-white/70 text-sm">Anos de história</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">500+</div>
                  <div className="text-white/70 text-sm">Médicos atendidos</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">100%</div>
                  <div className="text-white/70 text-sm">Compromisso</div>
                </div>
              </div>
            </div>

            {/* Image Hero */}
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg"
                    alt="Eventos SINMEVACO"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Gratuito</div>
                      <div className="text-gray-600 text-sm">Apoio Jurídico</div>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                  1 mês grátis na indicação!
                </div>
              </div>
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

      {/* ============ SOBRE O SINMEVACO ============ */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Conheça o <span className="text-primary">SINMEVACO</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Há mais de 32 anos trabalhando pela valorização e defesa dos médicos do Vale do Aço
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏛️",
                title: "Nossa História",
                desc: "Fundado há mais de três décadas, o SINMEVACO nasceu da necessidade de unir os médicos do Vale do Aço em defesa de seus direitos.",
                delay: 0
              },
              {
                icon: "🛡️",
                title: "Defesa da Classe",
                desc: "Atuamos incansavelmente na defesa dos direitos trabalhistas, éticos e profissionais de todos os médicos da região.",
                delay: 100
              },
              {
                icon: "⚖️",
                title: "Ética e Transparência",
                desc: "Nossa gestão é pautada pela ética, transparência e pelo compromisso com os interesses de cada associado.",
                delay: 200
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay}>
                <div className="card group h-full text-center">
                  <div className="icon-box mx-auto">
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

      {/* ============ PRESIDENTE ============ */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="section-badge">Liderança</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dr. Carlos Henrique<br />
                <span className="text-primary">Quintão Valeriano</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Presidente do SINMEVACO, o Dr. Carlos Henrique lidera nossa instituição com
                dedicação e compromisso inabaláveis com a classe médica do Vale do Aço.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Médico com vasta experiência na região",
                  "Defensor incansável dos direitos da classe",
                  "Liderança ativa nas negociações coletivas",
                  "Comprometido com cada associado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="bg-white rounded-2xl p-6 border-l-4 border-primary shadow-sm">
                <p className="text-gray-700 italic mb-3">
                  &ldquo;Nossa missão é garantir que cada médico do Vale do Aço tenha seus direitos
                  respeitados e sua carreira valorizada.&rdquo;
                </p>
                <cite className="text-primary font-semibold not-italic">
                  — Dr. Carlos Henrique Quintão Valeriano
                </cite>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                    alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Badge Presidente */}
                <div className="absolute -bottom-6 left-6 right-6 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-lg">Presidente do SINMEVACO</div>
                    <div className="text-white/80 text-sm">Gestão comprometida com você</div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMA DE INDICAÇÃO ============ */}
      <section className="section bg-gradient-to-br from-accent to-orange-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                🎁 Novidade Exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Programa de Indicação
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Indique colegas médicos para se associarem e ganhe <strong>1 mês de anuidade grátis</strong> por
                cada indicação bem-sucedida. Sem limites!
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { num: "1", text: "Indique um colega" },
                  { num: "2", text: "Ele se associa" },
                  { num: "3", text: "Você ganha 1 mês" }
                ].map((step, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="w-10 h-10 bg-white text-accent rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                      {step.num}
                    </div>
                    <div className="text-sm font-medium">{step.text}</div>
                  </div>
                ))}
              </div>

              <Link href="/associe-se" className="btn btn-white btn-lg">
                <span>Quero Participar</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl font-extrabold mb-2">∞</div>
                  <div className="text-xl font-semibold">Indicações Ilimitadas</div>
                </div>

                <div className="space-y-4">
                  {[
                    "1 indicação = 1 mês grátis",
                    "5 indicações = 5 meses grátis",
                    "12 indicações = 1 ano grátis!"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                      <div className="w-8 h-8 bg-white text-accent rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ APOIO JURÍDICO ============ */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
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

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-bold mb-1">95%</div>
                  <div className="text-sm text-white/80">Taxa de sucesso</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="section-badge">Apoio Jurídico</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Assessoria Jurídica <span className="text-primary">Especializada</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Conte com apoio jurídico especializado e gratuito para associados.
                Nossa equipe está preparada para defender seus direitos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "⚖️", title: "Trabalhista", desc: "Defesa em ações e contratos" },
                  { icon: "🏛️", title: "Administrativo", desc: "Processos e concursos" },
                  { icon: "🤝", title: "Sindical", desc: "Negociações coletivas" },
                  { icon: "📋", title: "Ético", desc: "Defesa junto ao CRM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-light rounded-xl hover:bg-primary/5 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/juridico" className="btn btn-primary">
                Saiba Mais
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ BENEFÍCIOS ============ */}
      <section className="section bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge section-badge-light">Vantagens Exclusivas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Benefícios para <span className="text-gradient">Associados</span>
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Aproveite descontos exclusivos e vantagens que fazem diferença no seu dia a dia
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`benefit-card h-full ${currentBenefit === i ? 'ring-2 ring-white scale-105' : ''}`}>
                  <span className="text-5xl mb-4 block">{b.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{b.titulo}</h3>
                  <div className="text-3xl font-extrabold text-accent mb-2">{b.desconto}</div>
                  <p className="text-white/80">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <Link href="/beneficios" className="btn btn-white btn-lg">
              Ver Todos os Benefícios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ REGIÃO DE ATUAÇÃO ============ */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Cobertura Regional</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onde <span className="text-primary">Atuamos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Representamos médicos de toda a região do Vale do Aço
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { cidade: "Ipatinga", icon: "🏙️", desc: "Sede principal do SINMEVACO" },
              { cidade: "Timóteo", icon: "🌆", desc: "Atendimento completo" },
              { cidade: "Coronel Fabriciano", icon: "🏛️", desc: "Suporte integral" }
            ].map((local, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="stat-card h-full group cursor-pointer">
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{local.icon}</span>
                  <h3 className="text-2xl font-bold mb-2">{local.cidade}</h3>
                  <p className="text-white/80">{local.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas principais dúvidas sobre o SINMEVACO
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

      {/* ============ CTA FINAL ============ */}
      <section className="cta-section section text-white overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Faça Parte do SINMEVACO
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Junte-se a centenas de médicos que já contam com nosso apoio jurídico,
              benefícios exclusivos e representação forte no Vale do Aço.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Associe-se Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/5531997178316?text=Olá! Quero saber mais sobre o SINMEVACO."
                target="_blank"
                className="btn btn-outline-white btn-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
