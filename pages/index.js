import React, { useState, useEffect } from 'react'; 
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

function Home() {
    const [consent, setConsent] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Verifica se o consentimento já foi dado
        const storedConsent = localStorage.getItem('lgpdConsent');
        if (!storedConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleConsent = () => {
        localStorage.setItem('lgpdConsent', 'true');
        setConsent(true);
        setShowBanner(false);
    };

    return (
        <>
            <Head>
                <title>Meu Portfólio</title>
                <meta name="description" content="Página inicial do meu portfólio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Cabeçalho */}
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>

            {/* Seção "Sobre Mim" */}
            <section id="sobre" className={styles.section}>
                <h1>Sobre Mim</h1>
                <p>
                    Olá, meu nome é Jonatas Adams. Confira meu trabalho na seção de portfólio abaixo!
                </p>
            </section>

            <nav>
                <Link href="/politica-privacidade">Políticas de Privacidade e Termos de Uso</Link>
            </nav>

            {/* Seção Portfólio */}
            <section id="portfolio" className={styles.section}>
                <h1>Portfólio</h1>
                <div className={styles.portfolio}>
                    {/* Exemplo de Áudio */}
                    <div className={styles.mediaItem}>
                        <audio controls>
                            <source src="/media/democomercial.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Esse é meu Demonstrativo de Voz - Comercial</p>

                        <audio controls>
                            <source src="/media/anhanguera.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Anhanguera</p>

                        <audio controls>
                            <source src="/media/bulgari.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Bulgari</p>

                        <audio controls>
                            <source src="/media/nike.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Nike</p>

                        <audio controls>
                            <source src="/media/timblack.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Tim Black</p>

                        <audio controls>
                            <source src="/media/yoki.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Yoki</p>

                    </div>
                    {/* Exemplo de Vídeo */}
                    <div className={styles.mediaItem}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zQKthgvH9gY?si=9BJHdGDzBmg3Z4FK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/*
                        <video controls>
                            <source src="https://www.youtube.com/watch?v=eHRsEZjdCjI" type="url" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                        <p>Projeto de Vídeo: [Descrição]</p>*/}
                    </div>
                </div>
            </section>

               {/* Banner de Consentimento */}
               {showBanner && (
                <div className={styles.lgpdBanner}>
                    <p>
                        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa 
                        <a href="/politica-privacidade" className={styles.privacyLink}> Política de Privacidade</a>.
                    </p>
                    <button onClick={handleConsent} className={styles.consentButton}>
                        Aceitar
                    </button>
                </div>
            )}

            {/* Seção Blog */}
            <section id="blog" className={styles.section}>
                <h1>Blog</h1>
                <p>Explore meus artigos</p>
                <a href="/blog" className={styles.blogLink}>
                 Ver todos os posts
                </a>
            </section>


            {/* Seção Contato */}
            <section id="contato" className={styles.section}>
                <h1>Contato</h1>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu E-mail" required />
                    <textarea placeholder="Sua Mensagem" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>

            {/* Rodapé */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Jonatas Adams CNPJ 47.028.450/0001-56. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Home