import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="Navbar">
      <div className='NavigationBar'>
            
        <div className='Logo'>
            <div className='OrionLogo'></div>
            <div className='OrionName'>ORION</div>
        </div>

        <div className='Search'>
          <input type="text" />
          <div className='Icon'>
              <button className='SearchIcon' type="submit">
              <i class="bi fs-5 bi-search"></i>
              </button>
          </div>
        </div>

        <div className='Menu'>
          <a className='Label' href='#'>Statistics</a>
          <Link className='Label' to="/Overview" style={{ textDecoration:"none" }}>
            <a style={{ color: 'inherit', textDecoration:"none" }} href='#'>Overview</a>
          </Link>
          <a className='Label' href='#'>Dashboard</a>
          <Link className='Label' to="/Analytics" style={{ textDecoration:"none" }}>
            <a style={{ color: 'inherit', textDecoration:"none" }} href='#'>Analytics</a>
          </Link>
        </div>

        <div>

          <div className='Profile'>
            <i class="bi fs-4 bi-person"></i>
          </div>

          <div className='Option'>
            <i class="bi fs-4 bi-sliders"></i>
          </div>

          </div>

      </div>
    </div>
  );
}

export default Navbar;
