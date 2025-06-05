import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Nottingham() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Nottingham | SL Builders LTD</title>
        <meta
          name='description'
          content='Top-rated kitchen fitters in Nottingham. Bespoke kitchen design, full installation & renovations tailored to your home.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/nottingham' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/nottinghamshire.jpg")' }}
        role='img'
        aria-label='Kitchen renovation service in Nottingham, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Expert Kitchen Fitters in Nottingham</h1>
          <p>
            We provide custom kitchen fitting and renovation services in
            Nottingham and nearby areas. Our team ensures precision, style, and
            lasting quality in every installation.
          </p>
          <p>
            Whether you're renovating your home or fitting a new kitchen, SL
            Builders LTD in Nottingham delivers reliable, professional results.
          </p>
          <p>
            Contact us today for a free quote and bring your kitchen vision to
            life.
          </p>
        </div>
      </div>
    </div>
  );
}
