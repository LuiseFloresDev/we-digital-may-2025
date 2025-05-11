import type { AppProps } from 'next/app'
import "@/globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Head from 'next/head';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YNSMRV2BES"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-YNSMRV2BES');
          `
        }} />
        <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>We Digital Studio - Creative Digital Agency | Marketing & Web Development</title>
          <meta name="description" content="We Digital Studio - Your premier digital agency specializing in digital marketing, web development, and social media management. Transform your online presence with us." />
          <meta name="keywords" content="digital agency, digital marketing, web development, social media, creative agency, digital transformation, ireland, worldwide" />
          <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}