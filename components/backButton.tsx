import { motion } from "framer-motion"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function BackButton({ mainTitle, setMainTitle }: { mainTitle: boolean, setMainTitle: any }) {
    return (
        <motion.div initial={{ opacity: 0, y: 100 }} animate={mainTitle ? {} : { opacity: 1, y: 0, transition: { delay: 0.2 } }} exit={{ opacity: 0, y: 100 }} className="fixed font-bold bottom-10 left-10 text-[#CF4420] cursor-pointer z-20" onClick={() => { setMainTitle(true) }} >
            <motion.div className="flex items-center gap-2 relative ">
                <AiOutlineArrowLeft />
                <button>
                    Main Page
                </button>
            </motion.div>
        </motion.div>)
}