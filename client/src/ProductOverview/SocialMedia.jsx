import React from 'react';

export default function SocialMeda() {
  return (
    <div className="share">
      <p>Share</p>
      <div className="social-media">
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/">
              <ion-icon class="social-icon" name="logo-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <ion-icon class="social-icon" name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <ion-icon class="social-icon" name="logo-pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
