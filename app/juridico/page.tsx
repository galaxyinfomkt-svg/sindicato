'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      description: "Defesa em ações trabalhistas, revisão de contratos, cálculo de verbas rescisórias, assédio moral e outras questões de vínculo empregatício.",
      items: [
        "Ações trabalhistas",
        "Revisão de contratos",
        "Cálculos de verbas",
        "Assédio moral",
        "Horas extras",
        "Insalubridade"
      ]
    },
    {
      icon: "🏛️",
      title: "Direito Administrativo",
      description: "Representação em processos administrativos, concursos públicos, licitações e questões com órgãos públicos de saúde.",
      items: [
        "Processos administrativos",
        "Concursos públicos",
        "PAD e sindicâncias",
        "Licenças e afastamentos",
        "Aposentadoria",
        "Gratificações"
      ]
    },
    {
      icon: "🤝",
      title: "Direito Sindical",
      description: "Negociações coletivas, acordos e convenções, representação em conflitos coletivos e defesa dos interesses da categoria.",
      items: [
        "Acordos coletivos",
        "Convenções",
        "Negociações salariais",
        "Pisos salariais",
        "Condições de trabalho",
        "Greves"
      ]
    }
  ];

  const faqData = [
    {
      question: "O apoio jurídico é gratuito para associados?",
      answer: "Sim! Associados do SINMEVACO têm acesso a orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical. Para ações judiciais, há condições especiais com escritórios parceiros."
    },
    {
      question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
      answer: "O prazo prescricional para ações trabalhistas é de 2 anos após o término do contrato de trabalho, podendo reclamar os últimos 5 anos de direitos. Por isso, é importante buscar orientação o quanto antes."
    },
    {
      question: "Como funciona o atendimento jurídico?",
      answer: "O primeiro passo é entrar em contato conosco para agendar uma consulta. Nossa equipe analisará seu caso e indicará o melhor caminho, seja orientação, mediação ou ação judicial."
    },
    {
      question: "Posso ser representado em processos éticos?",
      answer: "Sim, o SINMEVACO oferece apoio em processos junto ao CRM e outros órgãos, garantindo o direito à ampla defesa do médico."
    },
    {
      question: "O sindicato pode intervir em negociações com hospitais?",
      answer: "Sim, o SINMEVACO atua em negociações coletivas com hospitais, clínicas e órgãos públicos, buscando melhores condições de trabalho e remuneração para a categoria."
    },
    {
      question: "Como faço para solicitar apoio jurídico?",
      answer: "Entre em contato pelo WhatsApp (31) 99717-8316, preencha o formulário nesta página ou compareça à sede do sindicato. Nossa equipe retornará o mais breve possível."
    }
  ];

  const etapas = [
    {
      numero: "01",
      titulo: "Contato Inicial",
      descricao: "Entre em contato pelo WhatsApp ou formulário descrevendo sua situação."
    },
    {
      numero: "02",
      titulo: "Análise do Caso",
      descricao: "Nossa equipe analisa sua situação e identifica os caminhos possíveis."
    },
    {
      numero: "03",
      titulo: "Orientação",
      descricao: "Você recebe orientação jurídica especializada sobre como proceder."
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      descricao: "Se necessário, encaminhamos para escritório parceiro com condições especiais."
    }
  ];

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
        "name": "Jurídico",
        "item": "https://sinmevaco.com.br/juridico"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Apoio Jurídico SINMEVACO",
    "description": "Serviço de apoio jurídico especializado para médicos do Vale do Aço nas áreas trabalhista, administrativa e sindical.",
    "provider": {
      "@type": "Organization",
      "name": "SINMEVACO",
      "url": "https://sinmevaco.com.br"
    },
    "areaServed": ["Ipatinga", "Timóteo", "Coronel Fabriciano", "Vale do Aço"],
    "serviceType": ["Direito Trabalhista", "Direito Administrativo", "Direito Sindical"]
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-80">
            <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
            <span>/</span>
            <span>Jurídico</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                Apoio Jurídico Especializado
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Assessoria <span className="text-accent-orange">Jurídica</span> para Médicos
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Conte com apoio jurídico especializado nas áreas trabalhista, administrativa
                e sindical. Defendemos seus direitos com experiência e dedicação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/5531997178316?text=Olá! Preciso de apoio jurídico do SINMEVACO."
                  target="_blank"
                  className="btn btn-accent text-center"
                >
                  Solicitar Apoio Agora
                </Link>
                <a href="#areas" className="btn btn-outline-white text-center">
                  Conhecer Áreas de Atuação
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18ca7298052f138331.jpg"
                  alt="Apoio Jurídico SINMEVACO"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-dark p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold text-primary">32+</div>
                  <div className="text-sm text-gray">Anos defendendo médicos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Especialidades</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Oferecemos apoio jurídico em todas as áreas relevantes para a carreira médica
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {areasAtuacao.map((area, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="text-5xl mb-6">{area.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{area.title}</h3>
                <p className="text-gray mb-6 leading-relaxed">{area.description}</p>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Como Funciona o <span className="text-primary">Apoio Jurídico</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Um processo simples e transparente para garantir seus direitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{etapa.numero}</div>
                  <h3 className="text-xl font-bold text-dark mb-2">{etapa.titulo}</h3>
                  <p className="text-gray text-sm">{etapa.descricao}</p>
                </div>
                {index < etapas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="opacity-80">Médicos atendidos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">32+</div>
              <div className="opacity-80">Anos de experiência</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="opacity-80">Taxa de sucesso</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="opacity-80">Comprometimento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quando Procurar */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">Orientação</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Quando Procurar <span className="text-primary">Apoio Jurídico?</span>
              </h2>
              <p className="text-lg text-gray mb-8 leading-relaxed">
                Existem diversas situações em que o apoio jurídico especializado pode
                fazer a diferença na sua carreira e na defesa dos seus direitos.
              </p>

              <div className="space-y-4">
                {[
                  "Demissão ou rescisão contratual",
                  "Falta de pagamento de verbas trabalhistas",
                  "Assédio moral ou sexual no ambiente de trabalho",
                  "Condições inadequadas de trabalho",
                  "Problemas com concursos públicos",
                  "Processos administrativos ou éticos",
                  "Dúvidas sobre contratos de trabalho",
                  "Negociações salariais coletivas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-light rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Solicite Apoio Jurídico</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Nome completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Assunto *</label>
                  <select
                    required
                    value={formData.assunto}
                    onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="Trabalhista">Direito Trabalhista</option>
                    <option value="Administrativo">Direito Administrativo</option>
                    <option value="Sindical">Direito Sindical</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Descreva sua situação *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos brevemente sobre sua situação..."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Solicitação
                </button>
                <p className="text-xs text-gray text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Dúvidas sobre o <span className="text-primary">Apoio Jurídico</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Respondemos às perguntas mais frequentes sobre nossos serviços jurídicos
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white rounded-xl p-5 flex items-center justify-between text-left shadow-sm hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-dark pr-4">{faq.question}</span>
                  <span className={`text-primary text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="bg-white border-t border-light rounded-b-xl p-5 mt-[-8px]">
                    <p className="text-gray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-dark-green to-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Enfrente Essa Batalha Sozinho
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            O SINMEVACO está ao seu lado para defender seus direitos.
            Entre em contato agora e tenha o suporte que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5531997178316?text=Olá! Preciso de apoio jurídico do SINMEVACO."
              target="_blank"
              className="btn btn-accent"
            >
              Falar pelo WhatsApp
            </Link>
            <Link href="/contato" className="btn btn-outline-white">
              Outras Formas de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
