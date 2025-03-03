import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  const backgrounds = {
    '/about': "url('/assets/backgrounds/about-bg.jpg')",
    '/projects': 'linear-gradient(135deg, #ece9e6, #ffffff)',
    '/services': "url('/assets/backgrounds/services-bg.jpg')",
    '/contact': "url('/assets/backgrounds/contact-bg.jpg')",
  };

  return (
    <div
      style={{
        background: backgrounds[location.pathname],
        minHeight: '100vh',
        padding: '50px',
      }}
    >
      {children}
    </div>
  );
}
