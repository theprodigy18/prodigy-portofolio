import React from 'react'
import { motion } from "motion/react"


export default function FadeInY({ className, children, startInView }:
    {
        className?: string,
        children: React.ReactNode,
        startInView: number
    }) {

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: startInView }} // Animasi awal
            animate={{ opacity: 1, y: 0 }}  // Animasi akhir
            transition={{ duration: 0.8 }}  // Durasi animasi
        >
            {children}
        </motion.div>
    )
}

