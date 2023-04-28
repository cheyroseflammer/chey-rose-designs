import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='keywords' content='title, meta, nextjs' />
        <meta name='author' content='Chey Rose' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Chey Rose Designs' />
        <title>Chey Rose Designs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
