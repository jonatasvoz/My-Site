import React from 'react';
import Seo from '../components/Seo';

export default function Portfolio() {
    const handleAudioError = (e) => {
        console.error('Erro ao carregar áudio:', e);
        e.target.parentElement.innerHTML = 'Desculpe, não foi possível carregar o áudio. <a href="/contato">Entre em contato</a> para mais informações.';
    };

    return (
        <section className="bg-gray-100 py-10">
            <Seo 
                title="Portfólio - Jonatas Adams"
                description="Confira meus trabalhos de locução, dublagem e narração"
            />
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Meu Portfólio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Demo Comercial</h3>
                        <audio 
                            controls 
                            className="w-full"
                            onError={handleAudioError}
                            loading="lazy"
                        >
                            <source src="/media/democomercial.mp3" type="audio/mpeg" />
                            <p>Seu navegador não suporta a reprodução de áudio.</p>
                        </audio>
                        <div className="text-sm text-gray-600 mt-2">Experiência em locução comercial para rádio, televisão e internet, com habilidade em transmitir emoção e persuasão através da voz. </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Anhanguera</h3>
                        <audio controls className="w-full">
                            <source src="/media/anhanguera.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Bulgari</h3>
                        <audio controls className="w-full">
                            <source src="/media/bulgari.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Nike</h3>
                        <audio controls className="w-full">
                            <source src="/media/nike.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Tim Black</h3>
                        <audio controls className="w-full">
                            <source src="/media/timblack.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Yoki</h3>
                        <audio controls className="w-full">
                            <source src="/media/yoki.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Homenagens</h3>
                        <iframe 
                            loading="lazy"
                            width="460" 
                            height="315" 
                            src="https://www.youtube.com/embed/99TV0y4H0iw"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                        <div className="body">Emocione-se com uma locução dedicada a momentos
                            especiais. Com voz cativante e sensibilidade, entregamos
                            homenagens únicas que eternizam memórias
                            preciosas.</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Dublagem</h3>
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/tovpWZtyoiU?si=ACGtokhAMO5hFkai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="body">
                            Minha capacidade de adaptação e interpretação permite que
                            eu me encaixe perfeitamente no papel, trazendo vida e
                            personalidade aos personagens.
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Reflexões</h3>
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/zQKthgvH9gY?si=1QnFGVsUlTglpYAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
