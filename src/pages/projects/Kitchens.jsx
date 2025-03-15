import { Link } from 'react-router-dom';
import '../../components/styles/kitchen.css';
import kitchenProjects from '../../data/KitchenProjects';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function KitchenProjects() {
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
        prevIndex === kitchenProjects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? kitchenProjects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className='kitchen-page'>
      {/* ✅ SEO: Page Title and Meta Description */}
      <Helmet>
        <title>Kitchen Renovations | Our Projects</title>
        <meta
          name='description'
          content='Explore our stunning kitchen renovation projects. See examples of our work and get inspired for your own kitchen remodel.'
        />
      </Helmet>

      {/* ✅ SEO: Main Heading */}
      <h1 className='kitchen-title'>Kitchen Renovations</h1>
      {/* 🔹 Navigacijos tarp kategorijų mygtukai */}
      <div className='kitchen-category-navigation'>
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

      <div className='kitchen-container'>
        {kitchenProjects.map((project, index) => (
          <div
            key={project.id}
            className='kitchen-card'
            onClick={() => openModal(index)}
          >
            <div className='kitchen-img-container'>
              {/* ✅ SEO: Descriptive Alt Text */}
              <img
                src={project.src}
                alt={`Kitchen Renovation: ${project.title}`}
                className='kitchen-img'
              />
            </div>
            {/* ✅ Aprašymo laukas po nuotrauka */}
            <p className='kitchen-description'>{project.title}</p>
          </div>
        ))}
      </div>

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
            className='kitchen-modal-content'
            onClick={(e) => e.stopPropagation()} // Keep this to prevent clicks on content from closing
          >
            <button className='kitchen-modal-close' onClick={closeModal}>
              <X size={24} />
            </button>
            <button className='kitchen-modal-prev' onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <div className='kitchen-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  {/* ✅ SEO: Descriptive Alt Text in Modal */}
                  <img
                    src={kitchenProjects[selectedIndex].src}
                    alt={`Kitchen Renovation: ${kitchenProjects[selectedIndex].title}`}
                    className='kitchen-modal-img'
                  />
                  {/* Aprašymas po modaline nuotrauka */}
                  <p className='kitchen-modal-caption'>
                    {kitchenProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>
            <button className='kitchen-modal-next' onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
