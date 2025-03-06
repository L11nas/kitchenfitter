import { Link } from 'react-router-dom';
import '../../components/styles/projects.css';
import kitchenBg from '/assets/Kitchenimg/k3.jpg';
import flooringBg from '/assets/Kitchenimg/floor.jpg';
import deckingBg from '/assets/Kitchenimg/TerraceF.jpg';
import staircaseBg from '/assets/Kitchenimg/stairs.jpg';
import customBg from '/assets/Kitchenimg/worker.jpg';
import backgroundImage from '/assets/valeria.jpg'; // ✅ Importuotas bendras fonas
import Reviews from '../../components/Reviews';

export default function Projects() {
  const categories = [
    {
      title: 'Kitchen Installations',
      link: '/projects/kitchens',
      bg: kitchenBg,
    },
    { title: 'Flooring & Parquet', link: '/projects/flooring', bg: flooringBg },
    { title: 'Outdoor Decking', link: '/projects/decking', bg: deckingBg },
    {
      title: 'Staircase Renovation',
      link: '/projects/staircase',
      bg: staircaseBg,
    },
    { title: 'Custom Renovations', link: '/projects/custom', bg: customBg },
  ];

  return (
    <section
      className='projects-page'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='projects-overlay'></div>

      <h1 className='projects-title'>Explore Our Completed Projects</h1>

      <div className='projects-categories'>
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className='projects-category'>
            <div
              className='category-overlay'
              style={{
                backgroundImage: `url(${category.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2>{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Reviews />
    </section>
  );
}
