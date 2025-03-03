import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';

import About from './pages/about/About'; // ✅ Apie mus puslapis
import './components/styles/App.css'; // ✅ Importuojame bendrą stilių failą
import Services from './pages/service/Services';
import Projects from './pages/projects/Projects';
import KitchenProjects from './pages/projects/Kitchens';
import FlooringProjects from './pages/projects/Flooring';
import DeckingProjects from './pages/projects/Decking';
import StaircaseProjects from './pages/projects/Staircase';
import CustomProjects from './pages/projects/Custom';

export default function App() {
  return (
    <Router>
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
      </Routes>
      <Footer />
    </Router>
  );
}
