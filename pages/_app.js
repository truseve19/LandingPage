import Script from 'next/script';

import Footer from '../comps/Layout/Footer';
import Nav from '../comps/Layout/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E63L4H4JT9"
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() { dataLayer.push(arguments) }
          gtag('js', new Date())

          gtag('config', 'G-E63L4H4JT9')
        }}
      />

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
