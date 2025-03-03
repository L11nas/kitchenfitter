import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  FaTools,
  FaClock,
  FaThumbsUp,
  FaTree,
  FaLayerGroup,
} from 'react-icons/fa';
import project1 from '/assets/Kitchenimg/hero.jpg';
import project2 from '/assets/Kitchenimg/hero1.jpg';
import project3 from '/assets/Kitchenimg/hero2.jpg';
import '../../src/components/styles/hero.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className='hero-container'>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>Transform Your Home with Precision & Elegance</h1>
        <p>
          We provide high-quality kitchen fitting, flooring installation,
          staircase renovation, and outdoor cladding flooring solutions across
          the UK, delivered by certified professionals.
        </p>
      </div>

      <section className='hero-services' data-aos='fade-up'>
        <h2>Our Services</h2>
        <div className='hero-services-cards'>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaTools size={40} />
            <h3>Kitchen Installation</h3>
            <p>High-quality kitchen fitting services tailored to your needs.</p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaClock size={40} />
            <h3>Flooring Installation</h3>
            <p>Perfectly installed wooden and laminate flooring solutions.</p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaThumbsUp size={40} />
            <h3>Custom Renovations</h3>
            <p>Full kitchen and home renovations to match your vision.</p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaTree size={40} />
            <h3>Outdoor Decking Installation</h3>
            <p>
              Professional decking solutions using high-quality materials for
              beautiful and long-lasting outdoor spaces.
            </p>
          </div>
          <div className='hero-service-card' data-aos='fade-left'>
            <FaLayerGroup size={40} />
            <h3>Staircase Renovation</h3>
            <p>
              Enhance the look and safety of your home with expert staircase
              renovation, including handrails, steps, and balustrades.
            </p>
          </div>
        </div>
      </section>

      <section className='hero-projects' data-aos='fade-up'>
        <h2>Our Recent Projects</h2>
        <div className='hero-projects-images'>
          <img
            src={project1}
            alt='Project 1'
            loading='lazy'
            className='blur-up'
          />
          <img
            src={project2}
            alt='Project 2'
            loading='lazy'
            className='blur-up'
          />
          <img
            src={project3}
            alt='Project 3'
            loading='lazy'
            className='blur-up'
          />
        </div>
        <a href='/projects' className='hero-cta-button'>
          View All Projects
        </a>
      </section>
    </section>
  );
}
