import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Metadata da página
export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça o SINMEVACO - Sindicato dos Médicos do Vale do Aço. Há mais de 32 anos defendendo, representando e fortalecendo a classe médica em Ipatinga, Timóteo, Coronel Fabriciano e região.',
  keywords: ['SINMEVACO', 'história sindicato médicos', 'sindicato vale do aço', 'representação médica', 'quem somos'],
  openGraph: {
    title: 'Quem Somos - SINMEVACO',
    description: 'Há mais de 32 anos defendendo os direitos dos médicos do Vale do Aço.',
    images: ['https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg'],
  },
};

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
      <section className="hero" style={{ paddingTop: '180px', paddingBottom: '100px' }}>
        <div className="hero-content container" style={{ textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Quem Somos</span>
          </nav>

          <h1 style={{ color: 'white', marginBottom: '25px' }}>Quem Somos</h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '22px',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7'
          }}>
            Há mais de 32 anos representando, defendendo e fortalecendo a classe médica no Vale do Aço.
          </p>
        </div>
      </section>

      {/* ========== HISTÓRIA DO SINDICATO ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Nossa História</h2>
          <p className="section-subtitle">
            Uma trajetória de mais de três décadas dedicada à defesa intransigente da categoria médica
          </p>

          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '25px' }}>
                <strong style={{ color: 'var(--primary-green)' }}>O SINMEVACO – Sindicato dos Médicos do Vale do Aço</strong> foi fundado com o propósito fundamental de representar, defender e promover os interesses da classe médica na região do Vale do Aço, abrangendo os municípios de Ipatinga, Timóteo, Coronel Fabriciano e cidades circunvizinhas.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '25px' }}>
                Ao longo de <strong style={{ color: 'var(--primary-green)' }}>mais de 32 anos de existência</strong>, o SINMEVACO consolidou-se como uma instituição de referência na defesa dos direitos trabalhistas, da valorização profissional e das condições dignas de trabalho dos médicos que atuam na região.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '25px' }}>
                Nossa atuação é pautada pela <strong style={{ color: 'var(--primary-green)' }}>ética, transparência e independência sindical</strong>, sempre priorizando o bem-estar da categoria e a qualidade da assistência médica prestada à população do Vale do Aço.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9' }}>
                Participamos ativamente de negociações coletivas, mobilizações em defesa da saúde pública e privada, debates sobre políticas de saúde e representação institucional dos médicos em diversas instâncias.
              </p>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
              position: 'relative',
              minHeight: '400px'
            }}>
              <Image
                src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18f4c8e921e65a0a1c.jpg"
                alt="SINMEVACO - Participação em eventos, debates e palestras sobre direitos dos médicos"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid-4" style={{ marginTop: '60px' }}>
            <div className="stat-card">
              <span className="stat-number">32+</span>
              <span className="stat-label">Anos de Atuação</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compromisso com a Categoria</span>
            </div>
            <div className="stat-card">
              <span className="stat-number" style={{ fontSize: '2.5rem' }}>⚖️</span>
              <span className="stat-label">Defesa Jurídica Especializada</span>
            </div>
            <div className="stat-card">
              <span className="stat-number" style={{ fontSize: '2.5rem' }}>🏛️</span>
              <span className="stat-label">Representação Institucional</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSÃO, VISÃO E VALORES ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Missão, Visão e Valores</h2>
          <p className="section-subtitle">
            Os pilares que guiam nossa atuação em defesa da classe médica
          </p>

          <div className="grid-3">
            <div className="card" style={{ borderTop: '5px solid var(--primary-green)' }}>
              <span className="icon-lg">🎯</span>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px' }}>Missão</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.8' }}>
                Defender os direitos, a valorização profissional e as condições dignas de trabalho dos médicos do Vale do Aço, promovendo a representatividade sindical ética e comprometida com o bem-estar da categoria e da sociedade.
              </p>
            </div>

            <div className="card" style={{ borderTop: '5px solid var(--primary-green)' }}>
              <span className="icon-lg">🏆</span>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px' }}>Visão</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.8' }}>
                Ser referência sindical na defesa da classe médica em Minas Gerais, reconhecido pela excelência na representação, pela transparência na gestão e pelo compromisso inabalável com os interesses dos médicos.
              </p>
            </div>

            <div className="card" style={{ borderTop: '5px solid var(--primary-green)' }}>
              <span className="icon-lg">⚖️</span>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px' }}>Valores</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Ética e integridade profissional',
                  'Transparência na gestão sindical',
                  'Compromisso com a categoria médica',
                  'Responsabilidade social',
                  'Independência sindical'
                ].map((valor, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < 4 ? '1px solid var(--light-gray)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '17px'
                  }}>
                    <span style={{ color: 'var(--primary-green)', fontWeight: '700', fontSize: '20px' }}>✓</span>
                    {valor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ATUAÇÃO SINDICAL ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Nossa Atuação Sindical</h2>
          <p className="section-subtitle">
            Como o SINMEVACO atua na defesa dos interesses da categoria médica
          </p>

          <div className="grid-3">
            {[
              { icon: '⚖️', title: 'Defesa Trabalhista', desc: 'Atuação em questões trabalhistas, garantindo o cumprimento dos direitos dos médicos e condições justas de trabalho.' },
              { icon: '🏢', title: 'Representação Administrativa', desc: 'Intermediação entre médicos e instituições de saúde, defendendo os interesses da categoria em âmbito administrativo.' },
              { icon: '🤝', title: 'Negociações Coletivas', desc: 'Condução de negociações com empregadores e gestores para garantir melhores condições de trabalho e remuneração.' },
              { icon: '🛡️', title: 'Apoio Jurídico Especializado', desc: 'Assessoria jurídica completa através de parceria com escritórios especializados em direito médico.' },
              { icon: '💬', title: 'Mediação de Conflitos', desc: 'Intermediação em situações de conflito entre médicos e instituições, buscando soluções justas e equilibradas.' },
              { icon: '📢', title: 'Representação Institucional', desc: 'Participação ativa em debates, fóruns e instâncias decisórias sobre políticas de saúde na região.' }
            ].map((item, index) => (
              <div key={index} className="card card-gray" style={{
                position: 'relative',
                borderLeft: '4px solid var(--primary-green)',
                overflow: 'hidden'
              }}>
                <span className="icon-lg">{item.icon}</span>
                <h3 style={{ marginBottom: '15px' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRESIDENTE ========== */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              border: '5px solid rgba(255, 255, 255, 0.2)',
              position: 'relative',
              minHeight: '500px'
            }}>
              <Image
                src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ color: 'white' }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                opacity: '0.9',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Presidente do SINMEVACO
              </h4>
              <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', lineHeight: '1.2', color: 'white' }}>
                Dr. Carlos Henrique Quintão Valeriano
              </h2>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '20px', color: 'rgba(255, 255, 255, 0.95)' }}>
                O Dr. Carlos Henrique Quintão Valeriano assume a presidência do SINMEVACO com o firme compromisso de fortalecer a representatividade da classe médica no Vale do Aço.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '30px', color: 'rgba(255, 255, 255, 0.95)' }}>
                Sua gestão é pautada pela <strong>ética, transparência e defesa intransigente</strong> dos direitos dos médicos, sempre priorizando o diálogo, a negociação e a busca por condições dignas de trabalho para todos os profissionais da região.
              </p>

              <div className="presidente-destaque">
                <p style={{ fontSize: '17px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                  "Nosso compromisso é com a valorização da profissão médica, a defesa dos nossos direitos e o fortalecimento da categoria. Juntos, construímos um sindicato forte e representativo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== APOIO JURÍDICO ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Apoio Jurídico Especializado</h2>
          <p className="section-subtitle">
            Assessoria jurídica completa para médicos sindicalizados
          </p>

          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '36px', marginBottom: '25px' }}>Parcerias com Escritórios Especializados</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px' }}>
                O SINMEVACO mantém parcerias estratégicas com escritórios de advocacia especializados em direito médico, trabalhista e sindical, garantindo atendimento jurídico de excelência aos médicos sindicalizados.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                Nossa atuação jurídica é <strong style={{ color: 'var(--primary-green)' }}>preventiva e corretiva</strong>, abrangendo desde orientações sobre contratos de trabalho até a defesa em processos administrativos e judiciais.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '40px' }}>
                {[
                  { icon: '📋', text: 'Direito Trabalhista' },
                  { icon: '🏢', text: 'Direito Administrativo' },
                  { icon: '⚖️', text: 'Direito Sindical' },
                  { icon: '🛡️', text: 'Defesa Institucional' }
                ].map((item, index) => (
                  <div key={index} className="juridico-card">
                    <span style={{ fontSize: '32px' }}>{item.icon}</span>
                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/juridico" className="btn btn-primary">
                👉 Solicitar Apoio Jurídico
              </Link>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
              position: 'relative',
              minHeight: '400px'
            }}>
              <Image
                src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f18ca7298052f138331.jpg"
                alt="Dr. Carlos Henrique Quintão Valeriano com equipe jurídica do escritório Lana & Valladares"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ÁREA DE ATUAÇÃO ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Nossa Área de Atuação</h2>
          <p className="section-subtitle">
            Presença consolidada nas principais cidades do Vale do Aço
          </p>

          <div className="grid-4">
            {[
              { city: 'Ipatinga' },
              { city: 'Timóteo' },
              { city: 'Coronel Fabriciano' },
              { city: 'Vale do Aço' }
            ].map((item, index) => (
              <div key={index} className="regiao-card">
                <span className="icon-lg">📍</span>
                <h3>{item.city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="cta-section section">
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '25px' }}>
            Fortaleça a sua profissão. Faça parte do SINMEVACO.
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '20px', marginBottom: '40px', lineHeight: '1.7' }}>
            Junte-se aos médicos que defendem seus direitos, valorizam sua profissão e constroem uma classe médica mais forte no Vale do Aço.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/associe-se" className="btn btn-white btn-lg">
              🟢 Associe-se
            </Link>
            <Link href="/contato" className="btn btn-secondary btn-lg">
              ⚪ Fale com o Sindicato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
