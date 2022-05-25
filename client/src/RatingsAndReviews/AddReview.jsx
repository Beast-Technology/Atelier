import React from 'react';
import { StarRatingSelect } from '../helper/Stars.jsx';

function AddReview() {
  return (
    <form>
    <label className="reviewForm">
      <div>
        <span>Overall Rating: </span>
        <StarRatingSelect totalStars={5} className="reviewStars"/>
        <span>Do you recommend this product: </span>
        <input type="text" />
      </div>
      <div>
        <span>Characteristics:</span>
        <input type="text" />
      </div>
      <div>
        <span>Review Summary: </span>
        <div><input type="text" /></div>
      </div>
      <div>
        <span>Review Body: </span>
        <div><input type="text" /></div>
      </div>
      <div>
        <span>Upload photos: </span>
        <input type="text" />
      </div>
      <div>
        <span>Username: </span>
        <input type="text" />
      </div>
      <div>
        <span>Email: </span>
        <input type="text" />
      </div>
    </label>
    <button>Cancel</button>
    <input type="submit" value="Submit" />
  </form>
)
}

export default AddReview;