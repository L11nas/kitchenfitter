import { Helmet } from 'react-helmet-async';
import { MdOutlineKitchen } from 'react-icons/md';
import '../../components/styles/CityPage.css';

export default function Doncaster() {
  return (
    <div className='city-page'>
      <Helmet>
        <title>Kitchen Renovation in Doncaster | SL Builders LTD</title>
        <meta
          name='description'
          content='Leading kitchen fitters in Doncaster. SL Builders LTD offers tailored kitchen renovations, custom design, and professional installations.'
        />
        <link rel='canonical' href='https://slbuildersltd.co.uk/doncaster' />
      </Helmet>

      <div
        className='city-banner'
        style={{ backgroundImage: 'url("/assets/cities/doncaster.webp")' }}
        role='img'
        aria-label='Kitchen renovation project in Doncaster, UK'
      >
        <div className='city-content'>
          <span className='city-icon'>
            <MdOutlineKitchen />
          </span>
          <h1>Professional Kitchen Fitters in Doncaster</h1>
          <p>
            At SL Builders LTD, we provide expert kitchen renovations in
            Doncaster. Whether you're planning a complete transformation or
            upgrading specific elements, we ensure a perfect finish.
          </p>
          <p>
            Our team combines functionality with style to bring your vision to
            life – delivering bespoke results that last.
          </p>
          <p>
            Reach out now for a free consultation and get started on your dream
            kitchen today.
          </p>
        </div>
      </div>
    </div>
  );
}
