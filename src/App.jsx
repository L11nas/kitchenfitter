import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import CookieConsent from './components/CookieConsent/CookieConsentPage';
import './components/styles/App.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import { pageRoutes } from './routes';

// Each page (except the home page) is loaded as its own chunk
const lazyRoutes = pageRoutes.map((route) => ({
  path: route.path,
  Page: lazy(route.load),
}));

export default function App() {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Hero />} />
          {lazyRoutes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </Suspense>

      <ScrollToTopButton />
      <Footer />
      <CookieConsent />
    </>
  );
}
