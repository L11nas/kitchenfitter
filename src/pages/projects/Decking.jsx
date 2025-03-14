import { Link } from 'react-router-dom';
import '../../components/styles/decking.css';
import deckingProjects from '../../data/DeckingProjects';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function DeckingProjects() {
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
        prevIndex === deckingProjects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? deckingProjects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className='decking-page'>
      <h1 className='decking-title'>Decking Renovations</h1>
      {/* 🔹 Navigacijos tarp kategorijų mygtukai */}
      <div className='decking-category-navigation'>
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

      <div className='decking-container'>
        {deckingProjects.map((project, index) => (
          <div
            key={project.id}
            className='decking-card'
            onClick={() => openModal(index)}
          >
            <div className='decking-img-container'>
              <img
                src={project.src}
                alt={project.title}
                className='decking-img'
              />
            </div>
            {/* ✅ Aprašymo laukas po nuotrauka */}
            <p className='decking-description'>{project.title}</p>
          </div>
        ))}
      </div>

      {/* Modalas su Headless UI Dialog */}
      <Dialog
        open={selectedIndex !== null}
        onClose={closeModal}
        className='decking-modal-overlay'
      >
        <div
          className='decking-modal-overlay'
          onClick={closeModal} // Add this to handle clicks on the overlay background
        >
          <div
            className='decking-modal-content'
            onClick={(e) => e.stopPropagation()} // Keep this to prevent clicks on content from closing
          >
            <button className='decking-modal-close' onClick={closeModal}>
              <X size={24} />
            </button>
            <button className='decking-modal-prev' onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <div className='decking-modal-image-container'>
              {selectedIndex !== null && (
                <>
                  <img
                    src={deckingProjects[selectedIndex].src}
                    alt={deckingProjects[selectedIndex].title}
                    className='decking-modal-img'
                  />
                  {/* Aprašymas po modaline nuotrauka */}
                  <p className='decking-modal-caption'>
                    {deckingProjects[selectedIndex].title}
                  </p>
                </>
              )}
            </div>
            <button className='decking-modal-next' onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
