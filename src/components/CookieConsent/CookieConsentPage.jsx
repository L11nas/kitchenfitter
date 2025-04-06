import React, { useState } from 'react';
import '../styles/CookieConsentPage.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const acceptAll = () => {
    sessionStorage.setItem('cookieConsent', 'all');
    sessionStorage.setItem('cookieConsentAnalytics', 'true');
    sessionStorage.setItem('cookieConsentMarketing', 'true');
    sessionStorage.setItem('cookieConsentPreferences', 'true');
    setVisible(false);
  };

  const acceptNecessary = () => {
    sessionStorage.setItem('cookieConsent', 'necessary');
    sessionStorage.setItem('cookieConsentAnalytics', 'false');
    sessionStorage.setItem('cookieConsentMarketing', 'false');
    sessionStorage.setItem('cookieConsentPreferences', 'false');
    setVisible(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!visible) return null;

  return (
    <div className='cookie-consent-overlay'>
      <div className='cookie-consent-container'>
        <div className='cookie-consent-header'>
          <h2>Cookie Policy</h2>
          <p>This website uses cookies to enhance your experience</p>
        </div>

        <div className='cookie-consent-content'>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalised content, and analyze our traffic. We also use
            third-party services like Google Analytics and Google Business
            integrations (e.g., maps and reviews). By clicking "Accept All", you
            consent to the use of all cookies.
          </p>

          {showDetails && (
            <div className='cookie-details'>
              <div className='cookie-category'>
                <h3>Necessary Cookies</h3>
                <p>
                  These cookies are essential for the website to function
                  properly and cannot be switched off in our systems.
                </p>
              </div>

              <div className='cookie-category'>
                <h3>Analytics Cookies</h3>
                <p>
                  We use Google Analytics to understand how visitors use our
                  site and improve our services. These cookies collect
                  information anonymously.
                </p>
              </div>

              <div className='cookie-category'>
                <h3>Marketing Cookies</h3>
                <p>
                  If enabled, these cookies help us personalize content or track
                  interactions for business features like Google Business
                  integrations.
                </p>
              </div>

              <div className='cookie-category'>
                <h3>Preferences Cookies</h3>
                <p>
                  These cookies remember your preferences and settings to
                  enhance your visit, such as language or region.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className='cookie-consent-actions'>
          <button className='cookie-details-toggle' onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <div className='cookie-consent-buttons'>
            <button
              className='cookie-consent-btn secondary'
              onClick={acceptNecessary}
            >
              Accept Necessary
            </button>
            <button className='cookie-consent-btn primary' onClick={acceptAll}>
              Accept All
            </button>
          </div>
        </div>

        <div className='cookie-consent-footer'>
          <p>
            To learn more about how we use cookies, please read our{' '}
            <a href='/privacy-policy'>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
