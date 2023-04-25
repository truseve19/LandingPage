import Head from 'next/head';

import Home from "../comps/Home";

function home() {
  return (
    <>
      <Head>
        <link rel='canonical' href="https://www.truseve.com" />
        <meta
          name="keywords"
          content="truseve software solutions, truserve"
        />
      </Head>

      <Home />
    </>
  )
}

export default home