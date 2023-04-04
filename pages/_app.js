import Script from 'next/script';

import Footer from '../comps/Layout/Footer';
import Nav from '../comps/Layout/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6F8YREHTSD"
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() { dataLayer.push(arguments) }
          gtag('js', new Date())

          gtag('config', 'G-6F8YREHTSD')
        }}
      />

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
