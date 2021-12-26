import "../styles/globals.scss";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.88.1" />
        <title>Github Search · v5.1</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <meta name="theme-color" content="#7952b3" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
