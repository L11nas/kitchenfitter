import React from 'react';
import './styles/modal.css'; // Patikrink, ar šiame faile nėra `target="_blank"`

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  formData,
  handleChange,
}) {
  if (!isOpen) return null; // Nerenderinam, jei modalas uždarytas

  return (
    <div className={`cta-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className='cta-modal-content'>
        <button className='cta-modal-close' onClick={onClose}>
          ✖
        </button>
        <h2>Request a Quote</h2>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='name'
            placeholder='your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your email address'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Your message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit'>Submit Request</button>
        </form>
      </div>
    </div>
  );
}
