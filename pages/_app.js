import { useEffect } from "react";
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import { usermavenClient } from "@usermaven/sdk-js";
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Image from "next/image";
import Head from "next/head";

import defaultSeo from '../next-seo.config';

import Footer from '../comps/Layout/Footer';
import Nav from '../comps/Layout/Nav';
import 'react-toastify/dist/ReactToastify.css';
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          property="og:image"
          content="/img/truseve-logo.png"
        />
      </Head>

      <DefaultSeo {...defaultSeo} />
      <LogoJsonLd
        type="Organization"
        url="https://www.truseve.com"
        logo="https://www.truseve.com/img/truseve-logo.png"
      />

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
      <ToastContainer limit={2} />

      <div
        className="flex items-center fixed bottom-4 right-4 sm:bottom-8 sm:right-8 shadow-sm z-40 cursor-pointer"
        onClick={() => window.open("https://wa.me/message/N3B5R2A3O5HFG1", "_blank")}
      >
        <Image
          src="/img/WhatsApp.webp"
          alt=""
          width={58}
          height={58}
          className="sm:absolute sm:top-1/2 sm:-left-8 sm:-translate-y-1/2"
        />

        <div className="hidden sm:block pl-6 pr-4 py-1 bg-[#42c454] text-white text-center rounded-full">
          <p className="text-xs font-medium">Whatsapp</p>
          <p className="text-xs">Click to chat</p>
        </div>
      </div>
    </>
  )
}

export default MyApp
