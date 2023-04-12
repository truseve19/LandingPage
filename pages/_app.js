import { useEffect } from "react";
import { useRouter } from 'next/router';
import { usermavenClient } from "@usermaven/sdk-js";
import Script from 'next/script';
import Head from "next/head";

import Footer from '../comps/Layout/Footer';
import Nav from '../comps/Layout/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const usermaven = usermavenClient({
      key: "UMrCRJlAOy",
      tracking_host: "https://events.usermaven.com",
    })

    if (router.pathname === "/") {
      usermaven.track("pageview")
    }

    // Track page views
    const handleRouteChange = () => usermaven.track("pageview")
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Truseve</title>
      </Head>

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
