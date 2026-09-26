import { useEffect } from 'react';

import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { FaStar, FaPaintRoller, FaCheck } from 'react-icons/fa';
import { MdKitchen, MdDeck, MdStairs } from 'react-icons/md';
import { TbLayoutGrid } from 'react-icons/tb';

import project1 from '/assets/Kitchenimg/project9/44-600.jpg';
import project2 from '/assets/Kitchenimg/project8/49-600.jpg';
import project3 from '/assets/Kitchenimg/project1/36-600.jpg';
import { reviews } from '../data/Reviews';
import './styles/hero.css';

const SERVICES = [
  {
    title: 'Kitchen Installation',
    text: 'Bespoke kitchen fitting combining practical layouts, modern design and long-lasting quality.',
    Icon: MdKitchen,
    link: '/projects/kitchens',
  },
  {
    title: 'Flooring Installation',
    text: 'Wooden, laminate and vinyl flooring fitted with precision for a clean, durable finish.',
    Icon: TbLayoutGrid,
    link: '/projects/flooring',
  },
  {
    title: 'Staircase Renovation',
    text: 'Stair upgrades that improve appearance, safety and everyday durability.',
    Icon: MdStairs,
    link: '/projects/staircase',
  },
  {
    title: 'Outdoor Decking',
    text: 'Decking designed for style, strength and year-round use in the British weather.',
    Icon: MdDeck,
    link: '/projects/decking',
  },
  {
    title: 'Custom Renovations',
    text: 'Tailored renovation work, from single-room upgrades to full property refurbishments.',
    Icon: FaPaintRoller,
    link: '/projects/custom',
  },
];

const TRUST_POINTS = [
  '15+ years’ experience',
  '5-star Facebook reviews',
  'Free consultation',
  'Based in Hucknall, Nottingham',
];

const FEATURED_REVIEW_NAMES = [
  'Alisha Chambers',
  'Vedat Tufan',
  'Shazz Karpaite',
];

const featuredReviews = reviews.filter((review) =>
  FEATURED_REVIEW_NAMES.includes(review.name),
);

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

      <section className='hero-container'>
        <div className='hero-fixed-bg' />
        <div className='hero-overlay'></div>

        <div className='hero-content'>
          <h1>
            Kitchen Fitters in Nottingham, Leeds & Doncaster
            <span className='hero-main-phrase'>
              Kitchen installation, flooring & home renovation
            </span>
          </h1>

          <p>
            We provide expert kitchen fitting, flooring installation, staircase
            renovation and bespoke home improvement services across Nottingham,
            Leeds, Doncaster and surrounding areas, with a strong focus on
            quality craftsmanship, reliability and attention to detail.
          </p>

          <a
            href='https://wa.me/447414460648'
            target='_blank'
            rel='noopener noreferrer'
            className='hero-cta-button'
          >
            Get a Free Consultation
          </a>

          <ul className='hero-trust'>
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <FaCheck aria-hidden='true' /> {point}
              </li>
            ))}
          </ul>
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
            {SERVICES.map(({ title, text, Icon, link }) => (
              <Link
                key={title}
                to={link}
                className='hero-service-card'
                data-aos='zoom-in'
              >
                <Icon size={40} aria-hidden='true' />
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className='hero-testimonials' data-aos='fade-up'>
          <h2>What Our Customers Say</h2>

          <div className='hero-testimonials-cards'>
            {featuredReviews.map((review) => (
              <article className='hero-testimonial-card' key={review.name}>
                <div
                  className='hero-testimonial-stars'
                  role='img'
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} aria-hidden='true' />
                  ))}
                </div>
                <p className='hero-testimonial-text'>&ldquo;{review.text}&rdquo;</p>
                <p className='hero-testimonial-name'>{review.name}</p>
              </article>
            ))}
          </div>

          <Link
            to='/projects#reviews'
            className='hero-cta-button'
            aria-label='Read all customer reviews'
          >
            See All Reviews
          </Link>
        </section>

        <section className='hero-projects' data-aos='fade-up'>
          <h2>See Our Recent Work</h2>

          <div className='hero-projects-images'>
            <img
              src={project1}
              alt='White kitchen with oak worktops and red splashback fitted by S.L. Builders LTD'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project2}
              alt='High-gloss white kitchen with island and granite worktops fitted by S.L. Builders LTD'
              loading='lazy'
              className='blur-up'
            />
            <img
              src={project3}
              alt='Modern grey handleless kitchen with quartz worktops fitted by S.L. Builders LTD'
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
