import { Link } from 'react-router-dom';
import '../../components/styles/flooring.css';
import flooringProjects from '../../data/FlooringProjects';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function FlooringProjects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === flooringProjects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? flooringProjects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className='flooring-page'>
      {/* ✅ SEO: Page Title and Meta Description */}
      <Helmet>
        <title>Flooring & Parquet Renovations | Our Projects</title>
        <meta
          name='description'
          content='Explore our beautiful flooring and parquet renovation projects. See examples of our work and get inspired for your own flooring remodel.'
        />
      </Helmet>

      {/* ✅ SEO: Main Heading */}
      <h1 className='flooring-title'>Flooring Renovations</h1>
      {/* 🔹 Navigacijos tarp kategorijų mygtukai */}
      <div className='flooring-category-navigation'>
        <Link to='/projects/kitchens' className='nav-button'>
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

      <div className='flooring-container'>
        {flooringProjects.map((project, index) => (
          <div
            key={project.id}
            className='flooring-card'
            onClick={() => openModal(index)}
          >
            <div className='flooring-img-container'>
              {/* ✅ SEO: Descriptive Alt Text */}
              <img
                src={project.src}
                alt={`Flooring Renovation: ${project.title}`}
                className='flooring-img'
              />
            </div>
            {/* ✅ Aprašymo laukas po nuotrauka */}
            <p className='flooring-description'>{project.title}</p>
          </div>
        ))}
      </div>

      {/* ✅ Modalas su Headless UI Dialog */}
      {/* Modalas su Headless UI Dialog */}
      <Dialog
        open={selectedIndex !== null}
        onClose={closeModal}
        className='kitchen-modal-overlay'
      >
        <div
          className='kitchen-modal-overlay'
          onClick={closeModal} // Add this to handle clicks on the overlay background
        >
          <div
            className='flooring-modal-content'
            onClick={(e) => e.stopPropagation()} // Keep this to prevent clicks on content from closing
          >
            <button className='flooring-modal-close' onClick={closeModal}>
              <X size={24} />
            </button>
            <button className='flooring-modal-prev' onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <div className='flooring-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  {/* ✅ SEO: Descriptive Alt Text in Modal */}
                  <img
                    src={flooringProjects[selectedIndex].src}
                    alt={`Flooring Renovation: ${flooringProjects[selectedIndex].title}`}
                    className='flooring-modal-img'
                  />
                  {/* Aprašymas po modaline nuotrauka */}
                  <p className='flooring-modal-caption'>
                    {flooringProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>
            <button className='flooring-modal-next' onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
