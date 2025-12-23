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

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Sou ${formData.nome}.%0A%0A*Assunto:* ${formData.assunto}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A%0A*Mensagem:*%0A${formData.mensagem}`;
    window.open(`https://wa.me/5531997178316?text=${message}`, '_blank');
  };

  const canaisContato = [
    { icon: '💬', titulo: 'WhatsApp', info: '(31) 99717-8316', descricao: 'Atendimento rápido', link: 'https://wa.me/5531997178316', cor: 'from-green-500 to-green-600' },
    { icon: '📞', titulo: 'Telefone', info: '(31) 99717-8316', descricao: 'Ligações comerciais', link: 'tel:+5531997178316', cor: 'from-primary to-primary-light' },
    { icon: '✉️', titulo: 'E-mail', info: 'contato@sinmevaco.com.br', descricao: 'Assuntos formais', link: 'mailto:contato@sinmevaco.com.br', cor: 'from-blue-500 to-blue-600' },
    { icon: '📸', titulo: 'Instagram', info: '@sinmevaco', descricao: 'Siga-nos', link: 'https://instagram.com/sinmevaco', cor: 'from-pink-500 to-purple-600' }
  ];

  const horarios = [
    { dia: 'Segunda a Sexta', horario: '8h às 18h' },
    { dia: 'Sábado', horario: '8h às 12h' },
    { dia: 'Domingo e Feriados', horario: 'Fechado' }
  ];

  const faqData = [
    { question: "Qual o horário de atendimento?", answer: "Presencial: segunda a sexta das 8h às 18h, sábados das 8h às 12h. WhatsApp: segunda a sexta em horário comercial." },
    { question: "Onde fica a sede do sindicato?", answer: "Nossa sede está em Ipatinga, no Vale do Aço. Entre em contato para o endereço completo." },
    { question: "Preciso ir presencialmente para me associar?", answer: "Não! Você pode iniciar o processo online, pelo WhatsApp ou pelo formulário do site." },
    { question: "Quanto tempo leva para receber resposta?", answer: "Respondemos todas as mensagens em até 24 horas úteis. Pelo WhatsApp é ainda mais rápido." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sinmevaco.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Contato", "item": "https://sinmevaco.com.br/contato" }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
    "description": "Sindicato que representa e defende os médicos do Vale do Aço há mais de 32 anos.",
    "telephone": "+5531997178316",
    "email": "contato@sinmevaco.com.br",
    "url": "https://sinmevaco.com.br",
    "areaServed": ["Ipatinga", "Timóteo", "Coronel Fabriciano", "Vale do Aço"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative pt-32 pb-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-up">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Contato</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Estamos aqui para você</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Fale <span className="text-gradient">Conosco</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Tem dúvidas, sugestões ou precisa de ajuda? Entre em contato.
              Estamos prontos para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CANAIS DE CONTATO ========== */}
      <section className="section bg-white overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge">Canais</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Formas de <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o canal mais conveniente para você
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canaisContato.map((canal, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <a
                  href={canal.link}
                  target={canal.link.startsWith('http') ? '_blank' : undefined}
                  rel={canal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card h-full text-center group hover:border-primary/30 border-2 border-transparent"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${canal.cor} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {canal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {canal.titulo}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{canal.info}</p>
                  <p className="text-gray-600 text-sm">{canal.descricao}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FORMULÁRIO E INFORMAÇÕES ========== */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulário */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                        placeholder="(31) 99999-9999"
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
                      <option value="Filiação">Quero me associar</option>
                      <option value="Apoio Jurídico">Apoio Jurídico</option>
                      <option value="Benefícios">Dúvidas sobre benefícios</option>
                      <option value="Sugestão">Sugestão</option>
                      <option value="Outro">Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-xl w-full">
                    Enviar Mensagem
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Informações */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {/* Horários */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-2xl">🕐</span>
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-4">
                    {horarios.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-900 font-medium">{item.dia}</span>
                        <span className={`font-semibold ${item.horario === 'Fechado' ? 'text-red-500' : 'text-primary'}`}>
                          {item.horario}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Região de Atuação */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    Região de Atuação
                  </h3>
                  <p className="text-gray-600 mb-4">
                    O SINMEVACO representa médicos de toda a região do Vale do Aço:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Ipatinga', 'Timóteo', 'Coronel Fabriciano', 'Vale do Aço'].map((cidade, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-light">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-gray-900">{cidade}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Atendimento Urgente */}
                <div className="bg-gradient-to-br from-accent to-orange-600 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Precisa de Atendimento Urgente?</h3>
                  <p className="text-white/90 mb-6">
                    Para questões urgentes, entre em contato diretamente pelo WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/5531997178316?text=Olá! Preciso de atendimento urgente."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chamar no WhatsApp
                  </a>
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
            <span className="section-badge">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
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
              Ainda Não é Associado?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Junte-se a nós e tenha acesso a todos os benefícios e apoio que o
              SINMEVACO oferece aos médicos do Vale do Aço.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/associe-se" className="btn btn-accent btn-xl">
                Quero Me Associar
              </Link>
              <Link href="/beneficios" className="btn btn-outline-white btn-xl">
                Ver Benefícios
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
