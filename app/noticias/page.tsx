'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, Post } from '@/lib/posts';

function AnimarAoScroll({
  children,
  atraso = 0
}: {
  children: React.ReactNode;
  atraso?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visivel ? 1 : 0,
        transform: visivel ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${atraso}s`
      }}
    >
      {children}
    </div>
  );
}

const categorias = ['Todas', 'Direitos', 'Legislação', 'Saúde', 'Tecnologia', 'Previdência'];

export default function NoticiasPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const posts = getAllPosts();

  const postsFiltrados = categoriaAtiva === 'Todas'
    ? posts
    : posts.filter(p => p.categoria === categoriaAtiva);

  const postsDestaque = posts.slice(0, 2);
  const postsLista = categoriaAtiva === 'Todas' ? posts.slice(2) : postsFiltrados;

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--verde-600) 0%, var(--verde-800) 100%)',
          minHeight: '45vh',
          paddingTop: 'clamp(120px, 15vw, 160px)',
          paddingBottom: 'clamp(3rem, 8vw, 5rem)',
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

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '1.5rem'
              }}>
                Blog & Informacoes
              </span>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                Noticias e Informacoes
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Fique por dentro das ultimas novidades sobre direitos medicos, legislacao, beneficios e tudo que impacta sua carreira.
              </p>
            </div>
          </AnimarAoScroll>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H0Z" fill="var(--cinza-50)"/>
          </svg>
        </div>
      </section>

      {/* DESTAQUES */}
      {categoriaAtiva === 'Todas' && (
        <section style={{
          background: 'var(--cinza-50)',
          padding: 'clamp(3rem, 8vw, 5rem) 1rem'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <AnimarAoScroll>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: 'var(--preto-soft)',
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'
              }}>
                Destaques
              </h2>
            </AnimarAoScroll>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              {postsDestaque.map((post, index) => (
                <AnimarAoScroll key={post.slug} atraso={index * 0.1}>
                  <Link
                    href={`/noticias/${post.slug}`}
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    <article
                      className="blog-card"
                      style={{
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.4s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{
                        position: 'relative',
                        aspectRatio: '16/10',
                        overflow: 'hidden'
                      }}>
                        <Image
                          src={post.imagem}
                          alt={post.titulo}
                          fill
                          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)'
                        }} />
                        <span style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          background: 'var(--laranja-500)',
                          color: 'white',
                          padding: '0.4rem 1rem',
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}>
                          {post.categoria}
                        </span>
                      </div>
                      <div style={{
                        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div style={{
                          display: 'flex',
                          gap: '1rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.85rem',
                          color: 'var(--cinza-500)'
                        }}>
                          <span>{post.data}</span>
                          <span>{post.tempoLeitura}</span>
                        </div>
                        <h3 style={{
                          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                          fontWeight: '600',
                          color: 'var(--preto-soft)',
                          marginBottom: '0.75rem',
                          lineHeight: '1.4',
                          flex: 1
                        }}>
                          {post.titulo}
                        </h3>
                        <p style={{
                          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                          color: 'var(--cinza-600)',
                          lineHeight: '1.7',
                          marginBottom: '1rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {post.resumo}
                        </p>
                        <span style={{
                          color: 'var(--verde-600)',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.95rem'
                        }}>
                          Ler artigo completo
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimarAoScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FILTROS E LISTA */}
      <section style={{
        background: 'white',
        padding: 'clamp(3rem, 8vw, 5rem) 1rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filtros */}
          <AnimarAoScroll>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              justifyContent: 'center'
            }}>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: categoriaAtiva === cat
                      ? 'var(--verde-600)'
                      : 'var(--cinza-100)',
                    color: categoriaAtiva === cat ? 'white' : 'var(--cinza-700)',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimarAoScroll>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {postsLista.map((post, index) => (
              <AnimarAoScroll key={post.slug} atraso={index * 0.08}>
                <Link
                  href={`/noticias/${post.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <article
                    className="blog-card"
                    style={{
                      background: 'white',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid var(--cinza-100)'
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      aspectRatio: '16/10',
                      overflow: 'hidden'
                    }}>
                      <Image
                        src={post.imagem}
                        alt={post.titulo}
                        fill
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      />
                      <span style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        background: 'var(--verde-600)',
                        color: 'white',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {post.categoria}
                      </span>
                    </div>
                    <div style={{
                      padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.8rem',
                        color: 'var(--cinza-500)'
                      }}>
                        <span>{post.data}</span>
                        <span>{post.tempoLeitura}</span>
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        fontWeight: '600',
                        color: 'var(--preto-soft)',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4',
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.titulo}
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--cinza-600)',
                        lineHeight: '1.6',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.resumo}
                      </p>
                    </div>
                  </article>
                </Link>
              </AnimarAoScroll>
            ))}
          </div>

          {/* Sem resultados */}
          {postsFiltrados.length === 0 && (
            <AnimarAoScroll>
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📭</span>
                <h3 style={{ color: 'var(--preto-soft)', marginBottom: '0.5rem' }}>
                  Nenhuma noticia encontrada
                </h3>
                <p style={{ color: 'var(--cinza-500)' }}>
                  Nao ha noticias nesta categoria no momento.
                </p>
              </div>
            </AnimarAoScroll>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{
        background: 'linear-gradient(135deg, var(--verde-600) 0%, var(--verde-800) 100%)',
        padding: 'clamp(3rem, 8vw, 5rem) 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%'
        }} />

        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <AnimarAoScroll>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Receba Novidades
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Cadastre-se para receber as ultimas noticias sobre direitos medicos diretamente no seu e-mail.
              </p>

              <form style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  style={{
                    flex: '1 1 250px',
                    maxWidth: '350px',
                    padding: '1rem 1.5rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="botao botao-laranja"
                  style={{ padding: '1rem 2rem' }}
                >
                  Inscrever-se
                </button>
              </form>

              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '1rem'
              }}>
                Prometemos nao enviar spam. Apenas conteudo relevante.
              </p>
            </div>
          </AnimarAoScroll>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--cinza-50)',
        padding: 'clamp(3rem, 8vw, 5rem) 1rem'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimarAoScroll>
            <div style={{
              background: 'linear-gradient(135deg, var(--laranja-500) 0%, var(--laranja-600) 100%)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  Precisa de Orientacao Juridica?
                </h2>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'rgba(255,255,255,0.95)',
                  marginBottom: '2rem',
                  maxWidth: '500px',
                  margin: '0 auto 2rem',
                  lineHeight: '1.7'
                }}>
                  Associados ao SINMEVACO tem acesso a apoio juridico especializado e gratuito.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/associe-se" className="botao botao-branco" style={{ color: 'var(--laranja-600)' }}>
                    Associe-se Agora
                  </Link>
                  <Link href="/juridico" className="botao botao-outline-claro">
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </AnimarAoScroll>
        </div>
      </section>
    </main>
  );
}
