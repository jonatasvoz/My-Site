import React from 'react';

export default function Portfolio() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Meu Portfólio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Demo Comercial</h3>
                        <audio controls className="w-full">
                            <source src="/media/democomercial.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
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
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/zQKthgvH9gY?si=9BJHdGDzBmg3Z4FK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class="body">Emocione-se com uma locução dedicada a momentos
                            especiais. Com voz cativante e sensibilidade, entregamos
                            homenagens únicas que eternizam memórias
                            preciosas.</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Dublagem</h3>
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/GaYQwIwYaCE?si=3rH1UM8itSx9aJPC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class="body">
                            Minha capacidade de adaptação e interpretação permite que
                            eu me encaixe perfeitamente no papel, trazendo vida e
                            personalidade aos personagens.
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/zQKthgvH9gY?si=9BJHdGDzBmg3Z4FK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
