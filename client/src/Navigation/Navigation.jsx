import React from 'react';
import './Navigation-styles.css';

export default function Navbar() {
  return (
    <div className="nav-section">
      <nav className="navigation">
        <a href="/" className="brand-name">
          Beast
        </a>
        <div className="navigation-menu">
          <ul>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#section-qanda">Questions</a>
            </li>
            <li>
              <a href="#RelatedItems">Related</a>
            </li>
          </ul>
        </div>
        <div>
          <ion-icon name="person-circle-outline" style={{width: "30px", height: "30px"}}></ion-icon>
        </div>
      </nav>
    </div>
  );
}
