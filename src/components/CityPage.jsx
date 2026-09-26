import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdOutlineKitchen } from 'react-icons/md';
import StructuredData from './StructuredData';
import {
  BUSINESS_REF,
  SITE_URL,
  breadcrumbSchema,
} from '../utils/structuredData';
import './styles/CityPage.css';

const ALL_AREAS = [
  { name: 'Nottingham', path: '/nottingham' },
  { name: 'Hucknall', path: '/hucknall' },
  { name: 'Leeds', path: '/leeds' },
  { name: 'Doncaster', path: '/doncaster' },
  { name: 'Lincolnshire', path: '/lincolnshire' },
  { name: 'Leicestershire', path: '/leicestershire' },
];

const SERVICE_LINKS = [
  { name: 'Flooring installation', path: '/projects/flooring' },
  { name: 'Staircase renovation', path: '/projects/staircase' },
  { name: 'Outdoor decking', path: '/projects/decking' },
  { name: 'Custom renovations', path: '/projects/custom' },
];

// Layout shared by the area pages; each page supplies its own local content
export default function CityPage({
  name,
  path,
  areaType = 'City',
  title,
  description,
  heading,
  banner,
  bannerLabel,
  intro,
  homesHeading,
  homes,
  areasHeading,
  areas,
  areasNote,
  faqs,
}) {
  const url = `${SITE_URL}${path}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Kitchen fitting in ${name}`,
    serviceType: 'Kitchen installation',
    url,
    provider: BUSINESS_REF,
    areaServed: { '@type': areaType, name },
  };

  return (
    <div className='city-page'>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={url} />
      </Helmet>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema([{ name, path }])} />

      <div
        className='city-banner'
        style={{ backgroundImage: `url("${banner}")` }}
        role='img'
        aria-label={bannerLabel}
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>

          <h1>{heading}</h1>

          {intro.map((text) => (
            <p key={text}>{text}</p>
          ))}

          <div className='city-actions'>
            <Link to='/projects/kitchens' className='city-button'>
              View Kitchen Projects
            </Link>
            <Link to='/services' className='city-button city-button-secondary'>
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      <section className='city-section'>
        <div className='city-section-inner'>
          <h2>{homesHeading}</h2>
          {homes.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section className='city-section city-section-alt'>
        <div className='city-section-inner'>
          <h2>What We Can Do for Your Home in {name}</h2>
          <p>
            Our main work in {name} is kitchen installation: fitting base and
            wall units, installing worktops, coordinating plumbing and
            electrical preparation, and finishing everything to a clean,
            professional standard. We can also help with related work:
          </p>
          <ul className='city-list'>
            {SERVICE_LINKS.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='city-section'>
        <div className='city-section-inner'>
          <h2>{areasHeading}</h2>
          <ul className='city-areas'>
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p>{areasNote}</p>
        </div>
      </section>

      <section className='city-section city-section-alt'>
        <div className='city-section-inner city-faq'>
          <h2>Questions About Kitchen Fitting in {name}</h2>
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='city-section city-cta-section'>
        <div className='city-section-inner'>
          <h2>Planning a Kitchen Project in {name}?</h2>
          <p>
            Send us a message with a few details and photos of your current
            kitchen, and we will arrange a free consultation to talk through
            your plans.
          </p>

          <div className='city-actions'>
            <a
              href='https://wa.me/447414460648'
              target='_blank'
              rel='noopener noreferrer'
              className='city-button'
            >
              Get a Free Consultation
            </a>
            <Link
              to='/projects/kitchens'
              className='city-button city-button-secondary'
            >
              See Recent Kitchen Projects
            </Link>
          </div>

          <h3 className='city-other-heading'>Other Areas We Cover</h3>
          <div className='city-other-areas'>
            {ALL_AREAS.filter((area) => area.path !== path).map((area) => (
              <Link key={area.path} to={area.path}>
                Kitchen fitters in {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
