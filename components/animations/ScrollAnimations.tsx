import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export const FadeUpOnScroll: React.FC<Props> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <motion.div initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true, margin: '-100px' }}>
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  staggerDelay?: number
}

export const StaggerContainer: React.FC<StaggerProps> = ({ children, staggerDelay = 0.1 }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true, margin: '-100px' }}>
      {children}
    </motion.div>
  )
}

interface ItemProps {
  children: React.ReactNode
}

export const StaggerItem: React.FC<ItemProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return <motion.div variants={variants}>{children}</motion.div>
}
