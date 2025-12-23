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

// Schema BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sinmevaco.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Quem Somos",
      "item": "https://sinmevaco.com.br/quem-somos"
    }
  ]
};

export default function QuemSomos() {
  return (
    <>
      {/* Schema BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative pt-32 pb-20">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-up">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Quem Somos</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Conheça nossa história</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Quem Somos
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Há mais de <strong>32 anos</strong> representando, defendendo e fortalecendo
              a classe médica no Vale do Aço.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== HISTÓRIA DO SINDICATO ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="section-badge">Nossa Trajetória</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary">O SINMEVACO – Sindicato dos Médicos do Vale do Aço</strong> foi
                  fundado com o propósito fundamental de representar, defender e promover os interesses
                  da classe médica na região, abrangendo Ipatinga, Timóteo, Coronel Fabriciano e cidades circunvizinhas.
                </p>

                <p>
                  Ao longo de <strong className="text-primary">mais de 32 anos de existência</strong>, o SINMEVACO
                  consolidou-se como uma instituição de referência na defesa dos direitos trabalhistas,
                  da valorização profissional e das condições dignas de trabalho dos médicos.
                </p>

                <p>
                  Nossa atuação é pautada pela <strong className="text-primary">ética, transparência e
                  independência sindical</strong>, sempre priorizando o bem-estar da categoria e a qualidade
                  da assistência médica prestada à população do Vale do Aço.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg"
                    alt="SINMEVACO - Participação em eventos e debates"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏛️</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">32+</div>
                      <div className="text-gray-600 text-sm">Anos de história</div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { number: "32+", label: "Anos de Atuação", icon: "🏆" },
              { number: "100%", label: "Compromisso", icon: "💯" },
              { number: "3", label: "Cidades Principais", icon: "📍" },
              { number: "∞", label: "Dedicação", icon: "💚" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="stat-card h-full group">
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                  <div className="text-4xl font-extrabold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MISSÃO, VISÃO E VALORES ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Nossos Princípios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Missão, Visão e <span className="text-primary">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os pilares que guiam nossa atuação em defesa da classe médica
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="card h-full text-center group hover:border-primary/30 border-2 border-transparent">
                <div className="icon-box mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  Missão
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Defender os direitos, a valorização profissional e as condições dignas de trabalho
                  dos médicos do Vale do Aço, promovendo a representatividade sindical ética e
                  comprometida com o bem-estar da categoria e da sociedade.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full text-center group hover:border-primary/30 border-2 border-transparent">
                <div className="icon-box mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  Visão
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser referência sindical na defesa da classe médica em Minas Gerais, reconhecido
                  pela excelência na representação, pela transparência na gestão e pelo compromisso
                  inabalável com os interesses dos médicos.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full text-center group hover:border-primary/30 border-2 border-transparent">
                <div className="icon-box mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  Valores
                </h3>
                <div className="space-y-3 text-left">
                  {[
                    'Ética e integridade profissional',
                    'Transparência na gestão sindical',
                    'Compromisso com a categoria',
                    'Responsabilidade social',
                    'Independência sindical'
                  ].map((valor, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== ATUAÇÃO SINDICAL ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">O Que Fazemos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-primary">Atuação Sindical</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Como o SINMEVACO atua na defesa dos interesses da categoria médica
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚖️', title: 'Defesa Trabalhista', desc: 'Atuação em questões trabalhistas, garantindo o cumprimento dos direitos dos médicos e condições justas de trabalho.' },
              { icon: '🏢', title: 'Representação Administrativa', desc: 'Intermediação entre médicos e instituições de saúde, defendendo os interesses da categoria em âmbito administrativo.' },
              { icon: '🤝', title: 'Negociações Coletivas', desc: 'Condução de negociações com empregadores e gestores para garantir melhores condições de trabalho e remuneração.' },
              { icon: '🛡️', title: 'Apoio Jurídico', desc: 'Assessoria jurídica completa através de parceria com escritórios especializados em direito médico.' },
              { icon: '💬', title: 'Mediação de Conflitos', desc: 'Intermediação em situações de conflito entre médicos e instituições, buscando soluções justas e equilibradas.' },
              { icon: '📢', title: 'Representação Institucional', desc: 'Participação ativa em debates, fóruns e instâncias decisórias sobre políticas de saúde na região.' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group p-6 bg-light rounded-2xl border-l-4 border-primary hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{item.icon}</span>
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

      {/* ========== PRESIDENTE ========== */}
      <section className="section bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                    alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Badge Presidente */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white text-primary rounded-2xl p-5 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-lg">Presidente do SINMEVACO</div>
                    <div className="text-gray-600 text-sm">Gestão comprometida com você</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                Liderança
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Dr. Carlos Henrique<br />
                Quintão Valeriano
              </h2>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                O Dr. Carlos Henrique Quintão Valeriano assume a presidência do SINMEVACO com o
                firme compromisso de fortalecer a representatividade da classe médica no Vale do Aço.
              </p>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Sua gestão é pautada pela <strong>ética, transparência e defesa intransigente</strong> dos
                direitos dos médicos, sempre priorizando o diálogo, a negociação e a busca por
                condições dignas de trabalho para todos os profissionais da região.
              </p>

              <blockquote className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-accent">
                <p className="text-white/95 italic mb-3">
                  &ldquo;Nosso compromisso é com a valorização da profissão médica, a defesa dos nossos
                  direitos e o fortalecimento da categoria. Juntos, construímos um sindicato forte
                  e representativo.&rdquo;
                </p>
                <cite className="text-accent font-semibold not-italic">
                  — Dr. Carlos Henrique Quintão Valeriano
                </cite>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== APOIO JURÍDICO ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="section-badge">Apoio Jurídico</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Assessoria Jurídica <span className="text-primary">Especializada</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O SINMEVACO mantém parcerias estratégicas com escritórios de advocacia especializados
                em direito médico, trabalhista e sindical, garantindo atendimento jurídico de
                excelência aos médicos sindicalizados.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa atuação jurídica é <strong className="text-primary">preventiva e corretiva</strong>,
                abrangendo desde orientações sobre contratos de trabalho até a defesa em processos
                administrativos e judiciais.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '📋', title: 'Direito Trabalhista' },
                  { icon: '🏢', title: 'Direito Administrativo' },
                  { icon: '⚖️', title: 'Direito Sindical' },
                  { icon: '🛡️', title: 'Defesa Institucional' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-light rounded-xl hover:bg-primary/5 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  </div>
                ))}
              </div>

              <Link href="/juridico" className="btn btn-primary">
                Solicitar Apoio Jurídico
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18ca7298052f138331.jpg"
                    alt="Equipe jurídica SINMEVACO"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-bold mb-1">95%</div>
                  <div className="text-sm text-white/80">Taxa de sucesso</div>
                </div>

                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== ÁREA DE ATUAÇÃO ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Cobertura Regional</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-primary">Área de Atuação</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Presença consolidada nas principais cidades do Vale do Aço
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { city: 'Ipatinga', icon: '🏙️', desc: 'Sede principal' },
              { city: 'Timóteo', icon: '🌆', desc: 'Atendimento completo' },
              { city: 'Coronel Fabriciano', icon: '🏛️', desc: 'Suporte integral' },
              { city: 'Vale do Aço', icon: '📍', desc: 'Região completa' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="stat-card h-full group cursor-pointer">
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.city}</h3>
                  <p className="text-white/80">{item.desc}</p>
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
              Fortaleça a sua profissão
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Junte-se aos médicos que defendem seus direitos, valorizam sua profissão
              e constroem uma classe médica mais forte no Vale do Aço.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Associe-se Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contato" className="btn btn-outline-white btn-xl">
                Fale com o Sindicato
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
