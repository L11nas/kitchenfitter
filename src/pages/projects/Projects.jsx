import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../../components/styles/projects.css';
import kitchenBg from '/assets/Kitchenimg/k3.jpg';
import flooringBg from '/assets/Kitchenimg/floor.jpg';
import deckingBg from '/assets/Kitchenimg/TerraceF.jpg';
import staircaseBg from '/assets/Kitchenimg/stairs.jpg';
import customBg from '/assets/Kitchenimg/worker.jpg';
import backgroundImage from '/assets/valeria.webp';
import Reviews from '../../components/Reviews';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: 'Kitchen Installations',
      link: '/projects/kitchens',
      bg: kitchenBg,
    },
    {
      title: 'Flooring & Parquet',
      link: '/projects/flooring',
      bg: flooringBg,
    },
    {
      title: 'Outdoor Decking',
      link: '/projects/decking',
      bg: deckingBg,
    },
    {
      title: 'Staircase Renovation',
      link: '/projects/staircase',
      bg: staircaseBg,
    },
    {
      title: 'Custom Renovations',
      link: '/projects/custom',
      bg: customBg,
    },
  ];

  return (
    <section
      className='projects-page'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Helmet>
        <title>
          Completed Kitchen & Home Renovation Projects | S.L. Builders LTD
        </title>
        <meta
          name='description'
          content='View completed kitchen installations, flooring projects, decking, staircase renovations and custom home improvements by S.L. Builders LTD across Nottingham, Leeds and Doncaster.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/projects' />
      </Helmet>

      <div className='projects-overlay'></div>

      <div className='projects-header'>
        <h1 className='projects-title'>Our Completed Renovation Projects</h1>

        <p className='projects-intro'>
          Explore our recent kitchen installations, flooring projects, staircase
          renovations, decking builds and bespoke home improvements completed
          across <strong>Nottingham</strong>, <strong>Leeds</strong> and{' '}
          <strong>Doncaster</strong>.
        </p>

        <p className='projects-intro'>
          Each project reflects our commitment to precision, durability and
          clean, professional finishes. From full property renovations to
          smaller upgrades, we deliver consistent, high-quality results tailored
          to every home.
        </p>
      </div>

      <div className='projects-categories'>
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className='projects-category'
            aria-label={`View ${category.title} projects`}
          >
            <div
              className='category-overlay'
              style={{
                backgroundImage: `url(${category.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2>{category.title}</h2>
              <span className='projects-cta'>View Projects →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className='projects-bottom-text'>
        <h2>Looking for a Similar Project?</h2>
        <p>
          If you're planning a kitchen installation, flooring upgrade or full
          home renovation, our team is ready to help. Contact us for a free
          consultation and we’ll guide you through the process step by step.
        </p>
      </div>

      <Reviews />
    </section>
  );
}
