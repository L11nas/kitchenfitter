import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-1R8LMGQD61', {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}
