import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../../components/styles/projects.css';
import kitchenBg from '/assets/Kitchenimg/k3.jpg';
import flooringBg from '/assets/Kitchenimg/floor.jpg';
import deckingBg from '/assets/Kitchenimg/TerraceF.jpg';
import staircaseBg from '/assets/Kitchenimg/stairs.jpg';
import customBg from '/assets/Kitchenimg/worker.jpg';
import backgroundImage from '/assets/valeria.jpg'; // ✅ Importuotas bendras fonas
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
    { title: 'Flooring & Parquet', link: '/projects/flooring', bg: flooringBg },
    { title: 'Outdoor Decking', link: '/projects/decking', bg: deckingBg },
    {
      title: 'Staircase Renovation',
      link: '/projects/staircase',
      bg: staircaseBg,
    },
    { title: 'Custom Renovations', link: '/projects/custom', bg: customBg },
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
          Completed Home Renovation Projects | Kitchen, Flooring & More
        </title>
        <meta
          name='description'
          content='Explore our successfully completed home renovation projects, including kitchen installations, flooring, decking, staircase renovations, and custom remodeling.'
        />
      </Helmet>
      <div className='projects-overlay'></div>

      <h1 className='projects-title'>Explore Our Completed Projects</h1>

      <div className='projects-categories'>
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className='projects-category'
            aria-label={`View our ${category.title} projects`}
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
            </div>
          </Link>
        ))}
      </div>
      <Reviews />
    </section>
  );
}
