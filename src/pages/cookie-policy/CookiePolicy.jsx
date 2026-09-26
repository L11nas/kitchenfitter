import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../components/styles/privacyPolicity.css';

export default function CookiePolicy() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <div className='privacy-policy-container'>
      <Helmet>
        <title>Cookie Policy | S.L. Builders LTD</title>
        <meta
          name='description'
          content='Find out how S.L. Builders LTD uses cookies on this website and how you can manage your cookie preferences.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/cookie-policy' />
      </Helmet>

      <div className='privacy-policy-content'>
        <h1>Cookie Policy</h1>

        <p className='last-updated'>
          <strong>Last Updated: 26 September 2026</strong>
        </p>

        <section>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the website work properly and give us
            information about how the site is used.
          </p>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <ul>
            <li>
              <strong>Necessary:</strong> we store your cookie choice in your
              browser so we do not ask you again on every visit. This cannot be
              switched off.
            </li>
            <li>
              <strong>Analytics (optional):</strong> Google Analytics helps us
              understand how visitors use our website. These cookies are only
              set if you click &quot;Accept All&quot;.
            </li>
            <li>
              <strong>Third-party content:</strong> the service area map in the
              footer is provided by Google Maps and only loads when you click
              &quot;Show Service Areas&quot;. Google may set its own cookies
              when the map is shown.
            </li>
          </ul>
        </section>

        <section>
          <h2>Analytics Cookies We Use</h2>
          <ul>
            <li>
              <strong>_ga</strong> (Google Analytics): distinguishes users,
              expires after 2 years.
            </li>
            <li>
              <strong>_ga_&lt;ID&gt;</strong> (Google Analytics): keeps session
              state, expires after 2 years.
            </li>
          </ul>
        </section>

        <section>
          <h2>Managing Your Preferences</h2>
          <p>
            You can change or withdraw your consent at any time using the button
            below. You can also block or delete cookies in your browser
            settings.
          </p>
          <div className='back-button-container'>
            <button type='button' onClick={openCookieSettings}>
              Change Cookie Settings
            </button>
          </div>
        </section>

        <section>
          <h2>More Information</h2>
          <p>
            For details on how we handle personal information, please read our{' '}
            <Link to='/privacy-policy'>Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
