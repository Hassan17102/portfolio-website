import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'

export const About = () => {
  const stats = [
    { label: '50+', value: 'Projects Completed' },
    { label: '100+', value: 'Happy Clients' },
    { label: '8+', value: 'Years Experience' },
  ]

  return (
    <section className="py-section px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeUpOnScroll>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-dark-800 to-dark-950 rounded-card border border-dark-700 flex items-center justify-center"
            >
              <span className="text-accent-muted">Portrait Image</span>
            </motion.div>
          </FadeUpOnScroll>

          <FadeUpOnScroll>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-accent-muted mb-8 leading-relaxed">
                I'm a digital designer and strategist focused on creating high-end web experiences that drive real business results. I believe in the power of thoughtful design, strategic thinking, and user-centered approaches.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-4xl font-bold mb-2">{stat.label}</div>
                      <p className="text-accent-muted">{stat.value}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>

              <p className="text-lg text-accent-muted leading-relaxed">
                Every project is an opportunity to push creative boundaries while maintaining a laser focus on conversion and user experience.
              </p>
            </div>
          </FadeUpOnScroll>
        </div>
      </div>
    </section>
  )
}
