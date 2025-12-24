'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isVisible, setIsVisible] = useState(false);

  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  const outrosPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!post) {
    return (
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
            Post não encontrado
          </h1>
          <p style={{ color: 'var(--cinza-600)', marginBottom: '2rem' }}>
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link href="/noticias" className="botao botao-verde">
            Voltar para Notícias
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Header do Post */}
      <section
        className="post-header"
        style={{
          background: 'linear-gradient(135deg, var(--verde-600) 0%, var(--verde-800) 100%)',
          padding: 'clamp(3rem, 8vw, 6rem) 1rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Padrão decorativo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div
          className="container"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}
        >
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link
              href="/noticias"
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para Notícias
            </Link>
          </nav>

          {/* Categoria */}
          <span style={{
            display: 'inline-block',
            background: 'var(--laranja-500)',
            color: 'white',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem'
          }}>
            {post.categoria}
          </span>

          {/* Título */}
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            {post.titulo}
          </h1>

          {/* Meta info */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.9)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {post.data}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {post.tempoLeitura} de leitura
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              {post.autor}
            </span>
          </div>
        </div>
      </section>

      {/* Imagem de capa */}
      <section style={{
        maxWidth: '900px',
        margin: '-3rem auto 0',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.2s'
        }}>
          <Image
            src={post.imagem}
            alt={post.titulo}
            width={900}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      {/* Conteúdo do Post */}
      <article
        className="post-conteudo"
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: 'clamp(2rem, 6vw, 4rem) 1rem'
        }}
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s'
          }}
          dangerouslySetInnerHTML={{
            __html: post.conteudo
              .replace(/## (.*)/g, '<h2 style="font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; color: var(--verde-700); margin: 2.5rem 0 1rem; line-height: 1.3;">$1</h2>')
              .replace(/### (.*)/g, '<h3 style="font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-weight: 600; color: var(--preto-soft); margin: 2rem 0 0.75rem;">$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--preto-soft); font-weight: 600;">$1</strong>')
              .replace(/- (.*)/g, '<li style="margin-bottom: 0.5rem; padding-left: 0.5rem;">$1</li>')
              .replace(/(\d+)\. (.*)/g, '<li style="margin-bottom: 0.75rem; padding-left: 0.5rem;"><strong>$1.</strong> $2</li>')
              .split('\n\n').join('</p><p style="margin-bottom: 1.25rem; line-height: 1.8; color: var(--cinza-700); font-size: clamp(1rem, 2vw, 1.1rem);">')
          }}
        />

        {/* CTA no final do artigo */}
        <div style={{
          marginTop: '3rem',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          background: 'linear-gradient(135deg, var(--verde-50) 0%, var(--verde-100) 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid var(--verde-200)',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.6s'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: '700',
            color: 'var(--verde-700)',
            marginBottom: '0.75rem'
          }}>
            Precisa de Apoio?
          </h3>
          <p style={{
            color: 'var(--cinza-600)',
            marginBottom: '1.5rem',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            O SINMEVACO está aqui para defender seus direitos. Entre em contato conosco.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/associe-se" className="botao botao-laranja">
              Associe-se Agora
            </Link>
            <Link href="/contato" className="botao botao-verde-outline">
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Compartilhar */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--cinza-200)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <span style={{ fontWeight: '600', color: 'var(--cinza-600)' }}>
            Compartilhe este artigo:
          </span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.titulo + ' - SINMEVACO')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'transform 0.3s ease'
              }}
              aria-label="Compartilhar no WhatsApp"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#0077B5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'transform 0.3s ease'
              }}
              aria-label="Compartilhar no LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Outros Posts */}
      {outrosPosts.length > 0 && (
        <section style={{
          background: 'var(--cinza-50)',
          padding: 'clamp(3rem, 8vw, 5rem) 1rem'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              color: 'var(--preto-soft)'
            }}>
              Continue Lendo
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              {outrosPosts.map((outroPost, index) => (
                <Link
                  key={outroPost.slug}
                  href={`/noticias/${outroPost.slug}`}
                  className="blog-card"
                  style={{
                    background: 'white',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${0.1 * index}s`
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <Image
                      src={outroPost.imagem}
                      alt={outroPost.titulo}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'var(--laranja-500)',
                      color: 'white',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {outroPost.categoria}
                    </span>
                  </div>
                  <div style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                      fontWeight: '600',
                      color: 'var(--preto-soft)',
                      marginBottom: '0.75rem',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {outroPost.titulo}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.85rem',
                      color: 'var(--cinza-500)'
                    }}>
                      <span>{outroPost.data}</span>
                      <span>{outroPost.tempoLeitura}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
              <Link href="/noticias" className="botao botao-verde">
                Ver Todas as Notícias
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
