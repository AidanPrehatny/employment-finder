import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = (username, companyName, profileName) => {
  const user = 'https://s3-us-west-1.amazonaws.com/anidemo/dilan.png';

  return (
    <nav className="grid-x navANi align-middle">
      <div className="profileNav grid-x cell large-3">
        <div className="cell grid-x large-11">
          <img id="profileAvatar" className="cell shrink ANiLogo" src={user} alt="ANiLogo" />
          <div className="cell large-6 profileNavInfo">
            <h4 className="cell profileAvatar large-12">Dilan Swain</h4>
            <h5 className="cell profileCompany large-12">ANi</h5>
          </div>
          <img className="cell notifications large-3" src="https://s3-us-west-1.amazonaws.com/anidemo/bell.jpeg" alt="Notifications" />
        </div>
      </div>
      <div className="grid-x cell large-5">
        <input type="text" placeholder="Search ANi" className="cell large-6 searchANi" />
      </div>
      <div className="cell large-4 grid-x">
        <div className="grid-x cell large-11 navANiLinks">
          <Link to="/" className="navANiLink">Home</Link>
          <Link to="/gucci" className="navANiLink">My Vault</Link>
          <h3 className="navANiLink">ANi</h3>
          <h3 className="navANiLink">Settings</h3>
          <img alt="ANi Logo" className="ANiLogo" src="https://s3-us-west-1.amazonaws.com/anidemo/aniwings%402x.png" />
        </div>
      </div>
    </nav>
  );
};

export default Header;