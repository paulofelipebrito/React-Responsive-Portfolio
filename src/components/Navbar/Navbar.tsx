import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="nav-wrapper" id="Navbar">
      {/* left */}
      <div className="nav-left">
        <div className="nav-name">Felipe</div>
        <span>toggle</span>
      </div>
      {/* right */}
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button nav-button">
          Contact
        </button>
      </div>
    </div>
  );
};

