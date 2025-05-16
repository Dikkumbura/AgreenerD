import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import IconGrid from './components/IconGrid';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <IconGrid />
        <Sustainability />
        <Testimonials />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;