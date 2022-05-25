import React from 'react';

export const DatePosted = (value) => {
  const date = [value.slice(0, 4), value.slice(5, 7), value.slice(8 ,10)]
  const event = new Date(Date.UTC(date[0], date[1], date[2]));
  const options = {year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      {event.toLocaleDateString(undefined, options)}
    </>
  )
}
