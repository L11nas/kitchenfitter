import React, { useEffect, useState } from 'react';
import './styles/modal.css';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

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

    if (formData.company) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const response = await fetch('https://slbuilders-api.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(
          result.message || 'Your request has been sent successfully.',
        );
        setFormData({
          name: '',
          email: '',
          message: '',
          company: '',
        });

        setTimeout(() => {
          onClose();
        }, 1800);
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
    <div
      className='cta-modal-overlay'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='quote-modal-title'
    >
      <div className='cta-modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='cta-modal-close' onClick={onClose} type='button'>
          ✖
        </button>

        <h2 id='quote-modal-title'>Request a Quote</h2>

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
            placeholder='Tell us about your project'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            style={{ display: 'none' }}
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
