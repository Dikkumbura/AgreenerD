"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Separator } from "./separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  className?: string
}

export function AnimatedTestimonials({
  title = "What Our Customers Say",
  subtitle = "Hear from our satisfied customers about their experience with our eco-friendly dry cleaning service.",
  badgeText = "Customer Reviews",
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 overflow-hidden bg-gray-50 ${className || ""}`}>
      <div className="px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-lime/10 text-brand-lime">
                  <Star className="mr-1 h-3.5 w-3.5 fill-brand-lime" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-bold tracking-tighter text-brand-navy sm:text-4xl md:text-5xl">{title}</h2>

              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-brand-lime" : "w-2.5 bg-gray-300"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full mr-0 md:mr-10 min-h-[400px] md:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-white border shadow-lg rounded-xl p-4 md:p-8 h-full flex flex-col">
                  <div className="mb-4 md:mb-6 flex gap-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-brand-lime text-brand-lime" />
                      ))}
                  </div>

                  <div className="relative mb-4 md:mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 md:h-8 md:w-8 text-brand-lime/20 rotate-180" />
                    <p className="relative z-10 text-base md:text-lg font-medium leading-relaxed text-gray-700">"{testimonial.content}"</p>
                  </div>

                  <Separator className="my-3 md:my-4" />

                  <div className="flex items-center gap-3 md:gap-4">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-brand-navy text-sm md:text-base">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-16 w-16 md:h-24 md:w-24 rounded-xl bg-brand-lime/5"></div>
            <div className="absolute -top-6 -right-6 h-16 w-16 md:h-24 md:w-24 rounded-xl bg-brand-lime/5"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 