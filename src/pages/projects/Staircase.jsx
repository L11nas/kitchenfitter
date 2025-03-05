import { Link } from 'react-router-dom';
import '../../components/styles/staircase.css';

const staircaseProjects = [];

export default function StaircaseProjects() {
  return (
    <section className='staircase-page'>
      <h1 className='staircase-title'>Staircase Renovation</h1>
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
      <div className='staircase-container'>
        {staircaseProjects.length > 0 ? (
          staircaseProjects.map((project) => (
            <div key={project.id} className='staircase-card'>
              <img
                src={project.src}
                alt={project.title}
                className='staircase-img'
              />
              <h3>{project.title}</h3>
            </div>
          ))
        ) : (
          <div className='staircase-card coming-soon'>
            🚧 Coming Soon 🚧 <br />
            We are updating our staircase renovation gallery.
          </div>
        )}
      </div>
    </section>
  );
}
