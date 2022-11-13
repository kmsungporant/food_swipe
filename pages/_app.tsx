import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackButton from "../components/backButton";

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
				<BackButton mainTitle={mainTitle} setMainTitle={setMainTitle} />
				<Component
					{...pageProps}
					mainTitle={mainTitle}
					setMainTitle={setMainTitle}
					className="overscroll-none overflow-hidden "
				/>
			</AnimatePresence>
		</ThemeProvider>
	);
}
