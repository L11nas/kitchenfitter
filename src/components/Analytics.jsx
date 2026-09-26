import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // The first page view is sent by loadGA() in index.html
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!window.gaLoaded) return;

    window.gtag('config', window.GA_ID, {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}
