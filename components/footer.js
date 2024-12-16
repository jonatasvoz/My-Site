import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <nav>
            <Link href="/politica-privacidade">Políticas de Privacidade e Termos de Uso</Link>
        </nav>
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Jonatas Adams CNPJ 47.028.450/0001-56. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };
  
export default Footer;