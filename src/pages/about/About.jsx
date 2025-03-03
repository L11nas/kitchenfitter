import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTools,
  FaCogs,
  FaClipboardCheck,
  FaGem,
  FaHandshake,
  FaComments,
  FaHammer,
  FaCheckCircle,
} from 'react-icons/fa';
import '../../components/styles/about.css';

const aboutPoints = [
  {
    title: 'Expert Fitters with Years of Experience',
    description:
      'Our team consists of trained professionals with hands-on experience in fitting kitchens, flooring, staircases, and more.',
    icon: <FaTools />,
  },
  {
    title: 'Tailored Solutions for Every Home',
    description:
      'Every space is unique, and so is our approach. We provide customized installations that match your specific needs.',
    icon: <FaCogs />,
  },
  {
    title: 'High-Quality Materials',
    description:
      'We work with premium materials to guarantee durability and aesthetics in all our projects.',
    icon: <FaGem />,
  },
  {
    title: 'Efficient & Hassle-Free Process',
    description:
      'From consultation to completion, we ensure a smooth and stress-free process, keeping you informed every step of the way.',
    icon: <FaClipboardCheck />,
  },
  {
    title: 'Customer Satisfaction is Our Priority',
    description:
      'We believe in clear communication, transparent pricing, and delivering results that exceed expectations.',
    icon: <FaHandshake />,
  },
];

const processSteps = [
  {
    title: 'Consultation & Planning',
    description:
      'We start by understanding your vision and needs, providing expert advice and clear guidance.',
    icon: <FaComments />,
  },
  {
    title: 'Professional Installation',
    description:
      'Our experienced fitters handle every step with precision, ensuring a seamless and high-quality finish.',
    icon: <FaHammer />,
  },
  {
    title: 'Final Inspection & Handover',
    description:
      'Once the work is completed, we conduct a thorough quality check and ensure your full satisfaction.',
    icon: <FaCheckCircle />,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='about'>
      <div className='about-info'>
        <h1 data-aos='fade-up'>About Us</h1>
        <p data-aos='fade-up'>
          At <strong>ProFit UK</strong>, we have been delivering high-quality
          kitchen installations, flooring, decking, and home renovations for
          over <strong>15 years</strong>. Our team of certified professionals
          guarantees **precision, efficiency, and craftsmanship** in every
          project.
        </p>
      </div>

      {/* About Highlights */}
      <div className='about-highlights'>
        {aboutPoints.map((point, index) => (
          <div
            key={index}
            className='highlight-item blur-card'
            data-aos='fade-up'
          >
            <div className='icon'>{point.icon}</div>
            <h2>{point.title}</h2>
            <p>{point.description}</p>
          </div>
        ))}
      </div>

      {/* Work Process */}
      <div className='our-process'>
        <h2 className='work-title'>Our Work Process</h2>
        <div className='process-steps'>
          {processSteps.map((step, index) => (
            <div
              key={index}
              className='process-step blur-card'
              data-aos='fade-up'
            >
              <div className='icon'>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
