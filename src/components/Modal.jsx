import React, { useState } from 'react';
import './styles/modal.css';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // išvalom laukus
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Honeypot laukas (slaptas) */}
          <input
            type='text'
            name='company'
            value={formData.company || ''}
            onChange={handleChange}
            style={{ display: 'none' }} // paslepiam
            autoComplete='off'
            tabIndex='-1'
          />

          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
