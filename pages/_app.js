import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='keywords' content='web, design, development, animations, development' />
        <meta name='author' content='Chey Rose' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Need a website that can keep up with your captivating art? Look no further, our speciality animations and design will leave a lasting impression on your audience.'
        />
        <link rel='shortcut icon' href='/favicon.png' />
        <title>Chey Rose Designs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
