import React, { useState, useEffect } from 'react';

export default function ReportButton({ id, onMarkReported }) {
  const [isReported, setReported] = useState('');

  function handleClick() {
    setReported(true);
    onMarkReported();
  }

  useEffect(() => {
    if (localStorage.getItem('aStatus')) {
      let aStatus = JSON.parse(localStorage.getItem('aStatus'));
      if (aStatus[id]) {
        aStatus[id].reported === true ? setReported(true) : setReported(false);
      } else {
        setReported(false);
      }
    } else {
      setReported(false);
    }
  });

  return (
    isReported
      ? <span>Reported</span>
      : <span onClick={handleClick} className="style-underline">Report</span>
  )
}