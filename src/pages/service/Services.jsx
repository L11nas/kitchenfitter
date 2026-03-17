import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import '../../components/styles/services.css';

// Images
import kitchenImg from '/assets/Kitchenimg/project8/51.jpg';
import flooringImg from '/assets/Kitchenimg/parquet.jpg';
import renovationImg from '/assets/Kitchenimg/hero1.jpg';
import deckingImg from '/assets/Kitchenimg/terrace.jpg';
import staircaseImg from '/assets/Kitchenimg/Staircase .jpg';

const services = [
  {
    title: 'Kitchen Installation',
    description:
      'We provide expert kitchen fitting and installation services, including cabinet fitting, worktop installation, plumbing coordination, electrical preparation and professional finishing. Our bespoke kitchen solutions are designed to improve both style and everyday practicality.',
    image: kitchenImg,
    link: '/projects/kitchens',
    alt: 'Modern kitchen installation completed by S.L. Builders LTD',
  },
  {
    title: 'Flooring Installation',
    description:
      'Our flooring installation services include hardwood, laminate, vinyl and tile flooring, fitted with precision for a clean, level and durable finish that enhances both comfort and appearance.',
    image: flooringImg,
    link: '/projects/flooring',
    alt: 'Professional flooring installation for a residential interior',
  },
  {
    title: 'Custom Renovations',
    description:
      'We deliver bespoke home renovation services tailored to your layout, lifestyle and design goals, from room upgrades to wider refurbishment works that improve function, flow and long-term value.',
    image: renovationImg,
    link: '/projects/custom',
    alt: 'Home renovation project completed by S.L. Builders LTD',
  },
  {
    title: 'Outdoor Decking Installation',
    description:
      'We build durable, weather-resistant decking using quality materials such as composite, hardwood and treated timber, creating practical and attractive outdoor spaces for year-round use.',
    image: deckingImg,
    link: '/projects/decking',
    alt: 'Outdoor decking installation for a garden or patio area',
  },
  {
    title: 'Staircase Renovation',
    description:
      'Our staircase renovation services include stair upgrades, tread replacement, handrail fitting and structural improvements, helping modernise your interior while improving safety and finish quality.',
    image: staircaseImg,
    link: '/projects/staircase',
    alt: 'Staircase renovation with modern finish and upgraded handrails',
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='services-hero-container'>
      <Helmet>
        <title>
          Kitchen Fitting, Flooring & Renovation Services | S.L. Builders LTD
        </title>
        <meta
          name='description'
          content='Explore kitchen fitting, flooring installation, staircase renovation, decking and bespoke home improvement services from S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/services' />
      </Helmet>

      <div className='services-hero-overlay'></div>

      <div className='services-hero-content'>
        <h1>Our Services</h1>

        <p className='services-intro'>
          S.L. Builders LTD provides expert kitchen fitting, flooring
          installation, staircase renovation, decking and bespoke home
          improvement services across <strong>Nottingham</strong>,{' '}
          <strong>Leeds</strong>, <strong>Doncaster</strong> and nearby areas.
          We focus on reliable workmanship, quality materials and practical,
          long-lasting results for every home.
        </p>

        <div className='services-hero-cards'>
          {services.map((service, index) => (
            <article key={index} className='services-hero-card'>
              <img
                src={service.image}
                alt={service.alt}
                className='services-hero-image'
                loading='lazy'
              />

              <div className='services-hero-text'>
                <h2>
                  <FaBookmark
                    className='services-hero-icon'
                    aria-hidden='true'
                    title={service.title}
                  />{' '}
                  {service.title}
                </h2>

                <p>{service.description}</p>

                <Link to={service.link} className='services-read-more'>
                  View {service.title} Projects
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
