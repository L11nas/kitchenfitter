import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Leicestershire() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Leicestershire | S.L. Builders LTD</title>
        <meta
          name='description'
          content='Reliable kitchen fitters in Leicestershire. S.L. Builders LTD offers expert kitchen design, installation, and renovation services throughout the county.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/leicestershire'
        />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/leicestershire.jpg")' }}
        role='img'
        aria-label='Custom kitchen renovation in Leicestershire, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Professional Kitchen Fitters in Leicestershire</h1>
          <p>
            At S.L. Builders LTD, we provide comprehensive kitchen renovations
            in Leicestershire — from tailored design concepts to full
            installation and project management.
          </p>
          <p>
            Whether you live in Leicester, Loughborough, Hinckley, or
            surrounding towns, our team is ready to deliver a seamless kitchen
            transformation.
          </p>
          <p>
            Contact us now for a free consultation and elevate your home's heart
            with a bespoke kitchen solution.
          </p>
        </div>
      </div>
    </div>
  );
}
