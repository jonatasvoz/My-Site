import React, { useState, useEffect } from 'react'; 
import Layout from '../components/layout';
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
    <div>
        <head>
            <meta name="facebook-domain-verification" content="a5yjqn2h0jh0zntp369naqfti8h0vc" />
        </head>
        <div>Aguardem, novidades estão por vir. Obrigado :-D</div>
    </div>
    )
        <>
            <Layout>
                <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-20 px-4">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Bem-vindo ao Meu Site
                        </h1>
                        <p className="text-lg md:text-2xl mb-6">
                        Aqui você encontra meu portfólio, blog e muito mais.
                        </p>
                        <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100">
                        Conheça Mais
                        </button>
                    </div>
                </section>
            </Layout>

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
        </>
    );
}

export default Home