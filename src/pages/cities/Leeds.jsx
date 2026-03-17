import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Leeds() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Fitters in Leeds | S.L. Builders LTD</title>
        <meta
          name='description'
          content='S.L. Builders LTD provides expert kitchen fitting, kitchen renovation, flooring installation and home improvement services in Leeds and surrounding areas.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/leeds' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/leeds.webp")' }}
        role='img'
        aria-label='Modern bespoke kitchen installation in Leeds'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>

          <h1>Expert Kitchen Fitters in Leeds</h1>

          <p>
            S.L. Builders LTD provides expert kitchen fitting, kitchen
            renovation and home improvement services across Leeds and nearby
            areas. We help homeowners create stylish, practical kitchens with a
            strong focus on quality workmanship, clean finishes and long-lasting
            results.
          </p>

          <p>
            Whether you are planning a full kitchen renovation, replacing old
            units, upgrading worktops or improving the overall layout of your
            space, our experienced team delivers reliable installation services
            tailored to your home and your day-to-day needs.
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
          <h2>Kitchen Renovation Services in Leeds</h2>
          <p>
            We work with homeowners in Leeds who want high-quality kitchen
            fitting and renovation work carried out with care and attention to
            detail. Our kitchen services can include cabinet fitting, worktop
            installation, flooring, finishing work and wider renovation support
            where needed.
          </p>
          <p>
            Every kitchen project is different, which is why we take a tailored
            approach to every installation. We focus on creating kitchens that
            not only look great, but also function well for everyday family
            life, cooking, storage and long-term durability.
          </p>
        </div>
      </section>

      <section className='city-section city-section-alt'>
        <div className='city-section-inner'>
          <h2>Areas We Cover Around Leeds</h2>
          <p>
            We provide kitchen fitting and renovation services across Leeds and
            surrounding locations, including <strong>Headingley</strong>,{' '}
            <strong>Beeston</strong>, <strong>Roundhay</strong>,{' '}
            <strong>Horsforth</strong>, <strong>Morley</strong> and nearby
            areas.
          </p>
          <p>
            If you are based near Leeds and looking for trusted kitchen fitters
            with a professional approach and proven attention to detail, S.L.
            Builders LTD is ready to help.
          </p>
        </div>
      </section>

      <section className='city-section'>
        <div className='city-section-inner'>
          <h2>Why Homeowners Choose S.L. Builders LTD</h2>
          <ul className='city-list'>
            <li>
              Experienced kitchen fitters with a focus on quality finishes
            </li>
            <li>
              Reliable service and clear communication from start to finish
            </li>
            <li>Tailored solutions for both modern and traditional homes</li>
            <li>Support with wider home improvement and renovation work</li>
            <li>Free consultation for projects in Leeds and nearby areas</li>
          </ul>
        </div>
      </section>

      <section className='city-section city-cta-section'>
        <div className='city-section-inner'>
          <h2>Planning a Kitchen Project in Leeds?</h2>
          <p>
            Whether you need a full kitchen renovation or a professional team to
            install your new kitchen properly, we are here to help. Take a look
            at our recent work or get in touch to discuss your project.
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
