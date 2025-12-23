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

export default function DireitosMedicoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "Quais são os principais direitos trabalhistas do médico?",
      answer: "O médico tem direito a jornada de trabalho adequada, adicional de insalubridade, descanso entre plantões, férias remuneradas, 13º salário, FGTS, e condições dignas de trabalho conforme CLT e legislação específica."
    },
    {
      question: "O médico pode ter mais de um vínculo empregatício?",
      answer: "Sim, é permitido ao médico ter múltiplos vínculos empregatícios, desde que haja compatibilidade de horários e não prejudique o atendimento aos pacientes."
    },
    {
      question: "O que fazer em caso de assédio moral no trabalho?",
      answer: "Documente todas as ocorrências, busque testemunhas, comunique ao RH ou superior hierárquico, e procure o SINMEVACO para orientação jurídica e apoio na denúncia formal."
    },
    {
      question: "Como funciona o adicional de insalubridade para médicos?",
      answer: "Médicos expostos a agentes nocivos têm direito ao adicional de insalubridade, que pode variar de 10% a 40% do salário mínimo, dependendo do grau de exposição."
    },
    {
      question: "Qual o limite de horas de plantão permitido?",
      answer: "A legislação recomenda jornadas que preservem a saúde do profissional. Plantões excessivos sem descanso adequado podem caracterizar condições degradantes de trabalho."
    },
    {
      question: "O sindicato pode me ajudar em questões trabalhistas?",
      answer: "Sim! O SINMEVACO oferece apoio jurídico especializado em direito trabalhista, orientando e representando médicos em questões relacionadas ao vínculo empregatício."
    }
  ];

  const direitosTrabalhistas = [
    { icon: "⏰", title: "Jornada de Trabalho", description: "Limite de horas, descanso entre jornadas e intervalos adequados para preservar sua saúde." },
    { icon: "💰", title: "Remuneração Justa", description: "Piso salarial, adicional de insalubridade, horas extras, adicional noturno e direitos remuneratórios." },
    { icon: "🏖️", title: "Férias e Descanso", description: "Direito a férias remuneradas, descanso semanal, feriados e licenças previstas em lei." },
    { icon: "🛡️", title: "Segurança no Trabalho", description: "EPIs adequados, ambiente seguro, proteção contra riscos ocupacionais." },
    { icon: "📋", title: "Estabilidade", description: "Proteção contra demissão arbitrária, garantias em casos de doença e acidentes." },
    { icon: "🎓", title: "Capacitação", description: "Direito a licença para estudos, participação em congressos e atualização profissional." }
  ];

  const direitosPrevidenciarios = [
    { title: "Aposentadoria Especial", description: "Médicos expostos a agentes nocivos podem ter direito à aposentadoria com tempo reduzido." },
    { title: "Auxílio-Doença", description: "Benefício para afastamento temporário por motivo de saúde, garantindo renda durante recuperação." },
    { title: "Pensão por Morte", description: "Proteção aos dependentes em caso de falecimento, garantindo sustento à família." },
    { title: "Salário-Maternidade", description: "Licença remunerada para médicas gestantes, com garantia de emprego após retorno." }
  ];

  const direitosEticos = [
    { icon: "⚖️", title: "Autonomia Profissional", description: "Exercer a medicina com liberdade e independência técnica." },
    { icon: "🔒", title: "Sigilo Médico", description: "Proteção do sigilo profissional na relação médico-paciente." },
    { icon: "✋", title: "Recusa de Procedimentos", description: "Recusar procedimentos contrários à sua consciência ou ética." },
    { icon: "📝", title: "Defesa Profissional", description: "Direito à ampla defesa em processos éticos e administrativos." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sinmevaco.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Direitos do Médico", "item": "https://sinmevaco.com.br/direitos-do-medico" }
    ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative pt-32 pb-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-up">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Direitos do Médico</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Conheça e defenda seus direitos</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Direitos do <span className="text-gradient">Médico</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Informação é poder. Conheça todos os seus direitos como profissional da medicina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link href="/juridico" className="btn btn-accent btn-xl">
                Preciso de Apoio Jurídico
              </Link>
              <Link href="/associe-se" className="btn btn-outline-white btn-xl">
                Quero Me Associar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIREITOS TRABALHISTAS ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Trabalhista</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Direitos <span className="text-primary">Trabalhistas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os principais direitos que protegem o médico nas relações de trabalho
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {direitosTrabalhistas.map((direito, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full group hover:border-primary/30 border-2 border-transparent">
                  <div className="icon-box mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{direito.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {direito.title}
                  </h3>
                  <p className="text-gray-600">{direito.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DIREITOS PREVIDENCIÁRIOS ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="section-badge">Previdenciário</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Direitos <span className="text-primary">Previdenciários</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Médicos têm direitos previdenciários específicos que garantem proteção
                em diferentes momentos da carreira e da vida.
              </p>

              <div className="space-y-4">
                {direitosPrevidenciarios.map((direito, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{direito.title}</h3>
                      <p className="text-gray-600 text-sm">{direito.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Atenção Especial</h3>
                <div className="space-y-4">
                  {[
                    { title: "Reforma da Previdência", desc: "As regras mudaram. Consulte o SINMEVACO sobre sua situação." },
                    { title: "Tempo de Contribuição", desc: "A contagem varia conforme cada caso específico." },
                    { title: "Orientação Especializada", desc: "Nossa equipe pode analisar seu caso e orientar a melhor estratégia." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-white/90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== DIREITOS ÉTICOS ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Ético-Profissional</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Direitos <span className="text-primary">Éticos e Profissionais</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios fundamentais para o exercício digno e autônomo da medicina
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {direitosEticos.map((direito, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="stat-card h-full group text-center">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{direito.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{direito.title}</h3>
                  <p className="text-white/80 text-sm">{direito.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONDIÇÕES DE TRABALHO ========== */}
      <section className="section bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Condições Dignas de Trabalho
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Todo médico tem direito a exercer sua profissão em condições que
              garantam sua saúde, segurança e a qualidade do atendimento.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏥", title: "Infraestrutura", desc: "Instalações adequadas e equipamentos funcionais" },
                { icon: "👥", title: "Equipe de Apoio", desc: "Número adequado de profissionais de apoio" },
                { icon: "🧘", title: "Saúde Mental", desc: "Ambiente que respeite a saúde física e mental" }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="benefit-card h-full">
                    <span className="text-5xl mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre direitos médicos
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
              Seus Direitos Estão Sendo Respeitados?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Se você está enfrentando qualquer violação dos seus direitos como médico,
              o SINMEVACO está aqui para ajudar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531997178316?text=Olá! Preciso de orientação sobre meus direitos como médico."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-xl"
              >
                Falar com Especialista
              </a>
              <Link href="/juridico" className="btn btn-outline-white btn-xl">
                Conhecer Apoio Jurídico
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
