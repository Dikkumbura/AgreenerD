import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import IconGrid from './components/IconGrid';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BridalGownComponent from './components/BridalGown';
import SchedulePickupForm from './components/SchedulePickupForm';
import ContactUs from './components/ContactUs';
import WetCleaning from './components/WetCleaning';
import DeliveryAreas from './components/DeliveryAreas';
import TermsPrivacy from './components/TermsPrivacy';
import PageLoader from './components/PageLoader';
import VoiceflowAgent from './components/VoiceflowAgent';

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

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <IconGrid />
      <Testimonials />
      <CTA />
    </>
  );
}

function AppRoutesWithLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [displayedLocation, setDisplayedLocation] = useState(location);

  useEffect(() => {
    if (location !== displayedLocation) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setDisplayedLocation(location);
        setLoading(false);
      }, 700); // Loader duration
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line
  }, [location, displayedLocation]);

  return (
    <>
      <PageLoader show={loading} />
      {!loading && (
        <div className="min-h-screen bg-white pt-16 md:pt-20 overflow-x-hidden">
          <Header />
          <main>
            <Routes location={displayedLocation}>
              <Route path="/" element={<HomePage />} />
              <Route path="/wedding-gown-dry-cleaning" element={<BridalGownComponent />} />
              <Route path="/schedule-pickup" element={<SchedulePickupForm />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/wet-cleaning" element={<WetCleaning />} />
              <Route path="/delivery-areas" element={<DeliveryAreas />} />
              <Route path="/terms-privacy" element={<TermsPrivacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  useEffect(() => {
    console.log('App mounted - Environment:', import.meta.env.MODE);
    console.log('Current route:', window.location.pathname);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <VoiceflowAgent />
        <AppRoutesWithLoader />
      </Router>
    </ErrorBoundary>
  );
}

export default App;