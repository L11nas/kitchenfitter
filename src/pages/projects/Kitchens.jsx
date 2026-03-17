import { Link } from 'react-router-dom';
import '../../components/styles/kitchen.css';
import kitchenProjects from '../../data/KitchenProjects';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function KitchenProjects() {
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
        prevIndex === kitchenProjects.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? kitchenProjects.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <section className='kitchen-page'>
      <Helmet>
        <title>
          Kitchen Projects | Kitchen Installations & Renovations | S.L. Builders
          LTD
        </title>
        <meta
          name='description'
          content='View kitchen installation and renovation projects completed by S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/projects/kitchens'
        />
      </Helmet>

      <h1 className='kitchen-title'>Kitchen Renovation Projects</h1>

      <p className='kitchen-intro'>
        Explore our recent kitchen installation and renovation projects
        completed across <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
        <strong>Doncaster</strong> and nearby areas. Our work focuses on clean
        finishes, practical layouts and high-quality kitchens built to suit
        everyday living.
      </p>

      <div className='kitchen-category-navigation'>
        <Link to='/projects/kitchens' className='nav-button active'>
          Kitchen
        </Link>
        <Link to='/projects/flooring' className='nav-button'>
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

      <div className='kitchen-container'>
        {kitchenProjects.map((project, index) => (
          <button
            key={project.id}
            type='button'
            className='kitchen-card'
            onClick={() => openModal(index)}
          >
            <div className='kitchen-img-container'>
              <img
                src={project.src}
                alt={`Kitchen project: ${project.title}`}
                className='kitchen-img'
                loading='lazy'
              />
            </div>
            <p className='kitchen-description'>{project.title}</p>
          </button>
        ))}
      </div>

      <section className='kitchen-bottom-text'>
        <h2>Planning a Kitchen Renovation?</h2>
        <p>
          Whether you need a full kitchen installation, upgraded units, worktops
          or a complete layout refresh, our team is ready to help. Explore our
          services or contact us to discuss your project.
        </p>
        <Link to='/services' className='kitchen-cta-link'>
          Explore Our Services
        </Link>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onClose={closeModal}
        className='kitchen-modal-overlay'
      >
        <div className='kitchen-modal-overlay' onClick={closeModal}>
          <div
            className='kitchen-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='kitchen-modal-close'
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <button
              type='button'
              className='kitchen-modal-prev'
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>

            <div className='kitchen-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  <img
                    src={kitchenProjects[selectedIndex].src}
                    alt={`Kitchen project: ${kitchenProjects[selectedIndex].title}`}
                    className='kitchen-modal-img'
                  />
                  <p className='kitchen-modal-caption'>
                    {kitchenProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>

            <button
              type='button'
              className='kitchen-modal-next'
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
