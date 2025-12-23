'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    {
      icon: "⏰",
      title: "Jornada de Trabalho",
      description: "Limite de horas, descanso entre jornadas e intervalos adequados para preservar sua saúde e qualidade do atendimento."
    },
    {
      icon: "💰",
      title: "Remuneração Justa",
      description: "Piso salarial, adicional de insalubridade, horas extras, adicional noturno e todos os direitos remuneratórios."
    },
    {
      icon: "🏖️",
      title: "Férias e Descanso",
      description: "Direito a férias remuneradas, descanso semanal, feriados e licenças previstas em lei."
    },
    {
      icon: "🛡️",
      title: "Segurança no Trabalho",
      description: "EPIs adequados, ambiente seguro, proteção contra riscos ocupacionais e condições dignas de trabalho."
    },
    {
      icon: "📋",
      title: "Estabilidade",
      description: "Proteção contra demissão arbitrária, garantias em casos de doença, gestação e acidentes de trabalho."
    },
    {
      icon: "🎓",
      title: "Capacitação",
      description: "Direito a licença para estudos, participação em congressos e atualização profissional contínua."
    }
  ];

  const direitosPrevidenciarios = [
    {
      title: "Aposentadoria Especial",
      description: "Médicos expostos a agentes nocivos podem ter direito à aposentadoria especial com tempo reduzido de contribuição."
    },
    {
      title: "Auxílio-Doença",
      description: "Benefício para afastamento temporário por motivo de saúde, garantindo renda durante o período de recuperação."
    },
    {
      title: "Pensão por Morte",
      description: "Proteção aos dependentes em caso de falecimento, garantindo sustento à família."
    },
    {
      title: "Salário-Maternidade",
      description: "Licença remunerada para médicas gestantes, com garantia de emprego após o retorno."
    }
  ];

  const direitosEticos = [
    {
      icon: "⚖️",
      title: "Autonomia Profissional",
      description: "Direito de exercer a medicina com liberdade e independência técnica, sem interferências indevidas."
    },
    {
      icon: "🔒",
      title: "Sigilo Médico",
      description: "Proteção do sigilo profissional, fundamental para a relação médico-paciente."
    },
    {
      icon: "✋",
      title: "Recusa de Procedimentos",
      description: "Direito de recusar procedimentos que contrariem sua consciência ou sejam contrários à ética médica."
    },
    {
      icon: "📝",
      title: "Defesa Profissional",
      description: "Direito à ampla defesa em processos éticos e administrativos, com apoio do sindicato."
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
        "name": "Direitos do Médico",
        "item": "https://sinmevaco.com.br/direitos-do-medico"
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-80">
            <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
            <span>/</span>
            <span>Direitos do Médico</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Conheça e Defenda Seus Direitos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Direitos do <span className="text-accent-orange">Médico</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Informação é poder. Conheça todos os seus direitos como profissional da medicina
              e saiba como o SINMEVACO pode ajudá-lo a defendê-los.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/juridico" className="btn btn-accent text-center">
                Preciso de Apoio Jurídico
              </Link>
              <Link href="/associe-se" className="btn btn-outline-white text-center">
                Quero Me Associar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direitos Trabalhistas */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Trabalhista</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Direitos <span className="text-primary">Trabalhistas</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Conheça os principais direitos que protegem o médico nas relações de trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {direitosTrabalhistas.map((direito, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4">{direito.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {direito.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {direito.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direitos Previdenciários */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">Previdenciário</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Direitos <span className="text-primary">Previdenciários</span>
              </h2>
              <p className="text-lg text-gray mb-8 leading-relaxed">
                Médicos têm direitos previdenciários específicos que garantem proteção
                em diferentes momentos da carreira e da vida.
              </p>

              <div className="space-y-6">
                {direitosPrevidenciarios.map((direito, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{direito.title}</h3>
                      <p className="text-gray text-sm">{direito.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-dark-green rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Atenção Especial</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Reforma da Previdência</h4>
                  <p className="text-sm opacity-90">
                    As regras previdenciárias passaram por mudanças. Consulte o SINMEVACO
                    para entender como elas afetam sua situação específica.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Tempo de Contribuição</h4>
                  <p className="text-sm opacity-90">
                    A contagem do tempo de contribuição e as regras de transição
                    variam conforme cada caso.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Orientação Especializada</h4>
                  <p className="text-sm opacity-90">
                    Nossa equipe jurídica pode analisar seu caso e orientar sobre
                    a melhor estratégia previdenciária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direitos Éticos e Profissionais */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Ético-Profissional</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Direitos <span className="text-primary">Éticos e Profissionais</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Princípios fundamentais que garantem o exercício digno e autônomo da medicina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {direitosEticos.map((direito, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border-2 border-light hover:border-primary transition-all duration-300 group">
                <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:bg-primary group-hover:text-white transition-all">
                  {direito.icon}
                </div>
                <h3 className="font-bold text-dark mb-2">{direito.title}</h3>
                <p className="text-gray text-sm">{direito.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condições de Trabalho */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Condições Dignas de Trabalho
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Todo médico tem direito a exercer sua profissão em condições que
              garantam sua saúde, segurança e a qualidade do atendimento aos pacientes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-bold text-xl mb-2">Infraestrutura</h3>
                <p className="opacity-90 text-sm">
                  Instalações adequadas, equipamentos funcionais e materiais
                  necessários para o exercício da medicina.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-bold text-xl mb-2">Equipe de Apoio</h3>
                <p className="opacity-90 text-sm">
                  Número adequado de profissionais de apoio para garantir
                  atendimento de qualidade.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="font-bold text-xl mb-2">Saúde Mental</h3>
                <p className="opacity-90 text-sm">
                  Ambiente de trabalho que respeite a saúde física e mental
                  do profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre direitos médicos
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
      <section className="section bg-gradient-to-br from-accent-orange to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seus Direitos Estão Sendo Respeitados?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Se você está enfrentando qualquer violação dos seus direitos como médico,
            o SINMEVACO está aqui para ajudar. Nossa equipe jurídica especializada
            pode orientá-lo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5531997178316?text=Olá! Preciso de orientação sobre meus direitos como médico."
              target="_blank"
              className="btn bg-white text-accent-orange hover:bg-light"
            >
              Falar com Especialista
            </Link>
            <Link href="/juridico" className="btn btn-outline-white">
              Conhecer Apoio Jurídico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
