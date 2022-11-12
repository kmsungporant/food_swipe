import { AnimatePresence, motion } from "framer-motion"

export default function Home({ onPage, setOnPage }: { onPage: boolean, setOnPage: any }) {
  return (
    <>
      <AnimatePresence>
        <div className="h-full min-h-full transition-colors bg-cream text-black" >
          <div className="flex items-center justify-center h-full" >
            <div className="h-full w-full flex justify-center items-center flex-col">
              <div className="flex flex-col w-4/5 text-right text-6xl font-black font-serif">
                {onPage && <motion.span animate={{}} exit={{ x: -100 }}>Food</motion.span>}
                {onPage && <motion.span>Swipe</motion.span>}
                {onPage && <motion.span className="text-xl mt-5">
                  A food based website built to expand your palette.
                </motion.span>}
                {onPage && <motion.div className="flex w-full justify-end mt-5">
                  <button className="rounded-full bg-black text-white text-lg p-3 flex" onClick={() => { setOnPage(!onPage) }}>
                    Try now!
                  </button>
                </motion.div>}
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>

  )
}

