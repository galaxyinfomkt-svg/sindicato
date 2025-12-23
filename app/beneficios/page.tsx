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

export default function BeneficiosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const beneficiosPrincipais = [
    { icon: "🎓", titulo: "Educação", desconto: "até 45%", descricao: "Descontos em graduação, pós-graduação e cursos de especialização.", destaque: true, parceiros: ["FGV", "IPOG", "Gran Cursos"] },
    { icon: "⚡", titulo: "Energia Elétrica", desconto: "até 20%", descricao: "Economia na conta de luz através de programas de energia sustentável.", destaque: true, parceiros: ["Energia Solar", "Cooperativas"] },
    { icon: "⚖️", titulo: "Apoio Jurídico", desconto: "Gratuito", descricao: "Orientação jurídica gratuita nas áreas trabalhista e administrativa.", destaque: true, parceiros: ["Escritórios Parceiros"] },
    { icon: "🛡️", titulo: "Seguros", desconto: "até 30%", descricao: "Condições especiais em seguros de vida e responsabilidade civil.", destaque: false, parceiros: ["Seguradoras"] },
    { icon: "🏥", titulo: "Saúde", desconto: "Especial", descricao: "Convênios com clínicas e laboratórios para você e família.", destaque: false, parceiros: ["Clínicas", "Labs"] },
    { icon: "🏋️", titulo: "Bem-estar", desconto: "até 50%", descricao: "Descontos em academias, spas e programas de saúde mental.", destaque: false, parceiros: ["Academias"] }
  ];

  const outrosBeneficios = [
    { icon: "📚", titulo: "Biblioteca Digital", descricao: "Acesso a publicações e artigos científicos." },
    { icon: "🎤", titulo: "Eventos e Congressos", descricao: "Descontos em eventos científicos e congressos." },
    { icon: "💳", titulo: "Cartão do Associado", descricao: "Identificação com acesso a benefícios exclusivos." },
    { icon: "📰", titulo: "Informativo", descricao: "Boletins sobre direitos e novidades da categoria." },
    { icon: "🤝", titulo: "Networking", descricao: "Eventos para conexão com outros profissionais." },
    { icon: "📞", titulo: "Atendimento Prioritário", descricao: "Canal exclusivo com atendimento ágil." }
  ];

  const faqData = [
    { question: "Como faço para acessar os benefícios?", answer: "Após se associar, você receberá acesso ao portal com todos os códigos de desconto e contatos de parceiros." },
    { question: "Os benefícios são extensivos à família?", answer: "Sim! Muitos benefícios são extensivos aos dependentes diretos, incluindo cônjuge e filhos." },
    { question: "Como funciona o Programa de Indicação?", answer: "Indique um colega médico. Quando ele se filiar, você ganha 1 mês grátis automaticamente." },
    { question: "Posso usar os benefícios imediatamente?", answer: "Sim! Após confirmação da filiação, você já tem acesso a todos os benefícios." },
    { question: "Os descontos são cumulativos?", answer: "Cada parceiro tem suas próprias regras, mas em geral os descontos podem ser combinados com promoções." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sinmevaco.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Benefícios", "item": "https://sinmevaco.com.br/beneficios" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Benefícios para Associados SINMEVACO",
    "description": "Programa completo de benefícios exclusivos para médicos associados.",
    "provider": { "@type": "Organization", "name": "SINMEVACO" }
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
      <section className="hero-gradient min-h-[60vh] flex items-center relative pt-32 pb-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-up">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Benefícios</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Vantagens exclusivas para associados</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Benefícios <span className="text-gradient">Exclusivos</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Como associado do SINMEVACO, você tem acesso a um pacote completo de
              benefícios que fazem real diferença no seu dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Quero Esses Benefícios
              </Link>
              <a href="#beneficios" className="btn btn-outline-white btn-xl">
                Ver Todos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROGRAMA DE INDICAÇÃO ========== */}
      <section className="section bg-gradient-to-br from-accent to-orange-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                Novidade
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Programa de Indicação
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Indique um colega médico para se associar ao SINMEVACO e ganhe
                <strong> 1 mês de anuidade grátis</strong> para cada indicação bem-sucedida.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  '1 mês grátis por indicação',
                  'Sem limite de indicações',
                  'Válido para novas filiações',
                  'Desconto aplicado automaticamente'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-6 h-6 bg-white text-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Indique e Ganhe!</h3>

                <div className="space-y-4 mb-8">
                  {[
                    { num: '5', text: '5 indicações = 5 meses grátis' },
                    { num: '12', text: '12 indicações = 1 ano grátis!' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-light rounded-xl">
                      <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {item.num}
                      </div>
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/associe-se" className="btn btn-primary btn-xl w-full justify-center">
                  Indicar Agora
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== BENEFÍCIOS PRINCIPAIS ========== */}
      <section id="beneficios" className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Principais</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Benefícios em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira os principais benefícios que você terá como associado
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiosPrincipais.map((beneficio, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`card h-full relative overflow-hidden group hover:border-primary/30 border-2 ${beneficio.destaque ? 'border-primary' : 'border-transparent'}`}>
                  {beneficio.destaque && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  <div className="icon-box mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{beneficio.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {beneficio.titulo}
                  </h3>
                  <div className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm mb-4">
                    {beneficio.desconto} de desconto
                  </div>
                  <p className="text-gray-600 mb-4">{beneficio.descricao}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Parceiros:</p>
                    <div className="flex flex-wrap gap-2">
                      {beneficio.parceiros.map((parceiro, idx) => (
                        <span key={idx} className="text-xs bg-light px-2 py-1 rounded">
                          {parceiro}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMPARATIVO / ECONOMIA ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Comparativo</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quanto Você <span className="text-primary">Economiza</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja quanto você pode economizar por ano sendo associado
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-3">
                {[
                  { icon: "🎓", title: "Educação", value: "R$ 5.000+", desc: "economia anual em pós" },
                  { icon: "⚡", title: "Energia", value: "R$ 2.400+", desc: "economia na conta de luz", highlight: true },
                  { icon: "⚖️", title: "Jurídico", value: "R$ 3.000+", desc: "valor de consultas" }
                ].map((item, i) => (
                  <div key={i} className={`p-8 text-center ${item.highlight ? 'bg-primary/5' : ''} ${i < 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}>
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 text-center">
                <p className="text-lg mb-2">Economia potencial anual:</p>
                <div className="text-4xl font-extrabold">R$ 10.000+</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== OUTROS BENEFÍCIOS ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Mais Vantagens</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              E Tem <span className="text-primary">Mais!</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefícios adicionais para completar sua experiência
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outrosBeneficios.map((beneficio, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className="flex gap-4 p-6 bg-light rounded-2xl hover:bg-primary/5 transition-colors group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    {beneficio.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm">{beneficio.descricao}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre os benefícios
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
              Pronto para Aproveitar Esses Benefícios?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Associe-se ao SINMEVACO e tenha acesso imediato a todos os benefícios.
              Sua carreira e seu bolso agradecem!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Quero Me Associar
              </Link>
              <a
                href="https://wa.me/5531997178316?text=Olá! Quero saber mais sobre os benefícios do SINMEVACO."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-xl"
              >
                Tirar Dúvidas
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
