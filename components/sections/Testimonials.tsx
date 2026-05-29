import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'The design work was exceptional. Our conversion rate improved by 35% within the first month.',
      author: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
    },
    {
      id: 2,
      quote: 'Truly a premium design experience. Attention to detail is impeccable and the process was smooth.',
      author: 'Michael Chen',
      role: 'Founder, E-commerce Brand',
    },
    {
      id: 3,
      quote: 'The strategic approach set this apart from typical designers. Highly recommended for serious brands.',
      author: 'Emma Davis',
      role: 'Director of Marketing',
    },
  ]

  return (
    <section className="py-section px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What Clients Say</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              Real feedback from real clients who've seen results.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  className="bg-dark-800 rounded-card border border-dark-700 p-8"
                  whileHover={{ y: -8 }}
                >
                  <div className="mb-6">
                    <p className="text-lg italic text-accent-secondary leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="border-t border-dark-700 pt-6">
                    <p className="font-semibold mb-1">{testimonial.author}</p>
                    <p className="text-sm text-accent-muted">{testimonial.role}</p>
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
