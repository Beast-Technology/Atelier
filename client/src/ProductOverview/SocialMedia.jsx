import React from 'react';

export default function SocialMeda() {
  return (
    <div style={{ margin: '10px 0' }}>
      <i>Share on Social Media!</i>
      <div style={{ display: 'flex' }}>
        <a
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
        <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"> </a>
      </div>
    </div>
  );
}
