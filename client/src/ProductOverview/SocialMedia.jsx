import React from 'react';

export default function SocialMeda() {
  return (
    <div className="share">
      <p>Share</p>
      <div className="social-media">
        {/* <a
          href="https://twitter.com/share"
          className="twitter-share-button"
        >
          Tweet
        </a>
        <iframe
          title="Facebook"
          src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.
          facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&width=67&height=20&appId"
          width="67"
          height="20"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
        <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"> </a> */}
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/">
              <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
            <ion-icon class="social-icon" name="logo-pinterest"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
