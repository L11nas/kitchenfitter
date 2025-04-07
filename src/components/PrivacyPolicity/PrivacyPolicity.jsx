// PrivacyPolicy.jsx
import React from 'react';
import '../styles/privacyPolicity.css';

const PrivacyPolicy = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-content'>
        <h1>Privacy Policy</h1>

        <p className='last-updated'>
          <strong>Last Updated: 5 April 2025</strong>
        </p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to S.L.BUILDERS LTD ("we," "our," or "us"). We are committed
            to protecting your privacy and providing you with a secure
            experience when using our website and services. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit our website or use our services.
          </p>
          <p>
            This policy complies with the UK Data Protection Act 2018 (DPA
            2018), UK General Data Protection Regulation (UK GDPR), and the
            Privacy and Electronic Communications Regulations 2003 (PECR).
          </p>
        </section>

        <section>
          <h2>Who We Are</h2>
          <p>
            [S.L.BUILDERS LTD] provides kitchen installation, flooring, and
            outdoor cladding services in the United Kingdom. We are registered
            as a data controller with the Information Commissioner's Office
            (ICO) under registration number.
          </p>
          <p>
            <strong>Contact Information:</strong>
          </p>
          <ul>
            <li>Address: Annesley Rd, Nottingham, United Kingdom, ng15</li>
            <li>Email: slbuilderswork@gmail.com</li>
            <li>Phone: +44 7414 460648</li>
          </ul>
        </section>

        <section>
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name, address, email address, and phone number</li>
            <li>Information about your property when you request a quote</li>
            <li>Payment information when you purchase our services</li>
            <li>Communications you have with us</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain
            information:
          </p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and operating system</li>
            <li>
              Pages you visit on our website and how you interact with them
            </li>
            <li>Referral source and time spent on our website</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul>
            <li>
              <strong>Providing Services:</strong> To deliver the services you
              have requested, including quotes, installations, and follow-up
              support.
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries,
              provide updates about your projects, and send service-related
              communications.
            </li>
            <li>
              <strong>Improving Our Services:</strong> To understand how users
              interact with our website and to enhance our services.
            </li>
            <li>
              <strong>Marketing:</strong> To send you information about our
              services, special offers, and events that may interest you, only
              with your consent.
            </li>
            <li>
              <strong>Legal Obligations:</strong> To comply with legal
              requirements and resolve disputes.
            </li>
          </ul>
        </section>

        <section>
          <h2>Legal Basis for Processing</h2>
          <p>
            Under UK data protection law, we process your personal information
            based on one or more of the following legal grounds:
          </p>
          <ul>
            <li>
              <strong>Contract:</strong> Processing is necessary for the
              performance of a contract with you or to take steps at your
              request before entering into a contract.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing is necessary for
              our legitimate interests, such as improving our services and
              preventing fraud, as long as these interests are not overridden by
              your rights.
            </li>
            <li>
              <strong>Consent:</strong> You have given us clear consent to
              process your personal information for a specific purpose.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing is necessary for
              compliance with a legal obligation.
            </li>
          </ul>
        </section>

        <section>
          <h2>Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience
            on our website. Cookies are small text files stored on your device
            that help us provide and improve our services.
          </p>

          <h3>Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Necessary Cookies:</strong> Essential for the website to
              function properly. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors interact with our website by collecting anonymous
              information.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to track visitors across
              websites to display relevant advertisements.
            </li>
            <li>
              <strong>Preferences Cookies:</strong> Enable the website to
              remember your choices and provide enhanced features.
            </li>
          </ul>

          <p>
            You can manage your cookie preferences through our cookie consent
            banner or your browser settings. For detailed information, please
            see our <a>Cookie Policy</a>.
          </p>
        </section>

        <section>
          <h2>Data Sharing and Disclosure</h2>
          <p>We may share your personal information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third parties who provide
              services on our behalf, such as payment processors, IT service
              providers, and delivery partners.
            </li>
            <li>
              <strong>Professional Advisors:</strong> Legal, accounting, and
              other professional advisors in connection with our business
              operations.
            </li>
            <li>
              <strong>Regulatory Authorities:</strong> Government bodies,
              regulators, and law enforcement agencies when required by law.
            </li>
          </ul>
          <p>
            We require all third parties to respect the security of your
            personal information and to treat it in accordance with the law.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We will retain your personal information only for as long as
            necessary to fulfill the purposes for which it was collected,
            including legal, accounting, or reporting requirements. For specific
            retention periods, please contact us using the details provided
            above.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Under UK data protection law, you have the following rights:</p>
          <ul>
            <li>
              <strong>Right to Access:</strong> Request a copy of your personal
              information.
            </li>
            <li>
              <strong>Right to Rectification:</strong> Request correction of
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request deletion of your
              personal information in certain circumstances.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> Request restriction
              of processing your personal information.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Request transfer of
              your personal information in a structured, commonly used, and
              machine-readable format.
            </li>
            <li>
              <strong>Right to Object:</strong> Object to processing of your
              personal information in certain circumstances.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at
              any time where we rely on consent to process your personal
              information.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us using the details
            provided above. We will respond to your request within one month.
          </p>
        </section>

        <section>
          <h2>Complaints</h2>
          <p>
            If you have concerns about how we handle your personal information,
            please contact us first so we can address your concerns. If you are
            not satisfied with our response, you have the right to lodge a
            complaint with the Information Commissioner's Office (ICO):
          </p>
          <ul>
            <li>
              Website:{' '}
              <a
                href='https://www.ico.org.uk'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.ico.org.uk
              </a>
            </li>
            <li>Phone: 0303 123 1113</li>
            <li>
              Address: Information Commissioner's Office, Wycliffe House, Water
              Lane, Wilmslow, Cheshire, SK9 5AF
            </li>
          </ul>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our website and services are not intended for children under 16
            years of age. We do not knowingly collect personal information from
            children. If you are a parent or guardian and believe we may have
            collected personal information from your child, please contact us.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will post the
            updated policy on our website with a revised "Last Updated" date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            We primarily store and process your data within the United Kingdom
            and European Economic Area (EEA). If we transfer your data outside
            these areas, we ensure appropriate safeguards are in place to
            protect your information in compliance with UK data protection laws.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us:
          </p>
          <ul>
            <li>Email: slbuilderswork@gmail.com</li>
            <li>Phone: +44 7414 460648 </li>
            <li>Mail: Annesley Rd, Nottingham, United Kingdom, ng15</li>
          </ul>
        </section>

        <div className='back-button-container'>
          <button onClick={goBack} className='back-button'>
            Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
