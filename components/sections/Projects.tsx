import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      description: 'High-converting Shopify store redesign',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'Web Design',
      description: 'Complex user interface and experience design',
    },
    {
      id: 3,
      title: 'Brand Website',
      category: 'Web Design',
      description: 'Premium brand experience and storytelling',
    },
    {
      id: 4,
      title: 'Mobile App',
      category: 'App Design',
      description: 'iOS and Android design system',
    },
    {
      id: 5,
      title: 'Marketing Site',
      category: 'Web Design',
      description: 'Growth-focused landing page design',
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Enterprise-level web presence',
    },
  ]

  return (
    <section className="py-section px-6 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              A selection of recent projects showcasing design excellence and strategic thinking.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="bg-dark-800 rounded-card border border-dark-700 overflow-hidden group cursor-pointer hover:border-dark-600 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="w-full h-full flex items-center justify-center text-accent-muted"
                      whileHover={{ scale: 1.05 }}
                    >
                      Project {project.id}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-accent-muted bg-dark-700 px-3 py-1 rounded-full inline-block mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-accent-muted">{project.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
