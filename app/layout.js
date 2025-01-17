import { Inter } from 'next/font/google';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonatas Adams',
  description: 'Locutor Profissional',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}; 