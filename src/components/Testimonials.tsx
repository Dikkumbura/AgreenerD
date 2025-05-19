import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Christine S.",
      content: "The best cleaners around! Clothes smell clean with NO chemical smell. Very nice and helpful staff.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia M.",
      content: "I LOVE this place. Everything about it ranks top-notch. I took in a ecru formal gown that I thought for certain would never come clean again. It had make-up around the neckline. The hemline got dragged through mud. I picked it up and, to my grateful surprise, it looked brand new! And all done with environmentally friendly product. I couldn't ask for more. Thanks!",
      rating: 5,
    },
    {
      id: 3,
      name: "Keith M.",
      content: "The owner is a great guy, their prices are fair and service is top notch. I have been using them for over three years and It's the only place I go.",
      rating: 5,
    }
  ];

  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      title="Clean Clothes, Clean Conscience"
      subtitle="Join our growing community of environmentally conscious customers who've discovered the perfect balance of cleanliness and sustainability."
      badgeText="Customer Stories"
    />
  );
};

export default Testimonials;