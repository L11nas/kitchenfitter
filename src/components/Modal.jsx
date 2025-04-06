import React from 'react';
import './styles/modal.css';

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  formData,
  handleChange,
  isSubmitting,
  submitStatus,
  submitMessage,
}) {
  if (!isOpen) return null; // Nerenderinam, jei modalas uždarytas

  return (
    <div className={`cta-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className='cta-modal-content'>
        <button className='cta-modal-close' onClick={onClose} type='button'>
          ✖
        </button>
        <h2>Request a Quote</h2>

        {submitMessage && (
          <div className={`submission-message ${submitStatus}`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <input
            type='email'
            name='email'
            placeholder='Your email address'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <textarea
            name='message'
            placeholder='Your message'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
