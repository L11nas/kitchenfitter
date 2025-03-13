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
import project1 from '/assets/Kitchenimg/project5/25.jpg';
import project2 from '/assets/Kitchenimg/project8/54.jpg';
import project3 from '/assets/Kitchenimg/project1/36.jpg';
import '../../src/components/styles/hero.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className='hero-container'>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>Elevate Your Home with Precision & Style</h1>
        <p>
          From kitchen installations to flooring, staircase renovations, and
          outdoor cladding, we deliver expert craftsmanship across the UK. Our
          certified professionals ensure every project meets the highest
          standards of quality, durability, and aesthetics.
        </p>
      </div>

      <section className='hero-services' data-aos='fade-up'>
        <h2>What We Offer – Expert Renovation & Installation</h2>
        <div className='hero-services-cards'>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaTools size={40} />
            <h3>Kitchen Installation</h3>
            <p>
              Bespoke kitchen fitting services, designed for style,
              functionality, and durability.
            </p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaClock size={40} />
            <h3>Flooring Installation</h3>
            <p>
              Expertly fitted wooden, laminate, and vinyl flooring, ensuring a
              flawless finish.
            </p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaThumbsUp size={40} />
            <h3>Custom Renovations</h3>
            <p>
              Transform your home with tailored renovation solutions, from
              kitchens to full property upgrades.
            </p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaTree size={40} />
            <h3>Outdoor Decking Installation</h3>
            <p>
              Premium decking solutions for stunning, durable, and
              weather-resistant outdoor spaces.
            </p>
          </div>
          <div className='hero-service-card' data-aos='zoom-in'>
            <FaLayerGroup size={40} />
            <h3>Staircase Renovation</h3>
            <p>
              Upgrade your home's staircases with expert renovations, including
              handrails, steps, and balustrades.
            </p>
          </div>
        </div>
      </section>

      <section className='hero-projects' data-aos='fade-up'>
        <h2>Our Latest Home Transformations</h2>
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
