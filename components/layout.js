import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const [isMarketingPage, setIsMarketingPage] = useState(false);

  useEffect(() => {
    setIsMarketingPage(router.pathname.includes('/marketing'));
  }, [router.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-8">{children}</main>
      {!isMarketingPage && <Footer />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};