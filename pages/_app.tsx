import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
