import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '', href }) => {
  const baseClasses =
    'bg-dark-800 rounded-card border border-dark-700 p-8 shadow-card transition-all duration-300 hover:shadow-premium hover:border-dark-600'

  const component = (
    <motion.div
      whileHover={{ y: -8 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {component}
      </a>
    )
  }

  return component
}
