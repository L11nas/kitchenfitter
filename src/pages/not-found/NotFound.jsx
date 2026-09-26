import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../components/styles/privacyPolicity.css';

export default function NotFound() {
  return (
    <div className='privacy-policy-container'>
      <Helmet>
        <title>Page Not Found | S.L. Builders LTD</title>
        <meta name='robots' content='noindex' />
      </Helmet>

      <div className='privacy-policy-content'>
        <h1>Page Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <p>
          <Link to='/'>Go to the home page</Link> or{' '}
          <Link to='/services'>view our services</Link>.
        </p>
      </div>
    </div>
  );
}
