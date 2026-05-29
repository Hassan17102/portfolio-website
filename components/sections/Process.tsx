import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'

export const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your brand, goals, and target audience through strategic workshops.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Defining the approach, user journey, and key conversion points for maximum impact.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating beautiful, functional designs that align with your brand and objectives.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building high-performance websites with clean code and optimal user experience.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Thorough testing and optimization to ensure flawless functionality and performance.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'Deploying your site and providing ongoing support for continued success.',
    },
  ]

  return (
    <section className="py-section px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">My Process</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              A systematic approach to creating websites that deliver real results.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-dark-800 rounded-card border border-dark-700 p-8 relative"
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-accent-primary opacity-30">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-accent-muted leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-dark-700 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
