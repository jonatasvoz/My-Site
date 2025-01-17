'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';

export default function MarketingTemplate({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-8">{children}</main>
    </div>
  );
}

MarketingTemplate.propTypes = {
  children: PropTypes.node.isRequired
}; 