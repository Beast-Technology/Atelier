/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const expanded = {
  border: '2px solid gray',
  position: 'fixed',
  zIndex: 2,
  backgroundColor: 'grey',
  // width: '90%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function ExpandedView({ index, photos, showExpanded, setShowExpanded }) {

  return showExpanded
    ? (
      <div
        style={expanded}
        onClick={() => setShowExpanded(false)}
      >
        <img
          src={photos[index].url}
        />
      </div>
    )
    : '';
}
