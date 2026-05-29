import React from 'react'
import { motion } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'
import { Card } from '@/components/ui/Card'

export const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Beautiful, high-performing websites designed to capture attention and drive conversions.',
      icon: '🎨',
    },
    {
      id: 2,
      title: 'Framer & Webflow',
      description: 'Interactive prototypes and custom websites built with cutting-edge no-code tools.',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Strategy & UX',
      description: 'User-centered design approach with a focus on business objectives and conversion.',
      icon: '🎯',
    },
  ]

  return (
    <section className="py-section px-6 bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">My Services</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              Premium design and strategy solutions tailored to your brand and business goals.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Card>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-accent-muted leading-relaxed">{service.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
