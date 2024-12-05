import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Replace <a> tags with NavLink */}
      <NavLink 
        to="/blog" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Blog
      </NavLink>
      <NavLink 
        to="/why-alchemy" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Why Alchemy
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Contact Us
      </NavLink>
    </nav>
  );
} 