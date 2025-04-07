import React, { useEffect, useState } from 'react';
import '../styles/cookieConsentPage.css';

const COOKIE_KEY = 'cookieConsent';
const EXPIRY_DAYS = 365;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);

    try {
      const parsed = JSON.parse(saved);

      if (parsed && parsed.date) {
        const expiryDate = new Date(parsed.date);
        expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);

        if (new Date() < expiryDate) {
          setVisible(false);
          return;
        }
      }
    } catch (err) {
      // Sugedęs arba senas įrašas – išvalom
      localStorage.removeItem(COOKIE_KEY);
    }

    setVisible(true);
  }, []);

  const saveConsent = (type, analytics, marketing, preferences) => {
    const consentData = {
      type,
      analytics,
      marketing,
      preferences,
      date: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData));
    setVisible(false);
  };

  const acceptAll = () => {
    saveConsent('all', true, true, true);
  };

  const acceptNecessary = () => {
    saveConsent('necessary', false, false, false);
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
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
                  site and improve our services.
                </p>
              </div>
              <div className='cookie-category'>
                <h3>Marketing Cookies</h3>
                <p>
                  Help us personalize content or track interactions for features
                  like Google Business.
                </p>
              </div>
              <div className='cookie-category'>
                <h3>Preferences Cookies</h3>
                <p>
                  These cookies remember your preferences and settings to
                  enhance your visit.
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
            To learn more, please read our{' '}
            <a href='/privacy-policy'>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
