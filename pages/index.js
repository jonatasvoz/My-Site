import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Portfolio from '../pages/portfolio';
import About from '../pages/about';
import styles from '../styles/home.module.css';

function Home() {
    const [consent, setConsent] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marca que o código está sendo executado no cliente
        setIsClient(true);

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

    if (!isClient) return null;

    return (
        <Layout>
            <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Meu Site</h1>
                    <div className="text-lg md:text-2xl mb-6">
                        Aqui você encontra meu portfólio, blog e muito mais.
                    </div>
                    <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100">
                        Conheça Mais
                    </button>
                </div>
            </section>
            <About />
            <Portfolio />
            {showBanner && (
                <div className={styles.lgpdBanner}>
                    <div>
                        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
                        <a href="/politica-privacidade" className={styles.privacyLink}>
                            {' '}
                            Política de Privacidade
                        </a>.
                    </div>
                    <button onClick={handleConsent} className={styles.consentButton}>
                        Aceitar
                    </button>
                </div>
            )}
        </Layout>
    );
}

export default Home;
