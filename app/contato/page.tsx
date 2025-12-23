'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      titulo: "WhatsApp",
      info: "(31) 99717-8316",
      descricao: "Atendimento rápido e direto",
      link: "https://wa.me/5531997178316",
      cor: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      titulo: "Telefone",
      info: "(31) 99717-8316",
      descricao: "Ligações em horário comercial",
      link: "tel:+5531997178316",
      cor: "bg-primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      titulo: "E-mail",
      info: "contato@sinmevaco.com.br",
      descricao: "Para assuntos formais",
      link: "mailto:contato@sinmevaco.com.br",
      cor: "bg-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      titulo: "Instagram",
      info: "@sinmevaco",
      descricao: "Siga-nos nas redes sociais",
      link: "https://instagram.com/sinmevaco",
      cor: "bg-pink-500"
    }
  ];

  const horarios = [
    { dia: "Segunda a Sexta", horario: "8h às 18h" },
    { dia: "Sábado", horario: "8h às 12h" },
    { dia: "Domingo e Feriados", horario: "Fechado" }
  ];

  const faqData = [
    {
      question: "Qual o horário de atendimento do SINMEVACO?",
      answer: "Nosso atendimento presencial funciona de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h. Pelo WhatsApp, atendemos de segunda a sexta em horário comercial."
    },
    {
      question: "Onde fica a sede do sindicato?",
      answer: "Nossa sede está localizada em Ipatinga, no Vale do Aço. Entre em contato para obter o endereço completo e agendar sua visita."
    },
    {
      question: "Preciso ir presencialmente para me associar?",
      answer: "Não é necessário! Você pode iniciar o processo de filiação online, pelo WhatsApp ou pelo formulário do site. Facilitamos ao máximo para você."
    },
    {
      question: "Quanto tempo leva para receber uma resposta?",
      answer: "Nos esforçamos para responder todas as mensagens em até 24 horas úteis. Pelo WhatsApp, o retorno costuma ser ainda mais rápido."
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
        "name": "Contato",
        "item": "https://sinmevaco.com.br/contato"
      }
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
    "areaServed": ["Ipatinga", "Timóteo", "Coronel Fabriciano", "Vale do Aço"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - SINMEVACO",
    "description": "Entre em contato com o SINMEVACO. Atendimento por WhatsApp, telefone e e-mail.",
    "url": "https://sinmevaco.com.br/contato"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-80">
            <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
            <span>/</span>
            <span>Contato</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Estamos Aqui Para Você
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fale <span className="text-accent-orange">Conosco</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Tem dúvidas, sugestões ou precisa de ajuda? Entre em contato conosco
              pelos canais abaixo. Estamos prontos para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Canais de Contato */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Canais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Formas de <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Escolha o canal mais conveniente para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canaisContato.map((canal, index) => (
              <a
                key={index}
                href={canal.link}
                target={canal.link.startsWith('http') ? '_blank' : undefined}
                rel={canal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${canal.cor} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {canal.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-1">{canal.titulo}</h3>
                <p className="text-primary font-semibold mb-2">{canal.info}</p>
                <p className="text-gray text-sm">{canal.descricao}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-dark mb-6">Envie sua Mensagem</h2>
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
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="(31) 99999-9999"
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
                    <option value="Filiação">Quero me associar</option>
                    <option value="Apoio Jurídico">Apoio Jurídico</option>
                    <option value="Benefícios">Dúvidas sobre benefícios</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Reclamação">Reclamação</option>
                    <option value="Outro">Outro assunto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Mensagem *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray/20 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Mensagem
                </button>
                <p className="text-xs text-gray text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
                </p>
              </form>
            </div>

            {/* Informações */}
            <div className="space-y-8">
              {/* Horários */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Horário de Atendimento
                </h3>
                <div className="space-y-4">
                  {horarios.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-light last:border-0">
                      <span className="text-dark font-medium">{item.dia}</span>
                      <span className={`font-semibold ${item.horario === 'Fechado' ? 'text-red-500' : 'text-primary'}`}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Região de Atuação */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Região de Atuação
                </h3>
                <p className="text-gray mb-4">
                  O SINMEVACO representa médicos de toda a região do Vale do Aço:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Ipatinga', 'Timóteo', 'Coronel Fabriciano', 'Vale do Aço'].map((cidade, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-dark">{cidade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Atendimento Urgente */}
              <div className="bg-gradient-to-br from-accent-orange to-orange-500 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Precisa de Atendimento Urgente?</h3>
                <p className="opacity-90 mb-6">
                  Para questões urgentes, entre em contato diretamente pelo WhatsApp.
                  Nossa equipe está pronta para ajudá-lo.
                </p>
                <a
                  href="https://wa.me/5531997178316?text=Olá! Preciso de atendimento urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-accent-orange hover:bg-light w-full text-center"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-light rounded-xl p-5 flex items-center justify-between text-left hover:bg-primary/5 transition-all"
                >
                  <span className="font-semibold text-dark pr-4">{faq.question}</span>
                  <span className={`text-primary text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="bg-light border-t border-white rounded-b-xl p-5 mt-[-8px]">
                    <p className="text-gray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-dark-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda Não é Associado?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e tenha acesso a todos os benefícios e apoio que o
            SINMEVACO oferece aos médicos do Vale do Aço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/associe-se" className="btn btn-accent">
              Quero Me Associar
            </Link>
            <Link href="/beneficios" className="btn btn-outline-white">
              Ver Benefícios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
