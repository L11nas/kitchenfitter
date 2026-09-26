import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    } catch {
      // Sugedęs arba senas įrašas – išvalom
      localStorage.removeItem(COOKIE_KEY);
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    const openSettings = () => setVisible(true);
    window.addEventListener('open-cookie-settings', openSettings);
    return () =>
      window.removeEventListener('open-cookie-settings', openSettings);
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

    if (analytics) {
      window.loadGA?.();
    } else {
      window[`ga-disable-${window.GA_ID}`] = true;
    }

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
            We use necessary cookies to make this website work. With your
            permission, we would also like to use Google Analytics cookies to
            understand how visitors use our site. Analytics cookies are only
            set if you click &quot;Accept All&quot;. You can change your choice
            at any time on our Cookie Policy page.
          </p>

          {showDetails && (
            <div className='cookie-details'>
              <div className='cookie-category'>
                <h3>Necessary Cookies</h3>
                <p>
                  We store your cookie choice in your browser so we do not ask
                  again on every visit. These cannot be switched off.
                </p>
              </div>
              <div className='cookie-category'>
                <h3>Analytics Cookies</h3>
                <p>
                  Optional. We use Google Analytics to understand how visitors
                  use our site and improve our services.
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
            <Link to='/privacy-policy'>Privacy Policy</Link> and{' '}
            <Link to='/cookie-policy'>Cookie Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
