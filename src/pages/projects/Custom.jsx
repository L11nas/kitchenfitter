import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../components/styles/custom.css';

export default function CustomRenovation() {
  return (
    <section className='custom-page'>
      <Helmet>
        <title>
          Custom Renovation Projects | Bespoke Home Improvements | S.L. Builders
          LTD
        </title>
        <meta
          name='description'
          content='Explore bespoke renovation and custom home improvement projects by S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/projects/custom'
        />
      </Helmet>

      <h1 className='custom-title'>Custom Renovation Projects</h1>

      <p className='custom-intro'>
        Explore our bespoke renovation and custom home improvement services
        across <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
        <strong>Doncaster</strong> and nearby areas. This section will soon
        feature completed custom renovation projects and tailored home
        transformations.
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
        <Link to='/projects/staircase' className='nav-button'>
          Staircase
        </Link>
        <Link to='/projects/custom' className='nav-button active'>
          Custom
        </Link>
      </div>

      <div className='custom-container'>
        <div className='custom-card coming-soon'>
          <h2>Coming Soon</h2>
          <p>
            We are currently updating our custom renovation gallery. Please
            check back soon to view completed bespoke renovation projects.
          </p>
        </div>
      </div>

      <section className='custom-bottom-text'>
        <h2>Need a Tailored Renovation Solution?</h2>
        <p>
          If you are planning a bespoke renovation project and would like to
          discuss your ideas with our team, explore our services or get in touch
          for a free consultation.
        </p>
        <Link to='/services' className='custom-cta-link'>
          Explore Our Services
        </Link>
      </section>
    </section>
  );
}
