import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUpOnScroll, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations'

export const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const faqs = [
    {
      id: 0,
      question: 'What is your typical project timeline?',
      answer:
        'Most projects take 6-12 weeks depending on complexity and scope. Discovery and strategy phases typically take 2-3 weeks, design 2-4 weeks, and development 2-5 weeks. We can discuss expedited timelines based on your needs.',
    },
    {
      id: 1,
      question: 'Do you work with startups and established brands?',
      answer:
        'Yes, I work with both! Whether you\'re a bootstrapped startup or an established brand, I tailor the approach to fit your budget, stage, and goals. Quality design is accessible at every level.',
    },
    {
      id: 2,
      question: 'What platforms do you specialize in?',
      answer:
        'I specialize in Framer, Webflow, Next.js, and custom React applications. I can also work with Shopify, WordPress, and other platforms. We choose the right tool for your specific needs.',
    },
    {
      id: 3,
      question: 'Do you offer ongoing support after launch?',
      answer:
        'Absolutely! I include post-launch support and maintenance packages. I believe in long-term partnerships and want to see your site continue to perform well after we launch.',
    },
    {
      id: 4,
      question: 'How do you charge for projects?',
      answer:
        'I work with both fixed-price and hourly engagement models depending on the project. We scope out requirements carefully to ensure accurate quotes. I also offer retainer packages for ongoing support.',
    },
    {
      id: 5,
      question: 'Can you help with strategy and planning?',
      answer:
        'Yes, strategy is core to my process. We start with discovery and research to understand your audience, goals, and competitive landscape. This strategic foundation shapes all design decisions.',
    },
  ]

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-section px-6 bg-dark-950">
      <div className="max-w-4xl mx-auto">
        <FadeUpOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked</h2>
            <p className="text-xl text-accent-muted max-w-2xl">
              Common questions about my process, pricing, and approach.
            </p>
          </div>
        </FadeUpOnScroll>

        <StaggerContainer staggerDelay={0.05}>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <StaggerItem key={faq.id}>
                <motion.div
                  className="bg-dark-800 rounded-card border border-dark-700 overflow-hidden"
                  layout
                >
                  <motion.button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-dark-700 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold pr-6">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 border-t border-dark-700">
                          <p className="text-accent-muted leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
