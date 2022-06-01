import React, { useState, useEffect } from 'react';

export default function Helpful({ id, count, onMarkHelpful }) {
  const [localCount, setLocalCount] = useState(count);
  const [isClicked, setClicked] = useState(''); //

  function handleClick() {
    setLocalCount(localCount + 1);
    setClicked(true);
    onMarkHelpful();
  }

  useEffect(() => {
    if (localStorage.getItem('qStatus')) {
      let qStatus = JSON.parse(localStorage.getItem('qStatus'));
      qStatus[id] === true ? setClicked(true) : setClicked(false);
    } else {
      setClicked(false);
    }
  }, []);

  return (
    <span className="helpful">Helpful? {isClicked ? <span>Yes</span> : <span onClick={handleClick} className="style-underline">Yes</span> } ({localCount})</span>
  );
}
