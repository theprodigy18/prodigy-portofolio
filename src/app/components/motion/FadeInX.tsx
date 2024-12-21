import React from 'react'
import { motion } from "motion/react"

function FadeInX({ className, children, startInView }:
    {
        className?: string,
        children: React.ReactNode,
        startInView: number
    }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x: startInView }} // Animasi awal
            animate={{ opacity: 1, x: 0 }}  // Animasi akhir
            transition={{ duration: 0.8 }}  // Durasi animasi
        >
            {children}
        </motion.div>
    )
}

export default FadeInX
