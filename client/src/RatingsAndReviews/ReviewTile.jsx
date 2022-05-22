import React from 'react';

function ReviewTile({review}) {
  return (
    <td id="reviewTile">
      <div>
      {review.rating}
        <div>
          {review.reviewer_name}
          {review.date}
        </div>
      </div>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      {review.recommend ? <div>I recommend this product</div> : <div></div>}
      {/* if response is true return else leave out */}
      <h4>{review.response}</h4>
      <button>{review.helpfulness}</button>
    </td>
  );
}

export default ReviewTile;


// -star rating
// -date of review
// -review summary
// -review body
// -recommend
// -reviewer name
// -response to review
// -rating helpfulness