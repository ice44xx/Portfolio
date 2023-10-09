import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' />
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link href='https://fonts.googleapis.com/css2?family=Passion+One&family=Rubik:wght@300;400&display=swap' rel='stylesheet'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
