import { motion } from "framer-motion"
import Footer from "../components/footer"

export default function Home({ mainTitle, setMainTitle }: { mainTitle: boolean, setMainTitle: any }) {

  return (
    <>
      <div className="h-full min-h-full transition-colors  text-black" >
        <div className="flex items-center justify-center h-full" >
          <div className="h-full w-full flex justify-center items-center flex-col">
            <div className="flex flex-col w-4/5 text-right text-6xl font-black font-serif">
              <motion.span initial={{ opacity: 1, }} animate={mainTitle ? "" : { opacity: 0, x: -1000, transition: { ease: "easeInOut", delay: 0 } }}>Food</motion.span>
              <motion.span initial={{ opacity: 1, }} animate={mainTitle ? "" : { opacity: 0, x: -1000, transition: { ease: "easeInOut", delay: 0.05 } }}>Swipe</motion.span>
              <motion.span initial={{ opacity: 1, }} animate={mainTitle ? "" : { opacity: 0, x: -1000, transition: { ease: "easeInOut", delay: 0.1 } }} className="text-xl mt-5">
                A food based website built to expand your palette.
              </motion.span>
              <motion.div initial={{ opacity: 1, }} animate={mainTitle ? "" : { opacity: 0, x: -1000, transition: { ease: "easeInOut", delay: 0.15 } }} className="flex w-full justify-end mt-5">
                <button className="rounded-full bg-black text-white text-lg p-3 flex" onClick={() => { setMainTitle(false) }}>
                  Swipe!
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>

  )
}

