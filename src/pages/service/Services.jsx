import React from 'react';
import '../../components/styles/services.css';
import { FaBookmark } from 'react-icons/fa';

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
      'Our expert kitchen fitting services cover everything from cabinet installation, countertops, plumbing, electrical work, and final finishing. We ensure a seamless, functional, and stylish kitchen design, optimizing storage space and workflow for a perfect balance of aesthetics and practicality.',
    image: kitchenImg,
    link: '/services/kitchen-installation',
  },
  {
    title: 'Flooring Installation',
    description:
      'We offer hardwood, laminate, vinyl, and tile flooring installations, ensuring a smooth, durable, and perfectly leveled finish. Whether you prefer the warmth of wood or the resilience of modern vinyl, our precise craftsmanship guarantees long-lasting beauty and functionality.',
    image: flooringImg,
    link: '/services/flooring',
  },
  {
    title: 'Custom Renovations',
    description:
      'Reimagine your home with tailor-made renovation solutions. We specialize in modernizing outdated spaces, optimizing layouts, and integrating smart home features. From wall remodeling to bespoke furniture installations, we bring style and practicality together.',
    image: renovationImg,
    link: '/services/renovations',
  },
  {
    title: 'Outdoor Decking Installation',
    description:
      'Create a stunning outdoor space with our professional decking services. We use premium materials like composite, hardwood, and pressure-treated wood to deliver weather-resistant, durable, and visually striking decking solutions. Services include custom deck designs, railing installation, and waterproofing.',
    image: deckingImg,
    link: '/services/decking',
  },
  {
    title: 'Staircase Renovation',
    description:
      'Upgrade your home’s aesthetics and safety with a staircase renovation. We replace worn-out steps, install modern handrails, and reinforce structures for enhanced durability. Choose from wood, glass, or metal to match your home’s architecture while adding a modern touch.',
    image: staircaseImg,
    link: '/services/staircase',
  },
];

export default function ServiceCards() {
  return (
    <section className='services-hero-container'>
      <div className='services-hero-overlay'></div>
      <div className='services-hero-content'>
        <h2>Our Services</h2>
        <div className='services-hero-cards'>
          {services.map((service, index) => (
            <div key={index} className='services-hero-card'>
              <img
                src={service.image}
                alt={`${service.title} - high-quality service`}
                className='services-hero-image'
              />
              <div className='services-hero-text'>
                <h3>
                  <FaBookmark className='services-hero-icon' /> {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
