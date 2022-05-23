import React from 'react';

function ReviewTile({ review }) {

  return (
    <td id="reviewTile">
      <div>
      Rating: {review.rating}
        <div>
          Username: {review.reviewer_name}
          <br />
          Date Posted: {review.date}
        </div>
      </div>
      <h4>Summary: {review.summary}</h4>
      <p>Review: {review.body}</p>
      {review.recommend ? <div>I recommend this product</div> : <div></div>}
      {/* if response is true return else leave out */}
      {review.response ? <h4>Response: {review.response}</h4> : <div></div>}
      <div>
        <div>Was this review helpful?</div>
        <button>Yes</button>
        <div>{review.helpfulness}</div>
        <br />
      </div>
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