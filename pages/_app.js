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
        <link rel="icon" href="/logo-9-portfolio.png" />
        {/* Fond status bar pour téléphones : */}
        {/* <meta name="theme-color" content="f50202"></meta> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
