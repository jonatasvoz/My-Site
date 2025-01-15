import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function Layout ({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-8">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};