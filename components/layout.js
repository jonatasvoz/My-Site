import Header from './header';
import Footer from './footer';
import Portfolio from '../pages/portfolio';

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
            
        <Portfolio/>
      <Footer />
    </div>
  );
};

export default Layout;