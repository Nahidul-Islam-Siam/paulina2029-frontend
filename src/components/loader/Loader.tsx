'use client'

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="absolute top-0 left-0 w-full h-full border-4 border-[#DB2777] rounded-full"
              style={{
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        <motion.p
          className="mt-4 text-[#DB2777] font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}