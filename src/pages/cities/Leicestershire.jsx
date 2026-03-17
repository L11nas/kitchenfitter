import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Leicestershire() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Fitters in Leicestershire | S.L. Builders LTD</title>
        <meta
          name='description'
          content='S.L. Builders LTD provides expert kitchen fitting, kitchen renovation, flooring installation and home improvement services across Leicestershire.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/leicestershire'
        />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/leicestershire.jpg")' }}
        role='img'
        aria-label='Modern kitchen renovation project in Leicestershire'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>

          <h1>Professional Kitchen Fitters in Leicestershire</h1>

          <p>
            S.L. Builders LTD provides expert kitchen fitting, kitchen
            renovation and home improvement services across Leicestershire. We
            help homeowners create practical, stylish kitchens with a strong
            focus on quality workmanship, durability and clean, professional
            finishes.
          </p>

          <p>
            Whether you are planning a full kitchen renovation, replacing old
            units, upgrading worktops or improving the layout of your space, our
            team delivers reliable installation services tailored to your home
            and everyday needs.
          </p>

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
          <h2>Kitchen Renovation Services in Leicestershire</h2>
          <p>
            We work with homeowners across Leicestershire who want high-quality
            kitchen fitting and renovation work carried out with care and
            attention to detail. Our kitchen services can include cabinet
            fitting, worktop installation, flooring, finishing work and wider
            renovation support where needed.
          </p>
          <p>
            Every kitchen project is different, which is why we take a tailored
            approach to every installation. We focus on creating kitchens that
            not only look great, but also function well for storage, cooking,
            family life and long-term everyday use.
          </p>
        </div>
      </section>

      <section className='city-section city-section-alt'>
        <div className='city-section-inner'>
          <h2>Areas We Cover Across Leicestershire</h2>
          <p>
            We provide kitchen fitting and renovation services across
            Leicestershire, including <strong>Leicester</strong>,{' '}
            <strong>Loughborough</strong>, <strong>Hinckley</strong>,{' '}
            <strong>Melton Mowbray</strong>, <strong>Coalville</strong> and
            nearby areas.
          </p>
          <p>
            If you are based in Leicestershire and looking for trusted kitchen
            fitters with a professional approach and strong attention to detail,
            S.L. Builders LTD is ready to help.
          </p>
        </div>
      </section>

      <section className='city-section'>
        <div className='city-section-inner'>
          <h2>Why Homeowners Choose S.L. Builders LTD</h2>
          <ul className='city-list'>
            <li>Experienced kitchen fitters focused on quality finishes</li>
            <li>
              Reliable service and clear communication throughout the project
            </li>
            <li>Tailored solutions for both modern and traditional homes</li>
            <li>Support with wider home improvement and renovation work</li>
            <li>
              Free consultation for projects across Leicestershire and nearby
              areas
            </li>
          </ul>
        </div>
      </section>

      <section className='city-section city-cta-section'>
        <div className='city-section-inner'>
          <h2>Planning a Kitchen Project in Leicestershire?</h2>
          <p>
            Whether you need a full kitchen renovation or a professional team to
            install your new kitchen properly, we are here to help. View our
            recent work or get in touch to discuss your project.
          </p>

          <div className='city-actions'>
            <Link to='/projects/kitchens' className='city-button'>
              See Recent Kitchen Projects
            </Link>
            <Link to='/about' className='city-button city-button-secondary'>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
