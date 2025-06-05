import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Hucknall() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Hucknall | SL Builders LTD</title>
        <meta
          name='description'
          content='Professional kitchen fitters in Hucknall. We offer full kitchen renovations, custom design, and expert installations tailored to your needs.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/hucknall' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/hucknall.webp")' }}
        role='img'
        aria-label='Bespoke kitchen installation in Hucknall, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Reliable Kitchen Fitters in Hucknall</h1>
          <p>
            SL Builders LTD brings premium kitchen fitting and renovation
            services to Hucknall and surrounding areas. We specialize in
            tailored designs and flawless installations.
          </p>
          <p>
            From new kitchen builds to upgrades, we ensure functionality, style,
            and long-lasting quality.
          </p>
          <p>
            Get in touch for a free consultation – let's create the kitchen you
            deserve.
          </p>
        </div>
      </div>
    </div>
  );
}
