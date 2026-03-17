import { Link } from 'react-router-dom';
import '../../components/styles/decking.css';
import deckingProjects from '../../data/DeckingProjects';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DeckingProjects() {
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
        prevIndex === deckingProjects.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? deckingProjects.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <section className='decking-page'>
      <Helmet>
        <title>
          Decking Projects | Outdoor Decking Installations | S.L. Builders LTD
        </title>
        <meta
          name='description'
          content='View outdoor decking and terrace renovation projects completed by S.L. Builders LTD across Nottingham, Leeds, Doncaster and surrounding areas.'
        />
        <link
          rel='canonical'
          href='https://slbuildersltd.co.uk/projects/decking'
        />
      </Helmet>

      <h1 className='decking-title'>Outdoor Decking Projects</h1>

      <p className='decking-intro'>
        Explore our recent outdoor decking and terrace renovation projects
        completed across <strong>Nottingham</strong>, <strong>Leeds</strong>,{' '}
        <strong>Doncaster</strong> and nearby areas. Our work focuses on durable
        materials, clean finishes and practical outdoor spaces built to last.
      </p>

      <div className='decking-category-navigation'>
        <Link to='/projects/kitchens' className='nav-button'>
          Kitchen
        </Link>
        <Link to='/projects/flooring' className='nav-button'>
          Flooring
        </Link>
        <Link to='/projects/decking' className='nav-button active'>
          Decking
        </Link>
        <Link to='/projects/staircase' className='nav-button'>
          Staircase
        </Link>
        <Link to='/projects/custom' className='nav-button'>
          Custom
        </Link>
      </div>

      <div className='decking-container'>
        {deckingProjects.map((project, index) => (
          <button
            key={project.id}
            type='button'
            className='decking-card'
            onClick={() => openModal(index)}
          >
            <div className='decking-img-container'>
              <img
                src={project.src}
                alt={`Outdoor decking project: ${project.title}`}
                className='decking-img'
                loading='lazy'
              />
            </div>
            <p className='decking-description'>{project.title}</p>
          </button>
        ))}
      </div>

      <section className='decking-bottom-text'>
        <h2>Planning an Outdoor Decking Project?</h2>
        <p>
          If you are looking for a durable, stylish and professionally finished
          decking installation, our team is ready to help. Get in touch to
          discuss your outdoor renovation project.
        </p>
        <Link to='/services' className='decking-cta-link'>
          Explore Our Services
        </Link>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onClose={closeModal}
        className='decking-modal-overlay'
      >
        <div className='decking-modal-overlay' onClick={closeModal}>
          <div
            className='decking-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='decking-modal-close'
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <button
              type='button'
              className='decking-modal-prev'
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>

            <div className='decking-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  <img
                    src={deckingProjects[selectedIndex].src}
                    alt={`Outdoor decking project: ${deckingProjects[selectedIndex].title}`}
                    className='decking-modal-img'
                  />
                  <p className='decking-modal-caption'>
                    {deckingProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>

            <button
              type='button'
              className='decking-modal-next'
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
