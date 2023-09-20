import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link href='https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap' rel='stylesheet'></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
