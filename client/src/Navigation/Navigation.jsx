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
          <div>
            <ion-icon name="search-outline" style={{width: "30px", height: "30px"}}></ion-icon>
          </div>
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
          <div>
            <ion-icon name="cart-outline" style={{width: "30px", height: "30px"}}></ion-icon>
          </div>
          <div>
            <ion-icon name="person-circle-outline" style={{width: "30px", height: "30px"}}></ion-icon>
          </div>
        </div>
      </nav>
    </div>
  );
}
