import React from 'react';
import '../components/styles/reviews.css';
import { FaFacebook } from 'react-icons/fa';

// FB atsiliepimų duomenys
const reviews = [
  {
    name: 'Alisha Chambers',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/464151870_10161966446303748_2932932423142499780_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CiJ1A42d4TUQ7kNvgFf4JLe&_nc_oc=Adh-jSFYAdOl9AC5hK6hBnYFWFOOgL3XJqCggUAMxwK5opUjUKG5X6LT6YFQpWhB0Fw&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=AzYkZTy1_ZG0oXsRU__H-J2&oh=00_AYBroxmzKNlquFgan3A5z8y62S6VD3x9mVR027BYQjf9-A&oe=67CB0134', // Pakeisk į tikrą FB profilio nuotrauką
    text: 'absolutely fantastic. now completed two things for me in my house and I am so over the moon! I will definitely be using you again!',
    date: 'August 02, 2024',
    rating: 5,
  },
  {
    name: 'Gintare Baltkojyte',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/353368434_6667811026577044_7740275711152986555_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QQEJAvX6eU4Q7kNvgFBvxVd&_nc_oc=AdjvuOwI1Pp_r4ofSF4BKZSraQOr5rGhwuFgahu0nso8dgLclqLD440WVnyPiuYRrEU&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=Ac7nVpTNuN64CCIiwpR3RFp&oh=00_AYCU_9_ftIi5pbNjdFy7sax8V9xbP9-h3QOrgPMyyKKgxA&oe=67CB2A4B',
    text: 'Very good service, great work.',
    date: 'October 3, 2023',
    rating: 5,
  },
  {
    name: 'Aurimas Lapkūnas',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/441896843_3769637249987512_2991888413069518349_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VuC184n-Q6AQ7kNvgEyEfP9&_nc_oc=Adhzd7ksjkhNilsE_Hjl-cJjkq9xVZY-Z5rcb1xxRYRzKtMuJbWbjz1SnmjKRyOINuM&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=AV4WA2odikpfq4Me-BgOKh4&oh=00_AYBgY10aGpGPZGITY51G3Ghfy8KzMF7nSNjLTmvnZeDZGw&oe=67CB2A29',
    text: 'I contacted this company to do the laminate flooring in my house,  they did a great job, quality work done and a decent price.',
    date: 'February 20, 2022',
    rating: 5,
  },
  {
    name: 'Teresa Aram',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/358109494_10159929293643471_2938798925368319820_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kNdTGMI8ArgQ7kNvgEzJ3Um&_nc_oc=AdjoeOwjr-97MXXHhebqCckdEPjM26HP6LQazyFNQ-KNazcXwdOX7nh68BySAzcUqRI&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=AQsCz5CowP-Vn5qJACuwqkV&oh=00_AYCBuElSqclwD4J4V6ATyMEsXy4iZAraJO6BmRvxN0zLdA&oe=67CB1522',
    text: 'highly recommend Saulius. extremely prompt and a professional service. Great attention to detail and knows what hes talking about and a real perfectionist in his work. I just wish we had him to fully install our kitchen, rather than replacing parts from a previous kitchen fitter!',
    date: 'February 6, 2022',
    rating: 5,
  },
  {
    name: 'Shazz Karpaite',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/472076233_9771661916195629_270353274818608130_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cklTBO6ZDWwQ7kNvgE8P1F1&_nc_oc=AdgoyzKAPjpauRYxjYaKu5ZlDf4lOTfzd-dbn9deeYUGwScoPcnFeXyY_UoEYaSLrNc&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=ABBewCaOJrY20WBlh2RlELG&oh=00_AYDZEolyomGLrPOGo_09uHwXrtGHOPL4dcjixy1_3hsO0w&oe=67CB2C46',
    text: 'It is hard to find a good reliable company these days, but S.L Builders proved me wrong! What a fantastic service, had all our kitchen completely redone, fitted all our wardrobes and well as changed our flooring downstairs! Quick reliable and very professional! Would definitely recommend to friends and family and am sure will be using their services again in the future.',
    date: 'May 5, 2021',
    rating: 5,
  },
  {
    name: 'Vedat Tufan',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/467901735_10161901231152248_5594829177334950549_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r2GhbIDYsnYQ7kNvgG2XwJ1&_nc_oc=AdjC6qcjt36ok_OflITxRAEzR9lwIVHA221KR9p9dc1w5H0QG6aD3VgJe5QICsNjDEk&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=AMK2SWbwH4wQ-iwxByX8XB6&oh=00_AYBiZ0G4G2SctLLwrVLfoBf2PNBa9Q-yBnuPAGdhQyPdDg&oe=67CB0C21',
    text: 'I got my kitchen done today by salius. Me and my wife absolutely loved it. He is very professional and  detailed. I can recommend him for anyone who needs a good kitchen fitter. Thanks for the great job👍🏼',
    date: 'November 12, 2020',
    rating: 5,
  },
  {
    name: 'Vaida Karpaitė',
    profilePic:
      'https://scontent.fvno5-1.fna.fbcdn.net/v/t1.6435-9/94764840_3720919887934745_8177178562588049408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=83Y2DRj5XTwQ7kNvgHj8UtU&_nc_oc=Adj2JGcLFb_LT7jdUXj-fhgP-fLovLmjI3OW-cCGyn3Kvh63v6woTOBLpP1xWi7jRug&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=AnHaBaFaY-OPxQCQ4AaZH_6&oh=00_AYB0Nt77eEbSuw7dotdwFocp2UeWHD23b0Rqw-flhH3jfQ&oe=67ECBCC8',
    text: 'Great service, high quality work. If you looking for carpenter just contact them.',
    date: 'November 22, 2022',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className='reviews-section'>
      <h2>Customer Reviews</h2>

      {/* Atsiliepimų sąrašas */}
      <div className='reviews-container'>
        {reviews.map((review, index) => (
          <div key={index} className='review-card'>
            <div className='review-header'>
              <img
                src={review.profilePic}
                alt={review.name}
                className='profile-pic'
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
