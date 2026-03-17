import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../components/styles/staircase.css';
import { useEffect } from 'react';

export default function StaircaseProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='staircase-page'>
      <Helmet>
        <title>
          Staircase Renovation Projects | Stair Upgrades | S.L. Builders LTD
        </title>
        <meta
          name='description'
          content='Explore staircase renovation and stair upgrade projects by S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/projects/staircase'
        />
      </Helmet>

      <h1 className='staircase-title'>Staircase Renovation Projects</h1>

      <p className='staircase-intro'>
        Explore our staircase renovation and stair upgrade services across{' '}
        <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
        <strong>Doncaster</strong> and nearby areas. This section will soon
        feature completed staircase renovation projects, including updated
        treads, handrails, balustrades and bespoke interior improvements.
      </p>

      <div className='category-navigation'>
        <Link to='/projects/kitchens' className='nav-button'>
          Kitchen
        </Link>
        <Link to='/projects/flooring' className='nav-button'>
          Flooring
        </Link>
        <Link to='/projects/decking' className='nav-button'>
          Decking
        </Link>
        <Link to='/projects/staircase' className='nav-button active'>
          Staircase
        </Link>
        <Link to='/projects/custom' className='nav-button'>
          Custom
        </Link>
      </div>

      <div className='staircase-container'>
        <div className='staircase-card coming-soon'>
          <h2>Coming Soon</h2>
          <p>
            We are currently updating our staircase renovation gallery. Please
            check back soon to view completed staircase projects and interior
            upgrades.
          </p>
        </div>
      </div>

      <section className='staircase-bottom-text'>
        <h2>Planning a Staircase Renovation?</h2>
        <p>
          If you are looking to modernise or upgrade your staircase with a
          clean, durable and professionally finished result, our team is ready
          to help. Explore our services or contact us to discuss your project.
        </p>
        <Link to='/services' className='staircase-cta-link'>
          Explore Our Services
        </Link>
      </section>
    </section>
  );
}
