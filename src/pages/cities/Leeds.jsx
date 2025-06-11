import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Leeds() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Leeds | S.L. Builders LTD</title>
        <meta
          name='description'
          content='Professional kitchen renovation, design, and installation in Leeds. S.L. Builders LTD offers bespoke, high-quality solutions for your home.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/leeds' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/leeds.webp")' }}
        role='img'
        aria-label='Modern bespoke kitchen installation in Leeds, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Expert Kitchen Fitters in Leeds</h1>
          <p>
            We provide high-quality kitchen fitting and full renovation services
            in Leeds and surrounding areas. From bespoke design to installation
            – we ensure a perfect finish every time.
          </p>
          <p>
            Whether you live in Headingley, Beeston, Roundhay or nearby, S.L.
            Builders LTD is ready to help bring your kitchen vision to life.
          </p>
          <p>
            Contact us today for a free quote or consultation – let’s build your
            dream kitchen together.
          </p>
        </div>
      </div>
    </div>
  );
}
