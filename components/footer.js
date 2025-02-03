import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contato */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:jonatasadamsvoz@gmail.com" className="hover:text-blue-400">jonatasadamsvoz@gmail.com</a></li>
            <li>Telefone: <a href="tel:+5547988432906" className="hover:text-blue-400">(47) 98843-2906</a></li>
            <li>
              <a
                href="https://wa.me/5547988432906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Fale comigo no WhatsApp!
              </a>
            </li>
          </ul>
          {/* Redes Sociais */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com/jonatasadamsvoz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path d="M21.53 7.11c.01.21.01.42.01.63 0 6.5-4.95 14-14 14A13.9 13.9 0 010 19.54a10.09 10.09 0 007.29-2.04A5.02 5.02 0 012.69 14.1a5.02 5.02 0 002.23-.07 5.02 5.02 0 01-4.02-4.91v-.06c.65.36 1.4.58 2.2.61A5.02 5.02 0 01.97 5.63a5.02 5.02 0 001.88 1.85A14.24 14.24 0 0011.82 8.3a5.02 5.02 0 011.37-4.94A5.02 5.02 0 0116.61 2c1.31 0 2.58.53 3.47 1.47a10.07 10.07 0 003.28-1.24A5.02 5.02 0 0120.21 5a10.09 10.09 0 003.29-1.24 10.13 10.13 0 01-2.03 2.35z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/jonatasadamsvoz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 5.99 4.39 10.96 10.13 11.86v-8.39H7.08v-3.47h3.05V9.43c0-2.01 1.79-3.67 4.52-3.67 1.31 0 2.67.24 2.67.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.86v2.23h3.33l-.53 3.47h-2.8v8.39c5.74-.91 10.13-5.87 10.13-11.86z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jonatas_adams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path d="M12 5.85A6.15 6.15 0 105.85 12 6.15 6.15 0 0012 5.85zM12 16a4 4 0 110-8 4 4 0 010 8zm7.84-10.4a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zm3.92 2.28c-.09-1.91-.51-3.27-1.87-4.63S18.87.09 16.96 0c-1.98-.11-8.03-.11-10 .01C4.05.1 2.7.52 1.34 1.87S.09 5.13 0 7.05c-.11 2-.11 8.02 0 10 .1 1.91.52 3.27 1.87 4.63S5.13 23.91 7.05 24c2 .11 8.02.11 10-.01 1.91-.1 3.27-.52 4.63-1.87s1.77-2.72 1.87-4.63c.11-2 .11-8.02 0-10z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jonatasads/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path d="M5.37 24H.4V7.98h4.97V24zM2.88 5.79a2.88 2.88 0 110-5.76 2.88 2.88 0 010 5.76zM24 24h-4.97v-7.8c0-2.86-.57-5.15-4.54-5.15-1.8 0-3.01 1-3.5 1.95v-1.68H8.49V24h4.97v-7.8c0-1.91.37-3.8 2.8-3.8 2.42 0 2.45 2.25 2.45 3.91V24z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400">Portfólio</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Termos de Uso */}
        <div>
          <h3 className="text-xl font-bold mb-4">Termos de Uso</h3>
          <ul className="space-y-2">
            <li><a href="/politica-privacidade" className="hover:text-blue-400">Política de Privacidade</a></li>
            <li><a href="/termos-de-uso" className="hover:text-blue-400">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Jonatas Adams CNPJ 47.028.450/0001-56. Todos os direitos reservados.</p>
      </div>
      <div className="text-center mt-6">
      <p>Este site e os produtos e serviços oferecidos neste site não são associados, afiliados, endossados ou patrocinados pelo Facebook, nem foram revisados, testados ou certificados pelo Faebook.</p>
      <p>O nome e o logotipo do Facebook são marcas registradas da Meta, Inc.</p>
      </div>
    </footer>
  );
};
