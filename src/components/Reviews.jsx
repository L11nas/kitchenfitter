import '../components/styles/reviews.css';
import { FaFacebook, FaStar } from 'react-icons/fa';

export const reviews = [
  {
    name: 'Alisha Chambers',
    profilePic: '/fblogo.jpg',
    text: 'Absolutely fantastic. They have now completed two jobs for me in my house and I am so pleased with the results. I will definitely be using you again.',
    date: '2024-08-02',
    displayDate: '2 August 2024',
    rating: 5,
  },
  {
    name: 'Gintare Baltkojyte',
    profilePic: '/fblogo.jpg',
    text: 'Very good service, great work.',
    date: '2023-10-03',
    displayDate: '3 October 2023',
    rating: 5,
  },
  {
    name: 'Aurimas Lapkūnas',
    profilePic: '/fblogo.jpg',
    text: 'I contacted this company to do the laminate flooring in my house. They did a great job, quality work done and a decent price.',
    date: '2022-02-20',
    displayDate: '20 February 2022',
    rating: 5,
  },
  {
    name: 'Teresa Aram',
    profilePic: '/fblogo.jpg',
    text: 'Highly recommend Saulius. Extremely prompt and professional service. Great attention to detail and a real perfectionist in his work.',
    date: '2022-02-06',
    displayDate: '6 February 2022',
    rating: 5,
  },
  {
    name: 'Shazz Karpaite',
    profilePic: '/fblogo.jpg',
    text: 'It is hard to find a good reliable company these days, but S.L. Builders proved me wrong. Fantastic service, quick, reliable and very professional. Would definitely recommend.',
    date: '2021-05-05',
    displayDate: '5 May 2021',
    rating: 5,
  },
  {
    name: 'Vedat Tufan',
    profilePic: '/fblogo.jpg',
    text: 'I got my kitchen done today by Saulius. Me and my wife absolutely loved it. He is very professional and detailed. I can recommend him for anyone who needs a good kitchen fitter.',
    date: '2020-11-12',
    displayDate: '12 November 2020',
    rating: 5,
  },
  {
    name: 'Vaida Karpaitė',
    profilePic: '/fblogo.jpg',
    text: 'Great service, high quality work. If you are looking for a carpenter, just contact them.',
    date: '2022-11-22',
    displayDate: '22 November 2022',
    rating: 5,
  },
];

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
