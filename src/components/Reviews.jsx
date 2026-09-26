import '../components/styles/reviews.css';
import { FaFacebook, FaStar } from 'react-icons/fa';
import { reviews } from '../data/Reviews';

export default function Reviews() {
  return (
    <section className='reviews-section' id='reviews'>
      <h2>Customer Reviews</h2>

      <p className='reviews-intro'>
        Read genuine feedback from homeowners who have used our kitchen fitting,
        flooring and renovation services.
      </p>

      <div className='reviews-container'>
        {reviews.map((review, index) => (
          <article key={index} className='review-card'>
            <div className='review-header'>
              <img
                src={review.profilePic}
                alt={`Facebook review profile for ${review.name}`}
                className='profile-pic'
                loading='lazy'
              />

              <div className='review-meta'>
                <h3>{review.name}</h3>
                <p className='review-date'>{review.displayDate}</p>
              </div>
            </div>

            <div
              className='review-stars'
              role='img'
              aria-label={`${review.rating} out of 5 stars`}
            >
              {Array.from({ length: review.rating }).map((_, starIndex) => (
                <FaStar key={starIndex} />
              ))}
            </div>

            <p className='review-text'>{review.text}</p>
          </article>
        ))}
      </div>

      <div className='leave-review'>
        <a
          href='https://www.facebook.com/S.L.BUILDERS.LTD/reviews'
          target='_blank'
          rel='noopener noreferrer'
          className='leave-review-btn'
        >
          <FaFacebook size={18} />
          Leave a Review
        </a>
      </div>
    </section>
  );
}
