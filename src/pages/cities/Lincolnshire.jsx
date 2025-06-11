import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Lincolnshire() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Lincolnshire | S.L. Builders LTD</title>
        <meta
          name='description'
          content='Trusted kitchen fitters in Lincolnshire. S.L. Builders LTD provides bespoke kitchen renovations and installations across the region.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/lincolnshire' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/lincolnshire.jpg")' }}
        role='img'
        aria-label='High-quality kitchen renovation project in Lincolnshire, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Top Kitchen Fitters in Lincolnshire</h1>
          <p>
            S.L. Builders LTD delivers high-end kitchen renovation services
            throughout Lincolnshire. From traditional to modern styles, our
            custom approach ensures every kitchen fits your lifestyle.
          </p>
          <p>
            Serving areas across the county, we specialize in full installations
            and makeovers that add value to your home.
          </p>
          <p>
            Get in touch for a free quote and start your kitchen transformation
            today.
          </p>
        </div>
      </div>
    </div>
  );
}
