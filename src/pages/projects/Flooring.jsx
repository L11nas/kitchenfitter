import { Link } from 'react-router-dom';
import '../../components/styles/flooring.css';
import flooringProjects from '../../data/FlooringProjects';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function FlooringProjects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === flooringProjects.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? flooringProjects.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <section className='flooring-page'>
      <Helmet>
        <title>
          Flooring Projects | Flooring & Parquet Installations | S.L. Builders
          LTD
        </title>
        <meta
          name='description'
          content='View flooring and parquet installation projects completed by S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/projects/flooring'
        />
      </Helmet>

      <h1 className='flooring-title'>Flooring Renovation Projects</h1>

      <p className='flooring-intro'>
        Explore our recent flooring and parquet installation projects completed
        across <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
        <strong>Doncaster</strong> and nearby areas. Our work focuses on clean
        finishes, durable materials and professionally fitted floors designed to
        last.
      </p>

      <div className='flooring-category-navigation'>
        <Link to='/projects/kitchens' className='nav-button'>
          Kitchen
        </Link>
        <Link to='/projects/flooring' className='nav-button active'>
          Flooring
        </Link>
        <Link to='/projects/decking' className='nav-button'>
          Decking
        </Link>
        <Link to='/projects/staircase' className='nav-button'>
          Staircase
        </Link>
        <Link to='/projects/custom' className='nav-button'>
          Custom
        </Link>
      </div>

      <div className='flooring-container'>
        {flooringProjects.map((project, index) => (
          <button
            key={project.id}
            type='button'
            className='flooring-card'
            onClick={() => openModal(index)}
          >
            <div className='flooring-img-container'>
              <img
                src={project.src}
                alt={`Flooring project: ${project.title}`}
                className='flooring-img'
                loading='lazy'
              />
            </div>
            <p className='flooring-description'>{project.title}</p>
          </button>
        ))}
      </div>

      <section className='flooring-bottom-text'>
        <h2>Planning a Flooring Project?</h2>
        <p>
          Whether you need parquet, laminate, vinyl or hardwood flooring
          professionally installed, our team is ready to help. Explore our
          services or contact us to discuss your flooring renovation project.
        </p>
        <Link to='/services' className='flooring-cta-link'>
          Explore Our Services
        </Link>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onClose={closeModal}
        className='flooring-modal-overlay'
      >
        <div className='flooring-modal-overlay' onClick={closeModal}>
          <div
            className='flooring-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='flooring-modal-close'
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <button
              type='button'
              className='flooring-modal-prev'
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>

            <div className='flooring-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  <img
                    src={flooringProjects[selectedIndex].src}
                    alt={`Flooring project: ${flooringProjects[selectedIndex].title}`}
                    className='flooring-modal-img'
                  />
                  <p className='flooring-modal-caption'>
                    {flooringProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>

            <button
              type='button'
              className='flooring-modal-next'
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
