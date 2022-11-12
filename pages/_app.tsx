import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from "next-themes";
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [onPage, setOnPage] = useState(true);
  return (

    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Food Swipe</title>
        <meta name="FoodSwipe" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} onPage={onPage} setOnPage={setOnPage} />
    </ThemeProvider>
  );
}
