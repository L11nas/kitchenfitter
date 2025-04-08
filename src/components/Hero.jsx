import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from './Modal'; // Importuojam modalą
import Navbar from './Navbar/Navbar';

import {
  FaTools,
  FaClock,
  FaThumbsUp,
  FaTree,
  FaLayerGroup,
} from 'react-icons/fa';
import project1 from '/assets/Kitchenimg/project5/25.jpg';
import project2 from '/assets/Kitchenimg/project8/54.jpg';
import project3 from '/assets/Kitchenimg/project1/36.jpg';
import './styles/hero.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: window.innerWidth > 768 ? 500 : 300,
      once: true,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:slbuilderswork@gmail.com?subject=Paslaugų užklausa&body=Vardas: ${formData.name}%0D%0AEl. paštas: ${formData.email}%0D%0AŽinutė: ${formData.message}`;
    window.location.href = mailtoLink;
    setIsModalOpen(false);
  };

  return (
    <>
      {!isModalOpen && <Navbar />}

      <section className='hero-container' role='banner'>
        <div className='hero-fixed-bg' /> {/* <<< Naujas fono sluoksnis */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1>Transform Your Home with Expert Craftsmanship</h1>
          <p>
            Our skilled professionals specialize in kitchen installations,
            flooring, staircases, and outdoor cladding, delivering high-quality
            renovations across the UK.
          </p>
        </div>
        <section className='hero-services' data-aos='fade-up'>
          <h2>Our Services Precision & Style in Every Project</h2>
          <div className='hero-services-cards'>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTools size={40} aria-hidden='true' />
              <h3>Kitchen Installation</h3>
              <p>
                Custom kitchen fitting services designed for functionality and
                aesthetics.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaClock size={40} aria-hidden='true' />
              <h3>Flooring Installation</h3>
              <p>
                Professional installation of wooden, laminate, and vinyl
                flooring for a flawless finish.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaThumbsUp size={40} aria-hidden='true' />
              <h3>Custom Renovations</h3>
              <p>
                Bespoke renovations that elevate your home, from single rooms to
                full property upgrades.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTree size={40} aria-hidden='true' />
              <h3>Outdoor Decking</h3>
              <p>
                Premium decking solutions for durable, stylish, and
                weather-resistant outdoor spaces.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaLayerGroup size={40} aria-hidden='true' />
              <h3>Staircase Renovation</h3>
              <p>
                Upgrade staircases with expert craftsmanship, including steps,
                handrails, and balustrades.
              </p>
            </article>
          </div>
        </section>
        <section className='hero-projects' data-aos='fade-up'>
          <h2>Recent Projects See Our Work</h2>
          <div className='hero-projects-images'>
            <img
              src={project1}
              alt='Expert UK kitchen installation - modern high-end design'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project2}
              alt='Luxury staircase renovation in the UK - premium wood finish'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project3}
              alt='Durable outdoor decking installation - UK home improvement'
              loading='lazy'
              className='blur-up'
            />
          </div>
          <a
            href='/projects'
            className='hero-cta-button'
            aria-label='View all renovation projects'
          >
            View All Projects
          </a>
        </section>
      </section>
    </>
  );
}
