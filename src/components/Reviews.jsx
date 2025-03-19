import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/styles/reviews.css';
import { FaFacebook } from 'react-icons/fa';

// FB atsiliepimų duomenys
const reviews = [
  {
    name: 'Alisha Chambers',
    profilePic: '/fblogo.jpg',
    text: 'absolutely fantastic. now completed two things for me in my house and I am so over the moon! I will definitely be using you again!',
    date: 'August 02, 2024',
    rating: 5,
  },
  {
    name: 'Gintare Baltkojyte',
    profilePic: '/fblogo.jpg',
    text: 'Very good service, great work.',
    date: 'October 3, 2023',
    rating: 5,
  },
  {
    name: 'Aurimas Lapkūnas',
    profilePic: '/fblogo.jpg',
    text: 'I contacted this company to do the laminate flooring in my house,  they did a great job, quality work done and a decent price.',
    date: 'February 20, 2022',
    rating: 5,
  },
  {
    name: 'Teresa Aram',
    profilePic: '/fblogo.jpg',
    text: 'highly recommend Saulius. extremely prompt and a professional service. Great attention to detail and knows what hes talking about and a real perfectionist in his work. I just wish we had him to fully install our kitchen, rather than replacing parts from a previous kitchen fitter!',
    date: 'February 6, 2022',
    rating: 5,
  },
  {
    name: 'Shazz Karpaite',
    profilePic: '/fblogo.jpg',
    text: 'It is hard to find a good reliable company these days, but S.L Builders proved me wrong! What a fantastic service, had all our kitchen completely redone, fitted all our wardrobes and well as changed our flooring downstairs! Quick reliable and very professional! Would definitely recommend to friends and family and am sure will be using their services again in the future.',
    date: 'May 5, 2021',
    rating: 5,
  },
  {
    name: 'Vedat Tufan',
    profilePic: '/fblogo.jpg',
    text: 'I got my kitchen done today by salius. Me and my wife absolutely loved it. He is very professional and  detailed. I can recommend him for anyone who needs a good kitchen fitter. Thanks for the great job👍🏼',
    date: 'November 12, 2020',
    rating: 5,
  },
  {
    name: 'Vaida Karpaitė',
    profilePic: '/fblogo.jpg',
    text: 'Great service, high quality work. If you looking for carpenter just contact them.',
    date: 'November 22, 2022',
    rating: 5,
  },
];

export default function Reviews() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'S.L. Builders', // Replace with your actual business name
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.length > 0 ? '5' : '0', // Default to 0 if no reviews
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
      },
    })),
  };
  return (
    <section className='reviews-section'>
      <Helmet>
        <title>Customer Reviews - S.L. Builders</title>
        <meta
          name='description'
          content="Read real customer reviews about S.L. Builders' services. High-quality work and professional service."
        />
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h2>Customer Reviews</h2>

      {/* Atsiliepimų sąrašas */}
      <div className='reviews-container'>
        {reviews.map((review, index) => (
          <div key={index} className='review-card'>
            <div className='review-header'>
              <img
                src={review.profilePic}
                alt={`Profile picture of ${review.name}`}
                className='profile-pic'
                loading='lazy'
              />
              <div>
                <h3>{review.name}</h3>
                <p className='review-date'>{review.date}</p>
              </div>
            </div>
            <p className='review-text'>{review.text}</p>
          </div>
        ))}
      </div>

      {/* FB Atsiliepimų palikimo mygtukas */}
      <div className='leave-review'>
        <a
          href='https://www.facebook.com/S.L.BUILDERS.LTD/reviews'
          target='_blank'
          rel='noopener noreferrer'
          className='leave-review-btn'
        >
          <FaFacebook size={20} /> Leave a Review
        </a>
      </div>
    </section>
  );
}
