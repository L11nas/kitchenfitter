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
import project1 from '/assets/Kitchenimg/project5/25.webp';
import project2 from '/assets/Kitchenimg/project8/54.webp';
import project3 from '/assets/Kitchenimg/project1/36.jpg';
import './styles/hero.css';

export default function Hero() {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        import('aos').then((AOS) => {
          AOS.init({
            duration: window.innerWidth > 768 ? 500 : 300,
            once: true,
          });
        });
      });
    } else {
      // Jei naršyklė nepalaiko (pvz. Safari) – fallback
      setTimeout(() => {
        import('aos').then((AOS) => {
          AOS.init({
            duration: window.innerWidth > 768 ? 500 : 300,
            once: true,
          });
        });
      }, 200);
    }
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
          <h1>
            Transform Your Home with{' '}
            <span className='hero-main-phrase'>Expert Craftsmanship</span>
          </h1>
          <p>
            Our <span className='hero-key-phrase'>skilled professionals</span>{' '}
            specialize in kitchen installations, flooring, staircases, and
            exterior cladding, delivering{' '}
            <span className='hero-key-phrase'>high-quality</span> renovations
            throughout the UK
          </p>
          <button
            className='hero-cta-button'
            onClick={() => setIsModalOpen(true)}
          >
            Get a consultation
          </button>
        </div>
        <section className='hero-services' data-aos='fade-up'>
          <h2>Our Services Precision & Style in Every Project</h2>
          <div className='hero-services-cards'>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTools size={40} aria-hidden='true' />
              <h3>Kitchen Installation</h3>
              <p>
                Tailored kitchen fitting solutions that combine functionality,
                modern design, and lasting quality.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaClock size={40} aria-hidden='true' />
              <h3>Flooring Installation</h3>
              <p>
                We install wooden, laminate, and vinyl flooring with
                precision—delivering smooth, long-lasting results that enhance
                any space.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaThumbsUp size={40} aria-hidden='true' />
              <h3>Custom Renovations</h3>
              <p>
                Tailored home renovation solutions, from individual room
                makeovers to complete property refurbishments, designed to
                elevate both style and function.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTree size={40} aria-hidden='true' />
              <h3>Outdoor Decking</h3>
              <p>
                Transform your garden or patio with premium decking designed for
                strength, style, and all-weather durability.
              </p>
            </article>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaLayerGroup size={40} aria-hidden='true' />
              <h3>Staircase Renovation</h3>
              <p>
                Transform outdated staircases with custom renovations—covering
                steps, handrails, and balustrades—for a safer and more stylish
                interior.
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
