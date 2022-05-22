import React from 'react';

import ReviewTile from './ReviewTile.jsx';

function ReviewsList({ reviews }) {
  console.log("ReviewsList:", reviews.results)
  return (
    <div>
      <table>
        <tbody>
          {
            (reviews.results || []).map((review, index) => (
              <tr>
                <ReviewTile review={review} key={index}/>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ReviewsList;
