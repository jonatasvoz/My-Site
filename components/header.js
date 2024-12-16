const Header = () => {
    return (
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-purple-600">Meu Site</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-purple-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-700 hover:text-purple-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-700 hover:text-purple-600">
                  Portfólio
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
export default Header; 