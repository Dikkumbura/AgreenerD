import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lisa Thompson",
      role: "Environmentally Conscious Professional",
      content: "I was amazed at how fresh and clean my clothes came back without any chemical smell. As someone who's mindful about environmental impact, I love that they use eco-friendly cleaning methods. My suits look impeccable, and I feel good knowing I'm making a sustainable choice.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Local Business Owner",
      content: "The quality of service is exceptional. My restaurant uniforms and linens come back spotless every time, and knowing they use non-toxic cleaning methods gives me peace of mind for my staff. The free pickup and delivery service is a game-changer for my busy schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Rachel Martinez",
      role: "Healthcare Professional",
      content: "Working in healthcare, I'm particularly conscious about cleanliness and harmful chemicals. Their eco-friendly approach not only gets my scrubs perfectly clean but also ensures they're free from harsh chemicals. The convenience of their service is unmatched!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
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