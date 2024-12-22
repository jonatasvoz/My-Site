const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contato */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contato</h3>
          <p>Email: jonatasadamsvoz@gmail.com</p>
          <p>Telefone: (47) 98843-2906</p>
        </div>
        {/* Links rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-2">Links Rápidos</h3>
          <ul>
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400">Portfólio</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Termos de Uso</h3>
          <ul>
            <li><a href="/politica-privacidade">Privacidade</a></li>
          </ul>
        </div>
        <p>&copy; {new Date().getFullYear()} Jonatas Adams CNPJ 47.028.450/0001-56. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;