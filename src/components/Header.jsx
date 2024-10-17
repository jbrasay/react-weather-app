//import framer motion
import { motion } from "framer-motion";
//Import react icons
import { WiDayCloudy } from "react-icons/wi";
//Import components
import SearchWeather from "./SearchWeather";


export default function Header() {
    return (
        <div className="w-full h-fit flex flex-col py-2.5 items-center">
            <motion.div 
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1}} 
                className="flex flex-row w-fit items-center p-4">
                <h1 className="font-semibold text-2xl text-white">Weather App</h1>
                <WiDayCloudy className="ml-2 text-2xl text-yellow-500" />
            </motion.div>
            <SearchWeather/>
        </div>
    )
}