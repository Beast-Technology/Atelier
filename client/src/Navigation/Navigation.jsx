import React from 'react';
import './Navigation-styles.css';
import Logo from '../assets/logo.png';
import FontLogo from '../assets/font-logo.png';

export default function Navbar() {
  return (
    <div className="nav-section">
      <nav className="navigation">
        <a href="/" className="brand-name">
          <div>
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div>
            <img src={FontLogo} alt="logo" className="logo-font" />
          </div>
        </a>
        <div className="navigation-menu">
          <div>
            <ion-icon name="search-outline" style={{ width: '30px', height: '30px' }} />
          </div>
          <ul>
            <li>
              <a href="#reviews" className="link hover-6" style={{ borderBottom: 'none' }}>Reviews</a>
            </li>
            <li>
              <a href="#section-qanda" className="link hover-6" style={{ borderBottom: 'none' }}>Questions</a>
            </li>
            <li>
              <a href="#RelatedItems" className="link hover-6" style={{ borderBottom: 'none' }}>Related</a>
            </li>
          </ul>

          <div>
            <ion-icon name="cart-outline" style={{ width: '30px', height: '30px' }} />
          </div>
          <div>
            <ion-icon name="person-circle-outline" style={{ width: '30px', height: '30px' }} />
          </div>
        </div>
      </nav>
    </div>
  );
}
