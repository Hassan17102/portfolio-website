import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'
import { Card } from '@/components/ui/Card'

export const WhyMe = () => {
  const reasons = [
    {
      id: 1,
      title: 'Conversion-Focused',
      description: 'Every design decision is made with ROI and user action in mind. Strategy drives design.',
    },
    {
      id: 2,
      title: 'Mobile-First',
      description: 'Optimized for mobile users first, then scaled to larger screens. 60% of traffic is mobile.',
    },
    {
      id: 3,
      title: 'Performance',
      description: 'Fast loading times and optimized performance. Every millisecond counts for conversions.',
    },
    {
      id: 4,
      title: 'User Experience',
      description: 'Deep focus on user research and testing. Designs are validated, not guessed.',
    },
    {
      id: 5,
      title: 'Premium Quality',
      description: 'High-end design standards. Every detail matters. Attention to typography, spacing, and polish.',
    },
    {
      id: 6,
      title: 'Long-term Support',
      description: 'Ongoing partnership approach. I care about your success beyond the initial launch.',
    },
  ]

  return (
    <section className="py-section px-6 bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Why Work With Me</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              A unique combination of design excellence, strategic thinking, and client focus.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <StaggerItem key={reason.id}>
                <Card className="h-full">
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-accent-muted leading-relaxed">{reason.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
