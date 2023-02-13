import Footer from '../comps/Layout/Footer';
import Nav from '../comps/Layout/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
