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
      "name": "Diretoria",
      "item": "https://sinmevaco.com.br/diretoria"
    }
  ]
};

// Dados da diretoria
const diretoriaExecutiva = [
  { cargo: 'Vice-Presidente', nome: 'A definir', icon: '🩺' },
  { cargo: 'Secretário Geral', nome: 'A definir', icon: '📝' },
  { cargo: 'Secretário de Finanças', nome: 'A definir', icon: '💰' },
  { cargo: 'Diretor de Comunicação', nome: 'A definir', icon: '📢' },
  { cargo: 'Diretor Jurídico', nome: 'A definir', icon: '⚖️' },
  { cargo: 'Diretor de Assuntos Sindicais', nome: 'A definir', icon: '🤝' },
];

const conselhoFiscal = [
  { cargo: 'Presidente do Conselho', nome: 'A definir', icon: '📊' },
  { cargo: 'Conselheiro Titular', nome: 'A definir', icon: '📋' },
  { cargo: 'Conselheiro Titular', nome: 'A definir', icon: '📋' },
];

export default function Diretoria() {
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
              <span className="text-white">Diretoria</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Gestão transparente</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Nossa Diretoria
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Gestão comprometida com a <strong>defesa dos direitos</strong> dos médicos do Vale do Aço.
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

      {/* ========== PRESIDENTE ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
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
                    <div className="text-white/80 text-sm">Liderança comprometida</div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="section-badge">Presidente</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dr. Carlos Henrique<br />
                <span className="text-primary">Quintão Valeriano</span>
              </h2>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  O Dr. Carlos Henrique Quintão Valeriano lidera o SINMEVACO com o firme compromisso
                  de fortalecer a representatividade da classe médica no Vale do Aço.
                </p>

                <p>
                  Com uma trajetória marcada pela dedicação à medicina e à defesa dos direitos
                  profissionais, o presidente conduz uma gestão pautada pela <strong className="text-primary">ética,
                  transparência e diálogo constante</strong> com os médicos sindicalizados.
                </p>

                <p>
                  Sua atuação tem sido fundamental para consolidar o SINMEVACO como uma instituição
                  de referência na região, garantindo que os interesses da categoria sejam sempre
                  representados com vigor e compromisso.
                </p>
              </div>

              <blockquote className="bg-light rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-gray-700 italic mb-3">
                  &ldquo;Nosso compromisso é com a valorização da profissão médica, a defesa dos nossos
                  direitos e o fortalecimento da categoria. Juntos, construímos um sindicato forte
                  e representativo.&rdquo;
                </p>
                <cite className="text-primary font-semibold not-italic">
                  — Dr. Carlos Henrique Quintão Valeriano
                </cite>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== DIRETORIA EXECUTIVA ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Nossa Equipe</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Diretoria <span className="text-primary">Executiva</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Membros que compõem a gestão do SINMEVACO
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diretoriaExecutiva.map((membro, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full text-center group hover:border-primary/30 border-2 border-transparent">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-3xl">{membro.icon}</span>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {membro.cargo}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {membro.nome}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONSELHO FISCAL ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Fiscalização</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Conselho <span className="text-primary">Fiscal</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Responsáveis pela fiscalização e transparência da gestão
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {conselhoFiscal.map((membro, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group p-6 bg-light rounded-2xl text-center hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{membro.icon}</span>
                  </div>
                  <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {membro.cargo}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {membro.nome}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GESTÃO E TRANSPARÊNCIA ========== */}
      <section className="section bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              Nosso Compromisso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Gestão e Transparência
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Compromisso com a ética e prestação de contas
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Prestação de Contas',
                desc: 'Relatórios financeiros e de atividades disponíveis para todos os sindicalizados'
              },
              {
                icon: '🤝',
                title: 'Diálogo Aberto',
                desc: 'Canais de comunicação sempre abertos para ouvir os médicos sindicalizados'
              },
              {
                icon: '⚖️',
                title: 'Ética Sindical',
                desc: 'Atuação pautada pela ética, independência e compromisso com a categoria'
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="benefit-card h-full text-center">
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PILARES DA GESTÃO ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Princípios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pilares da Nossa <span className="text-primary">Gestão</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Valores que norteiam nossa atuação em defesa da categoria
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Foco na Categoria', desc: 'Todas as decisões voltadas para o bem-estar dos médicos' },
              { icon: '💡', title: 'Inovação', desc: 'Modernização constante dos serviços oferecidos' },
              { icon: '🔒', title: 'Segurança', desc: 'Proteção jurídica e institucional dos associados' },
              { icon: '🌟', title: 'Excelência', desc: 'Busca contínua pela qualidade em tudo que fazemos' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="stat-card h-full group">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
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
              Faça parte da nossa história
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              O SINMEVACO é construído por todos os médicos que acreditam na força da união.
              Junte-se a nós e fortaleça a categoria médica no Vale do Aço.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Associe-se Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contato" className="btn btn-outline-white btn-xl">
                Fale Conosco
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
