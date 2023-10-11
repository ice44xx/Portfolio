import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv='content-language' content='pt-BR' />
          <meta name='robots' content='index, follow' />
          <meta
            name='description'
            content='Nshcode - Seu destino para soluções de desenvolvimento web. Especializado em JavaScript, PHP e Node.js.'
          />
          <meta
            name='keywords'
            content='Desenvolvedor Web, JavaScript, PHP, Node.js, Programador Web, Desenvolvimento Web, Soluções Web, Front-end, Back-end, Projetos Web, Programação, Código Fonte, Desenvolvimento de Aplicativos Web, Web Design, Tecnologias Web, HTML, CSS, Banco de Dados, Programação Server-Side, Desenvolvedor Full Stack, Desenvolvimento de Sites'
          />
          <meta name='author' content='Nathan Sant Helena' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' />
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link href='https://fonts.googleapis.com/css2?family=Passion+One&family=Rubik:wght@300;400&display=swap' rel='stylesheet'></link>
          <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
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
