import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import IconGrid from './components/IconGrid';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-brand-navy mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-lime hover:bg-brand-lime/90 text-white px-4 py-2 rounded-full"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    console.log('App mounted - Environment:', import.meta.env.MODE);
    console.log('Current route:', window.location.pathname);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white pt-16 md:pt-20">
        <Header />
        <main className="overflow-x-hidden">
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
    </ErrorBoundary>
  );
}

export default App;