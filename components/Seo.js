import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Seo({ title, description, image }) {
  const defaultTitle = 'Jonatas Adams - Locutor Profissional';
  const defaultDescription = 'Locução profissional para comerciais, vídeos e projetos de áudio. Experiência em dublagem e narração.';
  const defaultImage = '/media/JonatasAdamsCorBranca.png';

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://jonatasadams.com.br" />
    </Head>
  );
} 

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};