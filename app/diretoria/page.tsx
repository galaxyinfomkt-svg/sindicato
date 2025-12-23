import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Metadata da página
export const metadata: Metadata = {
  title: 'Diretoria',
  description: 'Conheça a diretoria do SINMEVACO - Sindicato dos Médicos do Vale do Aço. Gestão transparente e comprometida com a defesa dos direitos dos médicos.',
  keywords: ['diretoria SINMEVACO', 'presidente sindicato médicos', 'gestão sindical', 'Carlos Henrique Quintão Valeriano'],
  openGraph: {
    title: 'Diretoria - SINMEVACO',
    description: 'Conheça os dirigentes do Sindicato dos Médicos do Vale do Aço.',
    images: ['https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg'],
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
      "name": "Diretoria",
      "item": "https://sinmevaco.com.br/diretoria"
    }
  ]
};

// Dados da diretoria
const diretoriaExecutiva = [
  { cargo: 'Vice-Presidente', nome: 'A definir' },
  { cargo: 'Secretário Geral', nome: 'A definir' },
  { cargo: 'Secretário de Finanças', nome: 'A definir' },
  { cargo: 'Diretor de Comunicação', nome: 'A definir' },
  { cargo: 'Diretor Jurídico', nome: 'A definir' },
  { cargo: 'Diretor de Assuntos Sindicais', nome: 'A definir' },
];

const conselhoFiscal = [
  { cargo: 'Presidente do Conselho', nome: 'A definir' },
  { cargo: 'Conselheiro Titular', nome: 'A definir' },
  { cargo: 'Conselheiro Titular', nome: 'A definir' },
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
      <section className="hero" style={{ paddingTop: '180px', paddingBottom: '100px' }}>
        <div className="hero-content container" style={{ textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Diretoria</span>
          </nav>

          <h1 style={{ color: 'white', marginBottom: '25px' }}>Nossa Diretoria</h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '22px',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7'
          }}>
            Gestão transparente e comprometida com a defesa dos direitos dos médicos do Vale do Aço.
          </p>
        </div>
      </section>

      {/* ========== PRESIDENTE ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              position: 'relative',
              minHeight: '550px'
            }}>
              <Image
                src="https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/69405f1896e3f2127ce231c4.jpg"
                alt="Dr. Carlos Henrique Quintão Valeriano - Presidente do SINMEVACO"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="badge badge-primary" style={{ marginBottom: '20px' }}>Presidente</span>
              <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
                Dr. Carlos Henrique Quintão Valeriano
              </h2>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '20px' }}>
                O Dr. Carlos Henrique Quintão Valeriano lidera o SINMEVACO com o firme compromisso de fortalecer a representatividade da classe médica no Vale do Aço.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '20px' }}>
                Com uma trajetória marcada pela dedicação à medicina e à defesa dos direitos profissionais, o presidente conduz uma gestão pautada pela <strong style={{ color: 'var(--primary-green)' }}>ética, transparência e diálogo constante</strong> com os médicos sindicalizados.
              </p>

              <p style={{ fontSize: '18px', lineHeight: '1.9', marginBottom: '30px' }}>
                Sua atuação tem sido fundamental para consolidar o SINMEVACO como uma instituição de referência na região, garantindo que os interesses da categoria sejam sempre representados com vigor e compromisso.
              </p>

              <div style={{
                background: 'var(--light-gray)',
                padding: '25px',
                borderRadius: '15px',
                borderLeft: '4px solid var(--primary-green)'
              }}>
                <p style={{ fontSize: '17px', fontStyle: 'italic', margin: 0 }}>
                  "Nosso compromisso é com a valorização da profissão médica, a defesa dos nossos direitos e o fortalecimento da categoria. Juntos, construímos um sindicato forte e representativo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIRETORIA EXECUTIVA ========== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, var(--white) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Diretoria Executiva</h2>
          <p className="section-subtitle">
            Membros que compõem a gestão do SINMEVACO
          </p>

          <div className="grid-3">
            {diretoriaExecutiva.map((membro, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary-green), var(--light-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '40px',
                  color: 'white'
                }}>
                  👤
                </div>
                <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px', fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {membro.cargo}
                </h4>
                <h3 style={{ fontSize: '20px' }}>{membro.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONSELHO FISCAL ========== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Conselho Fiscal</h2>
          <p className="section-subtitle">
            Responsáveis pela fiscalização e transparência da gestão
          </p>

          <div className="grid-3">
            {conselhoFiscal.map((membro, index) => (
              <div key={index} className="card card-gray" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px',
                  color: 'white'
                }}>
                  📋
                </div>
                <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {membro.cargo}
                </h4>
                <h3 style={{ fontSize: '18px' }}>{membro.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GESTÃO E TRANSPARÊNCIA ========== */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title section-title-white">Gestão e Transparência</h2>
          <p className="section-subtitle section-subtitle-white">
            Compromisso com a ética e prestação de contas
          </p>

          <div className="grid-3">
            <div className="benefit-box">
              <span className="icon-lg">📊</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Prestação de Contas</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Relatórios financeiros e de atividades disponíveis para todos os sindicalizados
              </p>
            </div>

            <div className="benefit-box">
              <span className="icon-lg">🤝</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Diálogo Aberto</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Canais de comunicação sempre abertos para ouvir os médicos sindicalizados
              </p>
            </div>

            <div className="benefit-box">
              <span className="icon-lg">⚖️</span>
              <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Ética Sindical</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Atuação pautada pela ética, independência e compromisso com a categoria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="section" style={{ background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '25px' }}>Faça parte da nossa história</h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', lineHeight: '1.7' }}>
            O SINMEVACO é construído por todos os médicos que acreditam na força da união. Junte-se a nós e fortaleça a categoria médica no Vale do Aço.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/associe-se" className="btn btn-primary btn-lg">
              🟢 Associe-se Agora
            </Link>
            <Link href="/contato" className="btn btn-outline btn-lg">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
