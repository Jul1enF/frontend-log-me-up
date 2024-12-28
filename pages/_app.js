import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Julien Furic - Portfolio</title>
        <meta name="description" content="Portfolio de Julien Furic, développeur web fullstack (Frontend + Backend)" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Portfolio, Développeur, développeur web, Front-end, frontend, back-end, backend, fullstack, Julien, Furic" />
        <link rel="icon" href="/logo-2-portfolio.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
