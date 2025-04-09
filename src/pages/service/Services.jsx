import React, { useEffect } from 'react';

import '../../components/styles/services.css';
import { FaBookmark } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// Importuojame vaizdus
import kitchenImg from '/assets/Kitchenimg/project8/51.jpg';
import flooringImg from '/assets/Kitchenimg/parquet.jpg';
import renovationImg from '/assets/Kitchenimg/hero1.jpg';
import deckingImg from '/assets/Kitchenimg/terrace.jpg';
import staircaseImg from '/assets/Kitchenimg/Staircase .jpg';

const services = [
  {
    title: 'Kitchen Installation',
    description:
      'Looking for expert kitchen fitters in the UK? At S.L. BUILDERS LTD, we offer full-service kitchen installations, including cabinet fitting, worktop installation, plumbing, electrical work, and professional finishing. Our custom kitchen fitting solutions are designed for style, practicality, and optimal space use—delivering beautiful, functional kitchens that meet your everyday needs.',
    image: kitchenImg,
    link: '/services/kitchen-installation',
    keywords: [
      'kitchen installation',
      'kitchen fitting',
      'cabinet installation',
      'countertops',
      'plumbing',
      'electrical work',
      'kitchen design',
      'kitchen remodel',
    ],
  },
  {
    title: 'Flooring Installation',
    description:
      ' we provide professional flooring installation services across the UK, specialising in hardwood, laminate, vinyl, and tile flooring. Whether youre after the natural warmth of wood or the durability of vinyl, our expert fitters ensure a smooth, level, and long-lasting finish. Every installation is completed with precision—combining beauty, resilience, and style for high-traffic living spaces.',
    image: flooringImg,
    link: '/services/flooring',
    keywords: [
      'flooring installation',
      'hardwood flooring',
      'laminate flooring',
      'vinyl flooring',
      'tile flooring',
      'floor installation',
      'floor remodel',
    ],
  },
  {
    title: 'Custom Renovations',
    description:
      'Transform your home with our bespoke renovation services, tailored to your lifestyle and space. We specialize in modernising outdated interiors, reconfiguring layouts for better flow, and integrating smart home features. From structural wall remodeling to custom furniture installations, we combine style, efficiency, and long-term value in every project.',
    image: renovationImg,
    link: '/services/renovations',
    keywords: [
      'home renovation',
      'custom renovation',
      'home remodeling',
      'smart home features',
      'wall remodeling',
      'bespoke furniture',
      'home improvement',
    ],
  },
  {
    title: 'Outdoor Decking Installation',
    description:
      'Enhance your garden or patio with our expert outdoor decking installation services. We build durable, weather-resistant decks using premium materials such as composite, hardwood, and pressure-treated timber. Our services include custom deck design, handrail and balustrade installation, and full waterproofing—perfect for creating stylish, functional outdoor living areas that last.',
    image: deckingImg,
    link: '/services/decking',
    keywords: [
      'decking installation',
      'outdoor decking',
      'composite decking',
      'hardwood decking',
      'deck design',
      'railing installation',
      'deck waterproofing',
    ],
  },
  {
    title: 'Staircase Renovation',
    description:
      'Modernise your interior with our professional staircase renovation services. We upgrade worn or outdated stairs by replacing treads, fitting contemporary handrails, and strengthening the overall structure for long-term safety. Whether you prefer timber, glass, or metal finishes, we tailor each staircase to match your home’s design and add a sleek, modern look.',
    image: staircaseImg,
    link: '/services/staircase',
    keywords: [
      'staircase renovation',
      'stair remodel',
      'handrail installation',
      'staircase design',
      'staircase upgrade',
      'staircase repair',
    ],
  },
];

export default function ServiceCards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='services-hero-container'>
      {/* ✅ SEO: Page Title and Meta Description */}
      <Helmet>
        <title>
          Our Home Renovation Services | Kitchen, Flooring, Decking & More
        </title>
        <meta
          name='description'
          content='Explore our comprehensive home renovation services, including kitchen installation, flooring, decking, custom renovations, and staircase remodeling. Transform your home with our expert team.'
        />
        <meta
          name='keywords'
          content={[
            ...new Set(services.flatMap((service) => service.keywords)),
          ].join(', ')}
        />
      </Helmet>
      <div className='services-hero-overlay'></div>
      <div className='services-hero-content'>
        {/* ✅ SEO: Main Heading */}
        <h2>Our Services</h2>
        <div className='services-hero-cards'>
          {services.map((service, index) => (
            <div key={index} className='services-hero-card' role='article'>
              {/* ✅ SEO: Descriptive Alt Text */}
              <img
                src={service.image}
                alt={`${
                  service.title
                } - professional ${service.title.toLowerCase()} service`}
                className='services-hero-image'
              />
              <div className='services-hero-text'>
                {/* ✅ SEO: Service Title as H3 */}
                <h3>
                  <FaBookmark
                    className='services-hero-icon'
                    aria-label={`${service.title} bookmark`}
                    title='Bookmark icon'
                  />{' '}
                  {service.title}
                </h3>
                {/* ✅ SEO: Service Description */}
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
