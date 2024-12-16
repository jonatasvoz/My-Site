import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
                    <p className="text-lg text-gray-600">
                    Sou um desenvolvedor apaixonado por criar soluções modernas e funcionais.
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">
                    Meu Portfólio
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="bg-white p-4 rounded-lg shadow-md">Demo Comercial</h3>
                            <audio controls className="w-full">
                                <source src="/media/democomercial.mp3" type="audio/mpeg" />
                                Seu navegador não suporta a reprodução de áudio.
                            </audio>
                            <p className="text-sm text-gray-600 mt-2">Esse é meu Demonstrativo de Voz - Comercial</p>
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
                            <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zQKthgvH9gY?si=9BJHdGDzBmg3Z4FK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
      <Footer />
    </div>
  );
};

export default Layout;