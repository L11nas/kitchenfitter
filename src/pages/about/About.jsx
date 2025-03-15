import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
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
    title: 'Skilled Fitters with Proven Expertise',
    description:
      'Our team of experienced professionals specializes in the precise installation of kitchens, flooring, staircases, and more. We ensure every project meets the highest standards of craftsmanship.',
    icon: <FaTools />,
  },
  {
    title: 'Custom Solutions for Every Home',
    description:
      'Every home is different, and so are our solutions. We create tailored installations that perfectly fit your space, style, and needs.',
    icon: <FaCogs />,
  },
  {
    title: 'Premium Materials for Lasting Quality',
    description:
      'We source high-quality materials to ensure durability, elegance, and long-lasting value for your home improvement projects.',
    icon: <FaGem />,
  },
  {
    title: 'Seamless & Stress-Free Process',
    description:
      'From the initial consultation to the final touches, we manage everything with efficiency and clear communication, ensuring a hassle-free experience.',
    icon: <FaClipboardCheck />,
  },
  {
    title: 'Your Satisfaction Comes First',
    description:
      'We prioritize transparency, fair pricing, and outstanding results, delivering work that exceeds expectations every time.',
    icon: <FaHandshake />,
  },
];

const processSteps = [
  {
    title: 'Consultation & Planning',
    description:
      'We start by understanding your vision, offering expert recommendations, and creating a clear plan tailored to your needs.',
    icon: <FaComments />,
  },
  {
    title: 'Precision Installation',
    description:
      'Our skilled team handles the entire installation with care and accuracy, ensuring a flawless and professional finish.',
    icon: <FaHammer />,
  },
  {
    title: 'Quality Assurance & Final Handover',
    description:
      'Before completing the project, we conduct a thorough inspection to guarantee everything meets your expectations.',
    icon: <FaCheckCircle />,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='about'>
      <Helmet>
        <title>About Us - Kitchen & Home Renovation Experts | Fitters UK</title>
        <meta
          name='description'
          content='Learn about Fitters UK, your trusted experts for kitchen installations, flooring, decking, and home renovations. Discover our commitment to quality and craftsmanship.'
        />
        <meta
          name='keywords'
          content='kitchen installation, home renovation, flooring, decking, Fitters UK, skilled fitters, custom solutions, premium materials, seamless process, customer satisfaction'
        />
      </Helmet>
      <div className='about-info'>
        <h1 data-aos='fade-up'>About Us</h1>
        <p data-aos='fade-up'>
          At Fitters UK, we specialize in high-quality kitchen installations,
          flooring, decking, and home renovations, backed by over 15 years of
          expertise. Our team of certified professionals ensures precision,
          efficiency, and exceptional craftsmanship in every project,
          transforming homes with durability and style. Whether you’re upgrading
          your kitchen, enhancing your outdoor space, or renovating your entire
          home, we deliver results that stand the test of time.
        </p>
      </div>

      {/* About Highlights */}
      <div className='about-highlights'>
        {aboutPoints.map((point, index) => (
          <article
            key={index}
            className='highlight-item blur-card'
            data-aos='fade-up'
          >
            <div className='icon' aria-hidden='true'>
              {point.icon}
            </div>
            <h2>{point.title}</h2>
            <p>{point.description}</p>
          </article>
        ))}
      </div>

      {/* Work Process */}
      <div className='our-process'>
        <h2 className='work-title'>Our Work Process</h2>
        <div className='process-steps'>
          {processSteps.map((step, index) => (
            <article
              key={index}
              className='process-step blur-card'
              data-aos='fade-up'
            >
              <div className='icon' aria-hidden='true'>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
