import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from "next-themes";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackButton from '../components/backButton';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  const [mainTitle, setMainTitle] = useState(true);
  return (

    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Food Swipe</title>
        <meta name="FoodSwipe" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AnimatePresence>
        <motion.div initial={{ opacity: 1 }} animate={mainTitle ? {} : { opacity: 0 }}>
          <Image src="/main.jpg" alt="main picture" layout="fill" objectFit="cover" objectPosition="center" />
        </motion.div>
        <motion.div className='h-full relative z-10'>
          <BackButton mainTitle={mainTitle} setMainTitle={setMainTitle} />
          <Component {...pageProps} mainTitle={mainTitle} setMainTitle={setMainTitle} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
