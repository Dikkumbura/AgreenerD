import React from 'react';

const PageLoader: React.FC<{ show: boolean }> = ({ show }) => (
  <div
    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 transition-opacity duration-500 pointer-events-none ${show ? 'opacity-100' : 'opacity-0'}`}
    aria-hidden={!show}
  >
    <div className="flex flex-col items-center gap-4">
      {/* Animated Spinner */}
      <div className="w-16 h-16 border-4 border-brand-lime border-t-brand-navy rounded-full animate-spin shadow-lg"></div>
      <div className="text-brand-navy font-bold text-xl tracking-wide flex items-center gap-2">
        <span className="animate-pulse">A Greener Cleaner</span>
        <span className="w-2 h-2 bg-brand-lime rounded-full animate-ping"></span>
      </div>
      <div className="text-brand-navy/60 text-sm mt-2">Loading...</div>
    </div>
  </div>
);

export default PageLoader; 