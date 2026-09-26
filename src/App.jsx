import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import CookieConsent from './components/CookieConsent/CookieConsentPage';
import PrivacyPolicity from './components/PrivacyPolicity/PrivacyPolicity';
import CookiePolicy from './pages/cookie-policy/CookiePolicy';
import NotFound from './pages/not-found/NotFound';
import About from './pages/about/About';
import './components/styles/App.css';
import Services from './pages/service/Services';
import Projects from './pages/projects/Projects';
import KitchenProjects from './pages/projects/Kitchens';
import FlooringProjects from './pages/projects/Flooring';
import DeckingProjects from './pages/projects/Decking';
import StaircaseProjects from './pages/projects/Staircase';
import CustomProjects from './pages/projects/Custom';
import ScrollToTopButton from './components/ScrollToTopButton';
import Leeds from './pages/cities/Leeds';
import Nottingham from './pages/cities/Nottingham';
import Hucknall from './pages/cities/Hucknall';
import Doncaster from './pages/cities/Doncaster';
import Lincolnshire from './pages/cities/Lincolnshire';
import Leicestershire from './pages/cities/Leicestershire';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
export default function App() {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/kitchens' element={<KitchenProjects />} />
        <Route path='/projects/flooring' element={<FlooringProjects />} />
        <Route path='/projects/decking' element={<DeckingProjects />} />
        <Route path='/projects/staircase' element={<StaircaseProjects />} />
        <Route path='/projects/custom' element={<CustomProjects />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicity />} />
        <Route path='/leeds' element={<Leeds />} />
        <Route path='/nottingham' element={<Nottingham />} />
        <Route path='/hucknall' element={<Hucknall />} />
        <Route path='/doncaster' element={<Doncaster />} />
        <Route path='/lincolnshire' element={<Lincolnshire />} />
        <Route path='/leicestershire' element={<Leicestershire />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
      <CookieConsent />
    </>
  );
}
