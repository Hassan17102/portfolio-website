import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  href?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', href }) => {
  const baseClasses =
    'px-8 py-4 rounded-button font-semibold text-base transition-all duration-300 inline-block cursor-pointer'
  const primaryClasses = 'bg-white text-black hover:bg-accent-secondary'
  const secondaryClasses = 'border border-accent-secondary text-white hover:bg-dark-800'

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`

  const component = (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ y: 0 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href}>
        {component}
      </a>
    )
  }

  return component
}
