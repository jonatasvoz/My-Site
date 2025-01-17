import React, { useEffect } from 'react';
import Seo from '../components/Seo';
import Image from 'next/image';

export default function Vendas() {
    useEffect(() => {
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'ViewContent', {
                content_name: 'Kit Biblikids',
                content_category: 'Produtos',
                content_ids: ['KIT001'],
                content_type: 'product',
                value: 24.90,
                currency: 'BRL'
            });
        }
    }, []);

    const handleCompraClick = () => {
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Kit Biblikids',
                value: 24.90,
                currency: 'BRL'
            });
        }
        // Adicione aqui o link do checkout
        window.location.href = "https://pay.kiwify.com.br/JGfhgYm";
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400">
            <Seo 
                title="Kit Atividades Biblikids - Material Cristão para Crianças"
                description="Kit completo de atividades cristãs para educar e entreter seus pequenos"
            />
            {/* Banner Promoção */}
            <div className="bg-yellow-400 text-white text-center py-4 font-bold text-2xl animate-pulse shadow-lg">
                Promoção por tempo limitado!
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Imagem Principal */}
                    <div className="relative w-full h-[400px] mb-8">
                        <Image
                            src="/media/esent-5-rbg.png"
                            alt="Kit de atividades Biblikids"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    {/* Título Principal */}
                    <div className="bg-purple-500/80 backdrop-blur-sm rounded-xl p-6 text-center mb-8 transform -rotate-2 shadow-lg">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            Kit atividades
                        </h1>
                        <span className="text-4xl md:text-6xl font-bold text-yellow-300 drop-shadow-lg">
                            BIBLIKIDS
                        </span>
                    </div>
                    {/* Subtítulo */}
                    <div className="bg-yellow-400/90 backdrop-blur-sm rounded-xl p-4 text-center mb-8 transform rotate-1 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Transforme o Aprendizado em uma Aventura Cristã!
                        </h2>
                    </div>

                    {/* Descrição */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 text-center shadow-lg">
                        <p className="text-xl text-purple-700 font-bold mb-4">
                            Você está pronto para levar a experiência de aprendizado 
                            das crianças a um novo nível?
                        </p>
                        <p className="text-lg text-gray-600">
                            Apresentamos nosso incrível pacote de e-books repleto de 
                            atividades cristãs que vão encantar e educar seus pequenos!
                        </p>
                    </div>

                    <div className="relative w-full h-[400px] mb-8">
                        <Image
                            src="/media/pic-2.png"
                            alt="Kit de atividades Biblikids"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>

                    {/* O que você encontrará nos e-books */}
                    <div className="bg-[#f4d03f]/80 backdrop-blur-sm rounded-xl p-6 mb-8 transform -rotate-1 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                            O que você encontrará nos nossos e-books?
                        </h2>
                        
                        <div className="space-y-6 text-white text-center text-xl">
                            <div className="bg-cyan-500/70 p-4 rounded-lg transform rotate-1 shadow-md">
                                <p className="font-bold">
                                    Atividades Bíblicas: 46 páginas de lições e exercícios inspirados nas Escrituras.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform -rotate-1 shadow-md">
                                <p className="font-bold">
                                    Atividades Bíblicas Luz do Saber: 86 páginas com mais conteúdo para aprofundar o aprendizado cristão.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform rotate-1 shadow-md">
                                <p className="font-bold">
                                    Atividades de colorir: 100 páginas de desenhos bíblicos para colorir e aprender.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform rotate-1 shadow-md">
                                <p className="font-bold">
                                Atividades envolventes com Histórias Bíblicas: 68 páginas de histórias cativantes para ensinar os valores cristãos.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform rotate-1 shadow-md">
                                <p className="font-bold">
                                Alfabeto Bíblico: 27 páginas para ajudar as crianças a ​aprenderem o alfabeto com palavras bíblicas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] mb-8">
                        <Image
                            src="/media/jesus-ensinando.png"
                            alt="Kit de atividades Biblikids"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>

                    {/* Por que escolher nosso kit */}
                    <div className="bg-purple-500/80 backdrop-blur-sm rounded-xl p-6 mb-8 transform rotate-1 shadow-lg">
                        <div className="bg-[#f4d03f]/90 rounded-lg p-3 text-white font-bold text-2xl text-center mb-8 transform -rotate-1 shadow-md">
                            Por que escolher Nosso kit?
                        </div>
                        
                        <div className="space-y-6 text-white text-center text-xl">
                            <div className="bg-cyan-500/70 p-4 rounded-lg transform -rotate-1 shadow-md">
                                <p className="font-bold">
                                    Fortalecimento da Fé: Ajude as crianças a conhecerem histórias bíblicas e a vivenciarem os ensinamentos de Jesus de forma divertida.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform rotate-1 shadow-md">
                                <p className="font-bold">
                                    Desenvolvimento Cognitivo: As atividades estimulam a criatividade, a resolução de problemas e o trabalho em equipe.
                                </p>
                            </div>

                            <div className="bg-cyan-500/70 p-4 rounded-lg transform -rotate-1 shadow-md">
                                <p className="font-bold">
                                    Momentos em Família: Crie memórias inesquecíveis ao compartilhar essas atividades em família ou durante encontros na Igreja.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Elementos decorativos extras */}
                    <div className="absolute left-4 top-1/2 text-white text-2xl">🌸</div>
                    <div className="absolute right-4 bottom-1/4 text-yellow-300 text-2xl">⭐</div>
                    <div className="absolute left-8 bottom-1/3 text-white text-2xl">✨</div>

                    {/* Preço e CTA */}
                    <div className="bg-purple-500/90 backdrop-blur-sm rounded-xl p-8 text-center transform -rotate-1 shadow-lg">
                        <p className="font-bold">
                            Transforme o aprendizado das crianças em uma jornada de fé e diversão. Clique no botão abaixo e adquira já o seu pacote de e-books para imprimir!                        
                        </p>
                    </div>
                    <div className="bg-purple-500/90 backdrop-blur-sm rounded-xl p-8 text-center transform -rotate-1 shadow-lg">
                        <div className="text-2xl text-white mb-2">
                            <span className="line-through">De R$ 97,00</span>
                        </div>
                        <div className="text-4xl font-bold text-yellow-300 mb-6 drop-shadow-lg">
                            Por apenas R$ 24,90
                        </div>
                        <button 
                            onClick={handleCompraClick}
                            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition duration-300 animate-pulse shadow-lg transform hover:scale-105"
                        >
                            QUERO ESSE KIT AGORA!
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Especial para Página de Vendas */}
            <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Garantia */}
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-bold mb-3">Garantia de 7 Dias</h3>
                            <p className="text-sm">
                                Se você não ficar satisfeito, devolvemos 100% do seu dinheiro
                                em até 7 dias após a compra.
                            </p>
                        </div>

                        {/* Pagamento Seguro */}
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold mb-3">Pagamento Seguro</h3>
                            <p className="text-sm">
                                Sua compra é processada com segurança pela Kiwify.
                                Seus dados estão protegidos.
                            </p>
                        </div>

                        {/* Suporte */}
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-bold mb-3">Suporte Dedicado</h3>
                            <p className="text-sm">
                                Dúvidas? Estamos aqui para ajudar!
                                <a 
                                    href="https://wa.me/5547988432906" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block mt-2 text-yellow-300 hover:text-yellow-400"
                                >
                                    Fale conosco no WhatsApp
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Informações Legais */}
                    <div className="text-center mt-12 text-sm text-white/80 space-y-2">
                        <p>
                            <a href="/politica-privacidade" className="hover:text-yellow-300">
                                Política de Privacidade
                            </a>
                            {' • '}
                            <a href="/termos-de-uso" className="hover:text-yellow-300">
                                Termos de Uso
                            </a>
                        </p>
                        <p>CNPJ: 47.028.450/0001-56 • © {new Date().getFullYear()} Jonatas Adams</p>
                        <p className="text-xs text-white/60">
                            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
                            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Elementos Decorativos */}
            <div className="fixed top-20 left-10 animate-bounce text-4xl">⭐</div>
            <div className="fixed top-40 right-10 animate-bounce delay-100 text-4xl">🌟</div>
            <div className="fixed bottom-20 left-20 animate-bounce delay-200 text-4xl">🌸</div>
            <div className="fixed bottom-40 right-20 animate-bounce delay-300 text-4xl">🌼</div>
        </div>
    );
} 