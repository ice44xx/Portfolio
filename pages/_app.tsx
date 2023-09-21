import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap' rel='stylesheet'></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
