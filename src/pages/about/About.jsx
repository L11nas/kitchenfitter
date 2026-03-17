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
      'Our experienced team specialises in kitchen fitting, flooring installation, staircase renovation and a wide range of bespoke home improvement services, always delivered with precision and care.',
    icon: <FaTools />,
  },
  {
    title: 'Custom Solutions for Every Home',
    description:
      'Every home is different, which is why we provide tailored renovation and installation solutions designed around your layout, style and practical needs.',
    icon: <FaCogs />,
  },
  {
    title: 'Premium Materials for Lasting Quality',
    description:
      'We use carefully selected, high-quality materials to ensure every kitchen, floor, staircase or decking project delivers long-term durability and a premium finish.',
    icon: <FaGem />,
  },
  {
    title: 'Seamless & Stress-Free Process',
    description:
      'From the first consultation to the final handover, we keep the process organised, transparent and efficient so your project runs smoothly from start to finish.',
    icon: <FaClipboardCheck />,
  },
  {
    title: 'Your Satisfaction Comes First',
    description:
      'We focus on clear communication, dependable workmanship and excellent customer service, helping homeowners feel confident at every stage of the project.',
    icon: <FaHandshake />,
  },
];

const processSteps = [
  {
    title: 'Consultation & Planning',
    description:
      'We start by understanding your goals, your property and your ideas, then create a tailored plan with practical recommendations and clear next steps.',
    icon: <FaComments />,
  },
  {
    title: 'Precision Installation',
    description:
      'Our skilled team completes the installation with close attention to detail, ensuring a clean, accurate and professional result throughout the project.',
    icon: <FaHammer />,
  },
  {
    title: 'Quality Assurance & Final Handover',
    description:
      'Before completion, we carry out a full final check to make sure the workmanship, finish and overall result meet both our standards and your expectations.',
    icon: <FaCheckCircle />,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='about'>
      <Helmet>
        <title>
          About S.L. Builders LTD | Kitchen Fitting & Home Renovation
          Specialists
        </title>
        <meta
          name='description'
          content='Learn more about S.L. Builders LTD, trusted specialists in kitchen fitting, flooring installation, staircase renovation, decking and home improvements across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/about' />
      </Helmet>

      <div className='about-info'>
        <h1 data-aos='fade-up'>About S.L. Builders LTD</h1>

        <p data-aos='fade-up'>
          S.L. Builders LTD provides expert kitchen fitting, flooring
          installation, staircase renovation, decking and home improvement
          services across <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
          <strong>Doncaster</strong> and surrounding areas. With over 15 years
          of hands-on industry experience, we help homeowners transform their
          properties with reliable workmanship, quality materials and careful
          attention to detail.
        </p>

        <p data-aos='fade-up'>
          Whether you are planning a new kitchen installation, upgrading your
          flooring, improving your outdoor space or carrying out a wider home
          renovation project, our team delivers practical, high-quality results
          built to last.
        </p>
      </div>

      <div className='about-highlights'>
        {aboutPoints.map((point, index) => (
          <article
            key={index}
            className='highlight-item blur-card'
            data-aos='fade-up'
          >
            <div className='icon' aria-hidden='true' title={point.title}>
              {point.icon}
            </div>
            <h2>{point.title}</h2>
            <p>{point.description}</p>
          </article>
        ))}
      </div>

      <div className='our-process'>
        <h2 className='work-title' data-aos='fade-up'>
          Our Work Process
        </h2>
        <div className='process-steps'>
          {processSteps.map((step, index) => (
            <article
              key={index}
              className='process-step blur-card'
              data-aos='fade-up'
            >
              <div className='icon' aria-hidden='true' title={step.title}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className='about-info' data-aos='fade-up'>
        <h2>Areas We Cover</h2>
        <p>
          We work with homeowners across Nottingham, Leeds, Doncaster and nearby
          locations, providing trusted kitchen and home renovation services with
          a focus on quality, reliability and long-lasting finishes.
        </p>
      </div>
    </section>
  );
}
