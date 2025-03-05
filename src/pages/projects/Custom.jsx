import { Link } from 'react-router-dom';
import '../../components/styles/custom.css';

export default function CustomRenovation() {
  return (
    <section className='custom-page'>
      <h1 className='custom-title'>Custom Renovation</h1>
      {/* 🔹 Navigacijos tarp kategorijų mygtukai */}
      <div className='category-navigation'>
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
      <div className='custom-container'>
        {CustomRenovation.length > 0 ? (
          CustomRenovation.map((project) => (
            <div key={project.id} className='custom-card'>
              <img
                src={project.src}
                alt={project.title}
                className='custom-img'
              />
              <h3>{project.title}</h3>
            </div>
          ))
        ) : (
          <div className='custom-card coming-soon'>
            🚧 Coming Soon 🚧 <br />
            We are updating our staircase renovation gallery.
          </div>
        )}
      </div>
    </section>
  );
}
