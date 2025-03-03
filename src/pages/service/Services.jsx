import React from 'react';
import '../../components/styles/services.css';
import { FaBookmark } from 'react-icons/fa';

// Importuojame vaizdus
import kitchenImg from '../../assets/KItchenimg/51.jpg';
import flooringImg from '../../assets/KItchenimg/Parketas/parquet.jpg';
import renovationImg from '../../assets/hero1.jpg';
import deckingImg from '../../assets/KItchenimg/Lauko/terrace.jpg';
import staircaseImg from '../../assets/KItchenimg/Staircase .jpg';

const services = [
  {
    title: 'Kitchen Installation',
    description:
      'Our expert kitchen fitting services ensure precise installation of cabinets, countertops, and appliances for a perfect finish. We handle everything from unit assembly, plumbing, electrical connections, and final finishing touches to create a fully functional and visually stunning kitchen. Our team ensures seamless integration of modern designs while maximizing storage efficiency and workflow optimization.',
    image: kitchenImg,
    link: '/services/kitchen-installation',
  },
  {
    title: 'Flooring Installation',
    description:
      'We provide high-quality flooring solutions, including hardwood, laminate, vinyl, and tile installations. Our team ensures a smooth and durable finish, addressing leveling, underlayment, and expansion gaps to prevent future issues. Whether you need a classic wooden floor for warmth and elegance or a modern, water-resistant vinyl solution, we ensure top-notch craftsmanship and longevity in every project.',
    image: flooringImg,
    link: '/services/flooring',
  },
  {
    title: 'Custom Renovations',
    description:
      'Transform your home with our tailor-made renovation services. We specialize in full and partial renovations, modernizing outdated spaces, creating additional storage solutions, and improving functionality. Our services include wall remodeling, bespoke furniture fitting, and smart home integrations to ensure your space aligns with both your aesthetic and practical needs.',
    image: renovationImg,
    link: '/services/renovations',
  },
  {
    title: 'Outdoor Decking Installation',
    description:
      'Enhance your outdoor living experience with our professional decking solutions. We use high-quality materials like pressure-treated wood, composite, and hardwood for durable and weather-resistant decking. Our services include custom-built deck designs, railing installation, waterproofing, and protective coatings to ensure longevity and aesthetic appeal for your outdoor space.',
    image: deckingImg,
    link: '/services/decking',
  },
  {
    title: 'Staircase Renovation',
    description:
      'Upgrade your home’s aesthetic and safety with our staircase renovation services. We replace worn-out steps, install modern handrails, and reinforce structures to improve durability. Our team works with a variety of materials, including wood, glass, and metal, to provide stylish and functional stair solutions tailored to your home’s architecture and design preferences.',
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
