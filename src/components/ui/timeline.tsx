"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface TimelineRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TimelineRoot = React.forwardRef<HTMLDivElement, TimelineRootProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-4 max-w-xl mx-auto", className)} {...props}>
      {children}
    </div>
  )
)
TimelineRoot.displayName = "TimelineRoot"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-4", className)} {...props}>
      {children}
    </div>
  )
)
TimelineItem.displayName = "TimelineItem"

interface TimelineConnectorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TimelineConnector = ({ className, children, ...props }: TimelineConnectorProps) => (
  <div className={cn("flex flex-col items-center", className)} {...props}>
    {children}
  </div>
)

interface TimelineSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineSeparator = ({ className, ...props }: TimelineSeparatorProps) => (
  <div className={cn("w-0.5 h-full bg-brand-lime/20", className)} {...props} />
)

interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TimelineIndicator = ({ className, children, ...props }: TimelineIndicatorProps) => (
  <div
    className={cn(
      "w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white relative z-10",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("pt-1 pb-8", className)} {...props}>
      {children}
    </div>
  )
)
TimelineContent.displayName = "TimelineContent"

interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const TimelineTitle = React.forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold text-brand-navy mb-1", className)}
      {...props}
    >
      {children}
    </h3>
  )
)
TimelineTitle.displayName = "TimelineTitle"

interface TimelineDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const TimelineDescription = React.forwardRef<HTMLParagraphElement, TimelineDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn("text-gray-600", className)} {...props}>
      {children}
    </p>
  )
)
TimelineDescription.displayName = "TimelineDescription"

export {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineIndicator,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} 