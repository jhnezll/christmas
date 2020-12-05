import { motion } from "framer-motion";
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter()

    return (
        <div className="h-screen flex justify-center items-center px-12 bg-pink-300">
            <motion.div className="m-3 bg-gray-50 text-center p-24 rounded-lg"
                animate={{
                    scale: [0.9, 1]
                }}>
                <h1 className="text-3xl font-semibold pb-2">🎄 Welcome to Noel</h1>
                <h1 className="text-2xl pb-12">A really fun Christmas card maker!</h1>
                <motion.button
                    className="noel-button"
                    onClick={() => router.push('/generate')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Generate a Christmas Card!
                </motion.button>
            </motion.div>
        </div>
    )
}
