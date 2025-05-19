import React from 'react';
import { Calendar, Droplets, Truck } from 'lucide-react';
import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineIndicator,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from './ui/timeline';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our eco-friendly cleaning service is as convenient as it is effective. Here's our simple three-step process.
            </p>
          </div>
          
        <TimelineRoot>
          <TimelineItem>
            <TimelineConnector>
              <TimelineSeparator />
              <TimelineIndicator>
                <Calendar className="h-5 w-5" />
              </TimelineIndicator>
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Schedule</TimelineTitle>
              <TimelineDescription>
                Book a free pickup online or by phone. We'll come to your home or office at a time convenient for you.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector>
              <TimelineSeparator />
              <TimelineIndicator>
                <Droplets className="h-5 w-5" />
              </TimelineIndicator>
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Clean with Water</TimelineTitle>
              <TimelineDescription>
                We clean your clothes using our advanced wet cleaning process with biodegradable detergents and no harsh chemicals.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector>
              <TimelineSeparator />
              <TimelineIndicator>
                <Truck className="h-5 w-5" />
              </TimelineIndicator>
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Delivery</TimelineTitle>
              <TimelineDescription>
                Your fresh, clean clothes are delivered back to you, neatly pressed and folded, within 48 hours.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
          
          <div className="mt-16 text-center">
            <button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center">
              Schedule Your Free Pickup Today
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;