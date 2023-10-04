import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import '../styles/query.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Passion+One&family=Rubik:wght@300;400&display=swap' rel='stylesheet'></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
