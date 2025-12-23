'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BeneficiosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const beneficiosPrincipais = [
    {
      icon: "🎓",
      titulo: "Educação",
      desconto: "até 45%",
      descricao: "Descontos em graduação, pós-graduação e cursos de especialização em instituições parceiras.",
      destaque: true,
      parceiros: ["FGV", "IPOG", "Gran Cursos", "Estácio"]
    },
    {
      icon: "⚡",
      titulo: "Energia Elétrica",
      desconto: "até 20%",
      descricao: "Economia na conta de luz através de programas de energia sustentável e cooperativas.",
      destaque: true,
      parceiros: ["Energia Solar", "Cooperativas"]
    },
    {
      icon: "⚖️",
      titulo: "Apoio Jurídico",
      desconto: "Gratuito",
      descricao: "Orientação jurídica gratuita nas áreas trabalhista, administrativa e sindical.",
      destaque: true,
      parceiros: ["Escritórios Parceiros"]
    },
    {
      icon: "🛡️",
      titulo: "Seguros",
      desconto: "até 30%",
      descricao: "Condições especiais em seguros de vida, responsabilidade civil e automóvel.",
      destaque: false,
      parceiros: ["Seguradoras Parceiras"]
    },
    {
      icon: "🏥",
      titulo: "Saúde",
      desconto: "Especial",
      descricao: "Convênios com clínicas, laboratórios e profissionais de saúde para você e sua família.",
      destaque: false,
      parceiros: ["Clínicas", "Laboratórios"]
    },
    {
      icon: "🏋️",
      titulo: "Bem-estar",
      desconto: "até 50%",
      descricao: "Descontos em academias, spas, programas de saúde mental e qualidade de vida.",
      destaque: false,
      parceiros: ["Academias", "Wellness"]
    }
  ];

  const programaIndicacao = {
    titulo: "Programa de Indicação",
    subtitulo: "Indique e Ganhe!",
    descricao: "Indique um colega médico para se associar ao SINMEVACO e ganhe 1 mês de anuidade grátis para cada indicação bem-sucedida.",
    beneficios: [
      "1 mês grátis por indicação",
      "Sem limite de indicações",
      "Válido para novas filiações",
      "Desconto aplicado automaticamente"
    ]
  };

  const outrosBeneficios = [
    {
      icon: "📚",
      titulo: "Biblioteca Digital",
      descricao: "Acesso a publicações, artigos científicos e materiais de atualização médica."
    },
    {
      icon: "🎤",
      titulo: "Eventos e Congressos",
      descricao: "Descontos e vagas exclusivas em eventos científicos e congressos médicos."
    },
    {
      icon: "💳",
      titulo: "Cartão do Associado",
      descricao: "Carteira de identificação com acesso a benefícios exclusivos em parceiros."
    },
    {
      icon: "📰",
      titulo: "Informativo",
      descricao: "Boletins informativos sobre direitos, benefícios e novidades da categoria."
    },
    {
      icon: "🤝",
      titulo: "Networking",
      descricao: "Participação em grupos e eventos para conexão com outros profissionais."
    },
    {
      icon: "📞",
      titulo: "Atendimento Prioritário",
      descricao: "Canal exclusivo para dúvidas e solicitações com atendimento ágil."
    }
  ];

  const faqData = [
    {
      question: "Como faço para acessar os benefícios?",
      answer: "Após se associar, você receberá acesso ao portal do associado com todos os códigos de desconto, contatos de parceiros e instruções para aproveitar cada benefício."
    },
    {
      question: "Os benefícios são extensivos à família?",
      answer: "Sim! Muitos de nossos benefícios são extensivos aos dependentes diretos do associado, incluindo cônjuge e filhos."
    },
    {
      question: "Quanto custa a mensalidade do sindicato?",
      answer: "A contribuição é acessível e proporcional aos benefícios oferecidos. Entre em contato para conhecer os valores atualizados e condições especiais."
    },
    {
      question: "Como funciona o Programa de Indicação?",
      answer: "Basta indicar um colega médico através do nosso formulário. Quando ele se filiar, você ganha 1 mês de anuidade grátis automaticamente."
    },
    {
      question: "Posso usar os benefícios imediatamente após me associar?",
      answer: "Sim! Após a confirmação da sua filiação, você já tem acesso a todos os benefícios disponíveis."
    },
    {
      question: "Os descontos são cumulativos?",
      answer: "Cada parceiro tem suas próprias regras. Em geral, os descontos do SINMEVACO são exclusivos, mas podem ser combinados com promoções vigentes."
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
        "name": "Benefícios",
        "item": "https://sinmevaco.com.br/beneficios"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Benefícios para Associados SINMEVACO",
    "description": "Programa completo de benefícios exclusivos para médicos associados ao SINMEVACO, incluindo descontos em educação, energia, saúde e muito mais.",
    "provider": {
      "@type": "Organization",
      "name": "SINMEVACO",
      "url": "https://sinmevaco.com.br"
    }
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
            <span>Benefícios</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Vantagens Exclusivas para Associados
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Benefícios <span className="text-accent-orange">Exclusivos</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Como associado do SINMEVACO, você tem acesso a um pacote completo de
              benefícios que fazem real diferença no seu dia a dia e na sua carreira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/associe-se" className="btn btn-accent text-center">
                Quero Esses Benefícios
              </Link>
              <a href="#beneficios" className="btn btn-outline-white text-center">
                Ver Todos os Benefícios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programa de Indicação - Destaque */}
      <section className="py-12 bg-gradient-to-r from-accent-orange to-orange-500">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                Novidade
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {programaIndicacao.titulo}
              </h2>
              <p className="text-xl opacity-90 mb-6">
                {programaIndicacao.descricao}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-dark mb-4">{programaIndicacao.subtitulo}</h3>
              <ul className="space-y-3 mb-6">
                {programaIndicacao.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-orange rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-dark">{beneficio}</span>
                  </li>
                ))}
              </ul>
              <Link href="/associe-se" className="btn btn-primary w-full text-center">
                Indicar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section id="beneficios" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Principais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Benefícios em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Confira os principais benefícios que você terá como associado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiosPrincipais.map((beneficio, index) => (
              <div
                key={index}
                className={`card relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  beneficio.destaque ? 'border-2 border-primary' : ''
                }`}
              >
                {beneficio.destaque && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="text-5xl mb-4">{beneficio.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{beneficio.titulo}</h3>
                <div className="inline-block bg-accent-orange/10 text-accent-orange font-bold px-3 py-1 rounded-full text-sm mb-4">
                  {beneficio.desconto} de desconto
                </div>
                <p className="text-gray mb-4">{beneficio.descricao}</p>
                <div className="pt-4 border-t border-light">
                  <p className="text-xs text-gray mb-2">Parceiros:</p>
                  <div className="flex flex-wrap gap-2">
                    {beneficio.parceiros.map((parceiro, idx) => (
                      <span key={idx} className="text-xs bg-light px-2 py-1 rounded">
                        {parceiro}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Comparativo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Quanto Você <span className="text-primary">Economiza</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Veja quanto você pode economizar por ano sendo associado ao SINMEVACO
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-light">
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="font-bold text-dark mb-2">Educação</h3>
                  <div className="text-3xl font-bold text-primary mb-2">R$ 5.000+</div>
                  <p className="text-sm text-gray">economia anual em pós-graduação</p>
                </div>
                <div className="p-8 text-center bg-primary/5">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-dark mb-2">Energia</h3>
                  <div className="text-3xl font-bold text-primary mb-2">R$ 2.400+</div>
                  <p className="text-sm text-gray">economia anual na conta de luz</p>
                </div>
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="font-bold text-dark mb-2">Jurídico</h3>
                  <div className="text-3xl font-bold text-primary mb-2">R$ 3.000+</div>
                  <p className="text-sm text-gray">valor de consultas gratuitas</p>
                </div>
              </div>
              <div className="bg-primary text-white p-6 text-center">
                <p className="text-lg mb-2">Economia potencial anual:</p>
                <div className="text-4xl font-bold">R$ 10.000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Benefícios */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Mais Vantagens</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              E Tem <span className="text-primary">Mais!</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Benefícios adicionais para completar sua experiência como associado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outrosBeneficios.map((beneficio, index) => (
              <div key={index} className="flex gap-4 p-6 bg-light rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="text-3xl">{beneficio.icon}</div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{beneficio.titulo}</h3>
                  <p className="text-gray text-sm">{beneficio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Tire suas dúvidas sobre os benefícios do SINMEVACO
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
      <section className="section bg-gradient-to-br from-primary to-dark-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Aproveitar Esses Benefícios?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Associe-se ao SINMEVACO e tenha acesso imediato a todos os benefícios.
            Sua carreira e seu bolso agradecem!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/associe-se" className="btn btn-accent">
              Quero Me Associar
            </Link>
            <Link
              href="https://wa.me/5531997178316?text=Olá! Quero saber mais sobre os benefícios do SINMEVACO."
              target="_blank"
              className="btn btn-outline-white"
            >
              Tirar Dúvidas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
