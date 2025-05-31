import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './PageLoader';

// Agent configurations
const AGENTS = {
  pearl: {
    verify: { projectID: '683af86460d51f8ed2823e02' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production'
  },
  leafy: {
    verify: { projectID: '683a24243bd7a650833246a8' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production'
  }
};

const WIDGET_SCRIPT_SRC = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

function removeAllVoiceflowElements() {
  // Remove ALL Voiceflow-related elements - be very aggressive
  const selectors = [
    'iframe[id^="vf-"]',
    '[id^="vf-widget"]',
    '.vf-widget',
    '[class*="voiceflow"]',
    'div[style*="voiceflow"]',
    '#voiceflow-chat',
    '.voiceflow-chat'
  ];
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
  
  // Remove the Voiceflow script
  document.querySelectorAll(`script[src="${WIDGET_SCRIPT_SRC}"]`).forEach(el => el.remove());
  
  // Clear any Voiceflow global variables
  if (window.voiceflow) {
    delete window.voiceflow;
  }
}

function isWidgetPresent() {
  return document.querySelector('iframe[id^="vf-"]') !== null;
}

const VoiceflowAgent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<'pearl' | 'leafy' | null>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isWeddingPage = location.pathname === '/wedding-gown-dry-cleaning';
    const targetAgent = isWeddingPage ? 'pearl' : 'leafy';

    // Check if we need to load/reload the widget
    const needsReload = currentAgent !== targetAgent || !isWidgetPresent();

    // If the correct agent is already loaded AND the widget is present, do nothing
    if (!needsReload) return;

    // Clear any pending loads
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }

    setIsLoading(true);

    // Aggressive cleanup
    removeAllVoiceflowElements();

    // Wait longer to ensure complete cleanup
    loadTimeoutRef.current = setTimeout(() => {
      // Double-check cleanup
      removeAllVoiceflowElements();
      
      // Create and inject new script
      const script = document.createElement('script');
      script.src = WIDGET_SCRIPT_SRC;
      script.type = 'text/javascript';
      
      script.onload = async () => {
        // Wait for window.voiceflow.chat.load to be available
        let attempts = 0;
        const maxAttempts = 50;
        
        while (!window.voiceflow?.chat?.load && attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }
        
        if (window.voiceflow?.chat?.load) {
          // One final cleanup before loading
          document.querySelectorAll('iframe[id^="vf-"], [id^="vf-widget"], .vf-widget').forEach(el => el.remove());
          
          // Load the agent
          window.voiceflow.chat.load(AGENTS[targetAgent]);
          setCurrentAgent(targetAgent);
          
          // Hide any duplicate widgets that might appear
          setTimeout(() => {
            const widgets = document.querySelectorAll('iframe[id^="vf-"]');
            if (widgets.length > 1) {
              // Keep only the last widget (most recent)
              for (let i = 0; i < widgets.length - 1; i++) {
                widgets[i].remove();
              }
            }
          }, 500);
        } else {
          console.error('Voiceflow chat failed to initialize');
        }
        
        setIsLoading(false);
      };
      
      document.body.appendChild(script);
    }, 300); // Increased delay for better cleanup

    // Cleanup on unmount
    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      removeAllVoiceflowElements();
    };
  }, [location.pathname, currentAgent]);

  return <PageLoader show={isLoading} />;
};

export default VoiceflowAgent; 