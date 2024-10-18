import { motion } from "framer-motion"
//Display this screen when user click the search button from the Search component
export default function LoadingScreen() {
    return (
        <div className="w-full flex p-20 justify-center text-white text-bold text-4xl xs:text-2xl">
            <motion.h1
                initial={{scale: 0.75}}
                animate={{scale: 1}}
                transition={{repeat: Infinity , repeatType: "mirror", duration: 3}} 
            >
            Searching...</motion.h1>
        </div>
    )
}