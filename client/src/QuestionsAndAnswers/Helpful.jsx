import React, { useState } from 'react';

export default function Helpful({count, onMarkHelpful}) {
  const [localCount, setLocalCount] = useState(count);
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setLocalCount(localCount + 1);
    setClicked(true);
    onMarkHelpful();
  }

  return (
    <span className="helpful">Helpful? {isClicked ? <span>Yes</span> : <span onClick={handleClick} className="style-underline">Yes</span> } ({localCount})</span>
  )
}