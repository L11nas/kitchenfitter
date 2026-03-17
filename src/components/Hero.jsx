import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from './Modal';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
    const mailtoLink = `mailto:slbuilderswork@gmail.com?subject=Service enquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>
          Kitchen Fitters in Nottingham, Leeds & Doncaster | S.L. Builders LTD
        </title>
        <meta
          name='description'
          content='S.L. Builders LTD provides expert kitchen fitting, flooring installation, staircase renovation, decking and bespoke home improvement services across Nottingham, Leeds, Doncaster and nearby areas.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/' />
      </Helmet>

      {!isModalOpen}

      <section className='hero-container' role='banner'>
        <div className='hero-fixed-bg' />
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
            Expert Kitchen Fitters in Nottingham, Leeds & Doncaster{' '}
            <span className='hero-main-phrase'>
              Bespoke Installation & Home Renovation
            </span>
          </h1>

          <p>
            We provide expert kitchen fitting, flooring installation, staircase
            renovation and bespoke home improvement services across Nottingham,
            Leeds, Doncaster and surrounding areas, with a strong focus on
            quality craftsmanship, reliability and attention to detail.
          </p>

          <button
            className='hero-cta-button'
            onClick={() => setIsModalOpen(true)}
          >
            Get a Free Consultation
          </button>
        </div>

        <section className='hero-services' data-aos='fade-up'>
          <h2>Why Choose S.L. Builders LTD?</h2>
          <p>
            At S.L. Builders LTD, we specialise in expert kitchen fitting and
            home renovation services across <strong>Nottingham</strong>,{' '}
            <strong>Leeds</strong>, <strong>Doncaster</strong> and surrounding
            areas. With years of hands-on experience, we deliver exceptional
            craftsmanship, careful attention to detail and durable, high-quality
            finishes on every project.
          </p>
          <p>
            Whether you are planning a full kitchen renovation, new flooring,
            staircase refurbishment or exterior decking, we work closely with
            you to create practical, stylish spaces tailored to your home and
            lifestyle. Our goal is simple: reliable service, quality results and
            a smooth project from start to finish.
          </p>

          <div className='hero-services-cards'>
            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTools size={40} aria-hidden='true' />
              <h3>Kitchen Installation</h3>
              <p>
                Bespoke kitchen fitting solutions combining functionality,
                modern design and long-lasting quality.
              </p>
            </article>

            <article className='hero-service-card' data-aos='zoom-in'>
              <FaClock size={40} aria-hidden='true' />
              <h3>Flooring Installation</h3>
              <p>
                Wooden, laminate and vinyl flooring installed with precision for
                a clean, durable and professional finish.
              </p>
            </article>

            <article className='hero-service-card' data-aos='zoom-in'>
              <FaThumbsUp size={40} aria-hidden='true' />
              <h3>Custom Renovations</h3>
              <p>
                Tailored home renovation solutions, from single-room upgrades to
                full property refurbishments.
              </p>
            </article>

            <article className='hero-service-card' data-aos='zoom-in'>
              <FaTree size={40} aria-hidden='true' />
              <h3>Outdoor Decking</h3>
              <p>
                Premium decking installations designed for style, strength and
                year-round durability.
              </p>
            </article>

            <article className='hero-service-card' data-aos='zoom-in'>
              <FaLayerGroup size={40} aria-hidden='true' />
              <h3>Staircase Renovation</h3>
              <p>
                Stair upgrades and renovations that improve both appearance,
                safety and everyday durability.
              </p>
            </article>
          </div>
        </section>

        <section className='hero-projects' data-aos='fade-up'>
          <h2>See Our Recent Work</h2>
          <div className='hero-projects-images'>
            <img
              src={project1}
              alt='Modern kitchen installation project completed by S.L. Builders LTD'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project2}
              alt='Staircase renovation project with premium wood finish'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project3}
              alt='Outdoor decking installation for a residential property'
              loading='lazy'
              className='blur-up'
            />
          </div>

          <Link
            to='/projects'
            className='hero-cta-button'
            aria-label='View all renovation projects'
          >
            View All Projects
          </Link>
        </section>
      </section>
    </>
  );
}
