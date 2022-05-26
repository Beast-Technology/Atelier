import React, { useState } from 'react';

export default function QASearch({ keyword, setKeyword }) {
  function handleChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <form className="qa-form">
      <input className="qa-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={keyword} onChange={handleChange} />
    </form>
  );
}
